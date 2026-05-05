import Link from "next/link";
import PageHeader from "../../components/PageHeader";

export const metadata = { title: "분할합병 업무개요 | 전기창업경영연구원" };

export default function DivisionOverviewPage() {
  return (
    <>
      <PageHeader
        title="분할합병 업무개요"
        subtitle="전기공사업 기업 분할·합병의 모든 것"
        breadcrumbs={[{ label: "분할·합병" }, { label: "분할합병 업무개요" }]}
      />
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-14">
        <section>
          <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-gold rounded-full" />분할·합병 서비스 개요
          </h2>
          <p className="text-gray-600 leading-relaxed">
            기업의 성장과 구조조정에 따라 기업 분할 또는 합병이 필요한 경우,
            전기창업경영연구원이 법적·행정적 절차를 체계적으로 대행합니다.
            전기공사업 특성에 맞는 전문적인 분할·합병 서비스를 제공합니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-gold rounded-full" />서비스 비교
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "기업 분할",
                icon: "⚡",
                color: "border-blue-300 bg-blue-50",
                items: [
                  "사업부문 독립 법인화",
                  "지역별 사업 분리 운영",
                  "상속·증여를 위한 기업 분리",
                  "신규 면허 취득 없이 사업 확장",
                ],
                link: "/division/split",
              },
              {
                title: "기업 합병",
                icon: "🔗",
                color: "border-green-300 bg-green-50",
                items: [
                  "복수 면허 통합 운영",
                  "경쟁사 또는 협력사 흡수",
                  "규모 확대를 통한 경쟁력 강화",
                  "관리 비용 절감 효과",
                ],
                link: "/division/merge",
              },
            ].map((item, i) => (
              <div key={i} className={`border-2 rounded-xl p-6 ${item.color}`}>
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-navy text-xl mb-4">{item.title}</h3>
                <ul className="space-y-2 mb-6">
                  {item.items.map((s, j) => (
                    <li key={j} className="flex gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-gold mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {s}
                    </li>
                  ))}
                </ul>
                <Link href={item.link} className="inline-flex items-center gap-1 text-navy font-semibold text-sm hover:text-gold transition-colors">
                  자세히 보기 →
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-gold rounded-full" />일반적인 처리 기간
          </h2>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead><tr><th>업무 유형</th><th>소요 기간</th><th>주요 내용</th></tr></thead>
              <tbody>
                {[
                  ["단순 분할", "약 2~3개월", "신설 법인 설립 + 사업 이전"],
                  ["물적 분할", "약 2~4개월", "자회사 설립을 통한 사업 분리"],
                  ["흡수 합병", "약 2~3개월", "존속 회사로 소멸 회사 흡수"],
                  ["신설 합병", "약 3~4개월", "새로운 법인 설립하여 통합"],
                ].map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => <td key={j}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="bg-navy rounded-2xl p-8 text-center text-white">
          <h3 className="text-xl font-bold mb-2">분할·합병 무료 상담</h3>
          <p className="text-white/70 mb-5">귀사에 최적화된 구조조정 전략을 제안해 드립니다</p>
          <Link href="/consult" className="btn-gold inline-block">무료 상담신청</Link>
        </div>
      </div>
    </>
  );
}
