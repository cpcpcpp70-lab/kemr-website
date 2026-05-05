"use client";
import { useState, useRef, useEffect } from "react";

type Message = {
  id: number;
  from: "bot" | "user";
  text: string;
  quickReplies?: string[];
  isPhone?: boolean;
  isConsult?: boolean;
};

const INITIAL: Message = {
  id: 0,
  from: "bot",
  text: "안녕하세요! 전기창업경영연구원입니다 😊\n무엇을 도와드릴까요?",
  quickReplies: ["양도양수 문의", "신규창업 문의", "법인설립 문의", "기업진단 문의", "분할·합병 문의", "전화 상담"],
};

function getResponse(input: string): Omit<Message, "id" | "from"> {
  const q = input;
  if (q.includes("양도") || q.includes("양수") || q.includes("매물") || q.includes("면허")) {
    return {
      text: "전기공사업 양도양수 서비스를 제공합니다.\n\n✅ 일반전기공사업 면허 양도·양수 중개\n✅ 면허 가치 평가\n✅ 계약 및 서류 대행\n\n현재 등록된 매물을 확인하실 수 있습니다.",
      quickReplies: ["비용 문의", "소요 기간", "상담 신청", "처음으로"],
    };
  }
  if (q.includes("창업") || q.includes("등록") || q.includes("신규")) {
    return {
      text: "전기공사업 신규 등록을 도와드립니다.\n\n✅ 자본금 1억 5천만원 이상\n✅ 전기기사/산업기사 1명 이상\n✅ 독립된 영업용 사무실 필요\n\n등록 준비부터 완료까지 원스톱으로 대행해드립니다.",
      quickReplies: ["비용 문의", "소요 기간", "상담 신청", "처음으로"],
    };
  }
  if (q.includes("법인") || q.includes("설립")) {
    return {
      text: "법인설립 서비스를 안내해드립니다.\n\n✅ 법인 설립 서류 준비 및 등기 대행\n✅ 사업자등록 지원\n✅ 공제조합 가입 지원\n\n법인 형태에 따른 최적의 설립 방법을 컨설팅해드립니다.",
      quickReplies: ["비용 문의", "소요 기간", "상담 신청", "처음으로"],
    };
  }
  if (q.includes("기업진단") || q.includes("진단")) {
    return {
      text: "기업진단 서비스를 안내해드립니다.\n\n✅ 재무 현황 분석\n✅ 경영 전략 수립\n✅ 리스크 관리 및 성장 전략 제안\n\n전문 컨설턴트가 직접 분석해드립니다.",
      quickReplies: ["비용 문의", "상담 신청", "처음으로"],
    };
  }
  if (q.includes("분할") || q.includes("합병")) {
    return {
      text: "분할·합병 서비스를 안내해드립니다.\n\n✅ 기업 분할 업무 대행\n✅ 흡수합병·신설합병 대행\n✅ 관련 법률 자문\n\n복잡한 절차를 전문가가 대행해드립니다.",
      quickReplies: ["비용 문의", "소요 기간", "상담 신청", "처음으로"],
    };
  }
  if (q.includes("비용") || q.includes("가격") || q.includes("수수료") || q.includes("얼마")) {
    return {
      text: "정확한 비용은 업무 내용과 복잡도에 따라 달라집니다.\n\n무료 상담을 통해 구체적인 견적을 안내해드립니다.\n\n📞 02-1661-1861\n(평일 09:00~18:00)",
      quickReplies: ["☎ 바로 전화하기", "온라인 상담 신청", "처음으로"],
      isPhone: false,
    };
  }
  if (q.includes("기간") || q.includes("얼마나")) {
    return {
      text: "업무별 평균 소요 기간입니다.\n\n📌 전기공사업 등록: 7~14일\n📌 법인설립: 3~5일\n📌 양도양수 계약: 협의 후 진행\n\n정확한 일정은 상담 후 안내드립니다.",
      quickReplies: ["상담 신청", "☎ 바로 전화하기", "처음으로"],
    };
  }
  if (q.includes("전화") || q.includes("연락") || q.includes("통화") || q.includes("☎")) {
    return {
      text: "📞 대표 전화: 02-1661-1861\n⏰ 평일 09:00 ~ 18:00\n\n아래 버튼으로 바로 연결하실 수 있습니다.",
      quickReplies: ["☎ 바로 전화하기", "온라인 상담 신청", "처음으로"],
      isPhone: true,
    };
  }
  if (q.includes("상담") || q.includes("문의")) {
    return {
      text: "상담 방법을 선택해주세요.\n\n📞 전화: 02-1661-1861\n💻 온라인: 상담 신청 폼 작성",
      quickReplies: ["☎ 바로 전화하기", "온라인 상담 신청", "처음으로"],
    };
  }
  if (q.includes("처음") || q.includes("메뉴") || q.includes("돌아")) {
    return {
      text: "무엇을 도와드릴까요?",
      quickReplies: ["양도양수 문의", "신규창업 문의", "법인설립 문의", "기업진단 문의", "분할·합병 문의", "전화 상담"],
    };
  }
  return {
    text: "정확히 이해하지 못했습니다. 아래 메뉴를 선택하시거나 전화로 문의해 주세요.\n\n📞 02-1661-1861",
    quickReplies: ["양도양수 문의", "신규창업 문의", "전화 상담", "처음으로"],
  };
}

