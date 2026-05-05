import Link from "next/link";
import PageHeader from "../../components/PageHeader";

export const metadata = { title: "분할안내 | 전기창업경영연구원" };

export default function SplitPage() {
  return (
    <>
      <PageHeader
        title="분할안내"
        subtitle="전기공사업 기업 분할 절차 안내"
        breadcrumbs={[{ label: "분할·합병" }, { label: "분할안내" }]}
      />
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-14">
        <section>
          <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-gold rounded-full" />기업 분할의 종류
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: "단순 분할", desc: "기존 회사에서 일부 사업부문을 독립시켜 신설 법인을 설립하는 방식. 기존 회사는 분할 후에도 존속합니다." },
              { title: "물적 분할", desc: "사업부문을 자회사로 분리하는 방식. 분할 후 지배구조를 유지하면서 독립 운영이 가능합니다." },
              { title: "분할합병", desc: "분할과 동시에 다른 회사와 합병하는 방식. 사업 재편과 통합을 동시에 진행할 수 있습니다." },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-navy text-lg mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-gold rounded-full" />분할 절차 (단순 분할 기준)
          </h2>
          <div className="space-y-0 relative">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gold/20 z-0" />
            {[
              { step: "01", title: "분할 계획 수립", desc: "분할 대상 사업부문 확정, 분할 방식 결정, 재산 목록 작성" },
              { step: "02", title: "이사회 승인", desc: "분할 계획서 작성 및 이사회 결의" },
              { step: "03", title: "주주총회 특별결의", desc: "주주총회 소집 공고 (2주 전) → 특별결의 (출석 주주 의결권 2/3 이상)" },
              { step: "04", title: "채권자 보호절차", desc: "분할 공고 및 채권자 이의 신청 기간 (1개월 이상)" },
              { step: "05", title: "신설법인 설립등기", desc: "관할 법원에 신설 법인 설립 등기 신청" },
              { step: "06", title: "전기공사업 면허 처리", desc: "분할 후 전기공사업 면허 이전 또는 신규 등록 처리" },
              { step: "07", title: "사후 관리", desc: "사업자등록 변경, 계좌 개설, 각종 인허가 이전" },
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

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h3 className="font-bold text-navy mb-2">⚠️ 중요 유의사항</h3>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li>• 분할 과정에서 전기공사업 면허의 연속성 유지에 특별한 주의가 필요합니다</li>
            <li>• 기술인력 배치 변경 시 관할 기관에 즉시 신고해야 합니다</li>
            <li>• 분할 전 세무·법률 전문가와의 충분한 협의가 필요합니다</li>
          </ul>
        </div>

        <div className="bg-navy rounded-2xl p-8 text-center text-white">
          <h3 className="text-xl font-bold mb-2">기업 분할 전문 상담</h3>
          <p className="text-white/70 mb-5">복잡한 분할 절차를 전문가가 처음부터 끝까지 대행합니다</p>
          <Link href="/consult" className="btn-gold inline-block">무료 상담신청</Link>
        </div>
      </div>
    </>
  );
}
