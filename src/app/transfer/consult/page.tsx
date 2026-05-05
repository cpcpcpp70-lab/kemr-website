"use client";

import PageHeader from "../../components/PageHeader";
import { useState } from "react";

export default function TransferConsultPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <>
      <PageHeader
        title="온라인상담"
        subtitle="공사업 양도양수 관련 전문 상담을 신청하세요"
        breadcrumbs={[{ label: "공사업양도양수" }, { label: "온라인상담" }]}
        backgroundImage="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=1920&q=80&auto=format&fit=crop"
      />

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { icon: "📞", title: "전화 상담", desc: "02-1661-1861", sub: "평일 09~18시" },
            { icon: "🏢", title: "방문 상담", desc: "서울 강남구 테헤란로 152", sub: "41층 사무실" },
            { icon: "💬", title: "온라인 상담", desc: "24시간 접수", sub: "영업일 1일 내 답변" },
          ].map((c, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-5 text-center">
              <div className="text-3xl mb-2">{c.icon}</div>
              <h3 className="font-bold text-navy text-sm mb-1">{c.title}</h3>
              <p className="text-gray-700 text-sm font-medium">{c.desc}</p>
              <p className="text-gray-400 text-xs">{c.sub}</p>
            </div>
          ))}
        </div>

        {submitted ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-navy mb-2">상담 신청이 완료되었습니다</h2>
            <p className="text-gray-500 mb-6">영업일 기준 1일 이내 연락드리겠습니다.</p>
            <button onClick={() => setSubmitted(false)} className="btn-primary">새 상담 신청</button>
          </div>
        ) : (
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setLoading(true);
              setError("");
              const fd = new FormData(e.currentTarget);
              try {
                const res = await fetch("/api/consult", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    name: fd.get("name"),
                    phone: fd.get("phone"),
                    service: fd.get("consultType"),
                    content: fd.get("content"),
                  }),
                });
                if (!res.ok) {
                  const data = await res.json();
                  setError(data.error ?? "오류가 발생했습니다");
                } else {
                  setSubmitted(true);
                }
              } catch {
                setError("네트워크 오류가 발생했습니다");
              } finally {
                setLoading(false);
              }
            }}
            className="space-y-5"
          >
            <div className="bg-white border border-gray-200 rounded-xl p-8 space-y-5">
              <h2 className="text-lg font-bold text-navy border-b pb-4">상담 신청서</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="form-label">성함 <span className="text-red-500">*</span></label>
                  <input name="name" type="text" className="form-input" required />
                </div>
                <div>
                  <label className="form-label">연락처 <span className="text-red-500">*</span></label>
                  <input name="phone" type="tel" className="form-input" placeholder="010-0000-0000" required />
                </div>
              </div>
              <div>
                <label className="form-label">상담 유형</label>
                <select name="consultType" className="form-input">
                  <option>양도 (매도 희망)</option>
                  <option>인수 (매수 희망)</option>
                  <option>일반 문의</option>
                </select>
              </div>
              <div>
                <label className="form-label">상담 내용 <span className="text-red-500">*</span></label>
                <textarea name="content" className="form-input h-32 resize-none" placeholder="궁금하신 내용을 자세히 적어주세요" required />
              </div>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button type="submit" disabled={loading} className="w-full btn-gold text-base py-4 disabled:opacity-60">
              {loading ? "신청 중..." : "상담 신청하기"}
            </button>
          </form>
        )}
      </div>
    </>
  );
}
