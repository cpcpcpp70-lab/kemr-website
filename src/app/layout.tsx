import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import FloatingLinks from "./components/FloatingLinks";
import FloatingChatbot from "./components/FloatingChatbot";
import KakaoFloatButton from "./components/KakaoFloatButton";

const notoSansKR = Noto_Sans_KR({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "전기창업경영연구원 | 전기공사업 양도양수·신규창업·분할합병 전문",
  description:
    "전기공사업 양도양수, 신규창업, 법인설립, 기업진단, 분할·합병 전문 컨설팅. 전화: 02-1661-1861",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSansKR.variable}>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingLinks />
        <FloatingChatbot />
        <KakaoFloatButton />
      </body>
    </html>
  );
}
