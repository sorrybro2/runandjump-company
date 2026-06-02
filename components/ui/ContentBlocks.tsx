import type { ReactNode } from "react";
import Image from "next/image";

type InfoCard = {
  icon?: string;
  num?: string;
  title: string;
  desc: ReactNode;
};

export function SectionTitle({
  children,
}: {
  children: ReactNode;
}) {
  return <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">{children}</h2>;
}

export function Lead({ children }: { children: ReactNode }) {
  return <div className="text-ink-soft leading-relaxed text-base md:text-lg max-w-4xl mb-10 space-y-4">{children}</div>;
}

export function Em({ children }: { children: ReactNode }) {
  return <span className="italic text-accent-red">{children}</span>;
}

// 종목 설명 옆에 해당 분야 노력맨 캐릭터를 함께 보여주는 도입부
export function MascotLead({
  src,
  alt,
  children,
}: {
  src: string;
  alt: string;
  children: ReactNode;
}) {
  return (
    <div className="my-8 flex flex-col items-center gap-6 sm:flex-row sm:items-start">
      <div className="relative h-44 w-36 shrink-0">
        <Image src={src} alt={alt} fill sizes="160px" className="object-contain" />
      </div>
      <div className="max-w-3xl space-y-4 text-base leading-relaxed text-ink-soft md:text-lg">
        {children}
      </div>
    </div>
  );
}

