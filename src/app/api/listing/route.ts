import { NextRequest, NextResponse } from "next/server";
import { readSheet, appendRow } from "@/lib/googleSheets";

const SHEET = "양도양수매물";

export async function POST(req: NextRequest) {
  try {
    const { licenseType, location, capital, name, phone, technicalStaff, remarks } = await req.json();
    if (!licenseType || !location || !capital || !name || !phone) {
      return NextResponse.json({ error: "필수 항목을 입력해주세요" }, { status: 400 });
    }

    const rows = await readSheet(SHEET);
    const no = rows.length;
    const today = new Date().toLocaleDateString("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" });
    const listingNo = `M-${String(no).padStart(4, "0")}`;

    const noteParts = [`담당자: ${name} / ${phone}`];
    if (technicalStaff) noteParts.push(`기술자: ${technicalStaff}`);
    if (remarks) noteParts.push(remarks);

    await appendRow(SHEET, [
      String(no),          // No
      listingNo,           // 매물번호
      today,               // 등록일
      "",                  // 설립연도
      "",                  // 법인형태
      location,            // 지역
      licenseType,         // 면허종류
      capital,             // 자본금
      "", "", "", "", "", "", "",  // 20년~26년
      "",                  // 3년실적
      "",                  // 5년실적
      "",                  // 조합예치금
      "",                  // 매매가
      "",                  // 양도방식
      "등록대기",           // 매물상태
      noteParts.join(" | "), // 비고
    ]);
    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
