import { SubpageHero } from "@/components/ui/SubpageHero";
import { SideBookmarkNav } from "@/components/ui/SideBookmarkNav";
import { STATS } from "@/lib/data";

// ─────────────────────────────────────────────────────────────
// 노력맨 진낙식 대표 프로필 데이터
// ─────────────────────────────────────────────────────────────

const education = [
  "한림대학교 생활체육학과 학사 졸업",
  "한남대학교 스포츠과학대학원 체육학 석사 졸업",
  "한남대학교 일반대학원 체육학 박사 졸업",
];

const careers = [
  "현, 충청대학교 생활체육학과 겸임교수",
  "현, 대전과학기술대학교 교양교직과 외래교수",
  "현, 노력맨스포츠교실 대표 (인라인, 줄넘기, 보드, 놀이체육, 축구, 농구 지도)",
  "현, 유치원·어린이집 체육강사 (새봄유치원, 소담하랑어린이집)",
  "현, 대전줄넘기협회 이사",
  "현, 초등 방과후 강사 (음악줄넘기 – 대덕초·죽향초, 축구 – 산성초)",
  "현, 롯데마트·롯데백화점·세이브존 강사 (줄넘기, 인라인)",
  "현, 초록펜 지역아동센터 대전지원단 강사 (생활체육)",
  "전, 대전서구풋살협회장 역임",
];

const awardsSports = [
  "제4회 세계줄넘기총연맹 줄넘기선수권대회 일반부 30초 이중뛰기 금상",
  "제4회 세계줄넘기총연맹 줄넘기선수권대회 일반부 30초 모아뛰기 금상",
  "제4회 세계줄넘기총연맹 줄넘기선수권대회 일반부 30초 번갈아뛰기 금상",
  "제3회 전국마스터즈 휜수영대회 일반휜 표면 50m 1위 입상",
  "제3회 전국마스터즈 휜수영대회 일반휜 표면 100m 1위 입상",
  "제10회 전국장거리(3KM) 휜수영대회 2위 입상",
  "제10회 전국포카리스웨트 마스터즈수영대회 접영 50m 2위 입상",
  "제11회 전국포카리스웨트 마스터즈수영대회 배영 100m 1위 입상",
  "제2회 대전 NGO축제 웃음콘테스트 입상 (2012년)",
  "대전광역시 스키협회장배 스키대회 감투상 수상 (2004년)",
  "무주 제왕전 스키대회 참가 (2009년)",
  "지도자상, 대덕구풋살대회 (2009년)",
];

const awardsEducation = [
  "국회의원 표창 (2016년)",
  "교육감 표창 (독서분야, 2016년)",
  "우수교원 표창장, 한남대학교 (2015년 5월 13일)",
  "공로상, M뉴스 (2014년 12월)",
  "북포럼@대전 인터넷방송 저자 출연 (독서법도 모르면서 책을 읽는 사람들, 2014년)",
  "북포럼@대전 인터넷방송 저자 출연 (성공에 미쳐라, 2013년)",
  "정강사 임명장, 더한힘 리더십센터 (2012년)",
  "교육강사 임명장, 자살방지한국협회 (2012년 8월)",
  "기자 임명장, 강사뉴스신문사 (2011년 12월)",
  "교수 위촉장, 한국강사은행 (2011년 9월)",
  "부총재 위촉장, 한국강사은행 (2011년 9월)",
  "교수 위촉장, 국제웰빙전문가협회 (2011년 7월)",
  "국제웰빙대상, 국제웰빙전문가협회 (2011년 12월)",
  "대한민국 신지식인 선정 (2009년, 교육분야: 유소년스포츠클럽 모형개발)",
  "현대한국인물사 등재 (2010년)",
  "연구위원 위촉장, 대한건강체육진흥회 (2008년 2월)",
];

