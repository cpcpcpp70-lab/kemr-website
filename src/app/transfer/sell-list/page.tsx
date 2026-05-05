import Link from "next/link";
import PageHeader from "../../components/PageHeader";

export const metadata = { title: "양수/양도 회사목록 | 전기창업경영연구원" };

const listings = [
  { no: "2024-089", area: "서울", type: "전기", y21: "-", y22: "-", y23: "-", y24: "-", y25: "-", y26: "-", r3: "-", r5: "-", price: "협의", date: "2024.11.01", status: "판매중" },
  { no: "2024-088", area: "경기", type: "전기", y21: "-", y22: "-", y23: "-", y24: "-", y25: "-", y26: "-", r3: "-", r5: "-", price: "협의", date: "2024.10.30", status: "판매중" },
  { no: "2024-087", area: "서울", type: "전기", y21: "-", y22: "-", y23: "-", y24: "-", y25: "-", y26: "-", r3: "-", r5: "-", price: "협의", date: "2024.10.28", status: "판매중" },
  { no: "2024-086", area: "인천", type: "전기", y21: "-", y22: "-", y23: "-", y24: "-", y25: "-", y26: "-", r3: "-", r5: "-", price: "협의", date: "2024.10.25", status: "판매중" },
  { no: "2024-085", area: "경기", type: "전기", y21: "-", y22: "-", y23: "-", y24: "-", y25: "-", y26: "-", r3: "-", r5: "-", price: "협의", date: "2024.10.22", status: "판매중" },
  { no: "2024-084", area: "서울", type: "전기", y21: "-", y22: "-", y23: "-", y24: "-", y25: "-", y26: "-", r3: "-", r5: "-", price: "협의", date: "2024.10.20", status: "계약중" },
  { no: "2024-083", area: "경기", type: "전기", y21: "-", y22: "-", y23: "-", y24: "-", y25: "-", y26: "-", r3: "-", r5: "-", price: "협의", date: "2024.10.18", status: "판매중" },
  { no: "2024-082", area: "서울", type: "전기", y21: "-", y22: "-", y23: "-", y24: "-", y25: "-", y26: "-", r3: "-", r5: "-", price: "협의", date: "2024.10.15", status: "판매중" },
];

export default function SellListPage() {
  return (
    <>
      <PageHeader
        title="양수/양도 회사목록"
        subtitle="현재 양도 가능한 전기공사업 면허 목록입니다"
        breadcrumbs={[{ label: "공사업양도양수" }, { label: "양수/양도 회사목록" }]}
      />

      <div className="max-w-full px-6 py-12">
        <div className="bg-amber-50 border-l-4 border-gold rounded p-4 mb-8 text-sm text-amber-800">
          <strong>안내:</strong> 매물 정보는 실시간으로 업데이트됩니다. 자세한 사항은 전화(02-1661-1861) 또는{" "}
          <Link href="/transfer/consult" className="underline font-semibold">온라인 상담</Link>을 통해 문의해 주세요.
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <p className="text-gray-500 text-sm">총 <strong className="text-navy">{listings.length}건</strong>의 매물이 등록되어 있습니다.</p>
          <Link
            href="/transfer/sell-register"
            className="px-5 py-2.5 bg-navy text-white text-sm font-semibold rounded hover:bg-navy-mid transition-colors"
          >
            + 양수/양도 등록하기
          </Link>
        </div>

        <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200">
          <table style={{ tableLayout: "fixed", width: "100%", minWidth: "860px", borderCollapse: "collapse", fontSize: "13px" }}>
            <colgroup>
              <col style={{ width: "90px" }} />
              <col style={{ width: "46px" }} />
              <col style={{ width: "40px" }} />
              <col style={{ width: "44px" }} />
              <col style={{ width: "44px" }} />
              <col style={{ width: "44px" }} />
              <col style={{ width: "44px" }} />
              <col style={{ width: "44px" }} />
              <col style={{ width: "44px" }} />
              <col style={{ width: "58px" }} />
              <col style={{ width: "58px" }} />
              <col style={{ width: "60px" }} />
              <col style={{ width: "80px" }} />
              <col style={{ width: "52px" }} />
              <col style={{ width: "58px" }} />
            </colgroup>
            <thead>
              <tr style={{ backgroundColor: "#0a1628", color: "white" }}>
                {["번호","소재지","업종","2021","2022","2023","2024","2025","2026","3년실적","5년실적","양도가격","등록일","상태","문의"].map((h) => (
                  <th key={h} style={{ padding: "8px 4px", textAlign: "center", fontWeight: 600, fontSize: "12px", borderRight: "1px solid rgba(255,255,255,0.1)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {listings.map((item, idx) => (
                <tr key={item.no} style={{ backgroundColor: idx % 2 === 0 ? "#ffffff" : "#f9fafb", borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "7px 4px", textAlign: "center", fontWeight: 600, color: "#0a1628", fontSize: "12px" }}>{item.no}</td>
                  <td style={{ padding: "7px 4px", textAlign: "center" }}>{item.area}</td>
                  <td style={{ padding: "7px 4px", textAlign: "center" }}>{item.type}</td>
                  <td style={{ padding: "7px 4px", textAlign: "center", color: "#9ca3af" }}>{item.y21}</td>
                  <td style={{ padding: "7px 4px", textAlign: "center", color: "#9ca3af" }}>{item.y22}</td>
                  <td style={{ padding: "7px 4px", textAlign: "center", color: "#9ca3af" }}>{item.y23}</td>
                  <td style={{ padding: "7px 4px", textAlign: "center", color: "#9ca3af" }}>{item.y24}</td>
                  <td style={{ padding: "7px 4px", textAlign: "center", color: "#9ca3af" }}>{item.y25}</td>
                  <td style={{ padding: "7px 4px", textAlign: "center", color: "#9ca3af" }}>{item.y26}</td>
                  <td style={{ padding: "7px 4px", textAlign: "center", fontWeight: 600, color: "#0a1628" }}>{item.r3}</td>
                  <td style={{ padding: "7px 4px", textAlign: "center", fontWeight: 600, color: "#0a1628" }}>{item.r5}</td>
                  <td style={{ padding: "7px 4px", textAlign: "center", fontWeight: 700, color: "#c9a84c" }}>{item.price}</td>
                  <td style={{ padding: "7px 4px", textAlign: "center", color: "#6b7280", fontSize: "12px" }}>{item.date}</td>
                  <td style={{ padding: "7px 4px", textAlign: "center" }}>
                    <span style={{
                      display: "inline-block", padding: "2px 6px", borderRadius: "4px", fontSize: "11px", fontWeight: 600,
                      backgroundColor: item.status === "판매중" ? "#dcfce7" : "#fef9c3",
                      color: item.status === "판매중" ? "#15803d" : "#a16207"
                    }}>
                      {item.status}
                    </span>
                  </td>
                  <td style={{ padding: "7px 4px", textAlign: "center" }}>
                    <a href="tel:02-1661-1861" style={{ color: "#0a1628", fontSize: "11px", fontWeight: 600, textDecoration: "underline" }}>
                      상담문의
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 p-6 bg-navy rounded-xl text-white text-center">
          <p className="text-white/80 mb-3">원하시는 매물이 없으시면 인수희망 등록을 해보세요</p>
          <Link
            href="/transfer/buy-register"
            className="inline-block px-8 py-3 bg-gold hover:bg-gold-light text-white font-bold rounded transition-colors"
          >
            인수희망 등록하기
          </Link>
        </div>
      </div>
    </>
  );
}
