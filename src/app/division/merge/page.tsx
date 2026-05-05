import Link from "next/link";
import PageHeader from "../../components/PageHeader";

export const metadata = { title: "합병안내 | 전기창업경영연구원" };

export default function MergePage() {
  return (
    <>
      <PageHeader
        title="합병안내"
        subtitle="전기공사업 기업 합병 절차 안내"
        breadcrumbs={[{ label: "분할·합병" }, { label: "합병안내" }]}
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80&auto=format&fit=crop"
      />
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-14">
        <section>
          <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-gold rounded-full" />합병의 종류
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "흡수합병",
                desc: "존속 회사가 소멸 회사를 흡수하는 방식입니다. 소멸 회사는 해산하고 존속 회사가 소멸 회사의 권리·의무를 포괄 승계합니다.",
                pros: ["절차가 상대적으로 간단", "기존 브랜드 유지 가능", "관리 비용 절감"],
              },
              {
                title: "신설합병",
                desc: "합병 당사자 모든 회사가 해산하고, 새로운 회사를 설립하는 방식입니다. 동등한 통합이 필요할 때 주로 사용됩니다.",
                pros: ["완전히 새로운 출발 가능", "양사 대등한 통합", "조직 문화 새롭게 형성"],
              },
            ].map((item, i) => (
              <div key={i} className="border-2 border-gray-200 rounded-xl p-6 hover:border-gold transition-colors">
                <h3 className="font-bold text-navy text-xl mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.desc}</p>
                <h4 className="font-semibold text-navy text-sm mb-2">주요 장점</h4>
                <ul className="space-y-1.5">
                  {item.pros.map((p, j) => (
                    <li key={j} className="flex gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-gold mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-gold rounded-full" />합병 절차 (흡수합병 기준)
          </h2>
          <div className="space-y-0 relative">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gold/20" />
            {[
              { step: "01", title: "합병 계획 협의", desc: "합병 당사자 간 합병 조건, 합병 비율, 일정 협의" },
              { step: "02", title: "합병 계약 체결", desc: "합병 계약서 작성 및 이사회 승인" },
              { step: "03", title: "주주총회 특별결의", desc: "양사 주주총회에서 합병 승인 결의 (출석 주주 의결권 2/3 이상)" },
              { step: "04", title: "채권자 보호절차", desc: "합병 공고 및 채권자 이의 신청 기간 운영 (1개월 이상)" },
              { step: "05", title: "합병등기", desc: "소멸 회사 해산등기 + 존속 회사 변경등기" },
              { step: "06", title: "전기공사업 면허 통합", desc: "합병 후 전기공사업 면허 변경 신고 및 처리" },
              { step: "07", title: "통합 후 관리", desc: "사업자등록, 각종 인허가 변경, 조직 통합 지원" },
            ].map((p, i) => (
              <div key={i} className="relative flex gap-5 pb-8 last:pb-0 z-10">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-gold font-bold text-xs shrink-0">
                  {p.step}
                </div>
                <div className="pt-2">
                  <h4 className="font-bold text-navy">{p.title}</h4>
                  <p className="text-gray-500 text-sm mt-1">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-gold rounded-full" />전기공사업 합병 시 주요 검토사항
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "📋", title: "면허 요건 충족", desc: "합병 후 자본금·기술자 요건이 유지되는지 사전 검토" },
              { icon: "👥", title: "기술인력 통합", desc: "양사 기술자 현황 파악 및 중복·부족 인원 조정" },
              { icon: "💰", title: "재무 실사", desc: "합병 전 양사 재무상태 철저한 실사 및 부채 파악" },
              { icon: "⚖️", title: "법적 리스크", desc: "계류 중인 소송, 분쟁, 행정처분 여부 사전 확인" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-lg">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <h4 className="font-bold text-navy text-sm mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-navy rounded-2xl p-8 text-center text-white">
          <h3 className="text-xl font-bold mb-2">기업 합병 전문 상담</h3>
          <p className="text-white/70 mb-5">합병의 모든 과정을 전문가가 안전하게 처리해 드립니다</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:02-1661-1861" className="btn-gold">전화 상담 02-1661-1861</a>
            <Link href="/consult" className="px-8 py-3 border border-white/30 text-white rounded hover:bg-white/10 transition-colors font-semibold">온라인 상담신청</Link>
          </div>
        </div>
      </div>
    </>
  );
}
