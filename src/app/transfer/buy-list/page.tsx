import Link from "next/link";
import PageHeader from "../../components/PageHeader";

export const metadata = { title: "인수희망목록 | 전기창업경영연구원" };

const buyers = [
  { no: "B2024-045", area: "서울/수도권", type: "일반전기공사업", budget: "협의", purpose: "사업 확장", date: "2024.11.01" },
  { no: "B2024-044", area: "서울 강남/서초", type: "일반전기공사업", budget: "협의", purpose: "신규 진입", date: "2024.10.30" },
  { no: "B2024-043", area: "경기 전역", type: "전문전기공사업", budget: "협의", purpose: "사업 다각화", date: "2024.10.28" },
  { no: "B2024-042", area: "인천/경기 서부", type: "일반전기공사업", budget: "협의", purpose: "신규 진입", date: "2024.10.25" },
  { no: "B2024-041", area: "서울 전역", type: "일반/전문 무관", budget: "협의", purpose: "사업 확장", date: "2024.10.22" },
];

export default function BuyListPage() {
  return (
    <>
      <PageHeader
        title="인수희망목록"
        subtitle="전기공사업 인수를 희망하는 고객 목록입니다"
        breadcrumbs={[{ label: "공사업양도양수" }, { label: "인수희망목록" }]}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded p-4 mb-8 text-sm text-blue-800">
          <strong>안내:</strong> 인수 희망자 목록입니다. 보유하신 매물과 맞는 경우 전화(02-1661-1861) 또는{" "}
          <Link href="/transfer/consult" className="underline font-semibold">온라인 상담</Link>으로 문의해 주세요.
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <p className="text-gray-500 text-sm">총 <strong className="text-navy">{buyers.length}건</strong>의 인수 희망자가 등록되어 있습니다.</p>
          <Link href="/transfer/buy-register" className="px-5 py-2.5 bg-navy text-white text-sm font-semibold rounded hover:bg-navy-mid transition-colors">
            + 인수희망 등록하기
          </Link>
        </div>

        <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200">
          <table className="data-table">
            <thead>
              <tr>
                <th>번호</th>
                <th>희망 지역</th>
                <th>희망 업종</th>
                <th>예산</th>
                <th>인수 목적</th>
                <th>등록일</th>
                <th>문의</th>
              </tr>
            </thead>
            <tbody>
              {buyers.map((item) => (
                <tr key={item.no}>
                  <td className="font-medium text-navy">{item.no}</td>
                  <td>{item.area}</td>
                  <td>{item.type}</td>
                  <td className="font-bold text-gold">{item.budget}</td>
                  <td>{item.purpose}</td>
                  <td className="text-gray-400">{item.date}</td>
                  <td>
                    <a href="tel:02-1661-1861" className="text-navy hover:text-gold text-xs font-semibold underline">
                      상담문의
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
