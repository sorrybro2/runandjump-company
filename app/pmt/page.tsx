import { SubpageHero } from "@/components/ui/SubpageHero";

export default function Page() {
  return (
    <>
      <SubpageHero
        eyebrow="— Personal Management"
        title="자기경영"
        titleItalic="PT"
        description="10주 1:1 코칭으로 본인만의 인생 관리 시스템을 완성합니다. 목표·시간·습관·독서·관계·이미지·돈·행복."
        deco="PMT"
      />
      <section className="container-rj py-24">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold mb-6">
            준비 중인 <span className="italic text-accent-red">페이지</span>
          </h2>
          <p className="text-ink-soft mb-8 leading-relaxed">
            이 페이지의 상세 콘텐츠는 곧 추가됩니다. 지금 바로 문의하시면
            자세한 안내를 받으실 수 있습니다.
          </p>
          <a href="tel:010-8944-3907" className="btn-primary">
            📞 010-8944-3907
          </a>
        </div>
      </section>
    </>
  );
}
