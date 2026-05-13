"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

type Row = string[];

const SHEETS = {
  listings:  { name: "양도양수매물",  label: "양도양수 매물" },
  consults:  { name: "상담신청",  label: "상담 신청 현황" },
  notices:   { name: "공지사항",  label: "공지사항" },
  inquiries: { name: "온라인문의", label: "온라인 문의" },
} as const;
type SheetKey = keyof typeof SHEETS;

const HEADERS: Record<SheetKey, string[]> = {
  listings:  ["No","매물번호","등록일","설립연도","법인형태","지역","면허종류","자본금","20년","21년","22년","23년","24년","25년","26년","3년실적","5년실적","조합예치금","매매가","양도방식","매물상태","비고"],
  consults:  ["No","상담일자","업체명","대표자","연락처","지역","관심서비스","상담경로","상담내용","진행상태","다음연락일","담당자","계약여부","계약금액","비고"],
  notices:   ["No","제목","내용","작성일","작성자","공개여부"],
  inquiries: ["No","문의일자","업체명","연락처","문의내용","답변여부","답변내용"],
};

function api(token: string) {
  return {
    get: (sheet: string) =>
      fetch(`/api/admin/sheets?sheet=${encodeURIComponent(sheet)}`, {
        headers: { "x-admin-token": token },
      }).then(r => r.json()),
    post: (sheet: string, values: Row) =>
      fetch("/api/admin/sheets", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-admin-token": token },
        body: JSON.stringify({ sheet, values }),
      }),
    put: (sheet: string, rowIndex: number, values: Row) =>
      fetch("/api/admin/sheets", {
        method: "PUT",
        headers: { "Content-Type": "application/json", "x-admin-token": token },
        body: JSON.stringify({ sheet, rowIndex, values }),
      }),
    del: (sheet: string, rowIndex: number) =>
      fetch("/api/admin/sheets", {
        method: "DELETE",
        headers: { "Content-Type": "application/json", "x-admin-token": token },
        body: JSON.stringify({ sheet, rowIndex }),
      }),
  };
}

