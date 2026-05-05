import PageHeader from "../../components/PageHeader";

export const metadata = { title: "공지사항 | 전기창업경영연구원" };

const notices = [
  { id: 14, category: "공지", title: "2024년 하반기 전기공사업 등록 요건 변경 안내", date: "2024.11.01", views: 342, important: true },
  { id: 13, category: "공지", title: "추석 연휴 업무 중단 안내 (9/14~9/18)", date: "2024.09.10", views: 218, important: true },
  { id: 12, category: "소식", title: "전기공사업법 시행령 개정 내용 정리", date: "2024.08.20", views: 567 },
  { id: 11, category: "소식", title: "2024년 전기공사업 면허 갱신 의무 대상자 안내", date: "2024.07.15", views: 489 },
  { id: 10, category: "공지", title: "홈페이지 리뉴얼 오픈 안내", date: "2024.06.01", views: 312, important: true },
  { id: 9, category: "소식", title: "전기공사공제조합 출자금 변경 안내", date: "2024.05.20", views: 201 },
  { id: 8, category: "소식", title: "전기기술인 자격 취득 지원 제도 변경 사항", date: "2024.04.10", views: 278 },
  { id: 7, category: "소식", title: "2024년 전기공사업 등록 통계 분석 자료", date: "2024.03.05", views: 334 },
  { id: 6, category: "공지", title: "설 연휴 업무 중단 안내 (2/9~2/12)", date: "2024.02.02", views: 156 },
  { id: 5, category: "소식", title: "전기공사업 양도양수 시 유의사항 업데이트", date: "2024.01.15", views: 445 },
];

export default function NoticePage() {
  return (
    <>
      <PageHeader
        title="공지사항"
        subtitle="전기창업경영연구원의 최신 소식과 공지사항을 확인하세요"
        breadcrumbs={[{ label: "Q&A" }, { label: "공지사항" }]}
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80&auto=format&fit=crop"
      />
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200">
          <table className="data-table">
            <thead>
              <tr>
                <th className="w-16 text-center">번호</th>
                <th className="w-20 text-center">분류</th>
                <th>제목</th>
                <th className="w-32 text-center">등록일</th>
                <th className="w-20 text-center">조회</th>
              </tr>
            </thead>
            <tbody>
              {notices.map((item) => (
                <tr key={item.id} className={item.important ? "bg-amber-50/50" : ""}>
                  <td className="text-center text-gray-400 text-sm">{item.important ? "📌" : item.id}</td>
                  <td className="text-center">
                    <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                      item.category === "공지" ? "bg-navy text-white" : "bg-gray-100 text-gray-600"
                    }`}>
                      {item.category}
                    </span>
                  </td>
                  <td>
                    <button className="text-left hover:text-gold transition-colors font-medium text-sm">
                      {item.title}
                    </button>
                  </td>
                  <td className="text-center text-gray-400 text-sm">{item.date}</td>
                  <td className="text-center text-gray-400 text-sm">{item.views}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-1 mt-8">
          {[1, 2, 3, 4, 5].map((p) => (
            <button
              key={p}
              className={`w-9 h-9 rounded text-sm font-medium transition-colors ${
                p === 1 ? "bg-navy text-white" : "bg-white border border-gray-200 text-gray-600 hover:border-gold hover:text-gold"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
