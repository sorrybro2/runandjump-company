import { SubpageHero } from "@/components/ui/SubpageHero";

export default function Page() {
  return (
    <>
      <SubpageHero
        eyebrow="— Shop"
        title="SHOP"
        titleItalic="매장 & 도구"
        description="인라인·롱보드·스케이트보드 매장과 직접 제작하는 놀이체육 도구. 대전 둔산동에서 시간 예약제로 운영."
        deco="Shop"
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
