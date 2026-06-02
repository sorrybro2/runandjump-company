import { SubpageHero } from "@/components/ui/SubpageHero";
import { TabMenu, type Tab } from "@/components/ui/TabMenu";
import {
  BulletList,
  CaseList,
  Em,
  HighlightBox,
  InfoGrid,
  InlineCta,
  Lead,
  ProcessSteps,
  SectionTitle,
} from "@/components/ui/ContentBlocks";

const tabs: Tab[] = [
  {
    id: "intro",
    num: "01",
    label: "제작 분야",
    content: (
      <>
        <SectionTitle>실용성 중심의 <Em>맞춤형 홈페이지</Em></SectionTitle>
        <Lead><p>대단한 디자인보다 방문자가 원하는 정보를 빠르게 찾을 수 있는 구조가 중심입니다. 1인기업·강사·매장 운영자 분들이 직접 운영하실 수 있도록 만들어드립니다.</p></Lead>
        <InfoGrid cards={[
          { icon: "🎓", title: "강사 / 교육", desc: "강의·경력·자격증을 한눈에 보여주는 강사 프로필 형태. 수강 신청 폼 포함." },
          { icon: "🏪", title: "매장 / 상점", desc: "오시는 길·운영 시간·제품 안내·예약 시스템. 네이버 지도 연동 가능." },
          { icon: "📚", title: "학원 / 교실", desc: "커리큘럼·강사진·시간표·수강료·문의 폼." },
          { icon: "💼", title: "1인기업 / 프리랜서", desc: "서비스·포트폴리오·후기를 정리한 명함형 홈페이지." },
          { icon: "⛪", title: "소규모 단체", desc: "교회·동호회·협회·소규모 모임의 정보 안내 및 소통용." },
          { icon: "🎪", title: "공연 / 이벤트", desc: "공연 안내·실적·예약 시스템. 공연 단체에 특화된 구조." },
        ]} />
        <HighlightBox title="우리가 만드는 홈페이지의 특징">
          <BulletList items={["실용성 우선 — 방문자 편의성 중심 설계", "모바일 최적화", "비전문가도 직접 수정 가능한 관리 편의성", "사업 성격에 맞춘 맞춤 디자인", "방문자 입장에서 정보 찾기 쉬운 메뉴 구성"]} />
        </HighlightBox>
      </>
    ),
  },
  {
    id: "cases",
    num: "02",
    label: "제작 사례",
    content: (
      <>
        <SectionTitle>말보다 <Em>결과물</Em>로 증명합니다</SectionTitle>
        <Lead>
          <p>
            지금 보고 계신 이 홈페이지를 포함해, 실제로 운영 중인 사이트와
            업무 시스템을 직접 기획·제작해 왔습니다. 화려한 설명보다 &lsquo;실제로
            돌아가는 결과물&rsquo;이 가장 확실한 증거라고 생각합니다.
          </p>
        </Lead>
        <CaseList
          cases={[
            {
              tag: "이 사이트",
              status: "라이브",
              title: "런앤점프 컴퍼니 홈페이지",
              role: "지금 보고 계신 이 홈페이지를 직접 기획·디자인·제작했습니다.",
              points: [
                "8개 사업을 한 곳에 정리한 종합 콘텐츠 사이트",
                "모바일 최적화와 부드러운 스크롤 인터랙션 적용",
                "직접 내용을 수정·운영할 수 있는 구조",
              ],
              note: "← 지금 보고 계신 이 사이트가 바로 그 결과물입니다.",
            },
            {
              tag: "사내 시스템",
              status: "운영 중",
              title: "법무법인 그룹사 사내 업무 시스템 개발",
              role: "전국 10개 지사가 사용하는 사내 업무 시스템을 기획부터 개발·운영까지 직접 맡았습니다. 고객 관리(CRM)·사건 관리 앱 등 여러 시스템을 만들었습니다.",
              points: [
                "고객 관리(CRM)·사건 관리 앱 등 업무 시스템 직접 개발",
                "전국 10개 지사 직원이 실제 업무에 매일 사용",
                "오픈 후에도 직접 운영하며 계속 개선 중인 실서비스",
              ],
              note: "사내 보안 시스템이라 실제 화면은 공개하지 않습니다.",
            },
            {
              tag: "기업 홈페이지",
              status: "운영 중",
              title: "법무법인 공식 홈페이지 운영",
              role: "외부 업체가 만들었던 홈페이지를 직접 넘겨받아, 사내에서 바로 수정·관리하는 체계로 전환했습니다.",
              points: [
                "외주에 의존하던 사이트를 직접 관리 가능한 구조로 이관",
                "수정 때마다 들던 외주 비용과 대기 시간 절감",
                "현재까지 직접 유지보수하며 운영 중",
              ],
              note: "고객사 보호를 위해 사이트 주소는 공개하지 않습니다.",
            },
          ]}
        />
        <HighlightBox tone="red">
          <p className="font-display text-2xl italic">
            &ldquo;지금 보고 계신 이 홈페이지도 저희가 직접 만들었습니다.&rdquo;
          </p>
          <p className="mt-4">
            큰 회사의 시스템부터 1인기업 홈페이지까지 — 끝까지 책임지고 만들고,
            오픈 후 유지보수까지 원하시는 대로 맡아 드립니다.
          </p>
        </HighlightBox>
        <InlineCta
          title="여러분의 1인 사업을, 홈페이지로 표현하세요"
          desc="어떻게 보여줄지 막막해도 괜찮습니다. 무료 상담으로 함께 정리해 드립니다."
          label="📞 010-8944-3907"
        />
      </>
    ),
  },
  {
    id: "structure",
    num: "03",
    label: "구성 예시",
    content: (
      <>
        <SectionTitle>홈페이지 <Em>구성 예시</Em></SectionTitle>
        <Lead><p>업종에 맞춘 가장 자주 쓰이는 구성입니다. 본인 필요에 따라 자유롭게 조정 가능합니다.</p></Lead>
        <InfoGrid cards={[
          { icon: "🎓", num: "예시 1", title: "회사소개형", desc: "메인 인사, 회사/대표 소개, 사업 분야, 실적, 오시는 길, 문의." },
          { icon: "📅", num: "예시 2", title: "예약형", desc: "서비스 안내, 가격표, 가능 시간, 예약 신청 폼, 후기, FAQ." },
          { icon: "🛒", num: "예시 3", title: "스토어형", desc: "상품 카탈로그, 상세 페이지, 주문/결제, 배송 안내, 후기/Q&A." },
          { icon: "📚", num: "예시 4", title: "학원/교실형", desc: "학원 소개, 강사진, 커리큘럼, 수강료/시간표, 등록 문의, 갤러리." },
          { icon: "👤", num: "예시 5", title: "프로필형", desc: "슬로건, 본인 소개, 경력/자격, 활동 영역, 연락처, SNS." },
          { icon: "🎯", num: "예시 6", title: "맞춤형", desc: "위 예시를 자유롭게 조합하여 사업에 가장 잘 맞는 구조로 설계." },
        ]} />
        <HighlightBox title="가장 추천하는 구성 — 통합형">
          <BulletList items={["메인: 핵심 메시지 + 주요 서비스", "회사/본인 소개: 신뢰감 형성", "서비스/상품: 제공 내용 명확화", "실적/후기: 사회적 증명", "문의/예약: 행동 유도", "오시는 길: 오프라인 매장 필수"]} />
        </HighlightBox>
      </>
    ),
  },
  {
    id: "process",
    num: "04",
    label: "제작 절차",
    content: (
      <>
        <SectionTitle>제작 <Em>절차</Em></SectionTitle>
        <Lead><p>상담부터 완성까지 단계적으로 진행됩니다. 각 단계마다 확인을 받고 진행하므로 안심하실 수 있습니다.</p></Lead>
        <InfoGrid cards={[
          { num: "STEP 1", title: "상담 & 기획", desc: "사업 성격·목적·예산을 함께 정리합니다." },
          { num: "STEP 2", title: "견적 안내", desc: "요구사항에 맞춘 정확한 견적을 제시합니다." },
          { num: "STEP 3", title: "자료 수집", desc: "회사 정보·사진·로고·텍스트 등 필요한 자료를 정리합니다." },
          { num: "STEP 4", title: "디자인 시안", desc: "메인 페이지 시안 제작 → 확인 → 수정." },
          { num: "STEP 5", title: "본격 제작", desc: "승인된 시안 기반으로 전체 페이지와 모바일 최적화를 진행합니다." },
          { num: "STEP 6", title: "검수 & 수정", desc: "전체 페이지 확인 후 수정 사항을 반영합니다." },
          { num: "STEP 7", title: "오픈 & 운영 가이드", desc: "홈페이지 오픈과 직접 관리 가능한 운영 가이드를 제공합니다." },
        ]} />
        <HighlightBox title="포함되는 작업">
          <BulletList items={["전체 페이지 디자인", "모바일 반응형 작업", "로고/이미지 기본 편집", "문의 폼·예약 시스템", "네이버 지도·SNS 연동", "도메인 연결 안내", "운영 관리 가이드"]} />
        </HighlightBox>
        <HighlightBox title="예상 제작 기간" tone="orange">
          <BulletList items={["간단한 1페이지 홈페이지: 1~2주", "5~7페이지 표준형: 3~4주", "스토어형·예약시스템 포함: 4~6주", "자료 준비 속도에 따라 변동됩니다."]} />
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
        <Lead><p>먼저 무료 상담으로 본인에게 필요한 홈페이지가 무엇인지 함께 정리합니다.</p></Lead>
        <ProcessSteps steps={[
          { title: "상담 신청", desc: "전화·문자·이메일로 연락. 사업 성격과 원하는 방향을 알려주세요." },
          { title: "견적 확인", desc: "구체적인 견적과 일정을 안내드립니다. 부담 없이 검토해보세요." },
          { title: "제작 시작", desc: "계약 후 STEP 1부터 시작. 정해진 일정 안에 완성합니다." },
        ]} />
        <HighlightBox tone="red">
          <p className="font-display text-2xl italic">"유치원 홈페이지 / 8페이지 정도 / 예약 시스템 포함 / 12월 오픈 희망"</p>
        </HighlightBox>
        <HighlightBox title="사전에 확인해두시면 좋은 것">
          <BulletList items={["홈페이지 목적", "참고하고 싶은 사이트", "준비된 자료", "희망 오픈 일정", "예산 범위"]} />
        </HighlightBox>
        <InlineCta title="나만의 홈페이지를 시작하세요" desc="견적 상담은 무료입니다." label="📞 010-8944-3907" />
      </>
    ),
  },
];

export default function WebPage() {
  return (
    <>
      <SubpageHero
        eyebrow="— Web Development"
        title="홈페이지"
        titleItalic="제작"
        description="강사·매장·학원·1인기업을 위한 실용적인 홈페이지를 만듭니다. 지금 보고 계신 이 사이트도 직접 만들었습니다 — 방문자가 원하는 정보를 빠르게 찾을 수 있는 구조가 중심입니다."
        deco="Web"
      />
      <TabMenu tabs={tabs} />
    </>
  );
}
