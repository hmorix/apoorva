import fs from "fs";
import path from "path";
import https from "https";
import http from "http";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

// ── CONFIGURATION ───────────────────────────────────────────────────────────
const LIVE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://apoorva.hmorix.in";
const MONGODB_URI = process.env.MONGODB_URI;

const VERSIONS_DIR = path.join(rootDir, "data", "versions");
const INDEX_FILE = path.join(VERSIONS_DIR, "versions-index.json");

console.log("\n=======================================================");
console.log("   HMoriX Cloud Sync — Downloading Live Content & Media");
console.log("=======================================================\n");

function ensureVersions() {
  if (!fs.existsSync(VERSIONS_DIR)) {
    fs.mkdirSync(VERSIONS_DIR, { recursive: true });
  }
}

function computeChanges(prev, next, downloadCount) {
  if (!prev) return ["Initial baseline version created"];
  const changes = [];

  if (prev.hero?.heroTitle !== next.hero?.heroTitle) changes.push(`Hero Title updated to "${next.hero?.heroTitle || ""}"`);
  if (prev.hero?.heroTagline !== next.hero?.heroTagline) changes.push("Hero Tagline modified");
  if (prev.contact?.email !== next.contact?.email) changes.push(`Email updated to ${next.contact?.email}`);
  if (prev.contact?.whatsappNumber !== next.contact?.whatsappNumber) changes.push(`WhatsApp updated to ${next.contact?.whatsappNumber}`);
  if (prev.services?.starterPrice !== next.services?.starterPrice) changes.push(`Starter price: ${next.services?.starterPrice}`);
  if (prev.services?.growthPrice !== next.services?.growthPrice) changes.push(`Growth price: ${next.services?.growthPrice}`);
  if (prev.services?.premiumPrice !== next.services?.premiumPrice) changes.push(`Premium price: ${next.services?.premiumPrice}`);

  if (downloadCount > 0) {
    changes.push(`Downloaded & synced ${downloadCount} remote media file(s)`);
  }

  const prevPhotos = prev.photos || {};
  const nextPhotos = next.photos || {};
  const changedPhotos = Object.keys(nextPhotos).filter((k) => nextPhotos[k] !== prevPhotos[k]);
  if (changedPhotos.length > 0) {
    changes.push(`Updated photo slots: ${changedPhotos.slice(0, 3).join(", ")}${changedPhotos.length > 3 ? "..." : ""}`);
  }

  return changes.length > 0 ? changes : ["Sync live content updates"];
}

function saveVersionSnapshot(content, downloadCount) {
  ensureVersions();
  let index = [];
  if (fs.existsSync(INDEX_FILE)) {
    try {
      index = JSON.parse(fs.readFileSync(INDEX_FILE, "utf-8"));
    } catch {}
  }

  let prevContent = null;
  if (index.length > 0) {
    const latest = index[index.length - 1];
    const prevFilePath = path.join(VERSIONS_DIR, latest.file);
    if (fs.existsSync(prevFilePath)) {
      try {
        prevContent = JSON.parse(fs.readFileSync(prevFilePath, "utf-8"));
      } catch {}
    }
  }

  const nextVersionNum = (index[index.length - 1]?.version || 0) + 1;
  const timestamp = new Date().toISOString();
  const safeDate = timestamp.replace(/[:.]/g, "-");
  const versionId = `v${nextVersionNum}_${safeDate}`;
  const filename = `${versionId}.json`;
  const changes = computeChanges(prevContent, content, downloadCount);
  const note = `Sync live v${nextVersionNum} (${new Date().toLocaleTimeString()})`;

  fs.writeFileSync(path.join(VERSIONS_DIR, filename), JSON.stringify(content, null, 2), "utf-8");

  const updatedIndex = index.map((v) => ({ ...v, active: false }));
  const newVer = {
    version: nextVersionNum,
    versionId,
    timestamp,
    note,
    changes,
    file: filename,
    active: true,
  };
  updatedIndex.push(newVer);
  fs.writeFileSync(INDEX_FILE, JSON.stringify(updatedIndex, null, 2), "utf-8");

  return newVer;
}

