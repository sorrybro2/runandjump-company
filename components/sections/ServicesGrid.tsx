import Link from "next/link";
import { SERVICES } from "@/lib/data";

export function ServicesGrid() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container-rj">
        {/* 섹션 헤더 */}
        <div className="max-w-3xl mb-16">
          <div className="eyebrow mb-4">— Our Services</div>
          <h2 className="section-title mb-6">
            8개 사업,
            <br />
            <span className="italic">하나의 철학</span>
          </h2>
          <p className="body-text text-lg">
            모든 사업은 "현장에서 검증된 것만 가르치고 만든다"는 노력맨의
            철학 위에서 운영됩니다.
          </p>
        </div>

        {/* 카드 그리드 */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="group card-base relative overflow-hidden"
            >
              {/* 호버 시 나타나는 상단 컬러바 */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-accent-red transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{service.icon}</div>
                <span className="font-display text-xs italic text-ink-mute">
                  {service.num} / 07
                </span>
              </div>

              <div className="text-xs font-semibold tracking-wider text-accent-red uppercase mb-2">
                {service.label}
              </div>

              <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-accent-red transition-colors">
                {service.title}
              </h3>

              <p className="text-sm body-text mb-4">{service.desc}</p>

              <div className="text-xs font-semibold text-ink-mute group-hover:text-accent-red transition-colors">
                자세히 보기 →
              </div>
            </Link>
          ))}

          {/* 노력맨과 함께 카드 (마지막) */}
          <div className="col-span-2 lg:col-span-1 bg-ink text-cream rounded-2xl p-8 flex flex-col justify-between min-h-[320px] relative overflow-hidden">
            <div className="relative z-10">
              <div className="eyebrow text-accent-red mb-4">
                — Run with 노력맨
              </div>
              <h3 className="font-display text-3xl font-bold mb-3">
                노력맨과
                <br />
                함께하기
              </h3>
              <p className="text-sm text-cream/70 leading-relaxed mb-6">
                어떤 사업이든 첫 시작은 한 통의 전화에서.
                <br />
                부담 없이 문의주세요.
              </p>
            </div>
            <a
              href="tel:010-8944-3907"
              className="relative z-10 inline-flex items-center gap-2 bg-accent-red text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-white hover:text-accent-red transition-colors w-fit"
            >
              📞 010-8944-3907
            </a>

            {/* 배경 장식 */}
            <div className="absolute -bottom-10 -right-10 text-[200px] opacity-5 font-display font-black">
              R&J
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
