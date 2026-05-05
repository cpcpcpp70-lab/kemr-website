import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const PASSWORD = process.env.ADMIN_PASSWORD ?? "527452";
const SECRET   = process.env.ADMIN_SECRET   ?? "kemr-secret-key";

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  if (password !== PASSWORD) {
    return NextResponse.json({ error: "비밀번호가 틀렸습니다" }, { status: 401 });
  }
  const token = crypto.createHmac("sha256", SECRET).update(PASSWORD).digest("hex");
  return NextResponse.json({ token });
}
