"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { COMPANY } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Showcase = {
  slug: string;
  num: string;
  label: string;
  title: string;
  desc: string;
  image: string;
  accent: string;
};

const SHOWCASE: Showcase[] = [
  {
    slug: "sports",
    num: "01",
    label: "Sports Class",
    title: "스포츠교실",
    desc: "인라인·줄넘기·농구·보드·놀이체육·축구. 6개 종목을 검증된 커리큘럼으로.",
    image: "/assets/inline-class-photo.png",
    accent: "#e8472a",
  },
  {
    slug: "bubble",
    num: "02",
    label: "Bubble & Magic Show",
    title: "버블쇼 + 마술쇼",
    desc: "유치원·학교·축제·기업 행사까지. 50여 곳에서 검증된 무대.",
    image: "/assets/bubble-show-photo.png",
    accent: "#7eb8d4",
  },
  {
    slug: "cert",
    num: "03",
    label: "Certification",
    title: "지도자교육",
    desc: "런앤점프 컴퍼니 8개 민간자격. 실전형 교육으로 자격증 + 노하우.",
    image: "/assets/basketball-class-photo.png",
    accent: "#d4a847",
  },
  {
    slug: "shop",
    num: "04",
    label: "Shop",
    title: "SHOP",
    desc: "인라인·롱보드·스케이트보드 매장 + 직접 제작하는 놀이체육 도구.",
    image: "/assets/play-tools-photo.png",
    accent: "#f47b3c",
  },
  {
    slug: "pmt",
    num: "05",
    label: "Personal Management",
    title: "자기경영 PT",
    desc: "10주 1:1 코칭으로 본인만의 인생 관리 시스템을 완성합니다.",
    image: "/assets/effortman-character.png",
    accent: "#e8472a",
  },
  {
    slug: "pub",
    num: "06",
    label: "Publishing",
    title: "출판 PT",
    desc: "4개월에 무조건 출판. 원고부터 종이책까지 1:1로 완성.",
    image: "/assets/guidebook-cover.png",
    accent: "#4a8ba8",
  },
];

export function ShowcaseScroll() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-svc-head]", {
          y: 40,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: rootRef.current, start: "top 78%" },
        });
        gsap.from("[data-svc-card]", {
          y: 60,
          autoAlpha: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.09,
          scrollTrigger: {
            trigger: "[data-svc-grid]",
            start: "top 82%",
          },
        });
      });
    },
    { scope: rootRef }
  );

  return (
    <section ref={rootRef} className="bg-cream py-24 md:py-32">
      <div className="container-rj">
        {/* 섹션 헤더 */}
        <div data-svc-head className="mb-14 max-w-3xl">
          <div className="eyebrow mb-4">— Our Services</div>
          <h2 className="section-title mb-6">
            8개 사업,
            <br />
            <span className="italic">하나의 철학</span>
          </h2>
          <p className="body-text text-lg">
            모든 사업은 &quot;현장에서 검증된 것만 가르치고 만든다&quot;는
            노력맨의 철학 위에서 운영됩니다.
          </p>
        </div>

        {/* 사진 카드 그리드 — 한 화면에 모두 */}
        <div
          data-svc-grid
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SHOWCASE.map((item) => (
            <Link
              key={item.slug}
              href={`/${item.slug}`}
              data-svc-card
              className="group relative block aspect-[3/4] overflow-hidden rounded-2xl bg-ink shadow-lg ring-1 ring-black/5"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover opacity-90 transition-transform duration-[800ms] ease-out group-hover:scale-110"
              />
              {/* 그라데이션 오버레이 */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              {/* 상단 컬러바 */}
              <div
                className="absolute left-0 right-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                style={{ backgroundColor: item.accent }}
              />

              <div className="absolute inset-0 flex flex-col justify-between p-5 text-cream">
                <div className="flex items-start justify-between">
                  <span
                    className="font-display text-3xl font-black italic"
                    style={{ color: item.accent }}
                  >
                    {item.num}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cream/60">
                    {item.label}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/70">
                    {item.desc}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-cream/80 transition-colors group-hover:text-white">
                    <span
                      className="inline-block h-px w-6 transition-all group-hover:w-9"
                      style={{ backgroundColor: item.accent }}
                    />
                    자세히 보기
                  </span>
                </div>
              </div>
            </Link>
          ))}

          {/* 노력맨과 함께 — 하단 가로 CTA 배너 */}
          <div
            data-svc-card
            className="relative flex flex-col justify-between gap-6 overflow-hidden rounded-2xl bg-ink p-8 text-cream shadow-lg ring-1 ring-black/5 sm:col-span-2 md:flex-row md:items-center lg:col-span-3"
          >
            <div className="relative z-10">
              <div className="eyebrow mb-3 text-accent-red">— Run with 노력맨</div>
              <h3 className="font-display text-3xl font-bold leading-tight">
                어떤 사업이든, 첫 시작은 한 통의 전화에서
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-cream/70">
                부담 없이 문의주세요. 노력맨이 직접 답변드립니다.
              </p>
            </div>
            <a
              href={`tel:${COMPANY.phone}`}
              className="relative z-10 inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-accent-red px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-accent-red"
            >
              📞 {COMPANY.phone}
            </a>
            <div className="pointer-events-none absolute -bottom-10 -right-4 font-display text-[180px] font-black leading-none text-white/5">
              R&amp;J
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
