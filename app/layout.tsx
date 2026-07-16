import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://runandjump-five.vercel.app"),
  title: "런앤점프 컴퍼니 — 노력맨 진낙식",
  description:
    "스포츠교실, 버블쇼, 지도자교육, 자기경영 PT, 출판 PT, 홈페이지 제작. 노력맨 진낙식 대표가 운영하는 1인 종합 콘텐츠 기업.",
  keywords: [
    "런앤점프",
    "노력맨",
    "진낙식",
    "스포츠교실",
    "버블쇼",
    "지도자교육",
    "자기경영",
    "출판코칭",
    "대전",
  ],
  icons: {
    icon: "/assets/runandjump-logo.png",
    shortcut: "/assets/runandjump-logo.png",
    apple: "/assets/runandjump-logo.png",
  },
  openGraph: {
    title: "런앤점프 컴퍼니",
    description: "뛰고, 배우고, 성장하는 사람들",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/assets/runandjump-logo.png",
        width: 780,
        height: 720,
        alt: "런앤점프 컴퍼니 로고",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
