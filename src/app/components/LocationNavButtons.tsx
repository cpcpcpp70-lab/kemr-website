'use client';

import { useEffect, useState } from 'react';

const DEST_NAME = '전기창업경영연구원';
const DEST_LAT  = 37.5007;
const DEST_LNG  = 127.0368;

type Platform = 'android' | 'ios' | 'pc';

function getPlatform(): Platform {
  const ua = navigator.userAgent;
  if (/Android/i.test(ua)) return 'android';
  if (/iPhone|iPad|iPod/i.test(ua)) return 'ios';
  return 'pc';
}

export default function LocationNavButtons() {
  const [platform, setPlatform] = useState<Platform>('pc');

  useEffect(() => {
    setPlatform(getPlatform());
  }, []);

  /* ── KakaoMap ────────────────────────────────────────── */
  const kakaoHref =
    platform === 'android'
      ? `intent://route?ep=${DEST_LAT},${DEST_LNG}&by=CAR` +
        `#Intent;scheme=kakaomap;package=net.daum.android.map;` +
        `S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dnet.daum.android.map;end`
      : platform === 'ios'
      ? `kakaomap://route?ep=${DEST_LAT},${DEST_LNG}&by=CAR`
      : `https://map.kakao.com/link/to/${encodeURIComponent(DEST_NAME)},${DEST_LAT},${DEST_LNG}`;

  /* ── T-map ───────────────────────────────────────────── */
  const tmapHref =
    platform === 'android'
      ? `intent://route?goalname=${encodeURIComponent(DEST_NAME)}&goaly=${DEST_LAT}&goalx=${DEST_LNG}` +
        `#Intent;scheme=tmap;package=com.skt.tmap.ku;` +
        `S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.skt.tmap.ku;end`
      : platform === 'ios'
      ? `tmap://route?goalname=${encodeURIComponent(DEST_NAME)}&goaly=${DEST_LAT}&goalx=${DEST_LNG}`
      : `https://tmap.life/route?goalname=${encodeURIComponent(DEST_NAME)}&goaly=${DEST_LAT}&goalx=${DEST_LNG}`;

  return (
    <div className="flex gap-2 flex-wrap">
      <a
        href={kakaoHref}
        className="flex items-center gap-1.5 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold rounded-lg transition-colors text-sm"
      >
        카카오맵 길찾기
      </a>
      <a
        href={tmapHref}
        className="flex items-center gap-1.5 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-colors text-sm"
      >
        티맵 길찾기
      </a>
    </div>
  );
}
