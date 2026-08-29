import { NextRequest, NextResponse } from "next/server";
import { getLocalContent, saveLocalContent } from "@/lib/contentStore";

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

    const ok = saveLocalContent(body);
    if (ok) {
      return NextResponse.json({ success: true, message: "Content updated successfully" });
    } else {
      return NextResponse.json({ error: "Failed to save content" }, { status: 500 });
    }
  } catch (err) {
    console.error("[Admin Content POST Error]", err);
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}