// 분야별 노력맨 캐릭터를 한 줄로 늘어놓는 라인업 (각 이미지에 종목명 라벨 포함)
export function MascotRow({ items }: { items: Array<{ src: string; label: string }> }) {
  return (
    <div className="grid grid-cols-3 gap-3 my-8 sm:grid-cols-6 sm:gap-4">
      {items.map((item) => (
        <div key={item.label} className="relative aspect-[3/4]">
          <Image
            src={item.src}
            alt={`${item.label} 노력맨 캐릭터`}
            fill
            sizes="(max-width: 640px) 33vw, 160px"
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}

export function InfoGrid({ cards }: { cards: InfoCard[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 my-8">
      {cards.map((card) => (
        <article key={`${card.num ?? ""}-${card.title}`} className="card-base group relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent-red transition-transform group-hover:scale-x-100" />
          {card.num && <div className="font-display text-xs italic text-ink-mute mb-2">{card.num}</div>}
          {card.icon && (
            <div className="mb-3 sm:mb-4 flex size-12 sm:size-14 items-center justify-center rounded-full bg-cream text-2xl sm:text-3xl transition-transform group-hover:rotate-6 group-hover:scale-105">
              {card.icon}
            </div>
          )}
          <h3 className="font-display text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{card.title}</h3>
          <div className="text-sm text-ink-soft leading-relaxed">{card.desc}</div>
        </article>
      ))}
    </div>
  );
}

export function HighlightBox({
  title,
  children,
  tone = "cream",
}: {
  title?: string;
  children: ReactNode;
  tone?: "cream" | "red" | "blue" | "orange";
}) {
  const toneClass = {
    cream: "bg-cream-deep text-ink",
    red: "bg-accent-red text-white",
    blue: "bg-accent-blue-deep text-white",
    orange: "bg-accent-orange text-white",
  }[tone];

  return (
    <div className={`rounded-2xl p-6 md:p-8 my-8 ${toneClass}`}>
      {title && <h3 className="font-display text-2xl font-bold mb-4">{title}</h3>}
      <div className={tone === "cream" ? "text-ink-soft leading-relaxed" : "text-white/90 leading-relaxed"}>{children}</div>
    </div>
  );
}

export function BulletList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="relative pl-5">
          <span className="absolute left-0 top-2 text-accent-red text-xs">◆</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ProcessSteps({
  steps,
}: {
  steps: Array<{ title: string; desc: ReactNode }>;
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 my-10">
      {steps.map((step, index) => (
        <article key={step.title} className="bg-white border border-line rounded-2xl p-5 sm:p-6 text-center">
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-accent-red text-white font-display text-xl font-black italic">
            {index + 1}
          </div>
          <h3 className="font-display text-lg sm:text-xl font-bold mb-2 sm:mb-3">{step.title}</h3>
          <div className="text-sm text-ink-soft leading-relaxed">{step.desc}</div>
        </article>
      ))}
    </div>
  );
}

export function SkillTable({
  headers,
  rows,
}: {
  headers: ReactNode[];
  rows: ReactNode[][];
}) {
  return (
    <div className="my-8 overflow-x-auto rounded-2xl border border-line bg-white">
      <div className="min-w-[680px]">
        <div className="grid bg-ink text-white" style={{ gridTemplateColumns: `repeat(${headers.length}, minmax(0, 1fr))` }}>
          {headers.map((header, index) => (
            <div key={index} className={`p-4 text-sm font-semibold ${index === 0 ? "bg-accent-red" : ""}`}>
              {header}
            </div>
          ))}
        </div>
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="grid border-t border-line transition-colors hover:bg-cream"
            style={{ gridTemplateColumns: `repeat(${headers.length}, minmax(0, 1fr))` }}
          >
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                className={`p-4 text-sm leading-relaxed ${cellIndex === 0 ? "font-display font-bold text-accent-red bg-cream" : "text-ink-soft"}`}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

type Photo = { src: string; alt: string; caption?: string };

export function PhotoGrid({ photos }: { photos: Photo[] }) {
  const cols =
    photos.length === 1
      ? "grid-cols-1 max-w-xl"
      : photos.length === 2
        ? "grid-cols-2"
        : "grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid ${cols} gap-3 sm:gap-4 my-8`}>
      {photos.map((photo) => (
        <figure
          key={photo.src}
          className="overflow-hidden rounded-2xl border border-line bg-white"
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
          {photo.caption && (
            <figcaption className="p-3 text-center text-sm text-ink-soft">
              {photo.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

export function WideImage({ src, alt, caption }: Photo) {
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-line bg-white">
      <Image
        src={src}
        alt={alt}
        width={1000}
        height={1000}
        sizes="(max-width: 768px) 100vw, 768px"
        className="h-auto w-full object-contain"
      />
      {caption && (
        <figcaption className="p-3 text-center text-sm text-ink-soft">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function ChipGrid({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 my-8">
      {items.map((item) => (
        <div key={item} className="rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink-soft transition-colors hover:border-accent-red hover:bg-accent-red hover:text-white">
          {item}
        </div>
      ))}
    </div>
  );
}

// 핵심 수치를 강조하는 띠 (신뢰감 지표)
export function StatStrip({
  stats,
}: {
  stats: Array<{ num: string; label: string }>;
}) {
  return (
    <div className="my-8 grid grid-cols-3 gap-3 rounded-2xl bg-ink p-6 text-center text-white sm:gap-4 sm:p-8">
      {stats.map((stat) => (
        <div key={stat.label}>
          <div className="font-display text-3xl font-black italic text-accent-orange sm:text-4xl">
            {stat.num}
          </div>
          <div className="mt-1 text-xs leading-snug text-white/70 sm:text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

// 분야별로 분류한 공연 실적 보드 (현장명 + 신뢰 배지)
type RecordGroup = {
  icon: string;
  title: string;
  items: Array<{ name: string; tags?: string[] }>;
};

export function RecordBoard({ groups }: { groups: RecordGroup[] }) {
  return (
    <div className="my-8 space-y-8">
      {groups.map((group) => (
        <section key={group.title}>
          <div className="mb-4 flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-cream text-xl">
              {group.icon}
            </span>
            <h3 className="font-display text-xl font-bold sm:text-2xl">{group.title}</h3>
            <span className="rounded-full bg-accent-blue-deep/10 px-3 py-1 text-sm font-semibold text-accent-blue-deep">
              {group.items.length}곳
            </span>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {group.items.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between gap-2 rounded-xl border border-line bg-white px-4 py-3 transition-colors hover:border-accent-red/40"
              >
                <span className="flex items-center gap-2 text-sm text-ink">
                  <span className="size-1.5 shrink-0 rounded-full bg-accent-red" />
                  {item.name}
                </span>
                {item.tags && item.tags.length > 0 && (
                  <span className="flex shrink-0 flex-wrap justify-end gap-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="whitespace-nowrap rounded-full bg-accent-red/10 px-2 py-0.5 text-[11px] font-semibold text-accent-red"
                      >
                        {tag}
                      </span>
                    ))}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export function RecordFlow({ items }: { items: string[] }) {
  return (
    <p className="my-4 text-ink-soft leading-loose">
      {items.map((item, index) => (
        <span key={item}>
          {index > 0 && <span className="mx-2 select-none text-accent-red/40">·</span>}
          {item}
        </span>
      ))}
    </p>
  );
}

type CaseItem = {
  tag: string;
  status?: string;
  title: string;
  role: ReactNode;
  points: string[];
  note?: string;
  href?: string;
  linkLabel?: string;
};

export function CaseList({ cases }: { cases: CaseItem[] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
      {cases.map((item) => (
        <article
          key={item.title}
          className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white p-7 transition-shadow hover:shadow-lg"
        >
          <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent-red transition-transform group-hover:scale-x-100" />
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-cream-deep px-3 py-1 text-xs font-semibold text-ink-soft">
              {item.tag}
            </span>
            {item.status && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-red/10 px-3 py-1 text-xs font-semibold text-accent-red">
                <span className="size-1.5 rounded-full bg-accent-red" />
                {item.status}
              </span>
            )}
          </div>
          <h3 className="font-display text-2xl font-bold mb-3">{item.title}</h3>
          <p className="text-sm text-ink-soft leading-relaxed mb-5">{item.role}</p>
          <ul className="space-y-2 mb-2">
            {item.points.map((point) => (
              <li key={point} className="relative pl-5 text-sm text-ink-soft leading-relaxed">
                <span className="absolute left-0 top-[7px] text-accent-red text-[10px]">◆</span>
                {point}
              </li>
            ))}
          </ul>
          {item.note && (
            <p className="mt-auto pt-4 text-xs italic text-ink-mute">{item.note}</p>
          )}
          {item.href && (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto pt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent-red hover:underline"
            >
              {item.linkLabel ?? "사이트 보기"} →
            </a>
          )}
        </article>
      ))}
    </div>
  );
}

export function QuoteBox({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-8 border-l-4 border-accent-red bg-cream p-6 font-display text-2xl italic leading-relaxed">
      {children}
    </blockquote>
  );
}

export function InlineCta({
  title,
  desc,
  href = "tel:010-8944-3907",
  label = "010-8944-3907",
}: {
  title: string;
  desc: string;
  href?: string;
  label?: string;
}) {
  return (
    <div className="my-10 flex flex-col gap-6 rounded-2xl bg-ink p-8 text-white md:flex-row md:items-center md:justify-between">
      <div>
        <h3 className="font-display text-2xl font-bold mb-2">{title}</h3>
        <p className="text-white/70">{desc}</p>
      </div>
      <a href={href} className="inline-flex shrink-0 items-center justify-center rounded-full bg-accent-red px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-accent-red">
        {label}
      </a>
    </div>
  );
}
