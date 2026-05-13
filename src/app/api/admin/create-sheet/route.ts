import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import crypto from "crypto";

const SECRET = process.env.ADMIN_SECRET ?? "kemr-secret-key";
const PASSWORD = process.env.ADMIN_PASSWORD ?? "527452";

function verifyToken(token: string): boolean {
  const expected = crypto.createHmac("sha256", SECRET).update(PASSWORD).digest("hex");
  return token === expected;
}

export async function POST(req: NextRequest) {
  const token = req.headers.get("x-admin-token") ?? "";
  if (!verifyToken(token)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_SERVICE_ACCOUNT_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: [
      "https://www.googleapis.com/auth/spreadsheets",
    ],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const SHEET_NAMES = ["상담신청", "양도양수매물", "공지사항", "온라인문의"];

  const serviceEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ?? "(not set)";

  try {
    const res = await sheets.spreadsheets.create({
      requestBody: {
        properties: { title: "전기.site 홈페이지 데이터" },
        sheets: SHEET_NAMES.map((title, i) => ({
          properties: { sheetId: i + 1, title },
        })),
      },
    });

    return NextResponse.json({
      spreadsheetId: res.data.spreadsheetId,
      spreadsheetUrl: res.data.spreadsheetUrl,
      sheets: res.data.sheets?.map((s) => s.properties?.title),
      serviceEmail,
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg, serviceEmail }, { status: 500 });
  }
}
