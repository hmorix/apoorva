import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const VERSIONS_DIR = path.join(rootDir, "data", "versions");
const INDEX_FILE = path.join(VERSIONS_DIR, "versions-index.json");
const MAIN_FILE = path.join(rootDir, "data", "site-content.json");

function ensureVersions() {
  if (!fs.existsSync(VERSIONS_DIR)) {
    fs.mkdirSync(VERSIONS_DIR, { recursive: true });
  }
  if (!fs.existsSync(INDEX_FILE)) {
    const mainContent = fs.existsSync(MAIN_FILE) ? JSON.parse(fs.readFileSync(MAIN_FILE, "utf-8")) : {};
    const v1 = {
      version: 1,
      versionId: "v1_initial_base",
      timestamp: new Date().toISOString(),
      note: "Initial Base Content",
      changes: ["Initial baseline state"],
      file: "v1_initial_base.json",
      active: true,
    };
    fs.writeFileSync(path.join(VERSIONS_DIR, "v1_initial_base.json"), JSON.stringify(mainContent, null, 2), "utf-8");
    fs.writeFileSync(INDEX_FILE, JSON.stringify([v1], null, 2), "utf-8");
  }
}

function getIndex() {
  ensureVersions();
  return JSON.parse(fs.readFileSync(INDEX_FILE, "utf-8"));
}

function saveIndex(index) {
  fs.writeFileSync(INDEX_FILE, JSON.stringify(index, null, 2), "utf-8");
}

function list() {
  const index = getIndex();
  console.log("\n=======================================================");
  console.log("             HMoriX Content Version History");
  console.log("=======================================================\n");

  if (index.length === 0) {
    console.log("No version snapshots recorded yet.\n");
    return;
  }

  index.forEach((v) => {
    const activeMarker = v.active ? " ⭐ [CURRENT ACTIVE]" : "";
    console.log(`• Version v${v.version} (${v.versionId})${activeMarker}`);
    console.log(`  Date:    ${new Date(v.timestamp).toLocaleString()}`);
    console.log(`  Note:    ${v.note}`);
    if (v.changes && v.changes.length > 0) {
      console.log(`  Changes: ${v.changes.join("; ")}`);
    }
    console.log("-------------------------------------------------------");
  });
  console.log(`\nTo switch versions, run:`);
  console.log(`  npm run version:switch <number>   (e.g. npm run version:switch 1)\n`);
}

function switchVersion(target) {
  if (!target) {
    console.error("\n❌ Error: Please specify a version number or ID to switch to.");
    console.error("  Usage: node scripts/version-manager.mjs switch <versionNum>");
    console.error("  Example: node scripts/version-manager.mjs switch 1\n");
    process.exit(1);
  }

  const index = getIndex();
  let targetVersion = null;

  if (target.toLowerCase() === "latest") {
    targetVersion = index[index.length - 1];
  } else {
    targetVersion = index.find(
      (v) => String(v.version) === String(target).replace(/^v/i, "") || v.versionId === target
    );
  }

  if (!targetVersion) {
    console.error(`\n❌ Version "${target}" not found in version history.`);
    console.error("Run `npm run version:list` to view available versions.\n");
    process.exit(1);
  }

  const versionFilePath = path.join(VERSIONS_DIR, targetVersion.file);
  if (!fs.existsSync(versionFilePath)) {
    console.error(`\n❌ Snapshot file missing: ${targetVersion.file}\n`);
    process.exit(1);
  }

  const content = JSON.parse(fs.readFileSync(versionFilePath, "utf-8"));
  fs.writeFileSync(MAIN_FILE, JSON.stringify(content, null, 2), "utf-8");

  const updatedIndex = index.map((v) => ({
    ...v,
    active: v.versionId === targetVersion.versionId,
  }));
  saveIndex(updatedIndex);

  console.log("\n=======================================================");
  console.log(`  🎉 SUCCESSFULLY SWITCHED TO VERSION v${targetVersion.version}!`);
  console.log(`  - Note:     ${targetVersion.note}`);
  console.log(`  - Snapshot: ${targetVersion.file}`);
  console.log(`  - Active:   data/site-content.json updated.`);
  console.log("=======================================================\n");
}

function create(noteArg) {
  ensureVersions();
  const index = getIndex();
  const mainContent = fs.existsSync(MAIN_FILE) ? JSON.parse(fs.readFileSync(MAIN_FILE, "utf-8")) : {};
  const nextVersionNum = (index[index.length - 1]?.version || 0) + 1;
  const timestamp = new Date().toISOString();
  const safeDate = timestamp.replace(/[:.]/g, "-");
  const versionId = `v${nextVersionNum}_${safeDate}`;
  const filename = `${versionId}.json`;
  const note = noteArg || `Manual Snapshot v${nextVersionNum}`;

  fs.writeFileSync(path.join(VERSIONS_DIR, filename), JSON.stringify(mainContent, null, 2), "utf-8");

  const updatedIndex = index.map((v) => ({ ...v, active: false }));
  updatedIndex.push({
    version: nextVersionNum,
    versionId,
    timestamp,
    note,
    changes: ["Manual snapshot created from current live content"],
    file: filename,
    active: true,
  });
  saveIndex(updatedIndex);

  console.log(`\n✓ Created Version v${nextVersionNum} (${note}) successfully!\n`);
}

const command = process.argv[2] || "list";
const arg = process.argv[3];

if (command === "list") {
  list();
} else if (command === "switch" || command === "restore") {
  switchVersion(arg);
} else if (command === "create" || command === "save") {
  create(arg);
} else {
  console.log("Usage: node scripts/version-manager.mjs [list|switch|create] [arg]");
}
