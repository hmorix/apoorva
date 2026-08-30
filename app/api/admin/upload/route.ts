import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { getWriteClient } from "@/sanity/lib/client";

export const config = {
  api: { bodyParser: false },
};

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const slotId = formData.get("slotId") as string | null;

    if (!file || !slotId) {
      return NextResponse.json({ error: "Missing file or slotId" }, { status: 400 });
    }

    // Validate it's an image
    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ error: "Only image files are accepted" }, { status: 400 });
    }

    // Limit 10 MB
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json({ error: "File too large (max 10 MB)" }, { status: 400 });
    }

    // Determine extension
    const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
    const safeExt = ["jpg", "jpeg", "png", "webp", "gif", "avif"].includes(ext) ? ext : "jpg";
    const filename = `admin-${slotId}.${safeExt}`;
    const buffer = Buffer.from(await file.arrayBuffer());

    // ── STRATEGY 1: Sanity Asset CDN (if write token configured) ─────────────
    try {
      const sanity = getWriteClient();
      if (sanity) {
        const asset = await sanity.assets.upload("image", buffer, {
          filename,
          contentType: file.type,
        });
        if (asset?.url) {
          return NextResponse.json({
            success: true,
            url: asset.url,
            filename,
            provider: "sanity",
          });
        }
      }
    } catch (sanityErr) {
      console.warn("[Admin Upload] Sanity asset upload failed, falling back:", sanityErr);
    }

    // ── STRATEGY 2: Cloudinary (if configured) ──────────────────────────────
    if (process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_SECRET) {
      try {
        const timestamp = Math.round(Date.now() / 1000);
        const crypto = await import("crypto");
        const strToSign = `folder=apoorva_photos&public_id=admin-${slotId}&timestamp=${timestamp}${process.env.CLOUDINARY_API_SECRET}`;
        const signature = crypto.createHash("sha1").update(strToSign).digest("hex");

        const cFormData = new FormData();
        const blob = new Blob([buffer], { type: file.type });
        cFormData.append("file", blob, filename);
        cFormData.append("api_key", process.env.CLOUDINARY_API_KEY);
        cFormData.append("timestamp", String(timestamp));
        cFormData.append("public_id", `admin-${slotId}`);
        cFormData.append("folder", "apoorva_photos");
        cFormData.append("signature", signature);

        const cRes = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`, {
          method: "POST",
          body: cFormData,
        });
        if (cRes.ok) {
          const cData = await cRes.json();
          return NextResponse.json({
            success: true,
            url: cData.secure_url || cData.url,
            filename,
            provider: "cloudinary",
          });
        }
      } catch (cloudErr) {
        console.warn("[Admin Upload] Cloudinary upload failed, falling back:", cloudErr);
      }
    }

    // ── STRATEGY 3: ImgBB (if configured) ───────────────────────────────────
    if (process.env.IMGBB_API_KEY) {
      try {
        const iFormData = new FormData();
        iFormData.append("image", buffer.toString("base64"));
        iFormData.append("name", `admin-${slotId}`);
        const iRes = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`, {
          method: "POST",
          body: iFormData,
        });
        if (iRes.ok) {
          const iData = await iRes.json();
          if (iData.data?.url) {
            return NextResponse.json({
              success: true,
              url: iData.data.display_url || iData.data.url,
              filename,
              provider: "imgbb",
            });
          }
        }
      } catch (imgbbErr) {
        console.warn("[Admin Upload] ImgBB upload failed, falling back:", imgbbErr);
      }
    }

    // ── STRATEGY 4: Local Disk Write (Local Dev / Writable Server) ───────────
    try {
      const photosDir = path.join(process.cwd(), "public", "photos");
      await mkdir(photosDir, { recursive: true });
      await writeFile(path.join(photosDir, filename), buffer);

      const url = `/photos/${filename}`;
      return NextResponse.json({ success: true, url, filename, provider: "local" });
    } catch (fsErr: any) {
      // ── STRATEGY 5: Serverless Read-Only File System Fallback (EROFS) ────────
      if (fsErr.code === "EROFS" || fsErr.errno === -30 || fsErr.message?.includes("read-only")) {
        console.warn("[Admin Upload] Read-only filesystem detected (Serverless / Vercel). Returning inline Base64 data URL.");
        const base64Url = `data:${file.type};base64,${buffer.toString("base64")}`;
        return NextResponse.json({
          success: true,
          url: base64Url,
          filename,
          provider: "inline-base64",
          note: "Serverless environment has read-only disk. Image updated inline. For persistent cloud storage, set SANITY_API_WRITE_TOKEN in Vercel environment variables.",
        });
      }
      throw fsErr;
    }
  } catch (err) {
    console.error("[Admin Upload Error]", err);
    return NextResponse.json({ error: "Upload failed: " + (err instanceof Error ? err.message : String(err)) }, { status: 500 });
  }
}
