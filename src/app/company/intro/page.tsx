import PageHeader from "../../components/PageHeader";

export const metadata = { title: "회사소개 | 전기창업경영연구원" };

export default function CompanyIntroPage() {
  return (
    <>
      <PageHeader
        title="회사소개"
        subtitle="전기공사업 전문 컨설팅 기관"
        breadcrumbs={[{ label: "회사소개" }]}
      />

      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* CEO message */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-navy flex items-center justify-center shrink-0">
              <svg className="w-12 h-12 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <span className="text-gold text-sm font-semibold tracking-widest uppercase">CEO Message</span>
              <h2 className="text-2xl font-bold text-navy mt-2 mb-4">대표 인사말</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                안녕하십니까, 전기창업경영연구원 대표입니다.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                저희 전기창업경영연구원은 2004년 설립 이래 전기공사업 분야의 전문 컨설팅 기관으로서 수천 건의 성공적인 거래와 창업을 지원해 왔습니다.
                급변하는 비즈니스 환경 속에서 고객 여러분의 소중한 사업을 안전하게 지켜드리는 것이 저희의 사명입니다.
              </p>
              <p className="text-gray-600 leading-relaxed">
                전기공사업 양도양수, 신규창업, 법인설립, 기업진단, 분할·합병 등 모든 분야에서 풍부한 경험과 전문성을 바탕으로 최적의 솔루션을 제공하겠습니다.
                언제든지 편하게 문의해 주시기 바랍니다.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="font-bold text-navy text-lg">전기창업경영연구원 대표</p>
              </div>
            </div>
          </div>
        </section>

        {/* Company overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-navy mb-8 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-gold rounded-full inline-block" />
            회사 개요
          </h2>
          <div className="overflow-x-auto">
            <table className="data-table">
              <tbody>
                {[
                  ["회사명", "전기창업경영연구원"],
                  ["설립연도", "2004년"],
                  ["대표자", "대표 컨설턴트"],
                  ["사업분야", "전기공사업 양도양수, 신규창업, 법인설립, 기업진단, 분할·합병"],
                  ["소재지", "서울특별시 강남구 테헤란로 152, 41층"],
                  ["전화번호", "1661-1861"],
                  ["업무시간", "평일 09:00~18:00"],
                ].map(([label, value], i) => (
                  <tr key={i}>
                    <th className="bg-navy/5 text-navy font-semibold w-40 text-sm">{label}</th>
                    <td className="text-gray-700">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Services */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-navy mb-8 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-gold rounded-full inline-block" />
            주요 업무
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "전기공사업 양도양수", items: ["일반전기공사업 양도양수", "면허 가치 평가", "거래 중개 및 계약 대행"] },
              { title: "신규창업 지원", items: ["전기공사업 등록 대행", "법인 및 개인사업자 설립", "공제조합 가입 지원", "기술자 확보 지원"] },
              { title: "기업 진단 및 컨설팅", items: ["재무 현황 분석", "경영 전략 수립", "리스크 관리", "성장 전략 제안"] },
              { title: "분할·합병", items: ["기업 분할 업무 대행", "흡수합병 업무 대행", "신설합병 업무 대행", "관련 법률 자문"] },
            ].map((svc, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-navy text-lg mb-4">{svc.title}</h3>
                <ul className="space-y-2">
                  {svc.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-gold shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Why us */}
        <section>
          <h2 className="text-2xl font-bold text-navy mb-8 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-gold rounded-full inline-block" />
            전기창업경영연구원을 선택해야 하는 이유
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🏆", title: "20년+ 전문 경력", desc: "2004년 설립 이래 전기공사업 분야에서만 집중해 온 최고의 전문가 그룹" },
              { icon: "✅", title: "투명한 업무 처리", desc: "모든 진행 과정을 고객에게 투명하게 공개하고, 정직한 비용으로 서비스 제공" },
              { icon: "⚡", title: "신속한 처리", desc: "최적화된 업무 프로세스로 최단 기간 내 결과를 이끌어내는 신속성" },
            ].map((item, i) => (
              <div key={i} className="bg-navy/5 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
