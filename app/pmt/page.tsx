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
  SkillTable,
} from "@/components/ui/ContentBlocks";

const tabs: Tab[] = [
  {
    id: "intro",
    num: "01",
    label: "과정 소개",
    content: (
      <>
        <SectionTitle>운동을 하듯 <Em>인생도 훈련이 필요합니다</Em></SectionTitle>
        <Lead><p>자기경영 개인 PT는 삶을 체계적으로 관리하고 싶은 사람을 위한 10주 과정입니다. 목표·시간·습관·독서·관계·이미지·돈·행복 등을 주제로 자신만의 관리 시스템을 만들어갑니다.</p></Lead>
        <QuoteBox>막연히 잘 살고 싶다는 마음이 아니라, 구체적인 행동과 결과로 인생을 바꾸는 시간.</QuoteBox>
        <InfoGrid cards={[
          { icon: "🎯", title: "목표가 흐릿한 분", desc: "무엇을 위해 살고 있는지, 어떤 방향으로 가야 할지 명확하지 않은 분." },
          { icon: "⏰", title: "시간 관리가 어려운 분", desc: "매일 바쁘지만 무엇을 했는지 모르는, 시간을 통제하고 싶은 분." },
          { icon: "🔄", title: "좋은 습관을 만들고 싶은 분", desc: "마음만 먹고 시작하지 못하는, 꾸준한 실천 시스템이 필요한 분." },
          { icon: "📚", title: "독서·자기계발을 체계화하고 싶은 분", desc: "책을 읽지만 남는 것이 없거나, 독서를 삶에 적용하고 싶은 분." },
          { icon: "💼", title: "이미지 · 스피치가 필요한 분", desc: "대외 활동을 늘리고 싶지만 말투와 이미지에 자신이 없는 분." },
          { icon: "💰", title: "돈 관리 시스템이 필요한 분", desc: "소득은 늘었는데 자산이 쌓이지 않는 분." },
        ]} />
        <HighlightBox title="PT 특징" tone="red">
          <BulletList items={["1:1 개인 맞춤 코칭", "10주 후 본인만의 실전 매뉴얼 완성", "발명특허 '자기관리 다이어리' 기반 코칭", "'미라클 자기경영' · '하루 5분 자기경영 수업' 저자의 실전 노하우"]} />
        </HighlightBox>
      </>
    ),
  },
  {
    id: "curriculum",
    num: "02",
    label: "10주 커리큘럼",
    content: (
      <>
        <SectionTitle>10주 <Em>커리큘럼</Em></SectionTitle>
        <Lead><p>매주 한 가지 주제에 집중하여 자신만의 관리 시스템을 단계적으로 완성합니다.</p></Lead>
        <SkillTable headers={["주차", "주제", "주요 내용"]} rows={[
          ["1주차", "나 찾기", "현재 삶의 상태 점검 — 강점·약점·환경 분석"],
          ["2주차", "목표 설정", "장기·단기 목표 수립 — SMART 방식 적용"],
          ["3주차", "시간 관리", "하루·주간 루틴 설계 — 중요도/긴급도 매트릭스"],
          ["4주차", "습관 관리", "좋은 습관 만들기 — 환경 설계와 트래킹"],
          ["5주차", "독서 관리", "독서 계획과 기록법 — 적용까지 연결"],
          ["6주차", "관계 관리", "인간관계 점검 — 가족·친구·동료 매핑"],
          ["7주차", "이미지 관리", "말투·태도·외적 이미지 — 첫인상과 신뢰도"],
          ["8주차", "돈 관리", "소비 습관과 재정 점검 — 자산 시스템 설계"],
          ["9주차", "스피치 관리", "실천 점검과 피드백 — 자기 표현력 강화"],
          ["10주차", "자기경영 시스템 완성", "나만의 관리 매뉴얼 만들기 — 최종 정리"],
        ]} />
        <QuoteBox>10주 후, 당신은 본인만의 시스템 위에서 인생을 움직이게 됩니다.</QuoteBox>
      </>
    ),
  },
  {
    id: "method",
    num: "03",
    label: "코칭 방식",
    content: (
      <>
        <SectionTitle>코칭 <Em>방식</Em></SectionTitle>
        <Lead><p>대면·온라인·전화·과제 수행 등 다양한 방식으로 진행됩니다. 본인의 일정과 거주지에 맞춰 유연하게 운영합니다.</p></Lead>
        <InfoGrid cards={[
          { icon: "👥", title: "대면 코칭", desc: "직접 만나서 1:1로 진행. 깊이 있는 대화와 실시간 피드백 가능." },
          { icon: "💻", title: "온라인 코칭", desc: "Zoom 등 온라인 화상으로 실시간 진행. 지역 제한 없이 가능." },
          { icon: "📞", title: "전화 코칭", desc: "전화 상담으로 빠른 점검. 보조 채널로도 활용 가능." },
          { icon: "📋", title: "과제 수행", desc: "매주 과제 점검을 통해 실천 점검과 다음 주차 준비." },
          { icon: "📝", title: "원고 첨삭", desc: "본인이 작성하는 자기 매뉴얼·계획서·일기 등을 점검." },
          { icon: "🎯", title: "맞춤형 지원", desc: "개인의 상황과 목표에 따라 코칭 강도와 방식을 조절." },
        ]} />
        <HighlightBox title="트레이너 — 노력맨 진낙식">
          <BulletList items={["발명특허 보유 — '자기관리 다이어리'", "'미라클 자기관리 다이어리' · '미라클 자기경영' 저자", "3P 셀프리더십 스쿨 프로과정 수료", "공병호 자기경영 과정 수료", "독서경영전문가 마스터 자격"]} />
        </HighlightBox>
      </>
    ),
  },
  {
    id: "apply",
    num: "04",
    label: "신청 방법",
    content: (
      <>
        <SectionTitle>신청 <Em>방법</Em></SectionTitle>
        <Lead><p>먼저 무료 사전 상담을 통해 본인 상황을 점검하고, 함께 시작 여부를 결정합니다.</p></Lead>
        <ProcessSteps steps={[
          { title: "사전 상담", desc: "전화로 본인의 상황·고민·목표를 자유롭게 이야기합니다. 30분 무료 상담." },
          { title: "방식 결정 & 시작", desc: "대면·온라인 중 선택. 일정 협의 후 1주차 시작." },
          { title: "10주 진행", desc: "매주 1회 코칭 + 과제 수행. 10주 후 자기경영 시스템 완성." },
        ]} />
        <InlineCta title="지금 첫 상담을 신청하세요" desc="비용·일정·방식 모두 부담 없이 상담하실 수 있습니다." label="📞 010-8944-3907" />
      </>
    ),
  },
];

export default function PmtPage() {
  return (
    <>
      <SubpageHero
        eyebrow="— Personal Management Training"
        title="퍼스널 매니지먼트"
        titleItalic="트레이닝"
        description="자기경영 개인 PT는 삶을 체계적으로 관리하고 싶은 사람을 위한 10주 과정입니다. 운동을 하듯 인생도 훈련이 필요합니다."
        deco="PMT"
      />
      <TabMenu tabs={tabs} />
    </>
  );
}
