import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { getLocalContent } from "@/lib/contentStore";

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

    const current = getLocalContent() || {};
    const merged = { ...current, ...body };

    const dataDir = path.join(process.cwd(), "data");
    await mkdir(dataDir, { recursive: true });

    const filePath = path.join(dataDir, "site-content.json");
    await writeFile(filePath, JSON.stringify(merged, null, 2), "utf-8");

    return NextResponse.json({ success: true, message: "Content updated successfully" });
  } catch (err) {
    console.error("[Admin Content POST Error]", err);
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}
