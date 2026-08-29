import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

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

    // Save to /public/photos/admin-<slotId>.<ext>
    const filename = `admin-${slotId}.${safeExt}`;
    const photosDir = path.join(process.cwd(), "public", "photos");

    await mkdir(photosDir, { recursive: true });

    const buffer = Buffer.from(await file.arrayBuffer());
    await writeFile(path.join(photosDir, filename), buffer);

    const url = `/photos/${filename}`;
    return NextResponse.json({ success: true, url, filename });
  } catch (err) {
    console.error("[Admin Upload Error]", err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
