import Link from "next/link";
import PageHeader from "../../components/PageHeader";

export const metadata = { title: "전기공사업등록 | 전기창업경영연구원" };

export default function ElectricPage() {
  return (
    <>
      <PageHeader
        title="전기공사업등록"
        subtitle="전기공사업 등록의 모든 것을 안내해 드립니다"
        breadcrumbs={[{ label: "신규창업" }, { label: "전기공사업등록" }]}
      />

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">

        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-gold rounded-full" />전기공사업 등록 개요
          </h2>
          <p className="text-gray-600 leading-relaxed">
            전기공사업이란 전기공사를 업으로 하는 사업으로, 전기공사업법에 따라 시·도지사에게 등록하여야 합니다.
            전기창업경영연구원은 등록 준비부터 완료까지 원스톱으로 대행해 드립니다.
          </p>
        </section>

        {/* Requirements */}
        <section>
          <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-gold rounded-full" />등록 기준
          </h2>
          <div className="grid grid-cols-1 gap-6 max-w-lg">
            {[
              {
                title: "전기공사업",
                items: [
                  "자본금: 법인 1억 5천만원 이상 / 개인 1억 5천만원 이상",
                  "기술능력: 전기기사 또는 전기산업기사 1명 이상",
                  "사무실: 독립된 영업용 사무실",
                ],
              },
            ].map((type, i) => (
              <div key={i} className="border-2 border-gray-200 rounded-xl p-6 hover:border-gold transition-colors">
                <h3 className="font-bold text-navy text-lg mb-4 pb-3 border-b border-gray-100">{type.title}</h3>
                <ul className="space-y-3">
                  {type.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-gold mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
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

        {/* Procedure */}
        <section>
          <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-gold rounded-full" />등록 절차
          </h2>
          <div className="space-y-0 relative max-w-lg">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gold/20" />
            {[
              { step: "1", title: "요건 검토", desc: "자본금·기술자 보유 여부 확인" },
              { step: "2", title: "서류 준비", desc: "법인등록증, 기술자 서류 등 준비" },
              { step: "3", title: "등록 신청", desc: "전기공사협회 접수" },
              { step: "4", title: "서류 심사", desc: "접수 후 약 7~14일 소요" },
              { step: "5", title: "등록증 수령", desc: "전기공사업 등록증 발급 완료" },
            ].map((p, i) => (
              <div key={i} className="relative flex gap-5 pb-8 last:pb-0 z-10">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-gold font-bold text-xs shrink-0">
                  {p.step}
                </div>
                <div className="pt-2">
                  <div className="font-bold text-navy text-sm">{p.title}</div>
                  <div className="text-gray-500 text-sm mt-0.5">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-navy rounded-2xl p-8 text-center text-white">
          <h3 className="text-xl font-bold mb-2">전기공사업 등록을 도와드립니다</h3>
          <p className="text-white/70 mb-6">복잡한 서류와 절차 걱정 없이 전문가에게 맡기세요</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:02-1661-1861" className="btn-gold">전화 상담 02-1661-1861</a>
            <Link href="/consult" className="px-8 py-3 border border-white/30 text-white rounded hover:bg-white/10 transition-colors font-semibold">온라인 상담신청</Link>
          </div>
        </div>
      </div>
    </>
  );
}