let nextId = 1;

export default function FloatingChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    // Special actions
    if (text === "☎ 바로 전화하기") {
      window.location.href = "tel:02-1661-1861";
      return;
    }
    if (text === "온라인 상담 신청") {
      window.open("/consult", "_self");
      return;
    }

    const userMsg: Message = { id: nextId++, from: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const response = getResponse(text);
      const botMsg: Message = { id: nextId++, from: "bot", ...response };
      setMessages((prev) => [...prev, botMsg]);
      setTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Chat panel */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "110px",
            right: "76px",
            width: "340px",
            maxHeight: "520px",
            backgroundColor: "#fff",
            borderRadius: "16px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
            display: "flex",
            flexDirection: "column",
            zIndex: 9999,
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div style={{ backgroundColor: "#0a1628", padding: "14px 16px", display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", backgroundColor: "#c9a84c", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
            </div>
            <div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "14px" }}>전기창업경영연구원</div>
              <div style={{ color: "#c9a84c", fontSize: "11px" }}>온라인 상담</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{ marginLeft: "auto", background: "none", border: "none", color: "rgba(255,255,255,0.6)", cursor: "pointer", fontSize: "20px", lineHeight: 1 }}
            >×</button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: "14px 12px", display: "flex", flexDirection: "column", gap: "10px", backgroundColor: "#f5f7fa" }}>
            {messages.map((msg) => (
              <div key={msg.id}>
                <div style={{ display: "flex", justifyContent: msg.from === "user" ? "flex-end" : "flex-start", gap: "8px", alignItems: "flex-end" }}>
                  {msg.from === "bot" && (
                    <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: "#0a1628", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: "#c9a84c", fontSize: "12px", fontWeight: 700 }}>K</span>
                    </div>
                  )}
                  <div
                    style={{
                      maxWidth: "230px",
                      padding: "9px 12px",
                      borderRadius: msg.from === "user" ? "16px 4px 16px 16px" : "4px 16px 16px 16px",
                      backgroundColor: msg.from === "user" ? "#0a1628" : "#fff",
                      color: msg.from === "user" ? "#fff" : "#1f2937",
                      fontSize: "13px",
                      lineHeight: 1.6,
                      whiteSpace: "pre-line",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                    }}
                  >
                    {msg.text}
                  </div>
                </div>
                {msg.quickReplies && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "8px", paddingLeft: "36px" }}>
                    {msg.quickReplies.map((qr) => (
                      <button
                        key={qr}
                        onClick={() => sendMessage(qr)}
                        style={{
                          padding: "5px 10px",
                          borderRadius: "20px",
                          border: "1.5px solid #0a1628",
                          backgroundColor: "#fff",
                          color: "#0a1628",
                          fontSize: "12px",
                          fontWeight: 600,
                          cursor: "pointer",
                          transition: "all 0.15s",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#0a1628"; e.currentTarget.style.color = "#fff"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#fff"; e.currentTarget.style.color = "#0a1628"; }}
                      >
                        {qr}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {typing && (
              <div style={{ display: "flex", alignItems: "flex-end", gap: "8px" }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: "#0a1628", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "#c9a84c", fontSize: "12px", fontWeight: 700 }}>K</span>
                </div>
                <div style={{ padding: "10px 14px", backgroundColor: "#fff", borderRadius: "4px 16px 16px 16px", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
                  <span style={{ display: "inline-flex", gap: "4px" }}>
                    {[0, 1, 2].map((i) => (
                      <span key={i} style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#9ca3af", display: "inline-block", animation: `bounce 1s ${i * 0.2}s infinite` }} />
                    ))}
                  </span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{ padding: "10px 12px", borderTop: "1px solid #e5e7eb", display: "flex", gap: "8px", backgroundColor: "#fff" }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
              placeholder="메시지를 입력하세요..."
              style={{
                flex: 1,
                padding: "8px 12px",
                borderRadius: "20px",
                border: "1.5px solid #e5e7eb",
                fontSize: "13px",
                outline: "none",
                backgroundColor: "#f9fafb",
              }}
            />
            <button
              onClick={() => sendMessage(input)}
              style={{
                width: 36, height: 36,
                borderRadius: "50%",
                backgroundColor: "#0a1628",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#c9a84c"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
            </button>
          </div>
        </div>
      )}

      {/* Toggle button + label */}
      <div style={{ position: "fixed", bottom: "20px", right: "76px", zIndex: 9999, display: "flex", flexDirection: "column", alignItems: "center", gap: "5px" }}>
        <span style={{
          fontSize: "11px", fontWeight: 800, color: "#fff",
          backgroundColor: "#0a1628", border: "1.5px solid #c9a84c",
          padding: "2px 10px", borderRadius: "20px", letterSpacing: "0.05em",
          whiteSpace: "nowrap",
        }}>전기봇</span>
        <button
          onClick={() => setOpen((v) => !v)}
          style={{
            width: 58, height: 58,
            borderRadius: "50%",
            backgroundColor: "#0a1628",
            border: "3px solid #c9a84c",
            boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          aria-label="채팅 상담"
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#c9a84c"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#c9a84c"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>
          )}
        </button>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-5px); }
        }
      `}</style>
    </>
  );
}
