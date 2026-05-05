import { google } from "googleapis";

const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID!;

function getAuth() {
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_SERVICE_ACCOUNT_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

function sheets() {
  return google.sheets({ version: "v4", auth: getAuth() });
}

export async function readSheet(sheetName: string): Promise<string[][]> {
  const res = await sheets().spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: sheetName,
  });
  return (res.data.values as string[][]) ?? [];
}

async function getSheetId(sheetName: string): Promise<number> {
  const meta = await sheets().spreadsheets.get({ spreadsheetId: SPREADSHEET_ID });
  const sheet = meta.data.sheets?.find((s) => s.properties?.title === sheetName);
  return sheet?.properties?.sheetId ?? 0;
}

export async function appendRow(sheetName: string, values: string[]): Promise<void> {
  const sheetId = await getSheetId(sheetName);
  await sheets().spreadsheets.batchUpdate({
    spreadsheetId: SPREADSHEET_ID,
    requestBody: {
      requests: [{
        appendCells: {
          sheetId,
          rows: [{ values: values.map(v => ({ userEnteredValue: { stringValue: v } })) }],
          fields: "userEnteredValue",
        },
      }],
    },
  });
}

export async function updateRow(sheetName: string, rowIndex: number, values: string[]): Promise<void> {
  const sheetId = await getSheetId(sheetName);
  await sheets().spreadsheets.batchUpdate({
    spreadsheetId: SPREADSHEET_ID,
    requestBody: {
      requests: [{
        updateCells: {
          range: {
            sheetId,
            startRowIndex: rowIndex - 1,
            endRowIndex: rowIndex,
            startColumnIndex: 0,
            endColumnIndex: values.length,
          },
          rows: [{ values: values.map(v => ({ userEnteredValue: { stringValue: v } })) }],
          fields: "userEnteredValue",
        },
      }],
    },
  });
}

export async function deleteRow(sheetName: string, rowIndex: number): Promise<void> {
  const sheetId = await getSheetId(sheetName);
  await sheets().spreadsheets.batchUpdate({
    spreadsheetId: SPREADSHEET_ID,
    requestBody: {
      requests: [{
        deleteDimension: {
          range: {
            sheetId,
            dimension: "ROWS",
            startIndex: rowIndex - 1,
            endIndex: rowIndex,
          },
        },
      }],
    },
  });
}
