import Link from "next/link";
import PageHeader from "../../components/PageHeader";

export const metadata = { title: "법인설립 | 전기창업경영연구원" };

export default function CorporationPage() {
  return (
    <>
      <PageHeader
        title="법인설립"
        subtitle="전기공사업을 위한 최적의 법인 설립을 도와드립니다"
        breadcrumbs={[{ label: "신규창업" }, { label: "법인설립" }]}
        backgroundImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80&auto=format&fit=crop"
      />
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-14">
        <section>
          <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-gold rounded-full" />법인 설립의 필요성
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: "💼", title: "신뢰도 향상", desc: "발주처 및 거래처의 신뢰도가 높아져 더 많은 공사 수주 기회 확보" },
              { icon: "💰", title: "세금 절감", desc: "개인사업자 대비 법인세율 적용으로 절세 효과 극대화" },
              { icon: "🛡️", title: "책임 한정", desc: "유한책임으로 개인 자산 보호, 사업 리스크 최소화" },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-gold rounded-full" />법인 유형 비교
          </h2>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>구분</th>
                  <th>주식회사</th>
                  <th>유한회사</th>
                  <th>유한책임회사</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["최소 자본금", "100만원", "100만원", "제한 없음"],
                  ["사원 수", "1인 이상", "1~50인", "1인 이상"],
                  ["책임 범위", "유한 (출자금 한도)", "유한 (출자금 한도)", "유한 (출자금 한도)"],
                  ["외부 투자 유치", "용이", "제한적", "제한적"],
                  ["전기공사업 적합성", "◎ 매우 적합", "○ 적합", "△ 가능"],
                ].map(([label, ...vals], i) => (
                  <tr key={i}>
                    <th className="bg-navy/5 text-navy font-semibold">{label}</th>
                    {vals.map((v, j) => <td key={j}>{v}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-gold rounded-full" />설립 절차 및 기간
          </h2>
          <div className="space-y-3">
            {[
              { day: "1~2일", title: "사전 준비", desc: "상호 조회, 정관 작성, 주주 구성 확정" },
              { day: "3~5일", title: "공증 및 발기", desc: "정관 공증, 자본금 납입, 발기인 결의" },
              { day: "6~10일", title: "법원 등기", desc: "등기 신청 및 법인등록번호 취득" },
              { day: "11~14일", title: "사업자등록", desc: "세무서 사업자등록증 발급" },
              { day: "15일~", title: "후속 처리", desc: "법인 통장 개설, 전기공사업 등록 신청" },
            ].map((p, i) => (
              <div key={i} className="flex gap-4 p-4 border border-gray-100 rounded-lg hover:border-gold/50 transition-colors">
                <div className="bg-navy text-gold text-xs font-bold px-3 py-1 rounded h-fit whitespace-nowrap">{p.day}</div>
                <div>
                  <h4 className="font-bold text-navy text-sm mb-0.5">{p.title}</h4>
                  <p className="text-gray-500 text-sm">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-navy rounded-2xl p-8 text-center text-white">
          <h3 className="text-xl font-bold mb-2">법인설립, 전문가에게 맡기세요</h3>
          <p className="text-white/70 mb-5">복잡한 절차 없이 2주 내 법인설립 완료</p>
          <Link href="/consult" className="btn-gold inline-block">무료 상담신청</Link>
        </div>
      </div>
    </>
  );
}
