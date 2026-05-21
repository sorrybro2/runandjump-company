import { SubpageHero } from "@/components/ui/SubpageHero";

export default function Page() {
  return (
    <>
      <SubpageHero
        eyebrow="— Bubble Show"
        title="버블"
        titleItalic="쇼"
        description="유치원·학교·축제·기업 행사 50여 곳에서 검증된 무대. 비눗방울 안에 담긴 과학·예술·놀이·연출."
        deco="Bubble"
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
