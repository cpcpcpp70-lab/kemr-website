import { NextRequest, NextResponse } from "next/server";
import { readSheet, appendRow } from "@/lib/googleSheets";

const SHEET = "상담신청";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, company, service, content, note } = await req.json();
    if (!name || !phone || !content) {
      return NextResponse.json({ error: "필수 항목을 입력해주세요" }, { status: 400 });
    }

    const rows = await readSheet(SHEET);
    const no = rows.length;
    const today = new Date().toLocaleDateString("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" });

    await appendRow(SHEET, [
      String(no),      // No
      today,           // 상담일자
      company ?? "",   // 업체명
      name,            // 대표자
      phone,           // 연락처
      "",              // 지역
      service ?? "",   // 관심서비스
      "웹사이트",      // 상담경로
      content,         // 상담내용
      "신규",          // 진행상태
      "",              // 다음연락일
      "",              // 담당자
      "",              // 계약여부
      "",              // 계약금액
      note ?? "",      // 비고
    ]);
    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
