import { PHILOSOPHY } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Philosophy() {
  return (
    <section className="relative py-24 md:py-32 bg-ink text-cream overflow-hidden">
      {/* 한글 워터마크 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="font-display text-[20vw] font-black opacity-[0.03] whitespace-nowrap">
          런앤점프
        </div>
      </div>

      <div className="container-rj relative z-10">
        <Reveal className="max-w-3xl mb-16">
          <div className="eyebrow text-accent-red mb-4">— Our Philosophy</div>
          <h2 className="section-title mb-6">
            우리가 일하는
            <br />
            <span className="italic text-accent-red">세 가지 방식</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PHILOSOPHY.map((item, i) => (
            <Reveal
              key={item.num}
              delay={i * 0.12}
              className="border-t-2 border-accent-red pt-8"
            >
              <div className="font-display text-5xl italic font-black mb-4 text-accent-red">
                {item.num}
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">
                {item.title}
              </h3>
              <p className="text-cream/70 leading-relaxed">{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
