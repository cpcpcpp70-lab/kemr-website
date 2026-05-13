'use client';

const DEST_NAME = '전기창업경영연구원';
const DEST_LAT  = 37.5007;
const DEST_LNG  = 127.0368;

const KAKAO_WEB = `https://map.kakao.com/link/to/${encodeURIComponent(DEST_NAME)},${DEST_LAT},${DEST_LNG}`;
const TMAP_WEB  = `https://tmap.life/route?goalname=${encodeURIComponent(DEST_NAME)}&goaly=${DEST_LAT}&goalx=${DEST_LNG}`;

function openKakao() {
  const ua = navigator.userAgent;
  const isAndroid = /Android/i.test(ua);
  const isIOS     = /iPhone|iPad|iPod/i.test(ua);

  if (isAndroid) {
    window.location.href =
      `intent://route?ep=${DEST_LAT},${DEST_LNG}&by=CAR` +
      `#Intent;scheme=kakaomap;package=net.daum.android.map;end`;
  } else if (isIOS) {
    const appScheme = `kakaomap://route?ep=${DEST_LAT},${DEST_LNG}&by=CAR`;
    const start = Date.now();
    window.location.href = appScheme;
    setTimeout(() => {
      if (Date.now() - start < 2500) {
        window.location.href = 'https://apps.apple.com/kr/app/kakaomaps/id304608425';
      }
    }, 2000);
  } else {
    window.open(KAKAO_WEB, '_blank', 'noopener,noreferrer');
  }
}

function openTmap() {
  const ua = navigator.userAgent;
  const isAndroid = /Android/i.test(ua);
  const isIOS     = /iPhone|iPad|iPod/i.test(ua);

  if (isAndroid) {
    window.location.href =
      `intent://route?goalname=${encodeURIComponent(DEST_NAME)}&goaly=${DEST_LAT}&goalx=${DEST_LNG}` +
      `#Intent;scheme=tmap;package=com.skt.tmap.ku;end`;
  } else if (isIOS) {
    const appScheme = `tmap://route?goalname=${encodeURIComponent(DEST_NAME)}&goaly=${DEST_LAT}&goalx=${DEST_LNG}`;
    const start = Date.now();
    window.location.href = appScheme;
    setTimeout(() => {
      if (Date.now() - start < 2500) {
        window.location.href = 'https://apps.apple.com/kr/app/tmap/id431589174';
      }
    }, 2000);
  } else {
    window.open(TMAP_WEB, '_blank', 'noopener,noreferrer');
  }
}

export default function LocationNavButtons() {
  return (
    <div className="flex gap-2 flex-wrap">
      <button
        onClick={openKakao}
        className="flex items-center gap-1.5 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold rounded-lg transition-colors text-sm"
      >
        카카오맵 길찾기
      </button>
      <button
        onClick={openTmap}
        className="flex items-center gap-1.5 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-colors text-sm"
      >
        티맵 길찾기
      </button>
    </div>
  );
}