const certsNational = [
  "축구 생활체육지도자 2급",
  "농구 생활체육지도자 2급",
  "인라인 생활체육지도자 2급",
  "빙상 생활체육지도자 2급",
  "빙상 전문스포츠지도자 2급",
  "스키 생활체육지도자 2급",
  "수영 생활체육지도자 2급",
  "음악줄넘기지도자 3급 – 한국줄넘기협회",
  "음악줄넘기지도자 2급 – 코리아음악줄넘기협회",
  "음악줄넘기전문지도자 2급 – 국민건강체육문화진흥원",
  "유아체육 1급 지도자 자격증 – 문화레크리에이션협회",
  "유아체육 1급 지도자 자격증 – 국제아동지도자협회",
  "유아체육 2급 지도자 자격증 – 한국레크리에이션연합회",
  "유아체육 2급 지도자과정 수료 – 한국유아체육진흥원",
  "유아레크리에이션 1급 지도자 자격증 – 문화레크리에이션협회",
  "유아레크리에이션 1급 지도자 자격증 – 한국레크리에이션연합회",
  "키즈요가 2급 지도자 자격증 – 한국국제지도자협회",
  "키성장 전문 1급 지도자 자격증 – 대한건강체육진흥회",
  "비만 전문 1급 지도자 자격증 – 대한건강체육진흥회",
  "농구 심판 자격증 – 국민생활체육협의회",
  "티볼 지도자 자격증 – 한국티볼협회",
  "축구 지도자 자격증 – 국민생활체육협의회",
  "축구 심판 자격증 – 국민생활체육협의회",
  "풋살 지도자 자격증 – 국민생활체육협의회",
  "유소년 축구지도자 자격증 – 한국유소년축구교육원",
  "1급 스키 지도원 자격증 – 대한스키지도자연맹",
  "수상인명구조원 자격증 – 대한적십자사, 서울 YMCA",
  "수영 심판 자격증 – 대한수영연맹",
  "인라인 준강사 자격증 – 대한인라인롤러연맹",
  "줄넘기지도자 3급 자격증 – 한국줄넘기협회",
  "태권도 2단 – 대한태권도협회",
];

const certsEtc = [
  "종일제 특성화 강사 원격교육이수 – 서울유아교육진흥원",
  "부모상담의 이해와 기법 과정 수료 – 키즈키즈 아카데미",
  "웃음치료사 1급 자격증 – 한국웃음센터",
  "웃음치료사 1급 자격증 – 한국웃음치료연구소",
  "레크리에이션지도사 1급 자격증 – 한국웃음센터",
  "레크리에이션지도사 1급 자격증 – 한국웃음치료연구소",
  "스트레스관리사 1급 자격증 – 한국웃음치료연구소",
  "펀리더십지도사 1급 자격증 – 한국웃음센터",
  "행복지도사 3급 자격증 – 국제웰빙전문가협회",
  "응급처치원 – 대한적십자사",
  "스피치지도사 2급 자격증 – 윤치영스피치",
  "리더십과정 수료 및 MVP 수상 – 더한힘리더십센터",
  "노인운동지도사 자격증 – 한국평생학습연합회",
  "노인치료레크리에이션지도사 자격증 – 한국평생학습연합회",
  "노인체조지도사 자격증 – 한국평생학습연합회",
  "리더십 시범강사과정 수료 – 더한힘리더십센터",
  "MBTI를 통한 인간관계향상과정 수료 – 수토피아",
  "이미지메이킹과정 수료 – 충남대 평생교육원",
  "스피치클리닉과정 수료 – 충남대 평생교육원",
  "리더십 정강사과정 수료 – 더한힘리더십센터",
  "보이스&보디랭귀지 강사과정 수료 – 수토피아",
  "조직활성화 팀빌딩 과정 수료 – 수토피아",
  "정동문변화스피치과정 오디오 CD 과정 수료 – 정동문변화센터",
  "석세스TV 강의 오디오 CD 236개 수강",
  "자살방지교육사 – 한국상담교육원",
  "시낭송과 스피치클리닉 과정 수료 – 충남대 평생교육원",
  "명상심리지도사 과정 수료 – 충남대 평생교육원",
  "효지도사 자격증 – 효진흥원",
  "실천형 셀프리더십 강사과정 수료 – 수토피아",
  "놀이로 배우는 아이스 브레이킹 & 스파기법 과정 수료 – 수토피아",
  "북멘토과정 수료 – 멘토스쿨",
  "부모님과 함께하는 청소년 인문학 과정 1 수료 – 한국간행물윤리위원회",
  "지역독서운동가 과정 수료 – 한국간행물윤리위원회",
  "자녀독서교육 과정 수료(유아중심) – 한국간행물윤리위원회",
  "자녀독서교육 과정 수료(아동청소년중심) – 한국간행물윤리위원회",
  "독서마라톤 5,000p 참가 인증서 취득 (2012.6–2012.11) – 유성구청",
  "독서마라톤 20,000p 참가 인증서 취득 (2013.4–2013.11.30) – 유성구청",
  "자녀독서교육 실용과정 수료 – 한국간행물윤리위원회",
  "3p 셀프리더십 스쿨 프로과정 수료 – 3p자기경영연구소",
  "자기경영 과정 수료 – 공병호자기경영연구소",
  "Part-2 고품격 아이스브레이킹 & 스팟 과정 수료 – 수토피아",
  "독서경영전문가 마스터 자격증 – 3P자기경영연구소, 한국능률협회",
  "이영권박사와 함께하는 독서경영 세미나 – 세계전략연구소",
  "데일카네기코스 DCC 과정 수료(8주) – 대전카네기",
  "데일카네기코스 DCC 과정 MVP 수상 – 대전카네기",
  "직장인의 시간관리 기술 과정 수료 (16주) – 에듓퓨어",
  "시간관리 과정 수료 (5시간) – 에듓퓨어",
];

