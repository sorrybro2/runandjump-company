interface SubpageHeroProps {
  eyebrow: string;
  title: string;
  titleItalic?: string;
  description: string;
  deco?: string;
}

export function SubpageHero({
  eyebrow,
  title,
  titleItalic,
  description,
  deco,
}: SubpageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 bg-cream-deep overflow-hidden">
      <div className="container-rj relative z-10">
        <div className="eyebrow mb-4">{eyebrow}</div>
        <h1 className="section-title mb-6">
          {title}
          {titleItalic && (
            <>
              {" "}
              <span className="italic text-accent-red">{titleItalic}</span>
            </>
          )}
        </h1>
        <p className="text-lg md:text-xl text-ink-soft max-w-3xl leading-relaxed">
          {description}
        </p>
      </div>

      {/* 큰 데코 텍스트 */}
      {deco && (
        <div className="absolute -bottom-10 -right-10 font-display text-[15rem] font-black opacity-[0.05] pointer-events-none select-none">
          {deco}
        </div>
      )}
    </section>
  );
}
