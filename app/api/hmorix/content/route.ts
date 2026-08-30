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

    const [publishedData, draftData, revisions] = await Promise.all([
      getStoredContent("published"),
      getStoredContent("draft"),
      history ? getRevisionHistory(20) : Promise.resolve([]),
    ]);

    return NextResponse.json({
      success: true,
      mode,
      content: mode === "published" ? publishedData : draftData,
      published: publishedData,
      draft: draftData,
      revisions,
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
    const { action = "save_draft", data, note, revisionId } = body;

    // ── 1. ACTION: RESTORE REVISION ───────────────────────────────────────────
    if (action === "restore") {
      if (!revisionId) {
        return NextResponse.json({ error: "Missing revisionId" }, { status: 400 });
      }
      const result = await restoreRevision(revisionId);
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
      if (data && typeof data === "object") {
        await saveDraftContent(data);
        await persistLocalJson(data);
      }
      const result = await publishContent(note || "Published from /hmorix/admin");
      return NextResponse.json(result);
    }

    // ── 4. ACTION: RESET TO DEFAULT ──────────────────────────────────────────
    if (action === "reset_to_default") {
      const defaultContent = getLocalContent();
      await saveDraftContent(defaultContent);
      await persistLocalJson(defaultContent);
      await publishContent("Reset to default system content");
      return NextResponse.json({ success: true, message: "Reset to default content successfully!" });
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
