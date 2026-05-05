import Link from "next/link";
import HeroSlideshow from "./components/HeroSlideshow";

const services = [
  {
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
    title: "공사업 양도양수",
    desc: "전기공사업 면허 양도·인수의 전 과정을 체계적으로 대행합니다. 검증된 매물과 신뢰할 수 있는 거래를 보장합니다.",
    href: "/transfer/sell-list",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    ),
    title: "신규 창업",
    desc: "전기공사업 등록부터 법인설립, 공제조합 가입까지 창업의 모든 단계를 원스톱으로 지원합니다.",
    href: "/startup/electric",
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: "기업 진단",
    desc: "전문 컨설턴트가 기업의 현황을 면밀히 분석하여 최적의 경영 전략과 개선 방안을 제시합니다.",
    href: "/startup/diagnosis",
    color: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
    title: "분할·합병",
    desc: "기업 분할 및 합병의 복잡한 법적·행정적 절차를 전문가가 직접 처리하여 안전하게 진행합니다.",
    href: "/division/overview",
    color: "bg-amber-50",
    iconColor: "text-amber-600",
  },
];

const stats = [
  { number: "20+", label: "년 전문 경력" },
  { number: "3,000+", label: "성공 사례" },
  { number: "98%", label: "고객 만족도" },
  { number: "1위", label: "강남 전기공사업 전문" },
];

const processes = [
  { step: "01", title: "무료 상담", desc: "전화 또는 방문 상담으로 현황 파악" },
  { step: "02", title: "진단 분석", desc: "전문가 맞춤 분석 및 전략 수립" },
  { step: "03", title: "계약 체결", desc: "투명한 계약 및 업무 착수" },
  { step: "04", title: "업무 처리", desc: "신속·정확한 행정 업무 대행" },
  { step: "05", title: "완료 보고", desc: "처리 결과 보고 및 사후 관리" },
];

export default function Home() {
  return (
    <>
      <HeroSlideshow />

      {/* Stats bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {stats.map((stat, i) => (
              <div key={i} className="py-8 px-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-gold text-sm font-semibold tracking-widest uppercase mb-3">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              전문 서비스 분야
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              전기창업경영연구원은 전기공사업 관련 모든 업무를 원스톱으로
              해결합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <Link
                key={i}
                href={svc.href}
                className={`group rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${svc.color} p-8`}
              >
                <div className={`${svc.iconColor} mb-5`}>{svc.icon}</div>
                <h3 className="text-gray-900 font-bold text-xl mb-3">
                  {svc.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {svc.desc}
                </p>
                <div className="mt-6 flex items-center gap-1.5 text-gold text-sm font-medium">
                  자세히 보기
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About + Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* About text */}
            <div>
              <span className="inline-block text-gold text-sm font-semibold tracking-widest uppercase mb-3">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                20년 경력의 전기공사업
                <br />
                전문 컨설팅 기관
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                전기창업경영연구원은 2004년 설립 이래 전기공사업 분야에서 가장
                신뢰받는 전문 컨설팅 기관으로 성장했습니다. 서울 강남구
                테헤란로에 위치하여 전국의 기업들에게 최고 수준의 서비스를
                제공합니다.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                풍부한 현장 경험과 법률·행정 전문 지식을 바탕으로 고객 맞춤형
                솔루션을 제공하며, 투명하고 신속한 업무 처리로 고객의 소중한
                시간과 비용을 절감합니다.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "전기공사업 양도양수",
                  "신규창업 원스톱 서비스",
                  "법인설립 및 기업진단",
                  "분할·합병 전문 처리",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                      <svg
                        className="w-3 h-3 text-gold"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
              <Link
                href="/company/intro"
                className="inline-flex items-center gap-2 px-8 py-3 bg-navy text-white font-semibold rounded hover:bg-navy-mid transition-colors"
              >
                회사 소개 보기
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Process */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-navy mb-6">업무 진행 절차</h3>
              <div className="space-y-0">
                {processes.map((p, i) => (
                  <div key={i} className="flex gap-5 relative">
                    {i < processes.length - 1 && (
                      <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-gold/20" />
                    )}
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-gold font-bold text-xs shrink-0">
                        {p.step}
                      </div>
                    </div>
                    <div className="pb-8">
                      <h4 className="font-bold text-navy text-base">{p.title}</h4>
                      <p className="text-gray-500 text-sm mt-0.5">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sell listings preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="inline-block text-gold text-sm font-semibold tracking-widest uppercase mb-3">
                Recent Listings
              </span>
              <h2 className="text-3xl font-bold text-navy">최신 양도/매도 매물</h2>
            </div>
            <Link
              href="/transfer/sell-list"
              className="hidden sm:flex items-center gap-1.5 text-gold font-medium text-sm hover:text-gold-dark transition-colors"
            >
              전체 보기
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { no: "2024-089", area: "서울 강남구", type: "일반전기공사업", capital: "1억원", price: "협의", date: "2024.11.01" },
              { no: "2024-085", area: "경기 성남시", type: "일반전기공사업", capital: "1억원", price: "협의", date: "2024.10.28" },
              { no: "2024-081", area: "서울 송파구", type: "전문전기공사업", capital: "3천만원", price: "협의", date: "2024.10.25" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md hover:border-gold/30 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded font-medium">
                    매물번호 {item.no}
                  </span>
                  <span className="text-gray-400 text-xs">{item.date}</span>
                </div>
                <h4 className="font-bold text-navy text-lg mb-3">{item.type}</h4>
                <div className="space-y-1.5 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span className="text-gray-400">소재지</span>
                    <span className="font-medium">{item.area}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">자본금</span>
                    <span className="font-medium">{item.capital}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">양도가</span>
                    <span className="font-bold text-gold">{item.price}</span>
                  </div>
                </div>
                <Link
                  href="/transfer/sell-list"
                  className="mt-5 block text-center py-2.5 border border-navy text-navy text-sm font-semibold rounded hover:bg-navy hover:text-white transition-colors"
                >
                  상담 문의
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1920&q=80&auto=format&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">
              Free Consultation
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            지금 바로 무료 상담을 받아보세요
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            전기창업경영연구원의 전문가가 귀사의 상황에 맞는 최적의 방법을
            안내해 드립니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:02-1661-1861"
              className="flex items-center justify-center gap-2 px-10 py-4 bg-gold hover:bg-gold-light text-white font-bold text-lg rounded transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              02-1661-1861
            </a>
            <Link
              href="/consult"
              className="flex items-center justify-center gap-2 px-10 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-lg rounded transition-colors"
            >
              온라인 상담신청
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