const books = [
  "인성퀴즈 50 유아용/저학년용/고학년용",
  "마음의 근육을 키우는 시간",
  "스포츠사회학",
  "오늘도 교실이 무사하길",
  "인생을 바꾸는 클로징",
  "스포츠윤리",
  "노인체육론",
  "특수체육론",
  "화가 많은 나에게",
  "걱정 많은 나에게",
  "나에게 하고 싶은 말",
  "나의 인생 단어",
  "다섯손가락으로 배우는 실패법칙 성공법칙",
  "인라인스케이트 길라잡이 [실기편]",
  "인라인스케이트 길라잡이 [이론편]",
  "축구리더십 13가지",
  "초등인성교육 레시피 50",
  "미라클 자기관리 다이어리 [사용설명서]",
  "미라클 자기경영",
  "변화의 힘",
  "레저스포츠개론",
  "유아체육론",
  "뉴스포츠개론",
  "음악줄넘기 생초보 길라잡이",
  "방과후스포츠지도자 길라잡이",
  "수영지도자 길라잡이",
  "유소년축구 길라잡이",
  "이야기가 있는 유아체육",
  "유소년스포츠지도방법론",
  "하루 5분 자기경영 수업",
  "독서법도 모르면서 책을 읽는 사람들",
  "성공에 미쳐라, 지식과 감성",
  "인생처방약 100정",
];

const navItems = [
  { id: "intro", label: "대표 인사" },
  { id: "career", label: "학력·경력" },
  { id: "awards", label: "수상 경력" },
  { id: "certs", label: "자격증" },
  { id: "books", label: "저서·공저" },
];

// 도서 검색 — 책 제목으로 구글 검색
const bookSearch = {
  google: (q: string) =>
    `https://www.google.com/search?q=${encodeURIComponent(`${q} 책`)}`,
};

// ─────────────────────────────────────────────────────────────
// 재사용 블록
// ─────────────────────────────────────────────────────────────

function SectionTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-32 pt-8 font-display text-3xl md:text-4xl font-bold mb-10"
    >
      {children}
    </h2>
  );
}

function GroupTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-display text-xl font-bold mb-5 pb-2 border-b-2 border-accent-red inline-block">
      {children}
    </h3>
  );
}

