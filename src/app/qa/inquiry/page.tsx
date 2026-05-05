"use client";

import PageHeader from "../../components/PageHeader";
import { useState } from "react";

const faqs = [
  { q: "전기공사업 등록에 얼마나 걸리나요?", a: "서류 준비가 완료된 경우 신청 후 약 7~14 영업일 이내 등록증 발급이 가능합니다. 서류 준비 기간을 포함하면 통상 2~4주 소요됩니다." },
  { q: "법인이 없어도 전기공사업 등록이 가능한가요?", a: "가능합니다. 개인사업자로도 등록할 수 있으며, 일반전기공사업은 자본금 2천만원 이상, 전문전기공사업은 1천5백만원 이상이 필요합니다." },
  { q: "양도양수 시 기존 공사 실적은 이전되나요?", a: "법인의 경우 법인 자체를 양수하면 실적이 승계됩니다. 개인사업자나 면허만 이전하는 경우에는 실적이 이전되지 않습니다." },
  { q: "컨설팅 비용은 어느 정도인가요?", a: "업무 유형과 복잡도에 따라 상이합니다. 초기 상담은 무료로 진행되며, 상담 후 업무 내용과 비용을 안내해 드립니다." },
];

export default function InquiryPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <>
      <PageHeader
        title="온라인문의"
        subtitle="궁금하신 사항을 남겨주시면 빠르게 답변드리겠습니다"
        breadcrumbs={[{ label: "Q&A" }, { label: "온라인문의" }]}
        backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80&auto=format&fit=crop"
      />
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FAQ */}
          <div>
            <h2 className="text-xl font-bold text-navy mb-6 flex items-center gap-3">
              <span className="w-1.5 h-5 bg-gold rounded-full" />자주 묻는 질문
            </h2>
            <div className="space-y-3">
              {faqs.map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-medium text-navy text-sm pr-4">{item.q}</span>
                    <svg
                      className={`w-4 h-4 text-gold shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed bg-amber-50/30 border-t border-gray-100">
                      <div className="pt-3">{item.a}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h2 className="text-xl font-bold text-navy mb-6 flex items-center gap-3">
              <span className="w-1.5 h-5 bg-gold rounded-full" />문의하기
            </h2>
            {submitted ? (
              <div className="text-center py-12 bg-green-50 rounded-xl border border-green-200">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-navy text-lg mb-1">문의가 접수되었습니다</h3>
                <p className="text-gray-500 text-sm mb-5">영업일 1일 이내 답변드리겠습니다</p>
                <button onClick={() => setSubmitted(false)} className="btn-primary text-sm py-2.5 px-6">새 문의하기</button>
              </div>
            ) : (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setLoading(true);
                  setError("");
                  const fd = new FormData(e.currentTarget);
                  try {
                    const res = await fetch("/api/inquiry", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        name: fd.get("name"),
                        phone: fd.get("phone"),
                        inquiryType: fd.get("inquiryType"),
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
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
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
                  <label className="form-label">문의 유형</label>
                  <select name="inquiryType" className="form-input">
                    <option>전기공사업 등록</option>
                    <option>양도양수</option>
                    <option>법인설립</option>
                    <option>분할·합병</option>
                    <option>기타</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">문의 내용 <span className="text-red-500">*</span></label>
                  <textarea name="content" className="form-input h-36 resize-none" placeholder="궁금하신 사항을 상세히 적어주세요" required />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button type="submit" disabled={loading} className="w-full btn-gold text-base py-3.5 disabled:opacity-60">
                  {loading ? "접수 중..." : "문의 접수하기"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
