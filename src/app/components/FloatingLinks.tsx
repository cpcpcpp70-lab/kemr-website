"use client";

const links = [
  { label: "전기공사협회", href: "https://www.keca.or.kr", bg: "#0a1628" },
  { label: "전기공사공제조합", href: "https://www.ecfc.co.kr", bg: "#1e3a6e" },
  { label: "정보통신공사협회", href: "https://www.kica.or.kr", bg: "#0a1628" },
  { label: "정보통신공제조합", href: "http://www.icfc.or.kr", bg: "#1e3a6e" },
  { label: "소방공사협회", href: "https://www.ekffa.or.kr", bg: "#0a1628" },
  { label: "소방공사공제조합", href: "https://www.figu.or.kr", bg: "#1e3a6e" },
];

export default function FloatingLinks() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-0.5">
      {links.map(({ label, href, bg }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            backgroundColor: bg,
            color: "#c9a84c",
            padding: "20px 12px",
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            borderRadius: "6px 0 0 6px",
            boxShadow: "-2px 2px 8px rgba(0,0,0,0.25)",
            textDecoration: "none",
            transition: "background-color 0.2s, color 0.2s",
            lineHeight: 1.4,
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#ffffff";
            e.currentTarget.style.color = "#0a1628";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = bg;
            e.currentTarget.style.color = "#c9a84c";
          }}
        >
          {label}
        </a>
      ))}
    </div>
  );
}
