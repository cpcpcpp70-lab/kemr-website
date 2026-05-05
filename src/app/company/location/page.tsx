import PageHeader from "../../components/PageHeader";

export const metadata = { title: "오시는길 | 전기창업경영연구원" };

export default function LocationPage() {
  return (
    <>
      <PageHeader
        title="오시는길"
        subtitle="서울특별시 강남구 테헤란로 152, 41층"
        breadcrumbs={[{ label: "회사소개", href: "/company/intro" }, { label: "오시는길" }]}
      />

      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Map placeholder */}
        <div className="w-full h-80 bg-gray-200 rounded-2xl mb-12 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-100" />
          <div className="relative z-10 text-center">
            <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="font-bold text-navy text-lg">서울특별시 강남구 테헤란로 152</p>
            <p className="text-gray-500 text-sm">강남파이낸스센터 41층</p>
            <p className="text-xs text-gray-400 mt-2">(지도 서비스 연동 예정)</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact info */}
          <div>
            <h2 className="text-xl font-bold text-navy mb-6 flex items-center gap-3">
              <span className="w-1.5 h-5 bg-gold rounded-full" />
              연락처 정보
            </h2>
            <div className="space-y-4">
              {[
                { icon: "📍", label: "주소", value: "서울특별시 강남구 테헤란로 152, 41층 (역삼동, 강남파이낸스센터)" },
                { icon: "📞", label: "전화", value: "02-1661-1861" },
                { icon: "🕐", label: "업무시간", value: "평일 09:00~18:00 / 토요일 09:00~13:00" },
                { icon: "🚫", label: "휴무일", value: "일요일 및 법정 공휴일" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                  <span className="text-xl shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">{item.label}</p>
                    <p className="text-gray-700 text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Directions */}
          <div>
            <h2 className="text-xl font-bold text-navy mb-6 flex items-center gap-3">
              <span className="w-1.5 h-5 bg-gold rounded-full" />
              찾아오시는 방법
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-navy text-sm mb-1">🚇 지하철</h3>
                <p className="text-gray-600 text-sm">
                  2호선 역삼역 3번 출구에서 도보 5분<br />
                  2호선 강남역 11번 출구에서 도보 10분
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold text-navy text-sm mb-1">🚌 버스</h3>
                <p className="text-gray-600 text-sm">
                  간선버스: 146, 341, 360, 740번<br />
                  지선버스: 3412, 4312번<br />
                  강남파이낸스센터 앞 하차
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-bold text-navy text-sm mb-1">🚗 자동차</h3>
                <p className="text-gray-600 text-sm">
                  강남파이낸스센터 주차장 이용 가능<br />
                  테헤란로 방향 진입 후 건물 지하주차장 이용
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-navy rounded-lg text-white">
              <p className="text-gold font-bold text-sm mb-1">방문 전 예약 안내</p>
              <p className="text-white/70 text-sm">
                원활한 상담을 위해 방문 전 전화로 예약하시면 대기 없이 상담받으실 수 있습니다.
              </p>
              <a href="tel:02-1661-1861" className="mt-3 inline-block text-gold font-bold">
                📞 02-1661-1861
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
