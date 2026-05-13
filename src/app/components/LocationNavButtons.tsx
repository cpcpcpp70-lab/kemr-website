'use client';

const DEST_LAT = 37.499968;
const DEST_LNG = 127.027847;
const DEST_NAME = '강남파이낸스센터';

function openKakaoNav() {
  window.open(
    `https://map.kakao.com/link/to/${encodeURIComponent(DEST_NAME)},${DEST_LAT},${DEST_LNG}`,
    '_blank',
    'noopener,noreferrer'
  );
}

function openTmapNav() {
  const ua = navigator.userAgent;
  const isIOS = /iPhone|iPad|iPod/i.test(ua);
  const isAndroid = /Android/i.test(ua);

  if (isAndroid) {
    const intentUrl = `intent://route?goalname=${encodeURIComponent(DEST_NAME)}&goalx=${DEST_LNG}&goaly=${DEST_LAT}&type=0#Intent;scheme=tmap;package=com.skt.tmap.ku;end`;
    window.location.href = intentUrl;
  } else if (isIOS) {
    const appScheme = `tmap://route?goalname=${encodeURIComponent(DEST_NAME)}&goalx=${DEST_LNG}&goaly=${DEST_LAT}&type=0`;
    const startTime = Date.now();
    window.location.href = appScheme;
    setTimeout(() => {
      if (Date.now() - startTime < 2500) {
        window.location.href = 'https://apps.apple.com/kr/app/tmap/id431589174';
      }
    }, 2000);
  } else {
    window.open('https://www.tmap.co.kr/', '_blank', 'noopener,noreferrer');
  }
}

export default function LocationNavButtons() {
  return (
    <div className="flex gap-2 flex-wrap">
      <button
        onClick={openKakaoNav}
        className="flex items-center gap-1.5 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold rounded-lg transition-colors text-sm"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C6.477 3 2 6.477 2 11c0 2.88 1.63 5.42 4.1 6.97L5 21l3.55-1.93C9.61 19.65 10.78 20 12 20c5.523 0 10-3.477 10-9S17.523 3 12 3z"/>
        </svg>
        카카오맵 길찾기
      </button>
      <button
        onClick={openTmapNav}
        className="flex items-center gap-1.5 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-colors text-sm"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M3 12l9-9 9 9"/>
          <path d="M9 21V9h6v12"/>
        </svg>
        티맵 길찾기
      </button>
    </div>
  );
}
