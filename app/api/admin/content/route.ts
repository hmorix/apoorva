import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { getContent, getLocalContent } from "@/lib/contentStore";
import { getWriteClient } from "@/sanity/lib/client";

export async function GET() {
  try {
    const content = await getContent();
    return NextResponse.json({ success: true, content });
  } catch (err) {
    console.error("[Admin Content GET Error]", err);
    return NextResponse.json({ error: "Failed to fetch content" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid content body" }, { status: 400 });
    }

    const current = await getContent();
    const merged = { ...current, ...body };

    // 1. If Upstash Redis / Vercel KV is configured, save directly to Cloud KV
    const kvUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
    const kvToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
    let kvSaved = false;

    if (kvUrl && kvToken) {
      try {
        const kvRes = await fetch(`${kvUrl}/set/site_content`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${kvToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(merged),
        });
        if (kvRes.ok) kvSaved = true;
      } catch (kvErr) {
        console.warn("[Admin Content KV Sync]:", kvErr);
      }
    }

    // 2. If Sanity write token is configured, sync to Sanity documents
    const writeClient = getWriteClient();
    if (writeClient) {
      try {
        if (body.hero || body.homepage || body.contact) {
          await writeClient.patch("siteSettings").set({
            heroTitle: body.hero?.heroTitle,
            heroTagline: body.hero?.heroTagline,
            heroSignature: body.hero?.heroSignature,
            whoAmIHeading: body.homepage?.whoAmIHeading,
            whoAmIBio1: body.homepage?.whoAmIBio1,
            whoAmIBio2: body.homepage?.whoAmIBio2,
            whatsappNumber: body.contact?.whatsappNumber,
            instagramHandle: body.contact?.instagramHandle,
            youtubeHandle: body.contact?.youtubeHandle,
          }).commit({ autoGenerateArrayKeys: true }).catch(async () => {
            await writeClient.createOrReplace({
              _id: "siteSettings",
              _type: "siteSettings",
              heroTitle: body.hero?.heroTitle,
              heroTagline: body.hero?.heroTagline,
              heroSignature: body.hero?.heroSignature,
              whoAmIHeading: body.homepage?.whoAmIHeading,
              whoAmIBio1: body.homepage?.whoAmIBio1,
              whoAmIBio2: body.homepage?.whoAmIBio2,
              whatsappNumber: body.contact?.whatsappNumber,
              instagramHandle: body.contact?.instagramHandle,
              youtubeHandle: body.contact?.youtubeHandle,
            });
          });
        }
      } catch (sanityErr) {
        console.warn("[Admin Content Sanity Sync]:", sanityErr);
      }
    }

    // 3. Try writing to local disk (in local dev / writable servers)
    try {
      const dataDir = path.join(process.cwd(), "data");
      await mkdir(dataDir, { recursive: true });

      const filePath = path.join(dataDir, "site-content.json");
      await writeFile(filePath, JSON.stringify(merged, null, 2), "utf-8");
      return NextResponse.json({ success: true, message: "Content saved to disk and synced successfully!" });
    } catch (fsErr: any) {
      if (fsErr.code === "EROFS" || fsErr.errno === -30 || fsErr.message?.includes("read-only")) {
        return NextResponse.json({
          success: true,
          message: kvSaved
            ? "Content saved to Cloud KV database successfully!"
            : writeClient
            ? "Content synced to Sanity CMS successfully!"
            : "Content updated in session. Connect Sanity CMS or Vercel KV for persistent cross-deployment storage.",
          readOnlyDisk: true,
          persisted: kvSaved || Boolean(writeClient),
        });
      }
      throw fsErr;
    }
  } catch (err) {
    console.error("[Admin Content POST Error]", err);
    return NextResponse.json({ error: "Failed to process request: " + (err instanceof Error ? err.message : String(err)) }, { status: 500 });
  }
}

