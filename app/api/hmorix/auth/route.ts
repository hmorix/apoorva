import { NextRequest, NextResponse } from "next/server";

const ADMIN_PASSWORD = process.env.HMORIX_ADMIN_PASSWORD || "hmorix2024";
const SESSION_COOKIE = "hmorix_session";
const SESSION_VALUE = "authenticated";

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();

    if (password === ADMIN_PASSWORD) {
      const res = NextResponse.json({ success: true });
      res.cookies.set(SESSION_COOKIE, SESSION_VALUE, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: "/",
      });
      return res;
    }

    return NextResponse.json({ success: false, error: "Incorrect password" }, { status: 401 });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

export async function DELETE() {
  const res = NextResponse.json({ success: true });
  res.cookies.set(SESSION_COOKIE, "", { maxAge: 0, path: "/" });
  return res;
}

export async function GET(req: NextRequest) {
  const cookie = req.cookies.get(SESSION_COOKIE);
  const isAuth = cookie?.value === SESSION_VALUE;
  return NextResponse.json({ authenticated: isAuth });
}
