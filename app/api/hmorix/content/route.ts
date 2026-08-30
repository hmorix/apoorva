import { NextRequest, NextResponse } from "next/server";
import {
  connectToDatabase,
  getStoredContent,
  saveDraftContent,
  publishContent,
  getRevisionHistory,
  restoreRevision,
} from "@/lib/mongodb";
import { getLocalContent, SiteContent } from "@/lib/contentStore";
import {
  listLocalVersions,
  createLocalVersion,
  switchLocalVersion,
  getVersionContent,
} from "@/lib/versionStore";

async function persistLocalJson(data: any) {
  try {
    const fs = await import("fs/promises");
    const path = await import("path");
    const filePath = path.join(process.cwd(), "data", "site-content.json");
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
  } catch {}
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const mode = (searchParams.get("mode") as "published" | "draft") || "draft";
    const history = searchParams.get("history") === "true";

    const dbConn = await connectToDatabase();
    const isMongoConnected = Boolean(dbConn);
    const hasGoogleDrive = Boolean(
      (process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || process.env.GOOGLE_CLIENT_EMAIL) &&
        (process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY || process.env.GOOGLE_PRIVATE_KEY)
    );

    const [publishedData, draftData, mongoRevisions] = await Promise.all([
      getStoredContent("published"),
      getStoredContent("draft"),
      history ? getRevisionHistory(30) : Promise.resolve([]),
    ]);

    // Merge local file version snapshots with MongoDB revisions
    const localVersions = history ? listLocalVersions() : [];
    const formattedLocal = localVersions.map((v) => ({
      revisionId: v.versionId,
      version: v.version,
      publishedAt: v.timestamp,
      note: v.note,
      changes: v.changes,
      data: getVersionContent(v.versionId) || undefined,
      active: Boolean(v.active),
    }));

    // Deduplicate by version number
    const unifiedRevisions = [...formattedLocal];
    for (const m of mongoRevisions) {
      if (!unifiedRevisions.some((u) => u.version === m.version)) {
        unifiedRevisions.push({
          revisionId: m.revisionId,
          version: m.version,
          publishedAt: m.publishedAt,
          note: m.note,
          changes: [],
          data: m.data as SiteContent,
          active: false,
        });
      }
    }
    unifiedRevisions.sort((a, b) => (b.version || 0) - (a.version || 0));

    return NextResponse.json({
      success: true,
      mode,
      content: mode === "published" ? publishedData : draftData,
      published: publishedData,
      draft: draftData,
      revisions: unifiedRevisions,
      localVersions,
      status: {
        mongoConnected: isMongoConnected,
        googleDriveConnected: hasGoogleDrive,
        databaseName: process.env.MONGODB_DB_NAME || "apoorva_kaushal",
      },
    });
  } catch (err) {
    console.error("[HMoriX Content GET Error]", err);
    return NextResponse.json(
      { success: false, error: "Failed to fetch content", fallback: getLocalContent() },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action = "save_draft", data, note, revisionId, versionNum } = body;

    // ── 1. ACTION: RESTORE / SWITCH VERSION ───────────────────────────────────
    if (action === "restore" || action === "switch_version") {
      const target = revisionId || versionNum;
      if (!target) {
        return NextResponse.json({ error: "Missing revisionId or versionNum" }, { status: 400 });
      }

      // Try local version store first
      const localResult = switchLocalVersion(target);
      if (localResult.success && localResult.data) {
        await saveDraftContent(localResult.data);
        await publishContent(`Restored ${localResult.version?.note || target}`);
        return NextResponse.json(localResult);
      }

      // Fallback to MongoDB restore
      const result = await restoreRevision(String(target));
      if (result.data) {
        await persistLocalJson(result.data);
      }
      return NextResponse.json(result);
    }

    // ── 2. ACTION: SAVE DRAFT ────────────────────────────────────────────────
    if (action === "save_draft") {
      if (!data || typeof data !== "object") {
        return NextResponse.json({ error: "Invalid draft data" }, { status: 400 });
      }
      const result = await saveDraftContent(data);
      await persistLocalJson(data);
      return NextResponse.json(result);
    }

    // ── 3. ACTION: PUBLISH DRAFT TO LIVE SITE ────────────────────────────────
    if (action === "publish") {
      const targetData = data && typeof data === "object" ? data : getLocalContent();
      await saveDraftContent(targetData);
      
      // Create local version snapshot
      const versionNote = note || "Published from /hmorix/admin";
      const newVersion = createLocalVersion(targetData, versionNote);

      // Publish in MongoDB
      const mongoResult = await publishContent(versionNote);

      return NextResponse.json({
        success: true,
        message: `Version v${newVersion.version} published live and version snapshot saved!`,
        version: newVersion,
        mongoResult,
      });
    }

    // ── 4. ACTION: RESET TO ORIGINAL BASE (v1) ───────────────────────────────
    if (action === "reset_to_default" || action === "reset_to_v1") {
      const versions = listLocalVersions();
      const v1 = versions.find((v) => v.version === 1);
      const v1Content = v1 ? getVersionContent(v1.versionId) : getLocalContent();
      const defaultContent = v1Content || getLocalContent();

      await saveDraftContent(defaultContent);
      const newVer = createLocalVersion(defaultContent, "Reset to Original Version (v1)");
      await publishContent("Reset to Original Version (v1)");

      return NextResponse.json({
        success: true,
        message: "Reset to Original Version (v1) successfully!",
        version: newVer,
      });
    }

    return NextResponse.json({ error: `Unknown action: ${action}` }, { status: 400 });
  } catch (err) {
    console.error("[HMoriX Content POST Error]", err);
    return NextResponse.json(
      { success: false, error: "Operation failed: " + (err instanceof Error ? err.message : String(err)) },
      { status: 500 }
    );
  }
}
