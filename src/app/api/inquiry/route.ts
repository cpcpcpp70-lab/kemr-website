import { NextRequest, NextResponse } from "next/server";
import { readSheet, appendRow } from "@/lib/googleSheets";

const SHEET = "온라인문의";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, inquiryType, content } = await req.json();
    if (!name || !phone || !content) {
      return NextResponse.json({ error: "필수 항목을 입력해주세요" }, { status: 400 });
    }

    const rows = await readSheet(SHEET);
    const no = rows.length; // header row = 1, so next row number = rows.length

    const today = new Date().toLocaleDateString("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" });
    const fullContent = inquiryType ? `[${inquiryType}] ${content}` : content;

    await appendRow(SHEET, [String(no), today, name, phone, fullContent, "N", ""]);
    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
