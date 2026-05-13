import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import crypto from "crypto";

const SECRET = process.env.ADMIN_SECRET ?? "kemr-secret-key";
const PASSWORD = process.env.ADMIN_PASSWORD ?? "527452";

function verifyToken(token: string): boolean {
  const expected = crypto.createHmac("sha256", SECRET).update(PASSWORD).digest("hex");
  return token === expected;
}

function getAuth(scopes: string[]) {
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_SERVICE_ACCOUNT_KEY?.replace(/\\n/g, "\n"),
    },
    scopes,
  });
}

export async function POST(req: NextRequest) {
  const token = req.headers.get("x-admin-token") ?? "";
  if (!verifyToken(token)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const serviceEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ?? "(not set)";
  const SHEET_NAMES = ["상담신청", "양도양수매물", "공지사항", "온라인문의"];

  // 1. 스프레드시트 생성 (Drive + Sheets scope 필요)
  const sheetsAuth = getAuth([
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive",
  ]);
  const sheets = google.sheets({ version: "v4", auth: sheetsAuth });

  let spreadsheetId: string;
  let spreadsheetUrl: string;

  try {
    const res = await sheets.spreadsheets.create({
      requestBody: {
        properties: { title: "전기.site 홈페이지 데이터" },
        sheets: SHEET_NAMES.map((title, i) => ({
          properties: { sheetId: i + 1, title },
        })),
      },
    });
    spreadsheetId = res.data.spreadsheetId!;
    spreadsheetUrl = res.data.spreadsheetUrl!;
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({
      error: msg,
      serviceEmail,
      hint: "Google Cloud Console에서 Drive API를 활성화해 주세요: https://console.cloud.google.com/apis/library/drive.googleapis.com",
    }, { status: 500 });
  }

  // 2. 사용자(cpcpcpp70@gmail.com)에게 편집 권한 공유
  const driveAuth = getAuth(["https://www.googleapis.com/auth/drive"]);
  const drive = google.drive({ version: "v3", auth: driveAuth });

  const shareResult: string[] = [];
  const ownerEmail = "cpcpcpp70@gmail.com";

  try {
    await drive.permissions.create({
      fileId: spreadsheetId,
      requestBody: {
        type: "user",
        role: "writer",
        emailAddress: ownerEmail,
      },
      sendNotificationEmail: false,
    });
    shareResult.push(`✅ ${ownerEmail}에 편집 권한 공유 완료`);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    shareResult.push(`⚠️ 공유 실패 (수동으로 공유 필요): ${msg}`);
  }

  return NextResponse.json({
    ok: true,
    spreadsheetId,
    spreadsheetUrl,
    serviceEmail,
    shareResult,
    sheets: SHEET_NAMES,
  });
}
