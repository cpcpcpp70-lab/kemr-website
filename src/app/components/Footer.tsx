import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/70">
      {/* Top section */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company info */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <span className="text-gold font-bold text-sm tracking-widest uppercase block mb-1">
                  KEMR
                </span>
                <h3 className="text-white font-bold text-xl">
                  전기창업경영연구원
                </h3>
              </div>
              <p className="text-sm leading-relaxed mb-4">
                전기공사업 양도양수, 신규창업, 법인설립, 기업진단, 분할·합병의
                모든 업무를 전문적으로 대행합니다. 20년 이상의 풍부한 경험으로
                최적의 솔루션을 제공합니다.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 mt-0.5 text-gold shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>서울특별시 강남구 테헤란로 152, 41층</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-gold shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a href="tel:1661-1861" className="hover:text-gold">
                    1661-1861
                  </a>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                주요 서비스
              </h4>
              <ul className="space-y-2 text-sm">
                {[
                  { label: "공사업 양도양수", href: "/transfer/sell-list" },
                  { label: "전기공사업등록", href: "/startup/electric" },
                  { label: "법인설립", href: "/startup/corporation" },
                  { label: "기업진단", href: "/startup/diagnosis" },
                  { label: "분할·합병", href: "/division/overview" },
                  { label: "무료 상담신청", href: "/consult" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-gold transition-colors flex items-center gap-1.5"
                    >
                      <span className="text-gold text-xs">›</span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                상담 안내
              </h4>
              <div className="space-y-3 text-sm">
                <div className="bg-white/5 rounded p-3">
                  <p className="text-gold font-semibold mb-1">평일</p>
                  <p>09:00 ~ 18:00</p>
                </div>
                <div className="bg-white/5 rounded p-3">
                  <p className="text-gold font-semibold mb-1">토·일요일·공휴일</p>
                  <p>휴무</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <p>
            © 2024 전기창업경영연구원. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/qa/notice" className="hover:text-white/60">
              개인정보처리방침
            </Link>
            <Link href="/qa/notice" className="hover:text-white/60">
              이용약관
            </Link>
            <Link href="/company/location" className="hover:text-white/60">
              오시는길
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
