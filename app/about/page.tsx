import { SubpageHero } from "@/components/ui/SubpageHero";
import { TabMenu, type Tab } from "@/components/ui/TabMenu";
import { STATS } from "@/lib/data";

// 각 탭의 콘텐츠를 별도 컴포넌트로 분리하면 더 깔끔합니다.
// 여기는 시작용으로 한 파일에 모두 작성.

const tabs: Tab[] = [
  {
    id: "intro",
    num: "01",
    label: "대표 인사",
    content: (
      <div className="max-w-4xl">
        <h2 className="font-display text-4xl font-bold mb-8">
          안녕하세요, <span className="italic text-accent-red">노력맨</span>{" "}
          진낙식입니다
        </h2>
        <div className="prose-rj space-y-6 text-lg text-ink-soft leading-relaxed mb-12">
          <p>
            저는 체육학을 평생 공부하고, 30여 권의 책을 쓰고, 50개가 넘는
            자격증을 취득하며 현장을 떠나지 않은 사람입니다.
          </p>
          <p>
            "노력맨"이라는 이름은 거창한 의미가 아니라, 매일 한 가지씩 해내고
            있다는 사실에 대한 다짐입니다.
          </p>
          <p>
            런앤점프 컴퍼니는 그 노력의 결과물을 8개의 사업으로 정리한
            플랫폼입니다.
          </p>
        </div>

        {/* 통계 박스 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-line rounded-xl p-6 text-center"
            >
              <div className="font-display text-4xl font-black text-accent-red mb-2">
                {stat.num}
              </div>
              <div className="text-sm text-ink-mute">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "career",
    num: "02",
    label: "학력·경력",
    content: (
      <div className="max-w-4xl space-y-12">
        <section>
          <h3 className="font-display text-2xl font-bold mb-4 pb-2 border-b-2 border-accent-red inline-block">
            학력
          </h3>
          <ul className="space-y-3 text-ink-soft">
            <li>• 체육학 박사 (Ph.D)</li>
            <li>• 체육학 석사</li>
            <li>• 체육학 학사</li>
          </ul>
        </section>

        <section>
          <h3 className="font-display text-2xl font-bold mb-4 pb-2 border-b-2 border-accent-red inline-block">
            현직
          </h3>
          <ul className="space-y-3 text-ink-soft">
            <li>• 런앤점프 컴퍼니 대표</li>
            <li>• 한국유소년스포츠협회 연수원장</li>
            <li>• 스포츠·자기경영·출판 PT 코치</li>
          </ul>
        </section>

        <section>
          <h3 className="font-display text-2xl font-bold mb-4 pb-2 border-b-2 border-accent-red inline-block">
            강사 활동
          </h3>
          <p className="text-ink-soft leading-relaxed">
            유치원·어린이집·초등학교·태권도장·교회·복지관·기업 등 다양한
            현장에서 15년 이상 강사로 활동.
          </p>
        </section>
      </div>
    ),
  },
  {
    id: "books",
    num: "03",
    label: "저서",
    content: (
      <div className="max-w-4xl">
        <h2 className="font-display text-3xl font-bold mb-6">
          30여 권의 <span className="italic text-accent-red">저서</span>
        </h2>
        <p className="text-ink-soft mb-10 leading-relaxed">
          체육·교육·자기경영·줄넘기 등 다양한 분야의 책을 직접 기획·집필·출판.
        </p>

        <div className="flex flex-wrap gap-2">
          {[
            "미라클 자기경영",
            "하루 5분 자기경영 수업",
            "미라클 자기관리 다이어리",
            "음악줄넘기 지도법",
            "유소년 축구 교실",
            "유아체육 매뉴얼",
            "노력맨의 책쓰기 노트",
            "버블쇼 강습 매뉴얼",
          ].map((book) => (
            <span
              key={book}
              className="px-4 py-2 bg-white border border-line rounded-full text-sm text-ink-soft hover:bg-accent-red hover:text-white hover:border-accent-red transition-colors cursor-default"
            >
              📕 {book}
            </span>
          ))}
          <span className="px-4 py-2 bg-cream-deep rounded-full text-sm text-ink-mute">
            + 더 많은 도서
          </span>
        </div>

        <div className="mt-10 p-6 bg-accent-gold/10 rounded-2xl border border-accent-gold/30">
          <div className="font-display text-lg font-bold mb-2">
            🏆 발명특허 보유
          </div>
          <p className="text-sm text-ink-soft">
            "자기관리 다이어리" 발명특허 보유 — 자기경영 PT 프로그램의 핵심 도구
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "philosophy",
    num: "04",
    label: "교육 철학",
    content: (
      <div className="max-w-4xl">
        <h2 className="font-display text-3xl font-bold mb-10">
          노력맨의 <span className="italic text-accent-red">3가지 철학</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              num: "01",
              title: "노력의 가치",
              desc: "재능보다 꾸준한 노력이 결국 이긴다.",
            },
            {
              num: "02",
              title: "현장의 검증",
              desc: "이론보다 실제 가르치고 만들어본 것만 전한다.",
            },
            {
              num: "03",
              title: "자립형 시스템",
              desc: "한 번 배우면 평생 혼자서도 할 수 있게.",
            },
          ].map((item) => (
            <div
              key={item.num}
              className="bg-white p-8 rounded-2xl border border-line"
            >
              <div className="font-display text-3xl italic font-black text-accent-red mb-4">
                {item.num}
              </div>
              <h3 className="font-display text-xl font-bold mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <SubpageHero
        eyebrow="— About"
        title="회사"
        titleItalic="소개"
        description="런앤점프 컴퍼니는 노력맨 진낙식 대표가 운영하는 1인 종합 콘텐츠 기업입니다. 체육학 박사 학위와 30여 권의 저서, 50개 이상의 자격증을 보유하고 있습니다."
        deco="About"
      />
      <TabMenu tabs={tabs} />
    </>
  );
}
