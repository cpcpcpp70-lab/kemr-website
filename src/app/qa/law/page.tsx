import PageHeader from "../../components/PageHeader";

export const metadata = { title: "전기법령 | 전기창업경영연구원" };

const laws = [
  {
    category: "전기공사업",
    items: [
      { title: "전기공사업법", desc: "전기공사업의 등록, 운영, 폐업 등에 관한 기본법", updated: "2024.01.12" },
      { title: "전기공사업법 시행령", desc: "전기공사업법의 위임 사항 및 시행에 필요한 사항 규정", updated: "2024.01.12" },
      { title: "전기공사업법 시행규칙", desc: "등록 기준, 서류 양식, 행정 절차 등 세부 사항 규정", updated: "2024.01.12" },
    ],
  },
  {
    category: "전기안전·기술",
    items: [
      { title: "전기사업법", desc: "전기 사업의 허가, 전기설비 기술기준, 안전관리 규정", updated: "2023.12.20" },
      { title: "전기설비기술기준", desc: "전기설비의 설계·시공·검사에 관한 기술적 기준", updated: "2023.11.15" },
      { title: "산업안전보건법", desc: "전기 공사 현장의 안전·보건 관리에 관한 사항", updated: "2024.01.01" },
    ],
  },
  {
    category: "자격·인력",
    items: [
      { title: "국가기술자격법", desc: "전기기사·산업기사·기능사 등 자격증 관련 규정", updated: "2023.10.10" },
      { title: "기술사법", desc: "전기기술사 자격 및 업무 범위에 관한 사항", updated: "2023.09.20" },
    ],
  },
  {
    category: "기업·상사",
    items: [
      { title: "상법", desc: "법인설립, 합병, 분할 등 기업 관련 기본 법률", updated: "2024.01.01" },
      { title: "중소기업기본법", desc: "중소기업 지원 및 보호에 관한 기본 사항", updated: "2023.08.16" },
      { title: "건설산업기본법", desc: "전기공사업을 포함한 건설 관련 업무 기준", updated: "2024.01.12" },
    ],
  },
];

export default function LawPage() {
  return (
    <>
      <PageHeader
        title="전기법령"
        subtitle="전기공사업 관련 주요 법령 안내"
        breadcrumbs={[{ label: "Q&A" }, { label: "전기법령" }]}
      />
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-amber-50 border-l-4 border-gold rounded p-4 mb-10 text-sm text-amber-800">
          <strong>안내:</strong> 아래 법령 정보는 참고용입니다. 최신 법령은 국가법령정보센터(law.go.kr)에서 확인하시기 바랍니다.
          법령 해석 및 적용에 관한 전문 상담은 02-1661-1861로 연락주세요.
        </div>

        <div className="space-y-10">
          {laws.map((section, i) => (
            <section key={i}>
              <h2 className="text-lg font-bold text-navy mb-4 flex items-center gap-3">
                <span className="w-1.5 h-5 bg-gold rounded-full" />{section.category}
              </h2>
              <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>법령명</th>
                      <th>주요 내용</th>
                      <th className="w-32">최종개정</th>
                      <th className="w-20">바로가기</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.items.map((law, j) => (
                      <tr key={j}>
                        <td className="font-semibold text-navy">{law.title}</td>
                        <td className="text-gray-600">{law.desc}</td>
                        <td className="text-gray-400 text-xs">{law.updated}</td>
                        <td>
                          <a
                            href="https://www.law.go.kr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-3 py-1 bg-navy text-white text-xs rounded hover:bg-navy-mid transition-colors font-medium"
                          >
                            확인
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 bg-navy rounded-2xl p-8 text-center text-white">
          <h3 className="text-xl font-bold mb-2">법령 해석 및 적용 문의</h3>
          <p className="text-white/70 mb-5">복잡한 전기 법령 해석을 전문가가 명확하게 안내해 드립니다</p>
          <a href="tel:02-1661-1861" className="btn-gold inline-block">전화 상담 02-1661-1861</a>
        </div>
      </div>
    </>
  );
}
