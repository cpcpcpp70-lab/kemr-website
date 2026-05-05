"use client";

import { useState } from "react";
import PageHeader from "../components/PageHeader";

export default function ConsultPage() {
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);

  return (
    <>
      <PageHeader
        title="무료 상담신청"
        subtitle="전문 컨설턴트와 1:1 맞춤 상담을 받아보세요"
        breadcrumbs={[{ label: "무료 상담신청" }]}
      />

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Contact options */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          {[
            {
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              ),
              title: "전화 상담",
              value: "02-1661-1861",
              sub: "평일 09:00~18:00 / 토요일 09:00~13:00",
              action: { label: "전화 걸기", href: "tel:02-1661-1861" },
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              title: "방문 상담",
              value: "강남구 테헤란로 152",
              sub: "강남파이낸스센터 41층",
              action: { label: "오시는길 보기", href: "/company/location" },
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              ),
              title: "온라인 상담",
              value: "24시간 접수",
              sub: "영업일 1일 이내 답변",
              action: null,
            },
          ].map((c, i) => (
            <div key={i} className="bg-white border-2 border-gray-100 rounded-xl p-6 text-center hover:border-gold transition-colors">
              <div className="w-14 h-14 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-4 text-navy">
                {c.icon}
              </div>
              <h3 className="font-bold text-navy text-base mb-1">{c.title}</h3>
              <p className="text-gray-800 font-semibold text-sm mb-0.5">{c.value}</p>
              <p className="text-gray-400 text-xs mb-4">{c.sub}</p>
              {c.action && (
                <a
                  href={c.action.href}
                  className="inline-block px-5 py-2 bg-navy text-white text-xs font-semibold rounded hover:bg-navy-mid transition-colors"
                >
                  {c.action.label}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="bg-navy px-8 py-5">
            <h2 className="text-white font-bold text-xl">온라인 상담 신청서</h2>
            <p className="text-white/60 text-sm mt-1">아래 양식을 작성해 주시면 빠른 시일 내 연락드리겠습니다</p>
          </div>

          {submitted ? (
            <div className="text-center py-20 px-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-3">상담 신청이 완료되었습니다!</h3>
              <p className="text-gray-500 mb-2">담당 컨설턴트가 영업일 기준 1일 이내 연락드리겠습니다.</p>
              <p className="text-gray-400 text-sm mb-8">
                급하신 경우 <a href="tel:02-1661-1861" className="text-gold font-semibold">02-1661-1861</a>로 직접 연락주세요.
              </p>
              <button onClick={() => setSubmitted(false)} className="btn-primary">새로운 상담 신청하기</button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (agreed) setSubmitted(true);
              }}
              className="p-8 space-y-6"
            >
              {/* Personal info */}
              <div>
                <h3 className="font-bold text-navy text-base mb-4 pb-3 border-b border-gray-100">기본 정보</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label">성함 <span className="text-red-500">*</span></label>
                    <input type="text" className="form-input" placeholder="홍길동" required />
                  </div>
                  <div>
                    <label className="form-label">연락처 <span className="text-red-500">*</span></label>
                    <input type="tel" className="form-input" placeholder="010-0000-0000" required />
                  </div>
                  <div>
                    <label className="form-label">이메일</label>
                    <input type="email" className="form-input" placeholder="example@email.com" />
                  </div>
                  <div>
                    <label className="form-label">회사명 (있는 경우)</label>
                    <input type="text" className="form-input" placeholder="주식회사 ○○전기" />
                  </div>
                </div>
              </div>

              {/* Consult info */}
              <div>
                <h3 className="font-bold text-navy text-base mb-4 pb-3 border-b border-gray-100">상담 내용</h3>
                <div className="space-y-5">
                  <div>
                    <label className="form-label">상담 분야 <span className="text-red-500">*</span></label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {[
                        "전기공사업 양도양수",
                        "신규창업 / 전기공사업등록",
                        "법인설립",
                        "기업진단",
                        "분할·합병",
                        "기타 문의",
                      ].map((opt, i) => (
                        <label key={i} className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-gold transition-colors text-sm">
                          <input type="radio" name="category" value={opt} className="accent-gold" required />
                          {opt}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="form-label">상담 내용 <span className="text-red-500">*</span></label>
                    <textarea
                      className="form-input h-40 resize-none"
                      placeholder="상담 내용을 자세히 작성해 주시면 더 정확하고 빠른 답변이 가능합니다.&#10;&#10;예) 서울 강남구 소재 일반전기공사업 면허를 양도하고 싶습니다. 현재 자본금 1억원, 전기기사 1명 보유 중입니다."
                      required
                    />
                  </div>

                  <div>
                    <label className="form-label">상담 가능 시간</label>
                    <select className="form-input">
                      <option>평일 오전 (09:00~12:00)</option>
                      <option>평일 오후 (13:00~18:00)</option>
                      <option>토요일 오전 (09:00~13:00)</option>
                      <option>무관 / 담당자 재량</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Agreement */}
              <div className="bg-gray-50 rounded-lg p-5">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-0.5 accent-gold"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    required
                  />
                  <span className="text-sm text-gray-600 leading-relaxed">
                    <strong className="text-navy">[필수]</strong> 개인정보 수집·이용에 동의합니다. 수집된 개인정보는
                    상담 목적으로만 사용되며, 상담 완료 후 즉시 파기됩니다.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className={`w-full py-4 text-lg font-bold rounded transition-all ${
                  agreed
                    ? "bg-gold hover:bg-gold-light text-white cursor-pointer"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
                disabled={!agreed}
              >
                무료 상담 신청하기
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
