"use client";

import PageHeader from "../../components/PageHeader";
import { useState } from "react";

export default function BuyRegisterPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHeader
        title="인수희망등록"
        subtitle="인수하고자 하는 전기공사업 면허 조건을 등록해 주세요"
        breadcrumbs={[{ label: "공사업양도양수" }, { label: "인수희망등록" }]}
        backgroundImage="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1920&q=80&auto=format&fit=crop"
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
            <p className="text-gray-500 mb-6">적합한 매물 발생 시 즉시 연락드리겠습니다.</p>
            <button onClick={() => setSubmitted(false)} className="btn-primary">추가 등록하기</button>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-8 space-y-6">
              <h2 className="text-lg font-bold text-navy border-b border-gray-200 pb-4">인수 희망 조건</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="form-label">희망 업종 <span className="text-red-500">*</span></label>
                  <select className="form-input" required>
                    <option value="">선택하세요</option>
                    <option>일반전기공사업</option>
                    <option>전문전기공사업</option>
                    <option>무관</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">희망 지역 <span className="text-red-500">*</span></label>
                  <input type="text" className="form-input" placeholder="예: 서울 강남구" required />
                </div>
                <div>
                  <label className="form-label">인수 목적</label>
                  <select className="form-input">
                    <option value="">선택하세요</option>
                    <option>신규 진입</option>
                    <option>사업 확장</option>
                    <option>사업 다각화</option>
                    <option>투자 목적</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">예산 범위</label>
                  <input type="text" className="form-input" placeholder="예: 협의 가능" />
                </div>
              </div>
              <div>
                <label className="form-label">세부 요청사항</label>
                <textarea className="form-input h-24 resize-none" placeholder="기타 특이사항이나 요청사항을 적어주세요" />
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 space-y-5">
              <h2 className="text-lg font-bold text-navy border-b border-gray-200 pb-4">연락처 정보</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="form-label">성함 <span className="text-red-500">*</span></label>
                  <input type="text" className="form-input" required />
                </div>
                <div>
                  <label className="form-label">연락처 <span className="text-red-500">*</span></label>
                  <input type="tel" className="form-input" placeholder="010-0000-0000" required />
                </div>
              </div>
            </div>
            <button type="submit" className="w-full btn-gold text-base py-4">등록 신청하기</button>
          </form>
        )}
      </div>
    </>
  );
}
