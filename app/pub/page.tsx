import { SubpageHero } from "@/components/ui/SubpageHero";
import { TabMenu, type Tab } from "@/components/ui/TabMenu";
import {
  BulletList,
  Em,
  HighlightBox,
  InfoGrid,
  InlineCta,
  Lead,
  ProcessSteps,
  QuoteBox,
  SectionTitle,
} from "@/components/ui/ContentBlocks";

const tabs: Tab[] = [
  {
    id: "intro",
    num: "01",
    label: "과정 소개",
    content: (
      <>
        <SectionTitle>내 이름으로 된 책, <Em>내 손으로 직접 만든다</Em></SectionTitle>
        <Lead><p>출판 개인 PT는 책을 쓰고 싶은 사람을 위한 4개월 과정입니다. 막연한 책 쓰기가 아니라 기획부터 원고 작성, 내지/표지 디자인, 전자책 출판, 종이책 출판까지 실제 결과물을 만드는 과정입니다.</p></Lead>
        <QuoteBox>스스로 뛰고(Run) 책으로 도약(Jump)하는 성장의 기록. 기획부터 유통까지의 전 과정을 1:1로 함께 갑니다.</QuoteBox>
        <InfoGrid cards={[
          { icon: "💭", title: "책을 내고 싶었던 분", desc: "오랫동안 마음에만 담아두었던 책 쓰기를 실제 결과물로 만들고 싶은 분." },
          { icon: "📖", title: "전문성을 책으로 정리하고 싶은 분", desc: "강사·전문가·1인기업의 경험과 노하우를 책으로 브랜딩." },
          { icon: "🎯", title: "인생의 한 챕터를 정리하고 싶은 분", desc: "은퇴·전환기·창업 등 인생의 한 매듭을 책으로 남기고 싶은 분." },
        ]} />
      </>
    ),
  },
  {
    id: "steps",
    num: "02",
    label: "4단계 STEP",
    content: (
      <>
        <SectionTitle>4개월 · <Em>4단계 STEP</Em></SectionTitle>
        <Lead><p>한 달에 한 단계씩, 책이 완성되어 가는 과정을 함께합니다.</p></Lead>
        <InfoGrid cards={[
          { icon: "✏️", num: "STEP 1", title: "원고 쓰기", desc: "주제·목차 기획부터 원고 작성까지. 책의 뼈대와 핵심 콘텐츠를 채웁니다." },
          { icon: "🎨", num: "STEP 2", title: "디자인 작업", desc: "표지 디자인과 내지 편집. 출판 수준의 결과물로 다듬습니다." },
          { icon: "📱", num: "STEP 3", title: "전자책 출판", desc: "먼저 전자책으로 빠르게 출판하고 시장 반응을 확인합니다." },
          { icon: "📚", num: "STEP 4", title: "종이책 출판", desc: "최종적으로 종이책 출간. 내 이름이 새겨진 진짜 책을 받습니다." },
        ]} />
        <HighlightBox title="4개월 후 결과물" tone="red">
          <BulletList items={["완성된 전자책 + 종이책", "표지 디자인 + 내지 디자인 완성", "서점·플랫폼 유통 가능 상태", "다음 책도 혼자 낼 수 있는 출판 노하우"]} />
        </HighlightBox>
      </>
    ),
  },
  {
    id: "strength",
    num: "03",
    label: "5가지 핵심 장점",
    content: (
      <>
        <SectionTitle>책쓰기 PT만의 <Em>5가지 핵심 장점</Em></SectionTitle>
        <InfoGrid cards={[
          { num: "01", title: "출판 자립 기술 습득", desc: "평생 스스로 책 출판을 할 수 있는 기술을 전수받습니다." },
          { num: "02", title: "인세 수익 즉시 발생", desc: "직접 유통을 통해 책의 수익 구조를 직접 관리합니다." },
          { num: "03", title: "전문가 1:1 밀착 코칭", desc: "풍부한 집필 노하우를 가진 진작가가 매주 진척도를 관리합니다." },
          { num: "04", title: "전자책 · 종이책 동시 출간", desc: "디지털과 아날로그 두 시장을 동시에 아우르는 출판 전략." },
          { num: "05", title: "4개월 내 출판 보장", desc: "기간 내 반드시 본인의 책을 서점에 올리는 결과를 만듭니다." },
        ]} />
        <QuoteBox>고기를 잡아드리는 것이 아니라, 평생 고기 잡는 법을 가르쳐 드립니다.</QuoteBox>
      </>
    ),
  },
  {
    id: "method",
    num: "04",
    label: "코칭 방식",
    content: (
      <>
        <SectionTitle>코칭 <Em>방식</Em></SectionTitle>
        <Lead><p>본인의 환경과 일정에 맞춰 가장 효과적인 방식으로 코칭이 진행됩니다.</p></Lead>
        <InfoGrid cards={[
          { icon: "👥", title: "대면 코칭", desc: "직접 만나 1:1 집중 코칭. 깊이 있는 대화와 실시간 피드백." },
          { icon: "💻", title: "온라인 코칭", desc: "Zoom 등 온라인 화상으로 진행. 지역 제한 없이 가능." },
          { icon: "📞", title: "전화 상담", desc: "중간 점검과 궁금증 해소에 최적." },
          { icon: "📋", title: "과제 수행", desc: "단계별 과제를 부여하고 집필 완성도를 점검." },
          { icon: "📝", title: "원고 첨삭", desc: "출판 수준의 원고로 다듬어드립니다." },
        ]} />
        <HighlightBox title="트레이너 — 진작가">
          <BulletList items={["30여 권 자비 출판 & 기획 출판 경험", "다양한 장르의 책 직접 집필", "기획·출판·유통 통합 경험", "출간 후 마케팅·유통까지 함께 고민"]} />
        </HighlightBox>
      </>
    ),
  },
  {
    id: "apply",
    num: "05",
    label: "신청 방법",
    content: (
      <>
        <SectionTitle>신청 <Em>방법</Em></SectionTitle>
        <Lead><p>책 한 권의 인생이 시작됩니다.</p></Lead>
        <ProcessSteps steps={[
          { title: "전화 상담", desc: "책 주제·본인의 경험·목표를 자유롭게 이야기합니다." },
          { title: "기획 협의", desc: "책의 방향·구성·일정을 함께 결정합니다." },
          { title: "4개월 코칭 시작", desc: "STEP 1부터 시작해 4개월 후 출간까지 함께 갑니다." },
        ]} />
        <QuoteBox>당신의 30년 인생을 한 권의 책으로 정리하는 시간.</QuoteBox>
        <InlineCta title="지금 책쓰기 PT 모집 중" desc="4개월 후, 당신의 책을 받아보실 수 있습니다." label="📞 010-8944-3907" />
      </>
    ),
  },
];

export default function PubPage() {
  return (
    <>
      <SubpageHero
        eyebrow="— Publishing Training"
        title="퍼블리싱"
        titleItalic="트레이닝"
        description="4개월 · 무조건 출판합니다. 기획부터 원고, 디자인, 전자책, 종이책 출판까지 실제 결과물을 만드는 과정입니다."
        deco="Pub"
      />
      <TabMenu tabs={tabs} />
    </>
  );
}
