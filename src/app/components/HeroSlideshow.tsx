"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1920&q=90&auto=format&fit=crop",
    alt: "미래도시 야경",
  },
  {
    url: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1920&q=90&auto=format&fit=crop",
    alt: "미래형 빌딩",
  },
  {
    url: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=1920&q=90&auto=format&fit=crop",
    alt: "도시 야경",
  },
  {
    url: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=1920&q=90&auto=format&fit=crop",
    alt: "미래 스카이라인",
  },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning || index === current) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 1000);
    },
    [current, isTransitioning]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            opacity: current === i ? 1 : 0,
            backgroundImage: `url(${slide.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden={current !== i}
        />
      ))}

      {/* 미래도시 오버레이 — 텍스트 가독성 확보 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
        {/* Top decoration line */}
        <div className="flex items-center gap-4 mb-0">
          <div className="h-px w-16 bg-gold" />
          <span className="text-gold text-xl font-semibold tracking-[0.2em] uppercase">
            Korea Electric Management Research
          </span>
          <div className="h-px w-16 bg-gold" />
        </div>

        {/* Company name */}
        <h1 className="text-[6rem] md:text-[7.5rem] lg:text-[9rem] font-bold tracking-tight mb-4 drop-shadow-lg">
          전기창업경영연구원
        </h1>

        {/* Tagline */}
        <p className="text-[2.5rem] md:text-[3rem] text-white font-bold mb-10 tracking-wide">
          전기공사업 양도양수 · 신규창업 · 분할합병 전문 컨설팅
        </p>

        {/* Phone number */}
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4">
            <svg
              className="w-6 h-6 text-gold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <a
              href="tel:1661-1861"
              className="text-[3.75rem] md:text-[4.5rem] font-bold text-white tracking-widest hover:text-gold transition-colors"
            >
              1661-1861
            </a>
          </div>
        </div>

        <p className="text-white/60 text-[1.75rem] mb-10">
          평일 09:00 ~ 18:00
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/consult"
            className="px-10 py-4 bg-gold hover:bg-gold-light text-white font-bold text-lg rounded transition-all duration-200 shadow-lg hover:-translate-y-0.5"
          >
            무료 상담신청
          </Link>
          <Link
            href="/transfer/sell-list"
            className="px-10 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold text-lg rounded border border-white/30 transition-all duration-200 hover:-translate-y-0.5"
          >
            양도/매도 목록 보기
          </Link>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              current === i
                ? "w-8 h-2.5 bg-gold"
                : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`슬라이드 ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 text-white/50 z-10">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="h-12 w-px bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </div>
  );
}
