'use client';

const DEST_NAME = '전기창업경영연구원';
const DEST_LAT  = 37.5007;
const DEST_LNG  = 127.0368;

const KAKAO_WEB = `https://map.kakao.com/link/to/${encodeURIComponent(DEST_NAME)},${DEST_LAT},${DEST_LNG}`;
const TMAP_WEB  = `https://tmap.life/route?goalname=${encodeURIComponent(DEST_NAME)}&goaly=${DEST_LAT}&goalx=${DEST_LNG}`;

const KAKAO_PLAY = 'https://play.google.com/store/apps/details?id=net.daum.android.map';
const KAKAO_IOS  = 'https://apps.apple.com/kr/app/kakaomaps/id304608425';
const TMAP_PLAY  = 'https://play.google.com/store/apps/details?id=com.skt.tmap.ku';
const TMAP_IOS   = 'https://apps.apple.com/kr/app/tmap/id431589174';

function iosOpen(scheme: string, fallback: string) {
  const start = Date.now();
  window.location.href = scheme;
  setTimeout(() => {
    if (Date.now() - start < 2500) window.location.href = fallback;
  }, 2000);
}

function openKakao() {
  const ua = navigator.userAgent;
  if (/Android/i.test(ua)) {
    // Android: intent URL → 앱 없으면 Play Store
    window.location.href =
      `intent://route?ep=${DEST_LAT},${DEST_LNG}&eName=${encodeURIComponent(DEST_NAME)}&by=CAR` +
      `#Intent;scheme=kakaomap;package=net.daum.android.map;S.browser_fallback_url=${encodeURIComponent(KAKAO_PLAY)};end`;
  } else if (/iPhone|iPad|iPod/i.test(ua)) {
    // iOS: 앱 스킴 → 앱 없으면 App Store
    iosOpen(
      `kakaomap://route?ep=${DEST_LAT},${DEST_LNG}&eName=${encodeURIComponent(DEST_NAME)}&by=CAR`,
      KAKAO_IOS,
    );
  } else {
    // PC: 웹 새 탭
    window.open(KAKAO_WEB, '_blank', 'noopener,noreferrer');
  }
}

function openTmap() {
  const ua = navigator.userAgent;
  if (/Android/i.test(ua)) {
    // Android: intent URL → 앱 없으면 Play Store
    window.location.href =
      `intent://route?goalname=${encodeURIComponent(DEST_NAME)}&goaly=${DEST_LAT}&goalx=${DEST_LNG}` +
      `#Intent;scheme=tmap;package=com.skt.tmap.ku;S.browser_fallback_url=${encodeURIComponent(TMAP_PLAY)};end`;
  } else if (/iPhone|iPad|iPod/i.test(ua)) {
    // iOS: 앱 스킴 → 앱 없으면 App Store
    iosOpen(
      `tmap://route?goalname=${encodeURIComponent(DEST_NAME)}&goaly=${DEST_LAT}&goalx=${DEST_LNG}`,
      TMAP_IOS,
    );
  } else {
    // PC: 웹 새 탭
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
