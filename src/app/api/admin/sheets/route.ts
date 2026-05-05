import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { readSheet, appendRow, updateRow, deleteRow } from "@/lib/googleSheets";

const PASSWORD = process.env.ADMIN_PASSWORD ?? "527452";
const SECRET   = process.env.ADMIN_SECRET   ?? "kemr-secret-key";

function verify(req: NextRequest) {
  const token = req.headers.get("x-admin-token");
  const valid  = crypto.createHmac("sha256", SECRET).update(PASSWORD).digest("hex");
  return token === valid;
}

export async function GET(req: NextRequest) {
  if (!verify(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const sheet = req.nextUrl.searchParams.get("sheet") ?? "";
  try {
    const rows = await readSheet(sheet);
    return NextResponse.json({ rows });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  if (!verify(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { sheet, values } = await req.json();
  await appendRow(sheet, values);
  return NextResponse.json({ ok: true });
}

export async function PUT(req: NextRequest) {
  if (!verify(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { sheet, rowIndex, values } = await req.json();
  await updateRow(sheet, rowIndex, values);
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: NextRequest) {
  if (!verify(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { sheet, rowIndex } = await req.json();
  await deleteRow(sheet, rowIndex);
  return NextResponse.json({ ok: true });
}
