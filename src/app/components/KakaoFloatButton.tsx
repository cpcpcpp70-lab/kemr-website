"use client";

export default function KakaoFloatButton() {
  return (
    <a
      id="kakao-float-btn"
      href="https://pf.kakao.com/_MNvxbX/chat"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "24px",
        left: "24px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "8px",
        backgroundColor: "#FEE500",
        color: "#3C1E1E",
        fontWeight: 700,
        fontSize: "14px",
        padding: "12px 18px",
        borderRadius: "50px",
        textDecoration: "none",
        boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 14px rgba(0,0,0,0.25)";
      }}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="#3C1E1E"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <path d="M12 3C6.477 3 2 6.925 2 11.75c0 3.017 1.738 5.666 4.354 7.258L5.5 21.5l3.09-1.672C9.491 20.266 10.726 20.5 12 20.5c5.523 0 10-3.925 10-8.75S17.523 3 12 3z" />
      </svg>
      카카오 상담
    </a>
  );
}
