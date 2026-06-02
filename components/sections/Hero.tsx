"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { COMPANY } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const proofPoints = [
  { value: "8", label: "성장 서비스" },
  { value: "30+", label: "출판 도서" },
  { value: "15Y+", label: "현장 경험" },
];

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // 좌측 텍스트 진입
        gsap.from("[data-hero-reveal]", {
          y: 36,
          autoAlpha: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
        });

        // 로고 팝인
        gsap.from("[data-hero-logo]", {
          scale: 0.6,
          autoAlpha: 0,
          duration: 1,
          ease: "back.out(1.6)",
          delay: 0.2,
        });

        // 떠다니는 카드 진입
        gsap.from("[data-hero-card]", {
          y: 60,
          autoAlpha: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.14,
          delay: 0.35,
        });

        // 스크롤 패럴랙스 — 카드마다 다른 속도로 떠오름
        gsap.utils.toArray<HTMLElement>("[data-hero-card]").forEach((card, i) => {
          gsap.to(card, {
            y: (i % 2 === 0 ? -1 : 1) * (60 + i * 18),
            ease: "none",
            scrollTrigger: {
              trigger: rootRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
        });

        // 떠다니는 미세 모션
        gsap.utils.toArray<HTMLElement>("[data-hero-card]").forEach((card, i) => {
          gsap.to(card, {
            y: "+=12",
            duration: 2.4 + i * 0.3,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: 1.2 + i * 0.2,
          });
        });
      });
    },
    { scope: rootRef }
  );

  return (
    <section
      ref={rootRef}
      className="relative min-h-screen overflow-hidden pt-24"
    >
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute right-[-10%] top-24 h-[520px] w-[520px] rounded-full bg-accent-blue/20 blur-3xl" />
      <div className="absolute bottom-0 left-[-8%] h-[420px] w-[420px] rounded-full bg-accent-red/10 blur-3xl" />

      <div className="container-rj relative z-10 grid min-h-[calc(100vh-6rem)] items-center gap-12 py-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div data-hero-reveal className="eyebrow mb-6">
            — Run &amp; Jump Company
          </div>

          <h1 data-hero-reveal className="section-title mb-8">
            뛰고, 배우고,
            <br />
            <span className="italic text-accent-red">성장하는 교육 플랫폼</span>
          </h1>

          <p
            data-hero-reveal
            className="mb-8 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl"
          >
            런앤점프 컴퍼니는 아이의 첫 운동수업부터 공연, 지도자교육,
            자기경영, 출판, 홈페이지 제작까지 사람의 가능성을 실제 행동과
            결과로 연결합니다.
          </p>

          <div
            data-hero-reveal
            className="mb-10 grid max-w-xl grid-cols-3 gap-4"
          >
            {proofPoints.map((item) => (
              <div key={item.label} className="border-l-2 border-accent-red pl-4">
                <div className="font-display text-3xl font-black leading-none">
                  {item.value}
                </div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-mute">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <div data-hero-reveal className="flex flex-wrap gap-4">
            <Link href="/about" className="btn-primary">
              회사 소개 보기 →
            </Link>
            <Link href="/sports" className="btn-secondary">
              서비스 둘러보기
            </Link>
            <a href={`tel:${COMPANY.phone}`} className="btn-secondary">
              📞 상담 신청
            </a>
          </div>
        </div>

        <div className="relative min-h-[540px]">
          <div
            data-hero-logo
            className="absolute left-1/2 top-8 z-20 size-56 -translate-x-1/2 overflow-hidden rounded-full bg-white shadow-2xl ring-8 ring-cream"
          >
            <Image
              src="/assets/runandjump-logo.png"
              alt="런앤점프 컴퍼니 로고"
              fill
              sizes="224px"
              className="object-contain p-3"
              priority
            />
          </div>

          <HeroImageCard
            className="left-0 top-0 w-56 rotate-[-5deg]"
            src="/assets/inline-class-photo.png"
            alt="인라인 수업 현장"
            label="Sports Class"
          />
          <HeroImageCard
            className="right-0 top-28 w-60 rotate-[4deg]"
            src="/assets/bubble-show-photo.png"
            alt="버블쇼 공연 현장"
            label="Bubble Show"
          />
          <HeroImageCard
            className="bottom-20 left-10 w-56 rotate-[3deg]"
            src="/assets/rope-class-photo.png"
            alt="음악줄넘기 수업 현장"
            label="Rope Class"
          />
          <HeroImageCard
            className="bottom-0 right-12 w-52 rotate-[-4deg]"
            src="/assets/play-tools-photo.png"
            alt="놀이체육 도구"
            label="Play Tools"
          />

          <div
            data-hero-card
            className="absolute bottom-36 left-1/2 z-30 w-72 -translate-x-1/2 rounded-2xl bg-ink p-6 text-cream shadow-2xl"
          >
            <div className="eyebrow mb-3 text-accent-gold">Founder</div>
            <div className="font-display text-2xl font-black">노력맨 진낙식</div>
            <p className="mt-2 text-sm leading-relaxed text-cream/70">
              체육학 박사이자 현장 교육자. 즐겁게 배우고 건강하게 성장하는
              경험을 설계합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroImageCard({
  className,
  src,
  alt,
  label,
}: {
  className: string;
  src: string;
  alt: string;
  label: string;
}) {
  return (
    <div
      data-hero-card
      className={`absolute overflow-hidden rounded-2xl bg-white p-2 shadow-xl ${className}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
        <Image src={src} alt={alt} fill sizes="240px" className="object-cover" />
      </div>
      <div className="px-2 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-accent-red">
        {label}
      </div>
    </div>
  );
}
