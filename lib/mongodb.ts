import { MongoClient, Db } from "mongodb";
import { SiteContent, getLocalContent } from "./contentStore";

const uri = process.env.MONGODB_URI || "";
const dbName = process.env.MONGODB_DB_NAME || "apoorva_kaushal";

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db } | null> {
  if (!uri) {
    return null;
  }

  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  try {
    const client = new MongoClient(uri, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
    });
    await client.connect();
    const db = client.db(dbName);

    cachedClient = client;
    cachedDb = db;
    return { client, db };
  } catch (error) {
    console.error("[MongoDB Atlas Connection Error]:", error);
    return null;
  }
}

export interface ContentRecord {
  _id?: string;
  published: SiteContent;
  draft: SiteContent;
  publishedAt?: string;
  draftUpdatedAt?: string;
  version?: number;
}

export interface ContentRevision {
  _id?: string;
  revisionId: string;
  version: number;
  data: SiteContent;
  note?: string;
  publishedAt: string;
  publishedBy?: string;
}

// ── GET SITE CONTENT (Published or Draft) ───────────────────────────────────
export async function getStoredContent(mode: "published" | "draft" = "published"): Promise<SiteContent> {
  const defaultContent = getLocalContent();

  const conn = await connectToDatabase();
  if (!conn) {
    return defaultContent;
  }

  try {
    const collection = conn.db.collection<ContentRecord>("site_content");
    const doc = await collection.findOne({ _id: "live_site_content" as any });

    if (!doc) {
      return defaultContent;
    }

    const data = mode === "draft" ? doc.draft || doc.published : doc.published;
    return { ...defaultContent, ...data };
  } catch (err) {
    console.warn(`[MongoDB] Failed to load ${mode} content, falling back to local:`, err);
    return defaultContent;
  }
}

// ── SAVE DRAFT CONTENT ──────────────────────────────────────────────────────
export async function saveDraftContent(draftData: Partial<SiteContent>): Promise<{ success: boolean; message: string }> {
  const conn = await connectToDatabase();
  if (!conn) {
    return { success: false, message: "MongoDB Atlas is not connected (check MONGODB_URI)." };
  }

  try {
    const collection = conn.db.collection<ContentRecord>("site_content");
    const existing = await collection.findOne({ _id: "live_site_content" as any });
    const currentDraft = existing?.draft || existing?.published || getLocalContent();
    const merged = { ...currentDraft, ...draftData };

    await collection.updateOne(
      { _id: "live_site_content" as any },
      {
        $set: {
          draft: merged,
          draftUpdatedAt: new Date().toISOString(),
        },
        $setOnInsert: {
          published: existing?.published || getLocalContent(),
          version: 1,
        },
      },
      { upsert: true }
    );

    return { success: true, message: "Draft saved to MongoDB Atlas successfully!" };
  } catch (err) {
    console.error("[MongoDB Save Draft Error]:", err);
    return { success: false, message: "Failed to save draft: " + (err instanceof Error ? err.message : String(err)) };
  }
}

// ── PUBLISH DRAFT TO LIVE WEBSITE ───────────────────────────────────────────
export async function publishContent(note = "Published from /hmorix/admin"): Promise<{ success: boolean; message: string; version?: number }> {
  const conn = await connectToDatabase();
  if (!conn) {
    return { success: false, message: "MongoDB Atlas is not connected (check MONGODB_URI)." };
  }

  try {
    const contentCollection = conn.db.collection<ContentRecord>("site_content");
    const revisionsCollection = conn.db.collection<ContentRevision>("content_revisions");

    const existing = await contentCollection.findOne({ _id: "live_site_content" as any });
    const dataToPublish = existing?.draft || existing?.published || getLocalContent();
    const nextVersion = (existing?.version || 1) + 1;
    const now = new Date().toISOString();

    // 1. Update live published document
    await contentCollection.updateOne(
      { _id: "live_site_content" as any },
      {
        $set: {
          published: dataToPublish,
          draft: dataToPublish,
          publishedAt: now,
          version: nextVersion,
        },
      },
      { upsert: true }
    );

    // 2. Save immutable version snapshot in revisions history
    const revisionId = `rev_${Date.now()}_v${nextVersion}`;
    await revisionsCollection.insertOne({
      revisionId,
      version: nextVersion,
      data: dataToPublish,
      note,
      publishedAt: now,
    });

    return { success: true, message: `Version ${nextVersion} published live to website!`, version: nextVersion };
  } catch (err) {
    console.error("[MongoDB Publish Error]:", err);
    return { success: false, message: "Failed to publish: " + (err instanceof Error ? err.message : String(err)) };
  }
}

// ── GET REVISION HISTORY ───────────────────────────────────────────────────
export async function getRevisionHistory(limit = 20): Promise<ContentRevision[]> {
  const conn = await connectToDatabase();
  if (!conn) return [];

  try {
    const revisionsCollection = conn.db.collection<ContentRevision>("content_revisions");
    return await revisionsCollection
      .find({})
      .sort({ version: -1 })
      .limit(limit)
      .toArray();
  } catch (err) {
    console.error("[MongoDB History Error]:", err);
    return [];
  }
}

// ── RESTORE AN OLD REVISION ─────────────────────────────────────────────────
export async function restoreRevision(revisionId: string): Promise<{ success: boolean; message: string; data?: Partial<SiteContent> }> {
  const conn = await connectToDatabase();
  if (!conn) {
    return { success: false, message: "MongoDB Atlas is not connected." };
  }

  try {
    const revisionsCollection = conn.db.collection<ContentRevision>("content_revisions");
    const targetRev = await revisionsCollection.findOne({ revisionId });

    if (!targetRev) {
      return { success: false, message: "Revision not found." };
    }

    await saveDraftContent(targetRev.data);
    await publishContent(`Restored from Version ${targetRev.version} (${revisionId})`);
    return { success: true, message: `Successfully restored Version ${targetRev.version}!`, data: targetRev.data };
  } catch (err) {
    return { success: false, message: "Restore failed: " + (err instanceof Error ? err.message : String(err)) };
  }
}

// ── SAVE MEDIA ASSET RECORD (Photos / Videos) ────────────────────────────────
export interface MediaAsset {
  _id?: string;
  slotId: string;
  url: string;
  googleDriveId?: string;
  filename: string;
  mimeType: string;
  mediaType: "photo" | "video";
  size?: number;
  uploadedAt: string;
}

export async function saveMediaAssetRecord(asset: Omit<MediaAsset, "uploadedAt">): Promise<void> {
  const conn = await connectToDatabase();
  if (!conn) return;

  try {
    const mediaCollection = conn.db.collection<MediaAsset>("media_assets");
    await mediaCollection.updateOne(
      { slotId: asset.slotId },
      {
        $set: {
          ...asset,
          uploadedAt: new Date().toISOString(),
        },
      },
      { upsert: true }
    );
  } catch (err) {
    console.warn("[MongoDB Save Media Asset]:", err);
  }
}
