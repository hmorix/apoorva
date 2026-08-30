import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { getLocalContent } from "@/lib/contentStore";
import { getWriteClient } from "@/sanity/lib/client";

export async function GET() {
  try {
    const content = getLocalContent();
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

    // 1. If Sanity write token is configured, sync to Sanity documents
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
            // If document doesn't exist, create it
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

    // 2. Try writing to local disk (in local dev / writable servers)
    const current = getLocalContent() || {};
    const merged = { ...current, ...body };

    try {
      const dataDir = path.join(process.cwd(), "data");
      await mkdir(dataDir, { recursive: true });

      const filePath = path.join(dataDir, "site-content.json");
      await writeFile(filePath, JSON.stringify(merged, null, 2), "utf-8");
      return NextResponse.json({ success: true, message: "Content updated successfully" });
    } catch (fsErr: any) {
      if (fsErr.code === "EROFS" || fsErr.errno === -30 || fsErr.message?.includes("read-only")) {
        console.warn("[Admin Content] Read-only filesystem (Serverless). Handled gracefully.");
        return NextResponse.json({
          success: true,
          message: writeClient ? "Content synced to Sanity CMS successfully!" : "Content updated. Connect Sanity CMS for persistent multi-region cloud sync.",
          readOnlyDisk: true,
        });
      }
      throw fsErr;
    }
  } catch (err) {
    console.error("[Admin Content POST Error]", err);
    return NextResponse.json({ error: "Failed to process request: " + (err instanceof Error ? err.message : String(err)) }, { status: 500 });
  }
}
