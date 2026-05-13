import { google } from "googleapis";
import { readFileSync } from "fs";

const creds = JSON.parse(readFileSync("C:/Users/aaa/Downloads/coral-shift-491302-b9-d73948c2b294.json", "utf8"));
const SPREADSHEET_ID = "1xpEKUR55lO4w4Y3b_HmO6h7nFTIqXEpZdbABCFNw8LY";

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: creds.client_email,
    private_key: creds.private_key,
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

const HEADERS = {
  "양도매물":  ["No","매물번호","등록일","설립연도","법인형태","지역","면허종류","자본금","20년","21년","22년","23년","24년","25년","26년","3년실적","5년실적","조합예치금","매매가","양도방식","매물상태","비고"],
  "상담신청":  ["No","상담일자","업체명","대표자","연락처","지역","관심서비스","상담경로","상담내용","진행상태","다음연락일","담당자","계약여부","계약금액","비고"],
  "공지사항":  ["No","제목","내용","작성일","작성자","공개여부"],
  "온라인문의": ["No","문의일자","업체명","연락처","문의내용","답변여부","답변내용"],
};

for (const [sheetName, values] of Object.entries(HEADERS)) {
  try {
    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `${sheetName}!A1`,
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [values] },
    });
    console.log(`✓ ${sheetName} 헤더 입력 완료`);
  } catch (e) {
    console.error(`✗ ${sheetName} 실패:`, e.message);
  }
}
