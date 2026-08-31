import fs from "fs";
import path from "path";
import { SiteContent, getLocalContent } from "./contentStore";

export interface VersionInfo {
  version: number;
  versionId: string;
  timestamp: string;
  note: string;
  changes: string[];
  file: string;
  active: boolean;
}

const VERSIONS_DIR = path.join(process.cwd(), "data", "versions");
const INDEX_FILE = path.join(VERSIONS_DIR, "versions-index.json");

function ensureVersionsDir(): void {
  try {
    if (!fs.existsSync(VERSIONS_DIR)) {
      fs.mkdirSync(VERSIONS_DIR, { recursive: true });
    }
  } catch {}
}

export function computeChangesSummary(prev: Partial<SiteContent> | null, next: Partial<SiteContent>): string[] {
  if (!prev) return ["Initial version snapshot created"];
  const changes: string[] = [];

  // 1. Hero
  if (prev.hero?.heroTitle !== next.hero?.heroTitle) changes.push(`Hero Title: "${next.hero?.heroTitle || ""}"`);
  if (prev.hero?.heroTagline !== next.hero?.heroTagline) changes.push("Hero Tagline updated");
  if (prev.hero?.domain !== next.hero?.domain) changes.push(`Domain: "${next.hero?.domain || ""}"`);

  // 2. Contact
  if (prev.contact?.email !== next.contact?.email) changes.push(`Email: "${next.contact?.email || ""}"`);
  if (prev.contact?.whatsappNumber !== next.contact?.whatsappNumber) changes.push(`WhatsApp: "${next.contact?.whatsappNumber || ""}"`);
  if (prev.contact?.location !== next.contact?.location) changes.push(`Location: "${next.contact?.location || ""}"`);

  // 3. Services & Pricing
  if (prev.services?.starterPrice !== next.services?.starterPrice) changes.push(`Starter Price: "${next.services?.starterPrice || ""}"`);
  if (prev.services?.growthPrice !== next.services?.growthPrice) changes.push(`Growth Price: "${next.services?.growthPrice || ""}"`);
  if (prev.services?.premiumPrice !== next.services?.premiumPrice) changes.push(`Premium Price: "${next.services?.premiumPrice || ""}"`);
  if (JSON.stringify(prev.services?.servicesList) !== JSON.stringify(next.services?.servicesList)) changes.push("Services list modified");

  // 4. About
  if (prev.about?.storyBio1 !== next.about?.storyBio1 || prev.about?.storyHeading !== next.about?.storyHeading) changes.push("About story bio updated");

  // 5. Photos
  const prevPhotos = prev.photos || {};
  const nextPhotos = next.photos || {};
  const changedPhotos = Object.keys(nextPhotos).filter((k) => nextPhotos[k] !== prevPhotos[k]);
  if (changedPhotos.length > 0) {
    changes.push(`Updated ${changedPhotos.length} photo(s): ${changedPhotos.slice(0, 4).join(", ")}${changedPhotos.length > 4 ? "..." : ""}`);
  }

  // 6. Gallery
  if (JSON.stringify(prev.gallery) !== JSON.stringify(next.gallery)) {
    const prevCount = prev.gallery?.length || 0;
    const nextCount = next.gallery?.length || 0;
    changes.push(`Gallery updated (${nextCount} items, was ${prevCount})`);
  }

  // 7. Case Studies
  if (JSON.stringify(prev.cases?.caseStudiesList) !== JSON.stringify(next.cases?.caseStudiesList)) {
    changes.push("Case studies modified");
  }

  return changes.length > 0 ? changes : ["Content updated"];
}

export function listLocalVersions(): VersionInfo[] {
  ensureVersionsDir();
  try {
    if (!fs.existsSync(INDEX_FILE)) {
      const initialContent = getLocalContent();
      const v1: VersionInfo = {
        version: 1,
        versionId: "v1_initial_base",
        timestamp: new Date().toISOString(),
        note: "Initial Base Content",
        changes: ["Initial baseline state"],
        file: "v1_initial_base.json",
        active: true,
      };
      try {
        fs.writeFileSync(path.join(VERSIONS_DIR, "v1_initial_base.json"), JSON.stringify(initialContent, null, 2), "utf8");
        fs.writeFileSync(INDEX_FILE, JSON.stringify([v1], null, 2), "utf8");
      } catch {}
      return [v1];
    }
    const raw = fs.readFileSync(INDEX_FILE, "utf8");
    return JSON.parse(raw) as VersionInfo[];
  } catch (err) {
    return [];
  }
}