function ItemList({ items, columns = false }: { items: string[]; columns?: boolean }) {
  return (
    <ul className={columns ? "md:columns-2 md:gap-x-12" : ""}>
      {items.map((item) => (
        <li
          key={item}
          className="relative break-inside-avoid pl-5 mb-2.5 text-ink-soft leading-relaxed"
        >
          <span className="absolute left-0 top-[9px] text-accent-red text-[10px]">◆</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

// ─────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      <SubpageHero
        eyebrow="— About"
        title="노력맨"
        titleItalic="진낙식"
        description="런앤점프 컴퍼니는 노력맨 진낙식 대표가 운영하는 1인 종합 콘텐츠 기업입니다. 체육학 박사 학위와 30여 권의 저서, 80여 개의 자격증을 보유하고, 현장을 떠나지 않은 평생 현역 지도자입니다."
        deco="About"
      />

      {/* 섹션 이동 네비게이션 — 데스크탑은 우측 책갈피, 모바일은 상단 바 */}
      <SideBookmarkNav items={navItems} />
      <nav className="sticky top-[88px] z-30 border-b border-line bg-cream shadow-sm lg:hidden">
        <div className="container-rj">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap text-ink-soft transition-all hover:bg-cream-deep"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="container-rj py-16 space-y-32">
        {/* 01. 대표 인사 */}
        <section>
          <SectionTitle id="intro">
            안녕하세요, <span className="italic text-accent-red">노력맨</span> 진낙식입니다
          </SectionTitle>
          <div className="prose-rj max-w-4xl space-y-6 text-lg text-ink-soft leading-relaxed mb-12">
            <p>
              저는 체육학을 평생 공부하고, 30여 권의 책을 쓰고, 80개가 넘는 자격증을
              취득하며 현장을 떠나지 않은 사람입니다.
            </p>
            <p>
              "노력맨"이라는 이름은 거창한 의미가 아니라, 매일 한 가지씩 해내고 있다는
              사실에 대한 다짐입니다.
            </p>
            <p>
              런앤점프 컴퍼니는 그 노력의 결과물을 8개의 사업으로 정리한 플랫폼입니다.
            </p>
          </div>

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
        </section>

        {/* 02. 학력·경력 */}
        <section>
          <SectionTitle id="career">
            학력 & <span className="italic text-accent-red">경력</span>
          </SectionTitle>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <GroupTitle>학력</GroupTitle>
              <ItemList items={education} />
            </div>
            <div>
              <GroupTitle>경력</GroupTitle>
              <ItemList items={careers} />
            </div>
          </div>
        </section>

        {/* 03. 수상 경력 */}
        <section>
          <SectionTitle id="awards">
            수상 <span className="italic text-accent-red">경력</span>
          </SectionTitle>
          <div className="mb-12">
            <GroupTitle>🏅 스포츠 분야</GroupTitle>
            <ItemList items={awardsSports} columns />
          </div>
          <div>
            <GroupTitle>🎓 교육·강사·저서·표창 분야</GroupTitle>
            <ItemList items={awardsEducation} columns />
          </div>
        </section>

        {/* 04. 자격증 */}
        <section>
          <SectionTitle id="certs">
            보유 <span className="italic text-accent-red">자격증</span>
          </SectionTitle>
          <div className="mb-12">
            <GroupTitle>🏅 체육 · 국가 자격</GroupTitle>
            <ItemList items={certsNational} columns />
          </div>
          <div>
            <GroupTitle>🎓 리더십·스피치·독서·상담·치유·평생교육</GroupTitle>
            <ItemList items={certsEtc} columns />
          </div>
        </section>

        {/* 05. 저서·공저 */}
        <section>
          <SectionTitle id="books">
            저서 & <span className="italic text-accent-red">공저</span>
          </SectionTitle>
          <p className="text-ink-soft mb-10 leading-relaxed max-w-3xl">
            체육·교육·자기경영·줄넘기·인성 등 다양한 분야의 책을 직접 기획·집필·출판했습니다.
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {books.map((book) => (
              <a
                key={book}
                href={bookSearch.google(book)}
                target="_blank"
                rel="noopener noreferrer"
                title={`'${book}' 구글에서 검색`}
                className="px-4 py-2 bg-white border border-line rounded-full text-sm text-ink-soft hover:bg-accent-red hover:text-white hover:border-accent-red transition-colors cursor-pointer"
              >
                📕 {book}
              </a>
            ))}
          </div>
          <div className="p-6 bg-accent-gold/10 rounded-2xl border border-accent-gold/30">
            <div className="font-display text-lg font-bold mb-2">🏆 발명특허 보유</div>
            <p className="text-sm text-ink-soft">
              "자기관리 다이어리" 발명특허 보유 — 자기경영 PT 프로그램의 핵심 도구
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
