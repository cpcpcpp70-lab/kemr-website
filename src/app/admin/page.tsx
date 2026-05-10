"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const KEYS = ["1","2","3","4","5","6","7","8","9","","0","⌫"];

export default function AdminLoginPage() {
  const router = useRouter();
  const [input, setInput]   = useState("");
  const [error, setError]   = useState(false);
  const [shake, setShake]   = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("admin_token")) router.replace("/admin/dashboard");
  }, [router]);

  const press = (key: string) => {
    if (loading) return;
    if (key === "⌫") { setInput(p => p.slice(0, -1)); setError(false); return; }
    if (input.length >= 6) return;
    const next = input + key;
    setInput(next);
    if (next.length === 6) submit(next);
  };

  const submit = async (pw: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pw }),
      });
      if (res.ok) {
        const { token } = await res.json();
        sessionStorage.setItem("admin_token", token);
        router.push("/admin/dashboard");
      } else {
        setError(true);
        setShake(true);
        setInput("");
        setTimeout(() => setShake(false), 600);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-navy-dark flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-80 p-8">
        {/* 헤더 */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-navy">관리자 로그인</h1>
          <p className="text-gray-400 text-sm mt-1">6자리 비밀번호를 입력하세요</p>
        </div>

        {/* 입력 표시 dots */}
        <div className={`flex justify-center gap-3 mb-2 transition-all ${shake ? "animate-bounce" : ""}`}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
              i < input.length
                ? error ? "bg-red-400 border-red-400" : "bg-navy border-navy"
                : "border-gray-300 bg-white"
            }`} />
          ))}
        </div>
        {error && (
          <p className="text-red-500 text-center text-xs mb-4">비밀번호가 틀렸습니다. 다시 입력해 주세요.</p>
        )}
        {!error && <div className="mb-4" />}

        {/* 키패드 */}
        <div className="grid grid-cols-3 gap-3">
          {KEYS.map((key, i) =>
            key === "" ? (
              <div key={i} />
            ) : key === "⌫" ? (
              <button
                key={i}
                onClick={() => press(key)}
                className="h-14 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-500 font-bold text-lg transition-colors flex items-center justify-center"
              >
                ⌫
              </button>
            ) : (
              <button
                key={i}
                onClick={() => press(key)}
                disabled={loading}
                className="h-14 rounded-xl bg-gray-50 border border-gray-100 hover:bg-navy hover:text-white hover:border-navy text-navy font-bold text-xl transition-all active:scale-95"
              >
                {key}
              </button>
            )
          )}
        </div>

        {loading && (
          <p className="text-center text-gray-400 text-sm mt-4">확인 중...</p>
        )}
      </div>
    </div>
  );
}
