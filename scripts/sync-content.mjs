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

console.log("\n=======================================================");
console.log("   HMoriX Cloud Sync — Downloading Live Content & Media");
console.log("=======================================================\n");

async function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    if (url.startsWith("data:")) {
      // Handle Base64 Data URL
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
      // Handle HTTP redirects (Google Drive, Cloudinary 302/301)
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
  // 1. Try fetching directly from live API endpoint
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

  // 2. Try fetching from MongoDB Atlas if URI present
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

  // 3. Fallback to current local data/site-content.json
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
        process.stdout.write(`  - Downloading "${slotId}" (${filename})... `);
        await downloadFile(remoteUrl, localFilePath);
        updatedPhotos[slotId] = `/photos/${filename}`;
        downloadCount++;
        console.log("✓ Done");
      } catch (dlErr) {
        console.log(`✗ Skipped (${dlErr.message})`);
      }
    }

    console.log(`✓ ${downloadCount} media files saved locally to public/photos/\n`);

    // 3. Update data/site-content.json
    console.log("[3/3] Freezing changes into data/site-content.json...");
    const finalContent = {
      ...content,
      photos: updatedPhotos,
    };

    const siteContentPath = path.join(rootDir, "data", "site-content.json");
    fs.writeFileSync(siteContentPath, JSON.stringify(finalContent, null, 2), "utf-8");

    console.log("\n=======================================================");
    console.log("  🎉 SYNC COMPLETED SUCCESSFULLY!");
    console.log("  - Content saved to: data/site-content.json");
    console.log("  - Media assets saved to: public/photos/");
    console.log("  - Your static website now has all live cloud updates.");
    console.log("=======================================================\n");
  } catch (err) {
    console.error("\n❌ Sync failed:", err.message);
    process.exit(1);
  }
}

main();