export default function AdminDashboard() {
  const router  = useRouter();
  const [token, setToken]   = useState("");
  const [tab, setTab]       = useState<SheetKey>("listings");
  const [rows, setRows]     = useState<Row[]>([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal]   = useState<{ mode: "add" | "edit"; rowIndex?: number; values: Row } | null>(null);
  const [formValues, setFormValues] = useState<Row>([]);

  useEffect(() => {
    const t = sessionStorage.getItem("admin_token");
    if (!t) { router.replace("/admin"); return; }
    setToken(t);
  }, [router]);

  const load = useCallback(async (t: string, key: SheetKey) => {
    setLoading(true);
    try {
      const data = await api(t).get(SHEETS[key].name);
      setRows(data.rows ?? []);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (token) load(token, tab);
  }, [token, tab, load]);

  const logout = () => {
    sessionStorage.removeItem("admin_token");
    router.push("/admin");
  };

  const openAdd = () => {
    const blank = HEADERS[tab].map(() => "");
    blank[0] = String((rows.length > 1 ? rows.length : 1));
    blank[1] = new Date().toLocaleDateString("ko-KR");
    setFormValues(blank);
    setModal({ mode: "add", values: blank });
  };

  const openEdit = (rowIndex: number) => {
    const values = [...(rows[rowIndex] ?? [])];
    while (values.length < HEADERS[tab].length) values.push("");
    setFormValues(values);
    setModal({ mode: "edit", rowIndex: rowIndex + 1, values });
  };

  const handleDelete = async (rowIndex: number) => {
    if (!confirm("이 항목을 삭제하시겠습니까?")) return;
    await api(token).del(SHEETS[tab].name, rowIndex + 1);
    load(token, tab);
  };

  const handleSave = async () => {
    if (modal?.mode === "add") {
      await api(token).post(SHEETS[tab].name, formValues);
    } else if (modal?.mode === "edit" && modal.rowIndex !== undefined) {
      await api(token).put(SHEETS[tab].name, modal.rowIndex, formValues);
    }
    setModal(null);
    load(token, tab);
  };

  const canEdit = true;
  const dataRows = rows.slice(1); // skip header row

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 상단 바 */}
      <div className="bg-navy text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <span className="font-bold text-lg">KEMR 관리자</span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={`https://docs.google.com/spreadsheets/d/${process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_ID ?? "1xpEKUR55IO4w4Y3b_HmO6h7nFTIqXEpZdbABCFNw8LY"}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3 py-1.5 bg-green-600 hover:bg-green-500 rounded text-white font-medium"
          >
            구글 스프레드시트 열기
          </a>
          <button onClick={logout} className="text-xs px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded text-white">
            로그아웃
          </button>
        </div>
      </div>

      {/* 탭 */}
      <div className="bg-white border-b border-gray-200 px-6">
        <div className="flex gap-0">
          {(Object.keys(SHEETS) as SheetKey[]).map(key => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`px-5 py-3.5 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                tab === key
                  ? "border-gold text-gold"
                  : "border-transparent text-gray-500 hover:text-navy"
              }`}
            >
              {SHEETS[key].label}
              {rows.length > 1 && tab === key && (
                <span className="ml-1.5 bg-navy text-white text-xs px-1.5 py-0.5 rounded-full">
                  {dataRows.length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 콘텐츠 */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* 액션 바 */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-navy">{SHEETS[tab].label}</h2>
          <div className="flex gap-2">
            <button
              onClick={() => load(token, tab)}
              className="px-4 py-2 text-sm border border-gray-200 rounded hover:bg-gray-50 text-gray-600 flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              새로고침
            </button>
            {canEdit && (
              <button
                onClick={openAdd}
                className="px-4 py-2 text-sm bg-gold hover:bg-gold-light text-white rounded font-semibold flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                등록
              </button>
            )}
          </div>
        </div>

        {/* 테이블 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-x-auto">
          {loading ? (
            <div className="py-20 text-center text-gray-400">
              <svg className="w-8 h-8 animate-spin mx-auto mb-3" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              데이터를 불러오는 중...
            </div>
          ) : dataRows.length === 0 ? (
            <div className="py-20 text-center text-gray-400 text-sm">등록된 데이터가 없습니다.</div>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  {HEADERS[tab].map(h => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-500 whitespace-nowrap">{h}</th>
                  ))}
                  {canEdit && <th className="px-4 py-3 text-center text-xs font-semibold text-gray-500 w-24">관리</th>}
                </tr>
              </thead>
              <tbody>
                {dataRows.map((row, ri) => (
                  <tr key={ri} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    {HEADERS[tab].map((_, ci) => (
                      <td key={ci} className="px-4 py-3 text-gray-700 max-w-[200px] truncate whitespace-nowrap">
                        {row[ci] ?? ""}
                      </td>
                    ))}
                    {canEdit && (
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-center gap-1">
                          <button
                            onClick={() => openEdit(ri + 1)}
                            className="px-2.5 py-1 text-xs bg-blue-50 text-blue-600 hover:bg-blue-100 rounded font-medium"
                          >
                            수정
                          </button>
                          <button
                            onClick={() => handleDelete(ri + 1)}
                            className="px-2.5 py-1 text-xs bg-red-50 text-red-500 hover:bg-red-100 rounded font-medium"
                          >
                            삭제
                          </button>
                        </div>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* 등록/수정 모달 */}
      {modal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-bold text-navy text-lg">
                {modal.mode === "add" ? "신규 등록" : "수정"}
              </h3>
              <button onClick={() => setModal(null)} className="text-gray-400 hover:text-gray-600 p-1">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-6 py-4 space-y-4">
              {HEADERS[tab].map((header, i) => (
                <div key={i}>
                  <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">
                    {header}
                  </label>
                  {header === "내용" ? (
                    <textarea
                      rows={4}
                      value={formValues[i] ?? ""}
                      onChange={e => {
                        const v = [...formValues];
                        v[i] = e.target.value;
                        setFormValues(v);
                      }}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold resize-none"
                    />
                  ) : (
                    <input
                      type="text"
                      value={formValues[i] ?? ""}
                      onChange={e => {
                        const v = [...formValues];
                        v[i] = e.target.value;
                        setFormValues(v);
                      }}
                      disabled={header === "번호" || header === "등록일"}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold disabled:bg-gray-50 disabled:text-gray-400"
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="px-6 py-4 border-t border-gray-100 flex gap-3 justify-end">
              <button
                onClick={() => setModal(null)}
                className="px-5 py-2 text-sm border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50"
              >
                취소
              </button>
              <button
                onClick={handleSave}
                className="px-5 py-2 text-sm bg-navy hover:bg-navy-mid text-white rounded-lg font-semibold"
              >
                저장
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
