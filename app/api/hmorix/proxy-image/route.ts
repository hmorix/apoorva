import { NextRequest, NextResponse } from "next/server";

/**
 * /api/hmorix/proxy-image
 * Fetches an external image (Google Drive, Cloudinary, etc.) and pipes it
 * back through the same origin so the admin crop canvas can read pixel data
 * without CORS/tainted-canvas errors.
 */
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const src = url.searchParams.get("src");

  if (!src) {
    return NextResponse.json({ error: "Missing src param" }, { status: 400 });
  }

  try {
    const upstream = await fetch(src, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        Accept: "image/*,*/*",
      },
      cache: "no-store",
    });

    if (!upstream.ok) {
      return NextResponse.json(
        { error: `Upstream fetch failed: ${upstream.status}` },
        { status: 502 }
      );
    }

    const contentType = upstream.headers.get("content-type") || "image/jpeg";
    const buffer = await upstream.arrayBuffer();

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (err) {
    console.error("[proxy-image] Error:", err);
    return NextResponse.json({ error: "Proxy fetch failed" }, { status: 500 });
  }
}
