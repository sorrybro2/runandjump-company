import { SubpageHero } from "@/components/ui/SubpageHero";
import { TabMenu, type Tab } from "@/components/ui/TabMenu";
import {
  BulletList,
  ChipGrid,
  Em,
  HighlightBox,
  InfoGrid,
  InlineCta,
  Lead,
  ProcessSteps,
  SectionTitle,
  SkillTable,
} from "@/components/ui/ContentBlocks";

const certs = [
  ["유아체육지도자", "2009-0210", "런앤점프 컴퍼니"],
  ["유소년축구지도자", "2009-0209", "런앤점프 컴퍼니"],
  ["유소년농구지도자", "2009-0208", "런앤점프 컴퍼니"],
  ["유소년인라인지도자", "2010-0324", "런앤점프 컴퍼니"],
  ["유소년수영지도자", "2010-0323", "런앤점프 컴퍼니"],
  ["음악줄넘기지도자", "2013-0254", "런앤점프 컴퍼니"],
  ["방과후스포츠지도자", "2019-002534", "런앤점프 컴퍼니"],
  ["뉴스포츠지도자", "2019-006182", "런앤점프 컴퍼니"],
];

const linkClass = "text-accent-red underline underline-offset-2 hover:text-accent-red/70";

const tabs: Tab[] = [
  {
    id: "intro",
    num: "01",
    label: "교육 안내",
    content: (
      <>
        <SectionTitle>현장에서 바로 쓸 수 있는 <Em>실전형 교육</Em></SectionTitle>
        <Lead><p>런앤점프 컴퍼니의 지도자교육은 이론만 배우는 교육이 아닙니다. 실제 수업을 구성하고, 아이들을 지도하고, 프로그램을 운영할 수 있는 능력을 기르는 과정입니다.</p></Lead>
        <InfoGrid cards={[
          { icon: "💻", title: "사이버 연수", desc: "총 30시간의 온라인 연수. 시간과 장소에 구애받지 않고 학습 가능합니다." },
          { icon: "📝", title: "필기 시험", desc: "문자나 메일로 문제를 발송하고, 풀어서 회신하는 방식입니다." },
          { icon: "⚡", title: "실기 시험", desc: "종목별 핵심 기술 시연, 지도 발표, 스피치를 포함합니다." },
        ]} />
        <HighlightBox title="이런 분께 추천합니다">
          <BulletList items={["유치원·어린이집·학교에서 체육수업을 맡고 계신 분", "방과후 강사·태권도장 사범으로 활동하시는 분", "스포츠 강사·코치로 창업을 준비하시는 분", "승급 또는 종목 추가를 원하는 분", "5명 이상 단체 연수를 원하는 기관"]} />
        </HighlightBox>
      </>
    ),
  },
  {
    id: "apply",
    num: "02",
    label: "신청 방법",
    content: (
      <>
        <SectionTitle>신청 <Em>방법</Em></SectionTitle>
        <Lead><p>아래 정보를 정리해서 문자로 보내주시면 빠르게 안내드립니다.</p></Lead>
        <ProcessSteps steps={[
          { title: "문자 신청", desc: "이름 / 종목 / 주민번호 앞번호 / 사진파일 / 주소를 보내주세요." },
          { title: "연수 안내", desc: "계좌번호, 사이버 연수 방법, 필기·실기 문제를 발송해드립니다." },
          { title: "교재 & 자격증 발송", desc: "연수와 시험 통과 시 교재와 자격증을 주소지로 발송합니다." },
        ]} />
        <HighlightBox tone="red">
          <p className="font-display text-2xl italic">"홍길동 / 유아체육지도자 1급 / 901225 / 대전시 ○○구 ○○로 (+ 증명사진 파일)"</p>
          <p className="mt-4">010-8944-3907 / 기관문의 042-862-6199</p>
        </HighlightBox>
        <HighlightBox title="재발급 · 환불 안내">
          <BulletList items={["재발급은 1종목당 20,000원입니다.", "연수 시작 전에는 100% 환불 가능합니다.", "연수 시작 후에는 환불이 불가합니다."]} />
        </HighlightBox>
      </>
    ),
  },
  {
    id: "assoc",
    num: "03",
    label: "기관소개",
    content: (
      <>
        <SectionTitle>런앤점프 컴퍼니</SectionTitle>
        <Lead><p>런앤점프 컴퍼니의 모든 지도자 자격증은 런앤점프 컴퍼니가 직접 발급하는 민간자격입니다.</p></Lead>
        <HighlightBox title="기관정보">
          <BulletList items={[
            <>다음 카페: <a href="http://cafe.daum.net/kcpea-1" target="_blank" rel="noopener noreferrer" className={linkClass}>cafe.daum.net/kcpea-1</a></>,
            <>기관문의: <a href="tel:042-862-6199" className={linkClass}>042-862-6199</a></>,
            <>연수원장: <a href="tel:010-8944-3907" className={linkClass}>010-8944-3907</a></>,
          ]} />
        </HighlightBox>
        <SkillTable headers={["자격명", "등록번호", "발급기관"]} rows={certs} />
      </>
    ),
  },
  {
    id: "types",
    num: "04",
    label: "자격 종목",
    content: (
      <>
        <SectionTitle>선택 가능한 <Em>8개 자격</Em></SectionTitle>
        <Lead><p>본인이 활동하실 분야에 맞춰 자격증을 선택하세요. 여러 종목을 동시에 신청하면 할인 혜택이 큽니다.</p></Lead>
        <InfoGrid cards={[
          { icon: "🤸", num: "01", title: "유아체육지도자 1급", desc: "유치원·어린이집 체육수업. 모의수업, 율동, 도구사용법, 수업계획안." },
          { icon: "⚽", num: "02", title: "유소년축구지도자 2급", desc: "볼적응, 놀이훈련법, 드리블, 패스 지도법 중심." },
          { icon: "🏀", num: "03", title: "유소년농구지도자 2급", desc: "볼적응, 드리블, 패스, 슛 지도법 중심." },
          { icon: "🛼", num: "04", title: "유소년인라인지도자 2급", desc: "지상훈련법, 기술 훈련법, 응용기술, 스키기술 포함." },
          { icon: "🏊", num: "05", title: "유소년수영지도자 2급", desc: "물적응, 자유형, 배영, 평영, 접영, 턴, 스타트." },
          { icon: "🪢", num: "06", title: "음악줄넘기지도자 2급", desc: "방과후 음악줄넘기 강사용. 기술 지도법과 음악 작품 응용." },
          { icon: "🏃", num: "07", title: "방과후스포츠지도자", desc: "유소년스포츠개론, 주의집중론, 지도자론." },
          { icon: "🎾", num: "08", title: "뉴스포츠지도자", desc: "티볼·플로어볼 등 뉴스포츠 이론, 규칙, 활용방법." },
        ]} />
      </>
    ),
  },
  {
    id: "fee",
    num: "05",
    label: "비용",
    content: (
      <>
        <SectionTitle>비용 & <Em>할인 혜택</Em></SectionTitle>
        <Lead><p>여러 종목을 동시에 취득하면 비용이 크게 줄어듭니다. 모든 비용에는 연수·교재·자격증 발급비가 포함되어 있습니다.</p></Lead>
        <SkillTable headers={["종목수", "비용"]} rows={[
          ["1종목", "200,000원"],
          ["2종목", "250,000원"],
          ["3종목", "300,000원"],
          ["4종목", "350,000원"],
          ["5종목", "400,000원"],
          ["6종목", "450,000원"],
        ]} />
        <SkillTable headers={["인원수", "할인율", "비고"]} rows={[
          ["2명", "5% 할인", "동시 신청"],
          ["3명", "10% 할인", "동시 신청"],
          ["4명", "15% 할인", "동시 신청"],
          ["5명 이상", "20% 할인", "단체 강습 가능"],
          ["10명 이상", "30% 할인", "단체 강습 권장"],
          ["20명 이상", "40% 할인", "기관 단체"],
          ["30명 이상", "50% 할인", "대규모 단체"],
        ]} />
        <HighlightBox title="단체 연수 안내" tone="red">
          <BulletList items={["5명 이상 단체는 장소만 제공하시면 됩니다.", "노력맨 대표가 직접 찾아가는 강습회를 진행합니다.", "연수 날짜·요일·시간은 자유롭게 협의합니다."]} />
        </HighlightBox>
      </>
    ),
  },
  {
    id: "condition",
    num: "06",
    label: "응시 자격",
    content: (
      <>
        <SectionTitle>응시 <Em>자격</Em> & 합격 기준</SectionTitle>
        <InfoGrid cards={[
          { icon: "📘", num: "2급", title: "2급 자격", desc: "고교 졸업 이상 연령 누구나 가능. 사이버 연수 30시간 + 실기·필기 70점 이상." },
          { icon: "📕", num: "1급", title: "1급 자격", desc: "고교 졸업 이상 + 2급 소지자 또는 타기관 자격소지자. 실기·필기 80점 이상." },
          { icon: "🌟", num: "유아체육", title: "유아체육 — 1급 발급", desc: "유아체육은 2급 없이 바로 1급 발급 가능합니다." },
        ]} />
        <HighlightBox title="승급 & 타기관 자격소지자 혜택">
          <BulletList items={["협회 자격소지자는 연수를 한 번 더 받으면 승급 가능합니다.", "타기관 자격증 사본 제출 시 급수를 한 단계 올려 발급합니다.", "이미 가진 자격을 인정해 빠르게 자격을 강화할 수 있습니다."]} />
        </HighlightBox>
      </>
    ),
  },
  {
    id: "exam",
    num: "07",
    label: "실기 · 필기",
    content: (
      <>
        <SectionTitle>실기 & <Em>필기 시험</Em></SectionTitle>
        <Lead><p>모든 종목은 사이버 연수 → 필기 → 실기 순서로 진행됩니다. 필기는 문자/메일로 받아 풀어서 회신하는 방식입니다.</p></Lead>
        <SkillTable headers={["종목", "실기 시험 내용", "공통"]} rows={[
          ["유아체육", "율동 발표, 지도 발표, 스피치", "지도 발표 + 스피치"],
          ["유소년축구", "리프팅 10회, 드리블, 인사이드 패스", "지도 발표 + 스피치"],
          ["유소년농구", "자유드리블, 레이업슛, 체스트 패스", "지도 발표 + 스피치"],
          ["유소년수영", "자유형·배영·평영·접영 각 25m 완영", "지도 발표 + 스피치"],
          ["유소년인라인", "밀기, 발돌리기, 코너", "지도 발표 + 스피치"],
          ["음악줄넘기", "기술줄넘기, 음악줄넘기 작품 발표", "지도 발표 + 스피치"],
        ]} />
        <ChipGrid items={["유아체육: 모의수업, 도구사용법, 율동진행법", "유소년축구: 볼적응, 놀이훈련, 드리블, 패스", "유소년농구: 볼적응, 드리블, 패스, 규칙", "유소년인라인: 밀기, 팔동작, 발돌리기, 코너", "유소년수영: 자유형, 배영, 평영, 접영", "방과후스포츠: 이론, 주의집중론, 지도자론", "뉴스포츠: 이론, 종류, 활용방법"]} />
      </>
    ),
  },
  {
    id: "content",
    num: "08",
    label: "수업 내용",
    content: (
      <>
        <SectionTitle>실제 <Em>수업 내용</Em></SectionTitle>
        <Lead><p>각 종목별로 사이버 연수에서 다루는 핵심 지도법입니다.</p></Lead>
        <InfoGrid cards={[
          { icon: "🤸", title: "유아체육지도자", desc: "모의수업, 율동 활용법, 도구 사용법, 신체표현법, 기초체력 놀이법, 수업 계획안." },
          { icon: "⚽", title: "유소년축구지도자", desc: "볼 적응 훈련, 놀이를 통한 훈련, 드리블 훈련, 패스 훈련." },
          { icon: "🏀", title: "유소년농구지도자", desc: "볼 적응, 드리블, 패스, 슛 훈련법." },
          { icon: "🛼", title: "유소년인라인지도자", desc: "지상 훈련, 스케이트 기술, 응용 기술, 스키 기술." },
          { icon: "🏊", title: "유소년수영지도자", desc: "물 적응, 자유형·배영·평영·접영, 턴·스타트." },
          { icon: "🪢", title: "음악줄넘기지도자", desc: "기술줄넘기, 되돌리기, 음악 작품, 긴줄·짝줄 응용." },
        ]} />
        <InlineCta title="지금 자격증 취득을 시작하세요" desc="이번 달 안에 자격증을 받아보실 수 있습니다." label="📞 010-8944-3907" />
      </>
    ),
  },
];

export default function CertPage() {
  return (
    <>
      <SubpageHero
        eyebrow="— Certification Program"
        title="지도자"
        titleItalic="교육"
        description="런앤점프 컴퍼니의 8개 민간자격을 취득할 수 있습니다. 현장에서 바로 사용할 수 있는 실전형 교육을 지향합니다."
        deco="Cert"
      />
      <TabMenu tabs={tabs} />
    </>
  );
}
