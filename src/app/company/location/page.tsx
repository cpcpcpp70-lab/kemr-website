import PageHeader from "../../components/PageHeader";
import LocationNavButtons from "../../components/LocationNavButtons";

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

        {/* 약도 SVG */}
        <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-4">
          <div className="bg-gray-50 px-5 py-3 border-b border-gray-100 flex items-center justify-between flex-wrap gap-3">
            <span className="text-sm font-semibold text-navy">약도 — 강남파이낸스센터 (GFC)</span>
            <LocationNavButtons />
          </div>

          <svg
            viewBox="0 0 760 420"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            style={{ fontFamily: "Malgun Gothic, Apple SD Gothic Neo, sans-serif" }}
          >
            {/* 배경 */}
            <rect width="760" height="420" fill="#f1f5f9" />

            {/* 배경 블록들 */}
            <rect x="0"   y="0"   width="70"  height="185" fill="#e2e8f0" rx="2"/>
            <rect x="80"  y="0"   width="80"  height="185" fill="#e8eef5" rx="2"/>
            <rect x="170" y="20"  width="70"  height="165" fill="#e2e8f0" rx="2"/>
            <rect x="250" y="0"   width="90"  height="185" fill="#eef2f7" rx="2"/>
            <rect x="350" y="20"  width="80"  height="165" fill="#e2e8f0" rx="2"/>
            <rect x="440" y="0"   width="60"  height="185" fill="#eef2f7" rx="2"/>
            <rect x="700" y="0"   width="60"  height="185" fill="#e2e8f0" rx="2"/>

            <rect x="0"   y="245" width="70"  height="175" fill="#e8eef5" rx="2"/>
            <rect x="80"  y="245" width="80"  height="175" fill="#e2e8f0" rx="2"/>
            <rect x="170" y="265" width="70"  height="155" fill="#eef2f7" rx="2"/>
            <rect x="250" y="245" width="90"  height="175" fill="#e2e8f0" rx="2"/>
            <rect x="350" y="245" width="80"  height="175" fill="#eef2f7" rx="2"/>
            <rect x="440" y="245" width="60"  height="175" fill="#e2e8f0" rx="2"/>
            <rect x="700" y="245" width="60"  height="175" fill="#eef2f7" rx="2"/>

            {/* 강남대로 (좌측 세로 도로) */}
            <rect x="58" y="0" width="32" height="420" fill="#cbd5e1" />
            <line x1="74" y1="0" x2="74" y2="420" stroke="#b0bec5" strokeWidth="1" strokeDasharray="12 6" />
            <text transform="rotate(-90,74,210)" x="74" y="210" textAnchor="middle" fontSize="11" fill="#64748b" fontWeight="bold">강남대로</text>

            {/* 역삼로 (우측 세로 도로) — GFC 오른쪽 */}
            <rect x="660" y="0" width="30" height="420" fill="#d1dce8" />
            <line x1="675" y1="0" x2="675" y2="420" stroke="#b0bec5" strokeWidth="1" strokeDasharray="12 6" />
            <text transform="rotate(-90,675,210)" x="675" y="210" textAnchor="middle" fontSize="11" fill="#64748b" fontWeight="bold">역삼로</text>

            {/* 테헤란로 */}
            <rect x="0" y="187" width="760" height="46" fill="#cbd5e1" />
            <line x1="0" y1="210" x2="760" y2="210" stroke="#b0bec5" strokeWidth="1.5" strokeDasharray="16 8" />
            <text x="300" y="179" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#475569">테헤란로</text>

            {/* 도보 경로 — 강남역 → GFC (파란 점선) */}
            <line x1="90" y1="210" x2="530" y2="210" stroke="#3b82f6" strokeWidth="2.5" strokeDasharray="10 5" />
            <text x="300" y="200" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#3b82f6">← 도보 5분</text>

            {/* 강남역 마커 */}
            <circle cx="74" cy="210" r="22" fill="#009944" stroke="white" strokeWidth="3" />
            <circle cx="74" cy="210" r="14" fill="#00b84c" />
            <text x="74" y="215" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">2</text>
            <rect x="36" y="238" width="76" height="36" rx="4" fill="white" opacity="0.92" />
            <text x="74" y="253" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#009944">강남역</text>
            <text x="74" y="268" textAnchor="middle" fontSize="9" fill="#64748b">2-1번 출구</text>

            {/* GFC 건물 — 역삼역 바로 왼쪽 */}
            <rect x="530" y="75" width="85" height="112" fill="#0a1628" rx="3" />
            {[0,1,2,3,4,5,6,7].map(row =>
              [0,1,2].map(col => (
                <rect
                  key={`w-${row}-${col}`}
                  x={539 + col * 23}
                  y={83 + row * 13}
                  width="15"
                  height="9"
                  fill="#c9a84c"
                  opacity={[0.8,0.2,0.8,0.5,0.8,0.2,0.8,0.5][row]}
                  rx="1"
                />
              ))
            )}

            {/* GFC 위치 핀 */}
            <ellipse cx="572" cy="68" rx="6" ry="3" fill="rgba(201,168,76,0.35)" />
            <path d="M572,34 C563,34 556,41 556,50 C556,62 572,72 572,72 C572,72 588,62 588,50 C588,41 581,34 572,34 Z" fill="#c9a84c" />
            <circle cx="572" cy="50" r="7" fill="white" />

            {/* GFC 라벨 (도로 위) */}
            <rect x="508" y="193" width="130" height="40" rx="4" fill="#0a1628" />
            <text x="573" y="208" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#c9a84c">강남파이낸스센터</text>
            <text x="573" y="225" textAnchor="middle" fontSize="9" fill="white">테헤란로 152, 41층</text>

            {/* 역삼역 마커 — GFC 바로 오른쪽 */}
            <circle cx="675" cy="210" r="22" fill="#009944" stroke="white" strokeWidth="3" />
            <circle cx="675" cy="210" r="14" fill="#00b84c" />
            <text x="675" y="215" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">2</text>
            <rect x="636" y="238" width="78" height="50" rx="4" fill="white" opacity="0.92" />
            <text x="675" y="253" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#009944">역삼역</text>
            <text x="675" y="267" textAnchor="middle" fontSize="9" fill="#e11d48" fontWeight="bold">2번 출구</text>
            <text x="675" y="281" textAnchor="middle" fontSize="9" fill="#64748b">바로 앞!</text>

            {/* 역삼역 → GFC 화살표 (매우 짧음) */}
            <line x1="653" y1="210" x2="622" y2="210" stroke="#c9a84c" strokeWidth="3" />
            <polygon points="622,206 614,210 622,214" fill="#c9a84c" />

            {/* 나침반 */}
            <circle cx="725" cy="48" r="22" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
            <path d="M725,30 L720,50 L725,46 L730,50 Z" fill="#ef4444" />
            <path d="M725,66 L720,46 L725,50 L730,46 Z" fill="#94a3b8" />
            <text x="725" y="28" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#ef4444">N</text>

            {/* 범례 */}
            <rect x="10" y="348" width="210" height="65" rx="6" fill="white" opacity="0.92" stroke="#e2e8f0" strokeWidth="1" />
            <line x1="22" y1="365" x2="48" y2="365" stroke="#3b82f6" strokeWidth="2.5" strokeDasharray="6 3" />
            <text x="56" y="369" fontSize="10" fill="#475569">강남역 도보경로 (5분)</text>
            <line x1="22" y1="383" x2="48" y2="383" stroke="#c9a84c" strokeWidth="3" />
            <polygon points="48,379 56,383 48,387" fill="#c9a84c" />
            <text x="62" y="387" fontSize="10" fill="#475569">역삼역 2번 출구 (바로 앞)</text>
            <rect x="22" y="397" width="12" height="12" fill="#0a1628" rx="1" />
            <text x="40" y="407" fontSize="10" fill="#475569">강남파이낸스센터 (GFC)</text>
          </svg>
        </div>

        <p className="text-xs text-gray-400 text-center mb-12">
          ※ 실제 위치 확인 및 내비게이션은 상단의 카카오맵 / 티맵 버튼을 이용해 주세요.
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
                  2호선 강남역 <strong>2-1번 출구</strong> 도보 5분<br />
                  2호선 역삼역 2번 출구 바로 앞
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
