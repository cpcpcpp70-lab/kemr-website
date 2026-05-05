"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const menuItems = [
  {
    id: "company",
    label: "회사소개",
    submenu: [
      { label: "회사소개", href: "/company/intro" },
      { label: "오시는길", href: "/company/location" },
    ],
  },
  {
    id: "transfer",
    label: "공사업양도양수",
    submenu: [
      { label: "양도/매도 회사목록", href: "/transfer/sell-list" },
      { label: "양도/매도 등록", href: "/transfer/sell-register" },
      { label: "인수희망목록", href: "/transfer/buy-list" },
      { label: "인수희망등록", href: "/transfer/buy-register" },
      { label: "온라인상담", href: "/transfer/consult" },
    ],
  },
  {
    id: "startup",
    label: "신규창업",
    submenu: [
      { label: "전기공사업등록", href: "/startup/electric" },
      { label: "법인설립", href: "/startup/corporation" },
      { label: "기업진단", href: "/startup/diagnosis" },
      { label: "공제조합", href: "/startup/cooperative" },
      { label: "기술자", href: "/startup/engineer" },
    ],
  },
  {
    id: "division",
    label: "분할·합병",
    submenu: [
      { label: "분할합병 업무개요", href: "/division/overview" },
      { label: "분할안내", href: "/division/split" },
      { label: "합병안내", href: "/division/merge" },
    ],
  },
  {
    id: "qa",
    label: "Q&A",
    submenu: [
      { label: "공지사항", href: "/qa/notice" },
      { label: "온라인문의", href: "/qa/inquiry" },
      { label: "전기법령", href: "/qa/law" },
    ],
  },
];

export default function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMobileMenu(null);
  }, [pathname]);

  const isTransparent = isHome && !scrolled;
  const navBg = isTransparent ? "bg-transparent" : "bg-white shadow-md";
  const textColor = isTransparent ? "text-white" : "text-navy";
  const menuTextColor = isTransparent ? "text-white/90 hover:text-gold" : "text-gray-700 hover:text-gold";
  const barColor = isTransparent ? "bg-white" : "bg-navy";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-[90px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="KEMR 전기창업경영연구원 로고"
              width={80}
              height={55}
              style={{ objectFit: "contain" }}
            />
            <span className={`font-bold text-[26px] tracking-tight whitespace-nowrap ${textColor}`}>
              전기창업경영연구원
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-0">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => setHoveredMenu(item.id)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <button className={`flex items-center gap-1 px-5 py-2 text-[17px] font-medium transition-colors whitespace-nowrap h-[90px] ${menuTextColor}`}>
                  {item.label}
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 ${hoveredMenu === item.id ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown */}
                <div
                  className={`absolute top-full left-0 min-w-[160px] bg-white shadow-2xl border-t-2 border-gold transition-all duration-200 ${
                    hoveredMenu === item.id
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className={`block px-5 py-3 text-[15px] font-medium border-b border-gray-100 last:border-0 transition-colors whitespace-nowrap ${
                        pathname === sub.href
                          ? "text-gold bg-amber-50"
                          : "text-gray-700 hover:text-gold hover:bg-amber-50"
                      }`}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <Link
              href="/consult"
              className="ml-4 px-6 py-3 bg-gold hover:bg-gold-light text-white text-[16px] font-bold rounded transition-colors whitespace-nowrap"
            >
              무료 상담신청
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 transition-all duration-300 ${barColor} ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 transition-all duration-300 ${barColor} ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 transition-all duration-300 ${barColor} ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden border-t overflow-hidden transition-all duration-300 ${
          isTransparent ? "bg-navy/90 border-white/10" : "bg-white border-gray-100"
        } ${mobileOpen ? "max-h-screen" : "max-h-0"}`}
      >
        <div className="px-4 py-2">
          {menuItems.map((item) => (
            <div key={item.id} className={`border-b ${isTransparent ? "border-white/10" : "border-gray-100"}`}>
              <button
                className={`flex items-center justify-between w-full py-3 text-[17px] font-medium ${isTransparent ? "text-white/90" : "text-gray-700"}`}
                onClick={() =>
                  setOpenMobileMenu(
                    openMobileMenu === item.id ? null : item.id
                  )
                }
              >
                {item.label}
                <svg
                  className={`w-4 h-4 transition-transform ${openMobileMenu === item.id ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openMobileMenu === item.id && (
                <div className="pl-4 pb-2">
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className={`block py-2 hover:text-gold text-[15px] ${isTransparent ? "text-white/70" : "text-gray-500"}`}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/consult"
            className="block my-3 py-3 text-center bg-gold text-white text-[17px] font-bold rounded"
          >
            무료 상담신청
          </Link>
        </div>
      </div>
    </header>
  );
}