async function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    if (url.startsWith("data:")) {
      const matches = url.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
      if (matches && matches.length === 3) {
        const buffer = Buffer.from(matches[2], "base64");
        fs.writeFileSync(destPath, buffer);
        return resolve(true);
      }
      return reject(new Error("Invalid base64 string"));
    }

    const client = url.startsWith("https") ? https : http;
    const request = client.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, destPath).then(resolve).catch(reject);
      }

      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: Status ${res.statusCode}`));
      }

      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);

      fileStream.on("finish", () => {
        fileStream.close();
        resolve(true);
      });
    });

    request.on("error", (err) => {
      if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
      reject(err);
    });

    request.setTimeout(15000, () => {
      request.destroy();
      reject(new Error("Download timeout"));
    });
  });
}

async function fetchPublishedContent() {
  try {
    console.log(`[1/3] Fetching latest published data from ${LIVE_URL}...`);
    const res = await fetch(`${LIVE_URL}/api/hmorix/content?mode=published`, {
      cache: "no-store",
    });

    if (res.ok) {
      const json = await res.json();
      if (json.published || json.content) {
        console.log("✓ Successfully retrieved published content from live website!");
        return json.published || json.content;
      }
    }
  } catch (err) {
    console.warn("  Could not fetch via HTTP API:", err.message);
  }

  if (MONGODB_URI) {
    try {
      console.log("[1/3] Connecting directly to MongoDB Atlas...");
      const { MongoClient } = await import("mongodb");
      const client = new MongoClient(MONGODB_URI);
      await client.connect();
      const db = client.db(process.env.MONGODB_DB_NAME || "apoorva_kaushal");
      const doc = await db.collection("site_content").findOne({ _id: "live_site_content" });
      await client.close();

      if (doc && (doc.published || doc.draft)) {
        console.log("✓ Successfully retrieved published content from MongoDB Atlas!");
        return doc.published || doc.draft;
      }
    } catch (dbErr) {
      console.warn("  Could not connect to MongoDB directly:", dbErr.message);
    }
  }

  console.log("  Using local data/site-content.json as base...");
  const localPath = path.join(rootDir, "data", "site-content.json");
  if (fs.existsSync(localPath)) {
    return JSON.parse(fs.readFileSync(localPath, "utf-8"));
  }

  throw new Error("No content source available to sync.");
}

async function main() {
  try {
    const content = await fetchPublishedContent();
    const photosDir = path.join(rootDir, "public", "photos");

    if (!fs.existsSync(photosDir)) {
      fs.mkdirSync(photosDir, { recursive: true });
    }

    console.log("\n[2/3] Downloading remote photos & media assets to public/photos/...");
    const updatedPhotos = { ...(content.photos || {}) };
    let downloadCount = 0;

    for (const [slotId, remoteUrl] of Object.entries(updatedPhotos)) {
      if (!remoteUrl || remoteUrl.startsWith("/photos/")) {
        continue;
      }

      const extMatch = remoteUrl.match(/\.(jpg|jpeg|png|webp|gif|avif|mp4)/i);
      const ext = extMatch ? extMatch[1].toLowerCase() : "jpg";
      const filename = `synced-${slotId}.${ext}`;
      const localFilePath = path.join(photosDir, filename);

      try {
        process.stdout.write(`  - Downloading photo "${slotId}" (${filename})... `);
        await downloadFile(remoteUrl, localFilePath);
        updatedPhotos[slotId] = `/photos/${filename}`;
        downloadCount++;
        console.log("✓ Done");
      } catch (dlErr) {
        console.log(`✗ Skipped (${dlErr.message})`);
      }
    }

    const updatedGallery = Array.isArray(content.gallery) ? [...content.gallery] : [];
    for (let i = 0; i < updatedGallery.length; i++) {
      const item = updatedGallery[i];
      if (item.mediaUrl && !item.mediaUrl.startsWith("/photos/") && (item.mediaUrl.startsWith("http") || item.mediaUrl.startsWith("data:"))) {
        const extMatch = item.mediaUrl.match(/\.(jpg|jpeg|png|webp|gif|avif|mp4)/i);
        const ext = extMatch ? extMatch[1].toLowerCase() : (item.type === "video" ? "mp4" : "jpg");
        const filename = `synced-gallery-${item.id || i}.${ext}`;
        const localFilePath = path.join(photosDir, filename);

        try {
          process.stdout.write(`  - Downloading gallery item "${item.title || i}"... `);
          await downloadFile(item.mediaUrl, localFilePath);
          updatedGallery[i] = { ...item, mediaUrl: `/photos/${filename}` };
          downloadCount++;
          console.log("✓ Done");
        } catch (gErr) {
          console.log(`✗ Skipped (${gErr.message})`);
        }
      }
    }

    console.log(`✓ ${downloadCount} media files saved locally to public/photos/\n`);

    // 3. Freeze changes into data/site-content.json
    console.log("[3/3] Freezing changes into data/site-content.json...");
    const finalContent = {
      ...content,
      photos: updatedPhotos,
      gallery: updatedGallery,
    };

    const siteContentPath = path.join(rootDir, "data", "site-content.json");
    fs.writeFileSync(siteContentPath, JSON.stringify(finalContent, null, 2), "utf-8");

    // 4. Create version snapshot
    const versionInfo = saveVersionSnapshot(finalContent, downloadCount);

    console.log("\n=======================================================");
    console.log(`  🎉 SYNC COMPLETED — VERSION v${versionInfo.version} RECORDED!`);
    console.log(`  - Version:   v${versionInfo.version} (${versionInfo.versionId})`);
    console.log(`  - Note:      ${versionInfo.note}`);
    if (versionInfo.changes && versionInfo.changes.length > 0) {
      console.log(`  - Changes:   ${versionInfo.changes.join("; ")}`);
    }
    console.log("  - Content saved to: data/site-content.json");
    console.log("  - Media assets saved to: public/photos/");
    console.log("  - Snapshots stored in: data/versions/");
    console.log(`  - To rollback to any version: npm run version:switch <num>`);
    console.log("=======================================================\n");
  } catch (err) {
    console.error("\n❌ Sync failed:", err.message);
    process.exit(1);
  }
}

main();
