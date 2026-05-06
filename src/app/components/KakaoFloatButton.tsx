export default function KakaoFloatButton() {
  return (
    <>
      <style>{`
        #kakao-float-btn {
          position: fixed;
          bottom: 24px;
          left: 24px;
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 8px;
          background-color: #FEE500;
          color: #3C1E1E;
          font-weight: 700;
          font-size: 14px;
          padding: 12px 18px;
          border-radius: 50px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        #kakao-float-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }
        #kakao-float-btn svg {
          width: 22px;
          height: 22px;
          flex-shrink: 0;
        }
        @media (max-width: 768px) {
          #kakao-float-btn {
            bottom: 16px;
            left: 16px;
            padding: 10px 14px;
            font-size: 13px;
          }
        }
      `}</style>

      <a
        id="kakao-float-btn"
        href="http://pf.kakao.com/_MNvxbX/chat"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          viewBox="0 0 24 24"
          fill="#3C1E1E"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 3C6.477 3 2 6.925 2 11.75c0 3.017 1.738 5.666 4.354 7.258L5.5 21.5l3.09-1.672C9.491 20.266 10.726 20.5 12 20.5c5.523 0 10-3.925 10-8.75S17.523 3 12 3z" />
        </svg>
        카카오 상담
      </a>
    </>
  );
}
