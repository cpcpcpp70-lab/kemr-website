import { readFileSync } from 'fs';
import { google } from 'googleapis';

// .env.production 파싱 (따옴표 및 멀티라인 키 처리)
function parseEnv(filePath) {
  const text = readFileSync(filePath, 'utf-8');
  const result = {};
  const re = /^([A-Z_][A-Z0-9_]*)=("(?:[^"\\]|\\.)*"|'[^']*'|[^\n]*)/gm;
  let m;
  while ((m = re.exec(text)) !== null) {
    let val = m[2];
    if ((val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    result[m[1]] = val;
  }
  return result;
}

const env = parseEnv('.env.production');

const rawKey = env.GOOGLE_SERVICE_ACCOUNT_KEY
  .replace(/\\n/g, '\n')   // 이스케이프된 개행 복원
  .replace(/\\"/g, '"');   // 이스케이프된 따옴표 복원

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: rawKey,
  },
  scopes: [
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/drive',
  ],
});

const sheets = google.sheets({ version: 'v4', auth });

const SHEET_NAMES = ['상담신청', '양도양수매물', '공지사항', '온라인문의'];

async function main() {
  console.log('📊 스프레드시트 생성 중...');

  const res = await sheets.spreadsheets.create({
    requestBody: {
      properties: { title: '전기.site 홈페이지 데이터' },
      sheets: SHEET_NAMES.map((title, i) => ({
        properties: { sheetId: i + 1, title },
      })),
    },
  });

  const id  = res.data.spreadsheetId;
  const url = res.data.spreadsheetUrl;

  console.log('\n✅ 생성 완료!');
  console.log('📋 Spreadsheet ID :', id);
  console.log('🔗 URL            :', url);
  console.log('\n시트 목록:');
  res.data.sheets.forEach(s => console.log(' -', s.properties.title));
}

main().catch(err => {
  console.error('❌ 오류:', err.message);
  process.exit(1);
});
