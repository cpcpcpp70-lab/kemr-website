"use client";

import PageHeader from "../../components/PageHeader";
import { useState } from "react";

export default function SellRegisterPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <>
      <PageHeader
        title="양도/매도 등록"
        subtitle="양도하실 전기공사업 면허 정보를 등록해 주세요"
        breadcrumbs={[{ label: "공사업양도양수" }, { label: "양도/매도 등록" }]}
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80&auto=format&fit=crop"
      />

      <div className="max-w-3xl mx-auto px-6 py-12">
        {submitted ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-navy mb-2">등록이 완료되었습니다</h2>
            <p className="text-gray-500 mb-6">담당자가 확인 후 빠른 시일 내에 연락드리겠습니다.</p>
            <button onClick={() => setSubmitted(false)} className="btn-primary">추가 등록하기</button>
          </div>
        ) : (
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setLoading(true);
              setError("");
              const fd = new FormData(e.currentTarget);
              try {
                const res = await fetch("/api/listing", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    licenseType: fd.get("licenseType"),
                    location: fd.get("location"),
                    capital: fd.get("capital"),
                    name: fd.get("name"),
                    phone: fd.get("phone"),
                    technicalStaff: fd.get("technicalStaff"),
                    remarks: fd.get("remarks"),
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
            className="space-y-6"
          >
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
              등록하신 정보는 검토 후 목록에 게시됩니다. 허위 정보 등록 시 법적 책임이 있을 수 있습니다.
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 space-y-6">
              <h2 className="text-lg font-bold text-navy border-b border-gray-200 pb-4">양도 회사 정보</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="form-label">업종 <span className="text-red-500">*</span></label>
                  <select name="licenseType" className="form-input" required>
                    <option value="">선택하세요</option>
                    <option>일반전기공사업</option>
                    <option>전문전기공사업</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">소재지 (시/도) <span className="text-red-500">*</span></label>
                  <select name="location" className="form-input" required>
                    <option value="">선택하세요</option>
                    <option>서울</option>
                    <option>경기</option>
                    <option>인천</option>
                    <option>부산</option>
                    <option>대구</option>
                    <option>광주</option>
                    <option>대전</option>
                    <option>울산</option>
                    <option>기타</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">자본금 <span className="text-red-500">*</span></label>
                  <input name="capital" type="text" className="form-input" placeholder="예: 1억원" required />
                </div>
                <div>
                  <label className="form-label">보유 기술자</label>
                  <input name="technicalStaff" type="text" className="form-input" placeholder="예: 전기기사 1명" />
                </div>
              </div>
              <div>
                <label className="form-label">특이사항</label>
                <textarea name="remarks" className="form-input h-24 resize-none" placeholder="기타 특이사항이나 요청사항을 적어주세요" />
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 space-y-6">
              <h2 className="text-lg font-bold text-navy border-b border-gray-200 pb-4">연락처 정보</h2>
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
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button type="submit" disabled={loading} className="w-full btn-gold text-base py-4 disabled:opacity-60">
              {loading ? "등록 중..." : "등록 신청하기"}
            </button>
          </form>
        )}
      </div>
    </>
  );
}
