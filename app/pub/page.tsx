import { SubpageHero } from "@/components/ui/SubpageHero";

export default function Page() {
  return (
    <>
      <SubpageHero
        eyebrow="— Publishing"
        title="출판"
        titleItalic="PT"
        description="4개월에 무조건 출판. 기획부터 원고, 디자인, 전자책, 종이책까지 1:1로 완성합니다."
        deco="Pub"
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
