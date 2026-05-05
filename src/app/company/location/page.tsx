import PageHeader from "../../components/PageHeader";

export const metadata = { title: "오시는길 | 전기창업경영연구원" };

export default function LocationPage() {
  return (
    <>
      <PageHeader
        title="오시는길"
        subtitle="서울특별시 강남구 테헤란로 152, 41층"
        breadcrumbs={[{ label: "회사소개", href: "/company/intro" }, { label: "오시는길" }]}
        backgroundImage="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80&auto=format&fit=crop"
      />

      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* 약도 SVG */}
        <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-4">
          <div className="bg-gray-50 px-5 py-3 border-b border-gray-100 flex items-center justify-between">
            <span className="text-sm font-semibold text-navy">약도 — 강남파이낸스센터 (GFC)</span>
            <div className="flex gap-2">
              <a
                href="https://map.kakao.com/link/search/강남파이낸스센터"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1.5 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold rounded transition-colors"
              >
                카카오맵
              </a>
              <a
                href="https://map.naver.com/v5/search/강남파이낸스센터"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded transition-colors"
              >
                네이버지도
              </a>
            </div>
          </div>

          <svg
            viewBox="0 0 760 420"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            style={{ fontFamily: "Malgun Gothic, Apple SD Gothic Neo, sans-serif" }}
          >
            {/* 배경 */}
            <rect width="760" height="420" fill="#f1f5f9" />

            {/* 블록 건물들 (배경 느낌) */}
            <rect x="0"   y="0"   width="60"  height="185" fill="#e2e8f0" rx="2"/>
            <rect x="70"  y="0"   width="50"  height="185" fill="#e8eef5" rx="2"/>
            <rect x="130" y="0"   width="80"  height="185" fill="#e2e8f0" rx="2"/>
            <rect x="220" y="0"   width="60"  height="185" fill="#eef2f7" rx="2"/>
            <rect x="290" y="30"  width="70"  height="155" fill="#e2e8f0" rx="2"/>
            <rect x="370" y="0"   width="90"  height="185" fill="#eef2f7" rx="2"/>
            <rect x="470" y="20"  width="60"  height="165" fill="#e2e8f0" rx="2"/>
            <rect x="540" y="0"   width="80"  height="185" fill="#e8eef5" rx="2"/>
            <rect x="630" y="30"  width="60"  height="155" fill="#e2e8f0" rx="2"/>
            <rect x="700" y="0"   width="60"  height="185" fill="#eef2f7" rx="2"/>

            <rect x="0"   y="245" width="60"  height="175" fill="#e8eef5" rx="2"/>
            <rect x="70"  y="245" width="50"  height="175" fill="#e2e8f0" rx="2"/>
            <rect x="130" y="265" width="80"  height="155" fill="#eef2f7" rx="2"/>
            <rect x="220" y="245" width="60"  height="175" fill="#e2e8f0" rx="2"/>
            <rect x="290" y="245" width="70"  height="175" fill="#eef2f7" rx="2"/>
            <rect x="370" y="245" width="90"  height="175" fill="#e2e8f0" rx="2"/>
            <rect x="470" y="245" width="60"  height="175" fill="#eef2f7" rx="2"/>
            <rect x="540" y="265" width="80"  height="155" fill="#e2e8f0" rx="2"/>
            <rect x="630" y="245" width="60"  height="175" fill="#e8eef5" rx="2"/>
            <rect x="700" y="245" width="60"  height="175" fill="#e2e8f0" rx="2"/>

            {/* 강남대로 (세로 도로, 좌측) */}
            <rect x="58" y="0" width="36" height="420" fill="#cbd5e1" />
            <line x1="76" y1="0" x2="76" y2="420" stroke="#b0bec5" strokeWidth="1" strokeDasharray="12 6" />
            <text transform="rotate(-90, 76, 210)" x="76" y="210" textAnchor="middle" fontSize="11" fill="#64748b" fontWeight="bold">강남대로</text>

            {/* 역삼로 (세로 도로, 우측) */}
            <rect x="618" y="0" width="28" height="420" fill="#d1dce8" />
            <line x1="632" y1="0" x2="632" y2="420" stroke="#b0bec5" strokeWidth="1" strokeDasharray="12 6" />
            <text transform="rotate(-90, 632, 210)" x="632" y="210" textAnchor="middle" fontSize="11" fill="#64748b" fontWeight="bold">역삼로</text>

            {/* 테헤란로 (메인 가로 도로) */}
            <rect x="0" y="187" width="760" height="46" fill="#cbd5e1" />
            <line x1="0" y1="210" x2="760" y2="210" stroke="#b0bec5" strokeWidth="1.5" strokeDasharray="16 8" />
            <text x="370" y="179" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#475569">테헤란로</text>

            {/* 도보 경로 — 강남역에서 GFC (파란 점선) */}
            <line x1="94" y1="210" x2="330" y2="210" stroke="#3b82f6" strokeWidth="3" strokeDasharray="10 5" />
            <text x="210" y="203" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#3b82f6">← 도보 10분</text>

            {/* 도보 경로 — 역삼역에서 GFC (금색 점선) */}
            <line x1="618" y1="210" x2="420" y2="210" stroke="#c9a84c" strokeWidth="3" strokeDasharray="10 5" />
            <text x="520" y="203" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#b8860b">도보 5분 →</text>

            {/* 강남역 마커 */}
            <circle cx="76" cy="210" r="22" fill="#009944" stroke="white" strokeWidth="3" />
            <circle cx="76" cy="210" r="14" fill="#00b84c" />
            <text x="76" y="215" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">2</text>
            <rect x="40" y="238" width="72" height="22" rx="4" fill="white" opacity="0.9" />
            <text x="76" y="253" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#009944">강남역</text>
            <text x="76" y="268" textAnchor="middle" fontSize="9" fill="#64748b">11번 출구</text>

            {/* 역삼역 마커 */}
            <circle cx="632" cy="210" r="22" fill="#009944" stroke="white" strokeWidth="3" />
            <circle cx="632" cy="210" r="14" fill="#00b84c" />
            <text x="632" y="215" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">2</text>
            <rect x="597" y="238" width="72" height="22" rx="4" fill="white" opacity="0.9" />
            <text x="632" y="253" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#009944">역삼역</text>
            <text x="632" y="268" textAnchor="middle" fontSize="9" fill="#64748b">3번 출구</text>

            {/* 강남파이낸스센터 건물 */}
            <rect x="340" y="80" width="80" height="107" fill="#0a1628" rx="3" />
            {/* 건물 창문 효과 */}
            {[0,1,2,3,4,5,6].map(row =>
              [0,1,2].map(col => (
                <rect
                  key={`w-${row}-${col}`}
                  x={349 + col * 22}
                  y={88 + row * 13}
                  width="14"
                  height="9"
                  fill="#c9a84c"
                  opacity={Math.random() > 0.4 ? "0.8" : "0.2"}
                  rx="1"
                />
              ))
            )}

            {/* 위치 핀 */}
            <ellipse cx="380" cy="72" rx="6" ry="3" fill="rgba(201,168,76,0.3)" />
            <path d="M380,38 C371,38 364,45 364,54 C364,66 380,76 380,76 C380,76 396,66 396,54 C396,45 389,38 380,38 Z" fill="#c9a84c" />
            <circle cx="380" cy="54" r="7" fill="white" />

            {/* GFC 라벨 */}
            <rect x="318" y="193" width="124" height="40" rx="4" fill="#0a1628" />
            <text x="380" y="208" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#c9a84c">강남파이낸스센터</text>
            <text x="380" y="225" textAnchor="middle" fontSize="9" fill="white">테헤란로 152, 41층</text>

            {/* 나침반 */}
            <circle cx="720" cy="50" r="22" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
            <path d="M720,32 L715,52 L720,48 L725,52 Z" fill="#ef4444" />
            <path d="M720,68 L715,48 L720,52 L725,48 Z" fill="#94a3b8" />
            <text x="720" y="30" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#ef4444">N</text>

            {/* 범례 */}
            <rect x="10" y="355" width="200" height="58" rx="6" fill="white" opacity="0.9" stroke="#e2e8f0" strokeWidth="1" />
            <line x1="20" y1="372" x2="45" y2="372" stroke="#3b82f6" strokeWidth="2.5" strokeDasharray="6 3" />
            <text x="52" y="376" fontSize="10" fill="#475569">강남역 도보경로</text>
            <line x1="20" y1="390" x2="45" y2="390" stroke="#c9a84c" strokeWidth="2.5" strokeDasharray="6 3" />
            <text x="52" y="394" fontSize="10" fill="#475569">역삼역 도보경로</text>
            <rect x="20" y="402" width="12" height="12" fill="#0a1628" rx="1" />
            <text x="38" y="412" fontSize="10" fill="#475569">강남파이낸스센터</text>
          </svg>
        </div>

        <p className="text-xs text-gray-400 text-center mb-12">
          ※ 실제 위치 확인은 상단의 카카오맵 / 네이버지도 버튼을 이용해 주세요.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* 연락처 */}
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

          {/* 찾아오시는 방법 */}
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

            <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <p className="text-gold font-bold text-sm mb-1">방문 전 예약 안내</p>
              <p className="text-gray-600 text-sm">
                원활한 상담을 위해 방문 전 전화로 예약하시면 대기 없이 상담받으실 수 있습니다.
              </p>
              <a href="tel:02-1661-1861" className="mt-3 inline-block text-navy font-bold">
                📞 02-1661-1861
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
