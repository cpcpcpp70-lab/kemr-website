import Link from "next/link";
import PageHeader from "../../components/PageHeader";

export const metadata = { title: "기업진단 | 전기창업경영연구원" };

export default function DiagnosisPage() {
  return (
    <>
      <PageHeader
        title="기업진단"
        subtitle="전문 컨설턴트의 심층 기업 분석 서비스"
        breadcrumbs={[{ label: "신규창업" }, { label: "기업진단" }]}
        backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80&auto=format&fit=crop"
      />
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-14">
        <section>
          <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-gold rounded-full" />기업진단 서비스 개요
          </h2>
          <p className="text-gray-600 leading-relaxed">
            전기창업경영연구원의 기업진단 서비스는 전기공사업 기업의 현재 상태를 면밀히 분석하여
            경영 효율화, 리스크 관리, 성장 전략 수립에 필요한 맞춤형 솔루션을 제공합니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-gold rounded-full" />진단 서비스 항목
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { title: "면허·등록 요건 진단", items: ["자본금 충족 여부", "기술자 보유 현황", "장비·시설 요건 검토", "갱신 기한 관리"] },
              { title: "재무 현황 진단", items: ["재무제표 분석", "수익성 분석", "부채·자본 구조 개선", "세금 최적화 방안"] },
              { title: "인력 구조 진단", items: ["기술자 현황 분석", "인력 배치 최적화", "자격증 취득 지원", "인건비 구조 분석"] },
              { title: "경영 전략 수립", items: ["시장 현황 분석", "수주 전략 수립", "성장 로드맵 제시", "리스크 관리 방안"] },
            ].map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-navy text-base mb-4 pb-3 border-b border-gray-100">{item.title}</h3>
                <ul className="space-y-2">
                  {item.items.map((s, j) => (
                    <li key={j} className="flex gap-2 text-sm text-gray-600">
                      <span className="text-gold font-bold">·</span>{s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-gold/10 border border-gold/30 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-navy mb-2">기업진단 상담 신청</h3>
          <p className="text-gray-600 mb-5">현장 방문 또는 자료 제출로 진단 서비스 신청 가능합니다</p>
          <Link href="/consult" className="btn-primary inline-block">무료 상담신청</Link>
        </div>
      </div>
    </>
  );
}
