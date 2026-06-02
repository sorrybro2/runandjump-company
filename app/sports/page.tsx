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
  MascotLead,
  MascotRow,
  PhotoGrid,
  ProcessSteps,
  SectionTitle,
  SkillTable,
} from "@/components/ui/ContentBlocks";
import { MASCOTS } from "@/lib/data";

const sports = [
  { num: "01 / 06", icon: "🛼", title: "인라인교실", desc: "균형감각·하체근력·민첩성·방향 전환 능력을 기르는 단계별 수업입니다." },
  { num: "02 / 06", icon: "🪢", title: "음악줄넘기", desc: "체력·리듬감·순발력·집중력을 함께 키우는 급수형 프로그램입니다." },
  { num: "03 / 06", icon: "🏀", title: "농구교실", desc: "드리블·패스·슛·수비·팀플레이를 배우며 사회성을 함께 기릅니다." },
  { num: "04 / 06", icon: "🛹", title: "보드교실", desc: "롱보드와 스케이트보드로 균형감각과 자신감을 키웁니다." },
  { num: "05 / 06", icon: "🎈", title: "놀이체육", desc: "유아·초등 저학년을 위한 도구 중심 종합 운동 프로그램입니다." },
  { num: "06 / 06", icon: "⚽", title: "축구교실", desc: "공을 차는 즐거움에서 팀워크와 경기 이해까지 이어갑니다." },
];

