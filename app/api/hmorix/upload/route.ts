import { NextRequest, NextResponse } from "next/server";
import { uploadToGoogleDrive } from "@/lib/googleDrive";
import { saveMediaAssetRecord } from "@/lib/mongodb";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export const config = {
  api: { bodyParser: false },
};

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const slotId = (formData.get("slotId") as string | null) || `media_${Date.now()}`;

    if (!file) {
      return NextResponse.json({ error: "Missing file" }, { status: 400 });
    }

    const isVideo = file.type.startsWith("video/");
    const isImage = file.type.startsWith("image/");

    if (!isVideo && !isImage) {
      return NextResponse.json({ error: "Only images and video files are supported" }, { status: 400 });
    }

    // Limit 50 MB
    if (file.size > 50 * 1024 * 1024) {
      return NextResponse.json({ error: "File too large (max 50 MB)" }, { status: 400 });
    }

    const ext = file.name.split(".").pop()?.toLowerCase() || (isVideo ? "mp4" : "jpg");
    const filename = `hmorix-${slotId}.${ext}`;
    const buffer = Buffer.from(await file.arrayBuffer());

    let finalUrl: string | null = null;
    let provider = "inline-base64";
    let googleDriveId: string | undefined;

    // ── 1. STRATEGY 1: Google Drive Storage ─────────────────────────────────
    try {
      const gDriveResult = await uploadToGoogleDrive(buffer, filename, file.type);
      if (gDriveResult?.url) {
        finalUrl = gDriveResult.url;
        googleDriveId = gDriveResult.fileId;
        provider = "google-drive";
      }
    } catch (gErr) {
      console.warn("[Upload Google Drive Error]:", gErr);
    }

    // ── 2. STRATEGY 2: Cloudinary (if configured) ───────────────────────────
    if (!finalUrl && process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_SECRET) {
      try {
        const timestamp = Math.round(Date.now() / 1000);
        const crypto = await import("crypto");
        const resourceType = isVideo ? "video" : "image";
        const strToSign = `folder=apoorva_media&public_id=${slotId}&timestamp=${timestamp}${process.env.CLOUDINARY_API_SECRET}`;
        const signature = crypto.createHash("sha1").update(strToSign).digest("hex");

        const cFormData = new FormData();
        const blob = new Blob([buffer], { type: file.type });
        cFormData.append("file", blob, filename);
        cFormData.append("api_key", process.env.CLOUDINARY_API_KEY);
        cFormData.append("timestamp", String(timestamp));
        cFormData.append("public_id", slotId);
        cFormData.append("folder", "apoorva_media");
        cFormData.append("signature", signature);

        const cRes = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/${resourceType}/upload`,
          { method: "POST", body: cFormData }
        );

        if (cRes.ok) {
          const cData = await cRes.json();
          finalUrl = cData.secure_url || cData.url;
          provider = "cloudinary";
        }
      } catch (cErr) {
        console.warn("[Upload Cloudinary Error]:", cErr);
      }
    }

    // ── 3. STRATEGY 3: ImgBB (Images only) ──────────────────────────────────
    if (!finalUrl && isImage && process.env.IMGBB_API_KEY) {
      try {
        const iFormData = new FormData();
        iFormData.append("image", buffer.toString("base64"));
        iFormData.append("name", `hmorix-${slotId}`);
        const iRes = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`, {
          method: "POST",
          body: iFormData,
        });
        if (iRes.ok) {
          const iData = await iRes.json();
          if (iData.data?.url) {
            finalUrl = iData.data.display_url || iData.data.url;
            provider = "imgbb";
          }
        }
      } catch (iErr) {
        console.warn("[Upload ImgBB Error]:", iErr);
      }
    }

    // ── 4. STRATEGY 4: Local Disk (Local dev environment) ───────────────────
    if (!finalUrl) {
      try {
        const publicPhotosDir = path.join(process.cwd(), "public", "photos");
        await mkdir(publicPhotosDir, { recursive: true });
        await writeFile(path.join(publicPhotosDir, filename), buffer);
        finalUrl = `/photos/${filename}`;
        provider = "local";
      } catch (fsErr: any) {
        // Fallback to base64 Data URL on read-only serverless filesystem
        const base64Str = buffer.toString("base64");
        finalUrl = `data:${file.type};base64,${base64Str}`;
        provider = "inline-base64";
      }
    }

    // ── 5. RECORD IN MONGODB ATLAS ──────────────────────────────────────────
    if (finalUrl) {
      await saveMediaAssetRecord({
        slotId,
        url: finalUrl,
        filename,
        googleDriveId,
        mimeType: file.type,
        mediaType: isVideo ? "video" : "photo",
        size: file.size,
      });
    }

    return NextResponse.json({
      success: true,
      url: finalUrl,
      slotId,
      filename,
      mediaType: isVideo ? "video" : "photo",
      provider,
      message:
        provider === "google-drive"
          ? "Uploaded to Google Drive and saved to MongoDB!"
          : provider === "inline-base64"
          ? "Uploaded inline. Add Google Drive credentials for direct cloud hosting."
          : `Uploaded via ${provider} and saved!`,
    });
  } catch (err) {
    console.error("[HMoriX Upload Error]", err);
    return NextResponse.json(
      { error: "Upload failed: " + (err instanceof Error ? err.message : String(err)) },
      { status: 500 }
    );
  }
}
