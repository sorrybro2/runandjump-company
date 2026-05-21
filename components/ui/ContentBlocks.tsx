import type { ReactNode } from "react";

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

export function InfoGrid({ cards }: { cards: InfoCard[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
      {cards.map((card) => (
        <article key={`${card.num ?? ""}-${card.title}`} className="card-base group relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent-red transition-transform group-hover:scale-x-100" />
          {card.num && <div className="font-display text-xs italic text-ink-mute mb-2">{card.num}</div>}
          {card.icon && (
            <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-cream text-3xl transition-transform group-hover:rotate-6 group-hover:scale-105">
              {card.icon}
            </div>
          )}
          <h3 className="font-display text-2xl font-bold mb-3">{card.title}</h3>
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
      {steps.map((step, index) => (
        <article key={step.title} className="bg-white border border-line rounded-2xl p-6 text-center">
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-accent-red text-white font-display text-xl font-black italic">
            {index + 1}
          </div>
          <h3 className="font-display text-xl font-bold mb-3">{step.title}</h3>
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

export function ChipGrid({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-8">
      {items.map((item) => (
        <div key={item} className="rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink-soft transition-colors hover:border-accent-red hover:bg-accent-red hover:text-white">
          {item}
        </div>
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