const tabs: Tab[] = [
  {
    id: "overview",
    num: "01",
    label: "종목 안내",
    content: (
      <>
        <SectionTitle>아이가 자라는 모든 단계에 <Em>필요한 운동</Em>이 있습니다</SectionTitle>
        <Lead>
          <p>런앤점프 스포츠교실은 단순한 기술 전달이 아니라, 아이의 발달 단계에 맞춘 체계적인 운동 교육을 제공합니다. 6개 종목 모두 노력맨 대표가 직접 지도하거나 검증된 강사가 진행합니다.</p>
        </Lead>
        <MascotRow
          items={[
            { src: MASCOTS.inline, label: "인라인" },
            { src: MASCOTS.rope, label: "음악줄넘기" },
            { src: MASCOTS.basket, label: "농구" },
            { src: MASCOTS.board, label: "보드" },
            { src: MASCOTS.play, label: "놀이체육" },
            { src: MASCOTS.soccer, label: "축구" },
          ]}
        />
        <InfoGrid cards={sports} />
        <InlineCta title="어떤 종목이 우리 아이에게 맞을까요?" desc="아이 연령과 성향에 맞춰 추천해드립니다. 부담 없이 문의주세요." label="📞 010-8944-3907" />
      </>
    ),
  },
  {
    id: "inline",
    num: "02",
    label: "인라인",
    content: (
      <>
        <SectionTitle>인라인<Em>교실</Em></SectionTitle>
        <MascotLead src={MASCOTS.inline} alt="인라인교실 노력맨 캐릭터">
          <p>인라인교실은 균형감각, 하체 근력, 민첩성, 방향 전환 능력을 기르는 데 효과적인 프로그램입니다. 보호장비 착용법부터 안전하게 넘어지는 방법, 기본 주행, 정지, 회전, 장애물 통과까지 단계적으로 배웁니다.</p>
        </MascotLead>
        <PhotoGrid
          photos={[
            { src: "/assets/inline-class-photo.png", alt: "실내 마룻바닥에서 인라인을 타는 아이", caption: "실내 기본 주행 수업" },
            { src: "/assets/guidebook/page_18_image_8.png", alt: "야외 스케이트장에서 인라인을 타는 아이들", caption: "야외 응용 주행" },
          ]}
        />
        <SkillTable
          headers={["단계", "기본 기술", "브레이크 기술"]}
          rows={[
            ["기초", "신고 벗기 / 넘어지고 일어나기 / 꽃게 걷기", "뒷꿈치 / A자 / 토끼 점프"],
            ["초급", "T자 / V자 걷기 / 한발 항아리", "항아리 / 한발 점프"],
            ["중급", "뒤로 T자 / 코브라 / 스네이크", "파워브레이크 / 발레"],
            ["상급", "C자 / 한발 점프 / 한발 피쉬 / 스파이럴", "하키 STOP / 평행턴"],
            ["고급", "뒤로 한발 / 뒤로 코브라&스네이크", "2콤보 / 방향전환 점프"],
            ["선수", "선수 하키 / 선수 이글", "레이싱 전용 기술"],
          ]}
        />
        <SkillTable
          headers={["단계", "빙상·레이싱 기술", "응용 / 야외 기술"]}
          rows={[
            ["기초", "밀기 / 벌리고 모으기", "꽃게 걷기 / 직활강"],
            ["초급", "팔동작 / 팔동작 + 밀기", "A자 내려가기 / V자 올라가기"],
            ["중급", "발돌리기 / 찍기 / 건너가기", "A자 브레이크 / 프르그보겐"],
            ["상급", "코너 / 더블", "업 다운 / 뒤로 내려가기"],
            ["고급", "직선 + 코너 스피드 / 스타트", "숏턴"],
            ["선수", "더블푸쉬", "하키 / 레이싱대회"],
          ]}
        />
        <HighlightBox title="레크리에이션 활동">
          <BulletList items={["콘 놓기·줍기·통과", "무궁화꽃이 폈습니다", "림보 / 줄넘기", "마라톤대회", "얼음땡 / 피구", "하키 / 레이싱대회"]} />
        </HighlightBox>
      </>
    ),
  },
  {
    id: "rope",
    num: "03",
    label: "음악줄넘기",
    content: (
      <>
        <SectionTitle>음악<Em>줄넘기</Em></SectionTitle>
        <MascotLead src={MASCOTS.rope} alt="줄넘기교실 노력맨 캐릭터">
          <p>음악줄넘기교실은 체력·리듬감·순발력·집중력을 동시에 기르는 종목입니다. 기본 뛰기부터 음악줄넘기, 짝줄넘기, 긴줄넘기, 퍼포먼스 줄넘기까지 다양하게 구성됩니다.</p>
        </MascotLead>
        <PhotoGrid
          photos={[
            { src: "/assets/rope-class-photo.png", alt: "체육관에서 단체로 음악줄넘기를 하는 아이들", caption: "단체 음악줄넘기 수업" },
            { src: "/assets/guidebook/page_21_image_12.png", alt: "줄넘기 기본 자세를 연습하는 아이", caption: "기본 자세 연습" },
          ]}
        />
        <SkillTable
          headers={["급수", "색상", "핵심 기술"]}
          rows={[
            ["10급", "흰색", "1회선1도약 / 좌우이동 / 앞뒤이동 / 벌려모아 / 한발뛰기"],
            ["9급", "노랑", "1회선2도약 / 구보로 / 가위뛰기 / 크로스 / 8자 모아뛰기"],
            ["8급", "초록", "좌우 2회 / 십자뛰기 / 트위스트 / 뒤로 모아뛰기"],
            ["7급", "파랑", "엇걸어 풀어뛰기 / 토우·힐 / OX뛰기 / 뒤로 벌려모아"],
            ["6급", "남색", "무릎들어 / 뒤들어모아 / 앞흔들어 / 캉캉 / 8자 크로스"],
            ["5급", "보라", "두·네박자 번갈아 / 옆흔들어 / 마임뛰기 / 뒤로 구보"],
            ["4급", "분홍", "앞흔들어 / 손바꿔 엇풀 / 뒤로 가위바위보"],
            ["3급", "주황", "앞들어 모아 / 빠르게 느리게 모든 기술 / 뒤로 엇풀"],
            ["2급", "빨강", "토드 / 크루거 / 앞흔들어 엇걸어풀어 / 반이중뛰기"],
            ["1급", "검정", "SC 이중 / 엇걸어 2중 / 한발 2중 / 뒤로 2중"],
          ]}
        />
        <InfoGrid
          cards={[
            { icon: "🎵", title: "음악 작품", desc: "포켓몬스터, 버터플라이, 토마토, 우유송, 아기염소, 상어가족 등 작품형 수업" },
            { icon: "👯", title: "짝 줄넘기", desc: "마주보고·나란히·옆서서 넘기, 2줄, 동시에 넘기, 번갈아 넘기" },
            { icon: "🪢", title: "긴 줄넘기", desc: "지나가기, 직선 줄넘기, 꼬마야 꼬마야, 더블 터치 등 협동 기술" },
          ]}
        />
        <HighlightBox title="줄 안 넘고 하는 기술도 다양합니다">
          <BulletList items={["8자 돌리기", "줄넘기 인사 / 별모양 / 활모양", "거미줄 멈추기", "나비돌기 / 활시위 / 팔에 감기", "다리에 감기 / 회오리 잡기"]} />
        </HighlightBox>
      </>
    ),
  },
  {
    id: "basket",
    num: "04",
    label: "농구",
    content: (
      <>
        <SectionTitle>농구<Em>교실</Em></SectionTitle>
        <MascotLead src={MASCOTS.basket} alt="농구교실 노력맨 캐릭터">
          <p>농구교실은 드리블, 패스, 슛, 수비, 팀플레이를 단계적으로 배우며 운동능력과 사회성을 함께 기릅니다.</p>
        </MascotLead>
        <PhotoGrid
          photos={[
            { src: "/assets/basketball-class-photo.png", alt: "체육관에서 드리블과 수비를 연습하는 아이들", caption: "드리블 · 수비 연습" },
            { src: "/assets/guidebook/page_23_image_15.png", alt: "골대를 향해 슛을 시도하는 아이", caption: "슛 동작 익히기" },
          ]}
        />
        <SkillTable
          headers={["단계", "기능", "세부 기술"]}
          rows={[
            ["기초", "볼 적응", "캐치 / 다리에서 돌리기 / 키핑 자세"],
            ["초급", "드리블", "제자리 낮게·높게 / 크로스 / 레그 스루 / 비하인드"],
            ["중급", "패스", "바운드 / 체스트 / 오버헤드 / 노룩 / 사이드"],
            ["상급", "슛", "투핸드 / 원핸드 / 레이업 / 점프슛 / 페이드 어웨이"],
            ["전술", "팀 플레이", "지역방어 / 대인방어 / 속공 / 스크린 공격"],
          ]}
        />
      </>
    ),
  },
  {
    id: "board",
    num: "05",
    label: "보드",
    content: (
      <>
        <SectionTitle>보드<Em>교실</Em></SectionTitle>
        <MascotLead src={MASCOTS.board} alt="보드교실 노력맨 캐릭터">
          <p>롱보드와 스케이트보드를 활용하여 균형감각, 중심 조절 능력, 자신감을 키우는 프로그램입니다. 안전교육을 가장 우선으로 합니다. 각 종목은 푸쉬 오프부터 고난도 기술까지 32단계로 차근차근 진행합니다.</p>
        </MascotLead>
        <PhotoGrid
          photos={[
            { src: "/assets/board-class-photo.png", alt: "롱보드 수업 보드들", caption: "직접 타는 롱보드" },
            { src: "/assets/guidebook/page_25_image_18.png", alt: "야외에서 보드를 타는 아이들", caption: "야외 보드 수업" },
          ]}
        />
        <h3 className="font-display text-2xl font-bold mt-10">🛹 롱보드 <Em>32단계</Em></h3>
        <SkillTable
          headers={["단계", "기술", "단계", "기술"]}
          rows={[
            ["1", "푸쉬 오프", "17", "사이드와인더"],
            ["2", "풋 브레이크", "18", "셰일링 스텝"],
            ["3", "토우카빙, 힐카빙", "19", "고스트라이드 킥플립"],
            ["4", "고스트 라이드", "20", "피글렛"],
            ["5", "로빈훗", "21", "피루엣"],
            ["6", "테일픽업", "22", "백크로스"],
            ["7", "점프체인지", "23", "아이스픽"],
            ["8", "180", "24", "페가수스"],
            ["9", "피터팬", "25", "렛미투나잇"],
            ["10", "360", "26", "노컴플라이"],
            ["11", "피벗", "27", "아웃노컴플라이"],
            ["12", "크로스체인지 점프체인지", "28", "테일스탑"],
            ["13", "크로스스텝", "29", "테일턴"],
            ["14", "찹터우드", "30", "원풋피벗"],
            ["15", "찹터팬", "31", "백피벗"],
            ["16", "샤빗", "32", "틱택"],
          ]}
        />
        <h3 className="font-display text-2xl font-bold mt-10">🛼 스케이트보드 <Em>32단계</Em></h3>
        <SkillTable
          headers={["단계", "기술", "단계", "기술"]}
          rows={[
            ["1", "푸쉬 오프", "17", "앞으로 워킹"],
            ["2", "풋 브레이크", "18", "뒤로 워킹"],
            ["3", "토우카빙, 힐카빙", "19", "앤드워크"],
            ["4", "고스트라이드", "20", "앤드오버"],
            ["5", "로빈훗", "21", "테일 드롭인"],
            ["6", "점프 체인지", "22", "비버하이머"],
            ["7", "테일픽업", "23", "테일브레이크"],
            ["8", "발등픽업", "24", "테일턴"],
            ["9", "노즈픽업", "25", "피벗"],
            ["10", "랜딩", "26", "아이스픽"],
            ["11", "고스트라이드 킥플립", "27", "샤빗"],
            ["12", "핸드플립", "28", "알리"],
            ["13", "점프체인지", "29", "커터"],
            ["14", "백사이드 턴", "30", "뱅크 커터 내려오기"],
            ["15", "프런트사이드 턴", "31", "드롭인"],
            ["16", "틱택", "32", "커터 백사이드턴"],
          ]}
        />
        <HighlightBox title="안전 교육이 최우선입니다" tone="blue">
          <BulletList items={["헬멧·무릎보호대·팔꿈치 보호대 착용 필수", "안전하게 넘어지는 법부터 학습", "실내에서 시작해 실외로 단계별 진행"]} />
        </HighlightBox>
      </>
    ),
  },
  {
    id: "play",
    num: "06",
    label: "놀이체육",
    content: (
      <>
        <SectionTitle>놀이<Em>체육</Em></SectionTitle>
        <MascotLead src={MASCOTS.play} alt="유아체육 노력맨 캐릭터">
          <p>유아와 초등 저학년 아이들에게 적합한 프로그램입니다. 다양한 체육도구와 놀이 활동을 통해 기본운동능력과 사회성을 자연스럽게 기릅니다.</p>
        </MascotLead>
        <PhotoGrid
          photos={[
            { src: "/assets/guidebook/page_27_image_20.png", alt: "거북이 징검다리 놀이를 하는 아이들", caption: "균형 잡기 놀이" },
            { src: "/assets/guidebook/page_27_image_21.png", alt: "놀이체육 도구를 함께 잡은 아이들", caption: "협동 놀이 활동" },
          ]}
        />
        <InfoGrid
          cards={[
            { icon: "🐠", num: "3월", title: "봄의 시작", desc: "축구공·평균대·스폰지 막대기·훌라후프" },
            { icon: "🌸", num: "4월", title: "벌집매트의 달", desc: "벌집매트·컵·빌리보·럭비공" },
            { icon: "🧩", num: "5월", title: "퍼즐의 달", desc: "퍼즐매트·U자 파이프·스카프·스폰지 벽돌" },
            { icon: "🪜", num: "6월", title: "점프의 달", desc: "에어 사다리·호핑볼·구름 사다리·구멍난 매트" },
            { icon: "🌀", num: "7월", title: "블랙홀의 달", desc: "블랙홀·스카이팡팡·대형 김밥·미니허들" },
            { icon: "🦘", num: "8월", title: "여름방학 활동", desc: "에어바운스·계란판·점보스폰지·에어볼" },
          ]}
        />
        <HighlightBox title="사용하는 다양한 도구">
          <BulletList items={["벌집매트, 구멍난 매트, 도넛매트, 양면매트, 퍼즐매트", "블랙홀, 호핑볼, 에어바운스, 스카이팡팡, 미니허들", "축구공, 럭비공, 에어볼, 빌리보", "에어 사다리, 구름 사다리, U자 파이프, 평균대"]} />
        </HighlightBox>
      </>
    ),
  },
  {
    id: "soccer",
    num: "07",
    label: "축구",
    content: (
      <>
        <SectionTitle>축구<Em>교실</Em></SectionTitle>
        <MascotLead src={MASCOTS.soccer} alt="축구교실 노력맨 캐릭터">
          <p>유소년 아이들에게 가장 인기 있는 스포츠 프로그램입니다. 공을 차는 즐거움에서 시작해 드리블, 패스, 슛, 경기 이해, 팀워크까지 단계적으로 배웁니다.</p>
        </MascotLead>
        <PhotoGrid
          photos={[
            { src: "/assets/guidebook/page_29_image_23.png", alt: "콘 사이로 드리블하는 아이", caption: "드리블 훈련" },
            { src: "/assets/guidebook/page_29_image_24.png", alt: "경기장에 모여 있는 아이들", caption: "팀워크 · 작전 시간" },
          ]}
        />
        <SkillTable
          headers={["기능", "6-7세", "8-13세"]}
          rows={[
            ["볼 적응", "발바닥 공 뽀뽀, 팔자 돌리기, 계란 굴리기", "공뺏기 게임, 던지고 브레이크, 킥 종류 알기"],
            ["드리블", "발바닥 드리블, 꽃게 드리블 게임", "인사이드 / 아웃사이드 / 드리블 + 패스"],
            ["패스", "드로인 패스, 굴리기 패스", "크로스 패스, 논스톱 패스, 다양한 종류"],
            ["슛", "로켓슛, 인사이드 슛", "인스텝 슛, 터닝 슛, 발리 슛"],
            ["전술", "1:1 게임, 포지션 연습", "공격/수비, 2:2 게임, 포지션 전술"],
          ]}
        />
      </>
    ),
  },
  {
    id: "apply",
    num: "08",
    label: "신청 방법",
    content: (
      <>
        <SectionTitle>신청 <Em>방법</Em></SectionTitle>
        <Lead><p>스포츠교실은 1명부터 개인레슨 / 그룹레슨 모두 가능합니다. 아래 3단계만 따라하시면 됩니다.</p></Lead>
        <ProcessSteps
          steps={[
            { title: "문자 신청", desc: "종목 / 연령 / 인원 / 동네 이름 / 수준 / 기타문의를 적어 보내주세요." },
            { title: "교육비 안내", desc: "받은 정보를 바탕으로 맞춤 교육비를 문자로 회신드립니다." },
            { title: "가능시간 안내", desc: "교육비 확인 후 신청해주시면 수업 가능시간을 안내드립니다." },
          ]}
        />
        <HighlightBox tone="red">
          <p className="font-display text-2xl italic">"인라인 / 8세 / 1명 / 둔산동 / 초보 / 토요일 오전 희망"</p>
          <p className="mt-4">위와 같은 형식으로 010-8944-3907로 문자 보내주시면 됩니다.</p>
        </HighlightBox>
        <InlineCta title="지금 바로 문자로 신청하세요" desc="빠른 답장으로 도와드리겠습니다." href="sms:010-8944-3907" label="💬 문자 보내기" />
      </>
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
