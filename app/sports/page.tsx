import { SubpageHero } from "@/components/ui/SubpageHero";
import { TabMenu, type Tab } from "@/components/ui/TabMenu";

// 종목 데이터
const SPORTS = [
  { num: "01", icon: "🛼", title: "인라인", desc: "균형감각·하체근력·민첩성. 기초부터 선수반까지." },
  { num: "02", icon: "🪢", title: "음악줄넘기", desc: "체력·리듬감·집중력. 10급~1급 급수 시스템." },
  { num: "03", icon: "🏀", title: "농구", desc: "드리블·패스·슛·팀플레이. 사회성도 함께." },
  { num: "04", icon: "🛹", title: "보드", desc: "롱보드·스케이트보드. 안전교육 최우선." },
  { num: "05", icon: "🎈", title: "놀이체육", desc: "유아·초등 저학년. 다양한 도구와 놀이." },
  { num: "06", icon: "⚽", title: "축구", desc: "유소년 가장 인기. 즐거움부터 팀워크까지." },
];

const tabs: Tab[] = [
  {
    id: "overview",
    num: "01",
    label: "종목 안내",
    content: (
      <div>
        <h2 className="font-display text-3xl font-bold mb-6">
          아이의 발달 단계에 맞춘{" "}
          <span className="italic text-accent-red">체계적인 운동</span>
        </h2>
        <p className="text-ink-soft mb-10 leading-relaxed max-w-3xl">
          런앤점프 스포츠교실은 단순한 기술 전달이 아니라, 아이의 발달 단계에
          맞춘 체계적인 운동 교육을 제공합니다. 6개 종목 모두 노력맨 대표가
          직접 지도하거나 검증된 강사가 진행합니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPORTS.map((sport) => (
            <div
              key={sport.num}
              className="card-base group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-accent-red transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

              <div className="text-xs font-display italic text-ink-mute mb-2">
                {sport.num} / 06
              </div>
              <div className="text-4xl mb-4">{sport.icon}</div>
              <h3 className="font-display text-2xl font-bold mb-2">
                {sport.title}
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                {sport.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "apply",
    num: "02",
    label: "신청 방법",
    content: (
      <div className="max-w-4xl">
        <h2 className="font-display text-3xl font-bold mb-6">
          신청 <span className="italic text-accent-red">방법</span>
        </h2>
        <p className="text-ink-soft mb-10">
          1명부터 개인레슨 / 그룹레슨 모두 가능합니다.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            { num: "1", title: "문자 신청", desc: "종목·연령·인원·동네·수준을 문자로 보내주세요." },
            { num: "2", title: "교육비 안내", desc: "맞춤 교육비를 문자로 회신해드립니다." },
            { num: "3", title: "시간 협의", desc: "가능 시간을 안내해드립니다." },
          ].map((step) => (
            <div
              key={step.num}
              className="bg-white border border-line rounded-2xl p-6 text-center"
            >
              <div className="inline-flex w-12 h-12 rounded-full bg-accent-red text-white items-center justify-center font-display text-xl font-black italic mb-4">
                {step.num}
              </div>
              <h4 className="font-display text-lg font-bold mb-2">
                {step.title}
              </h4>
              <p className="text-sm text-ink-soft">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-accent-red text-white rounded-2xl p-8">
          <div className="text-xs font-semibold tracking-wider opacity-70 mb-2">
            예시
          </div>
          <p className="font-display text-xl italic leading-relaxed">
            "인라인 / 8세 / 1명 / 둔산동 /<br />
            초보 / 토요일 오전 희망"
          </p>
        </div>
      </div>
    ),
  },
];

export default function SportsPage() {
  return (
    <>
      <SubpageHero
        eyebrow="— Sports Class"
        title="스포츠"
        titleItalic="교실"
        description="인라인, 음악줄넘기, 농구, 보드, 놀이체육, 축구까지. 6개 종목을 현장에서 직접 검증된 커리큘럼으로 가르칩니다."
        deco="Sports"
      />
      <TabMenu tabs={tabs} />
    </>
  );
}