export function createLocalVersion(content: SiteContent, note = "Update Snapshot"): VersionInfo {
  ensureVersionsDir();
  const versions = listLocalVersions();
  const latest = versions[versions.length - 1] || null;

  let prevContent: SiteContent | null = null;
  if (latest) {
    try {
      const prevFile = path.join(VERSIONS_DIR, latest.file);
      if (fs.existsSync(prevFile)) {
        prevContent = JSON.parse(fs.readFileSync(prevFile, "utf8"));
      }
    } catch {}
  }

  const nextVersionNum = (latest?.version || 0) + 1;
  const timestamp = new Date().toISOString();
  const safeDate = timestamp.replace(/[:.]/g, "-");
  const versionId = `v${nextVersionNum}_${safeDate}`;
  const filename = `${versionId}.json`;
  const changes = computeChangesSummary(prevContent, content);

  const updatedVersions: VersionInfo[] = versions.map((v) => ({ ...v, active: false }));
  const newVersion: VersionInfo = {
    version: nextVersionNum,
    versionId,
    timestamp,
    note,
    changes,
    file: filename,
    active: true,
  };

  try {
    // Write content file (safely ignored if serverless read-only filesystem)
    fs.writeFileSync(path.join(VERSIONS_DIR, filename), JSON.stringify(content, null, 2), "utf8");
    updatedVersions.push(newVersion);
    fs.writeFileSync(INDEX_FILE, JSON.stringify(updatedVersions, null, 2), "utf8");

    // Also sync current active content to data/site-content.json
    const mainContentPath = path.join(process.cwd(), "data", "site-content.json");
    fs.writeFileSync(mainContentPath, JSON.stringify(content, null, 2), "utf8");
  } catch (fsErr) {
    // In serverless read-only environment like Vercel Lambda, disk writes fail silently
  }

  return newVersion;
}

export function getVersionContent(versionIdOrNumber: string | number): SiteContent | null {
  ensureVersionsDir();
  const versions = listLocalVersions();
  const target = versions.find(
    (v) => String(v.version) === String(versionIdOrNumber) || v.versionId === String(versionIdOrNumber)
  );

  if (!target) return null;

  try {
    const filePath = path.join(VERSIONS_DIR, target.file);
    if (fs.existsSync(filePath)) {
      return JSON.parse(fs.readFileSync(filePath, "utf8")) as SiteContent;
    }
  } catch (err) {
    console.error(`[VersionStore] Error reading version ${versionIdOrNumber}:`, err);
  }
  return null;
}

export function switchLocalVersion(versionIdOrNumber: string | number): { success: boolean; message: string; version?: VersionInfo; data?: SiteContent } {
  ensureVersionsDir();
  const versions = listLocalVersions();
  const targetIndex = versions.findIndex(
    (v) => String(v.version) === String(versionIdOrNumber) || v.versionId === String(versionIdOrNumber)
  );

  if (targetIndex === -1) {
    return { success: false, message: `Version "${versionIdOrNumber}" was not found.` };
  }

  const target = versions[targetIndex];
  const content = getVersionContent(target.versionId);

  if (!content) {
    return { success: false, message: `Could not load data for version "${target.versionId}".` };
  }

  try {
    // Update site-content.json
    const mainContentPath = path.join(process.cwd(), "data", "site-content.json");
    fs.writeFileSync(mainContentPath, JSON.stringify(content, null, 2), "utf8");

    // Update active flag in index
    const updatedVersions: VersionInfo[] = versions.map((v, i) => ({
      ...v,
      active: i === targetIndex,
    }));
    fs.writeFileSync(INDEX_FILE, JSON.stringify(updatedVersions, null, 2), "utf8");
  } catch {}

  return {
    success: true,
    message: `Switched active website content to Version ${target.version} (${target.note})!`,
    version: { ...target, active: true },
    data: content,
  };
}
