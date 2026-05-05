import Link from "next/link";
import PageHeader from "../../components/PageHeader";

export const metadata = { title: "공제조합 | 전기창업경영연구원" };

export default function CooperativePage() {
  return (
    <>
      <PageHeader
        title="공제조합"
        subtitle="전기공사공제조합 가입 안내"
        breadcrumbs={[{ label: "신규창업" }, { label: "공제조합" }]}
      />
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-14">
        <section>
          <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-gold rounded-full" />전기공사공제조합이란?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            전기공사공제조합은 전기공사업체의 상호부조와 건전한 발전을 위해 설립된 법정 공제기관입니다.
            조합원이 되면 다양한 공제 및 금융 서비스를 이용할 수 있으며, 공사 수주를 위한 각종 보증서 발급이 가능합니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-gold rounded-full" />가입 혜택
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: "📋", title: "보증서 발급", desc: "입찰보증, 계약보증, 하자보증 등 각종 보증서 발급" },
              { icon: "💳", title: "대출 서비스", desc: "저리 대출 및 공사비 선급금 대출 서비스 제공" },
              { icon: "🏥", title: "공제 서비스", desc: "안전사고 및 각종 배상 책임에 대한 공제 서비스" },
              { icon: "📚", title: "교육 지원", desc: "기술 교육, 안전 교육 등 조합원 교육 프로그램" },
              { icon: "🤝", title: "정보 제공", desc: "공사업 관련 최신 정보 및 정책 자료 제공" },
              { icon: "🏆", title: "포상 제도", desc: "우수 조합원에 대한 다양한 포상 및 혜택 제공" },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-5">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-navy text-sm mb-1">{item.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-gold rounded-full" />가입 절차
          </h2>
          <div className="overflow-x-auto">
            <table className="data-table">
              <tbody>
                {[
                  ["가입 자격", "전기공사업 등록을 완료한 사업자"],
                  ["출자금", "조합 규정에 따른 출자금 납부"],
                  ["소요 기간", "서류 접수 후 약 5~7 영업일"],
                  ["취급 기관", "전기공사공제조합 본·지부"],
                ].map(([label, value], i) => (
                  <tr key={i}>
                    <th className="bg-navy/5 text-navy font-semibold w-40">{label}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="bg-navy rounded-2xl p-8 text-center text-white">
          <h3 className="text-xl font-bold mb-2">공제조합 가입 도움이 필요하신가요?</h3>
          <p className="text-white/70 mb-5">가입부터 보증서 발급까지 전과정을 지원합니다</p>
          <Link href="/consult" className="btn-gold inline-block">무료 상담신청</Link>
        </div>
      </div>
    </>
  );
}
