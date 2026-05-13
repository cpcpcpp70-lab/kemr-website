import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import crypto from "crypto";

const SECRET = process.env.ADMIN_SECRET ?? "kemr-secret-key";
const PASSWORD = process.env.ADMIN_PASSWORD ?? "527452";

function verifyToken(token: string): boolean {
  const expected = crypto.createHmac("sha256", SECRET).update(PASSWORD).digest("hex");
  return token === expected;
}

function getSheets() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_SERVICE_ACCOUNT_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return google.sheets({ version: "v4", auth });
}

const REQUIRED_SHEETS = ["상담신청", "양도양수매물", "공지사항", "온라인문의"];

export async function GET(req: NextRequest) {
  const token = req.headers.get("x-admin-token") ?? "";
  if (!verifyToken(token)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID!;
  const sheets = getSheets();

  const meta = await sheets.spreadsheets.get({ spreadsheetId });
  const current = meta.data.sheets?.map((s) => ({
    title: s.properties?.title ?? "",
    sheetId: s.properties?.sheetId ?? 0,
  })) ?? [];

  return NextResponse.json({ spreadsheetId, current, required: REQUIRED_SHEETS });
}

export async function POST(req: NextRequest) {
  const token = req.headers.get("x-admin-token") ?? "";
  if (!verifyToken(token)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID!;
  const sheets = getSheets();

  // 현재 시트 목록 가져오기
  const meta = await sheets.spreadsheets.get({ spreadsheetId });
  const current = meta.data.sheets?.map((s) => ({
    title: (s.properties?.title ?? "").normalize("NFC"),
    sheetId: s.properties?.sheetId ?? 0,
  })) ?? [];

  const requiredNFC = REQUIRED_SHEETS.map((s) => s.normalize("NFC"));

  const toDelete = current.filter((s) => !requiredNFC.includes(s.title));
  const toAdd = REQUIRED_SHEETS.filter(
    (r) => !current.some((s) => s.title === r.normalize("NFC"))
  );

  const requests: object[] = [];

  // 삭제할 시트
  for (const s of toDelete) {
    requests.push({ deleteSheet: { sheetId: s.sheetId } });
  }

  // 추가할 시트
  for (const title of toAdd) {
    requests.push({ addSheet: { properties: { title } } });
  }

  if (requests.length === 0) {
    return NextResponse.json({
      ok: true,
      message: "이미 올바르게 구성되어 있습니다.",
      current: current.map((s) => s.title),
    });
  }

  // 삭제만 있을 때 시트가 1개 남을 수 없으므로 — 먼저 추가 후 삭제
  const addRequests = requests.filter((r) => "addSheet" in r);
  const deleteRequests = requests.filter((r) => "deleteSheet" in r);
  const ordered = [...addRequests, ...deleteRequests];

  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: { requests: ordered },
  });

  // 결과 확인
  const after = await sheets.spreadsheets.get({ spreadsheetId });
  const finalSheets = after.data.sheets?.map((s) => s.properties?.title ?? "") ?? [];

  return NextResponse.json({
    ok: true,
    deleted: toDelete.map((s) => s.title),
    added: toAdd,
    finalSheets,
    spreadsheetUrl: `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`,
  });
}
