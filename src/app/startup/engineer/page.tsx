import Link from "next/link";
import PageHeader from "../../components/PageHeader";

export const metadata = { title: "기술자 | 전기창업경영연구원" };

export default function EngineerPage() {
  return (
    <>
      <PageHeader
        title="기술자"
        subtitle="전기공사업 기술자 확보 및 자격증 안내"
        breadcrumbs={[{ label: "신규창업" }, { label: "기술자" }]}
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80&auto=format&fit=crop"
      />
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-14">
        <section>
          <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-gold rounded-full" />전기공사업 기술인력 요건
          </h2>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>업종</th>
                  <th>필요 자격</th>
                  <th>자격 등급</th>
                  <th>비고</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["전기공사업", "전기기사 또는 전기산업기사", "1명 이상", "상시 고용 필수"],
                  ["", "전기기능사", "2명 이상", "상시 고용 필수"],
                ].map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => <td key={j}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-gold rounded-full" />전기 분야 국가기술자격
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                grade: "기사",
                name: "전기기사",
                subject: "시험과목 4과목",
                qualify: "전문대 이상 관련 학과 또는 동등 경력",
                desc: "가장 높은 수준의 전기 자격증으로 일반전기공사업 등록 가능",
              },
              {
                grade: "산업기사",
                name: "전기산업기사",
                subject: "시험과목 3과목",
                qualify: "전문대 이상 또는 기능사 취득 후 1년",
                desc: "일반전기공사업 등록 기술인력으로 인정",
              },
              {
                grade: "기능사",
                name: "전기기능사",
                subject: "시험과목 2과목",
                qualify: "학력·경력 제한 없음",
                desc: "전문전기공사업 등록 기술인력으로 인정",
              },
            ].map((cert, i) => (
              <div key={i} className="border-2 border-gray-200 rounded-xl p-6 hover:border-gold transition-colors">
                <span className="inline-block bg-navy text-gold text-xs font-bold px-2 py-0.5 rounded mb-3">{cert.grade}</span>
                <h3 className="font-bold text-navy text-xl mb-4">{cert.name}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><span className="font-medium text-gray-700">시험 과목:</span> {cert.subject}</p>
                  <p><span className="font-medium text-gray-700">응시 자격:</span> {cert.qualify}</p>
                  <p className="text-gray-500 text-xs leading-relaxed mt-3 pt-3 border-t border-gray-100">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-gold rounded-full" />기술자 확보 지원
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              전기창업경영연구원은 전기공사업 등록에 필요한 기술자 확보를 도와드립니다.
              자격증 보유 기술자 네트워크를 통해 적합한 기술인력을 연결해 드립니다.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              {["기술자 채용 공고 지원", "자격증 보유자 DB 연결", "계약 및 4대보험 처리 안내", "기술자 교체 및 추가 지원"].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <svg className="w-4 h-4 text-gold mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="bg-navy rounded-2xl p-8 text-center text-white">
          <h3 className="text-xl font-bold mb-2">기술자 확보 및 자격증 문의</h3>
          <p className="text-white/70 mb-5">전문 컨설턴트가 맞춤형 솔루션을 제공합니다</p>
          <Link href="/consult" className="btn-gold inline-block">무료 상담신청</Link>
        </div>
      </div>
    </>
  );
}
