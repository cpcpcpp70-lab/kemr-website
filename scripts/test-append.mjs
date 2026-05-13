import { google } from "googleapis";
import { readFileSync } from "fs";

const creds = JSON.parse(readFileSync("C:/Users/aaa/Downloads/coral-shift-491302-b9-d73948c2b294.json", "utf8"));
const SPREADSHEET_ID = "1xpEKUR55lO4w4Y3b_HmO6h7nFTIqXEpZdbABCFNw8LY";

const auth = new google.auth.GoogleAuth({
  credentials: { client_email: creds.client_email, private_key: creds.private_key },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});
const sheetsClient = google.sheets({ version: "v4", auth });

async function getSheetId(sheetName) {
  const meta = await sheetsClient.spreadsheets.get({ spreadsheetId: SPREADSHEET_ID });
  const sheet = meta.data.sheets?.find((s) => s.properties?.title === sheetName);
  return sheet?.properties?.sheetId ?? 0;
}

// Test append to 공지사항
const sheetId = await getSheetId("공지사항");
console.log("sheetId for 공지사항:", sheetId);

await sheetsClient.spreadsheets.batchUpdate({
  spreadsheetId: SPREADSHEET_ID,
  requestBody: {
    requests: [{
      appendCells: {
        sheetId,
        rows: [{ values: ["1","테스트 공지","내용 테스트","2026-05-06","관리자","Y"].map(v => ({ userEnteredValue: { stringValue: v } })) }],
        fields: "userEnteredValue",
      },
    }],
  },
});

console.log("✓ 공지사항 행 추가 완료 — 이제 스프레드시트에서 확인하세요");
