import { existsSync } from "node:fs";
import { join } from "node:path";
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
  PhotoGrid,
  ProcessSteps,
  RecordBoard,
  SectionTitle,
  StatStrip,
  WideImage,
} from "@/components/ui/ContentBlocks";
import { MASCOTS } from "@/lib/data";

// 카탈로그 이미지 파일이 있을 때만 표시 (없으면 깨진 빈 박스 대신 아무것도 안 보임)
const hasEquipmentImage = existsSync(
  join(process.cwd(), "public", "assets", "bubble-equipment.png"),
);

const tabs: Tab[] = [
  {
    id: "intro",
    num: "01",
    label: "공연 안내",
    content: (
      <>
        <SectionTitle>아이들에게 <Em>상상력과 감동</Em>을 선물합니다</SectionTitle>
        <MascotLead src={MASCOTS.bubble} alt="버블쇼 노력맨 캐릭터">
          <p>런앤점프 컴퍼니의 버블쇼 + 마술쇼는 아이들에게 상상력과 감동을 선물하는 공연 프로그램입니다. 비눗방울이라는 친숙한 소재를 활용하지만, 그 안에는 과학·예술·놀이·무대 연출이 함께 담겨 있습니다.</p>
          <p>유치원, 어린이집, 초등학교, 지역축제, 가족행사, 기업행사 등 다양한 현장에서 진행할 수 있습니다.</p>
        </MascotLead>
        <PhotoGrid
          photos={[
            { src: "/assets/bubble-show-photo.png", alt: "야외 축제에서 진행한 버블쇼 현장", caption: "야외 축제 버블 공연" },
            { src: "/assets/guidebook/page_35_image_28.png", alt: "실내 무대에서 진행한 버블쇼 + 마술쇼", caption: "실내 무대 공연" },
          ]}
        />
        <InfoGrid
          cards={[
            { icon: "📅", title: "예약 우선", desc: "지역·날짜·기관명·행사명·인원·층수·엘리베이터 여부를 미리 알려주세요." },
            { icon: "⏱️", title: "1회 공연 40~60분", desc: "버블쇼 + 마술쇼 + 체험사진까지 포함하며 정확한 시간은 협의 후 결정합니다." },
            { icon: "🎯", title: "연속 2회 공연 가능", desc: "인원이 많은 경우 연속 공연도 가능하며 할인 혜택을 제공합니다." },
          ]}
        />
        <HighlightBox title="꼭 확인해주세요">
          <BulletList items={["모든 공연 가격은 부가세 별도입니다.", "실내·야외 모두 가능하며 야외는 날씨에 따라 협의합니다.", "아이들과 함께하는 체험 시간이 포함됩니다.", "행사 성격에 맞춰 공연 내용을 조정할 수 있습니다."]} />
        </HighlightBox>
        <InlineCta title="공연 예약 문의" desc="먼저 일정과 인원만 알려주셔도 안내드립니다." label="📞 010-8944-3907" />
      </>
    ),
  },
  {
    id: "records",
    num: "02",
    label: "공연 실적",
    content: (
      <>
        <SectionTitle>이미 <Em>수많은 현장</Em>에서 검증되었습니다</SectionTitle>
        <Lead><p>유치원·어린이집·초등학교·교회·복지관·마라톤대회·해외 선교 등 다양한 현장에서 공연을 진행해왔습니다. 다시 찾아주시는 재섭외가 많다는 점이 가장 큰 신뢰입니다.</p></Lead>
        <StatStrip
          stats={[
            { num: "50+", label: "검증된 공연 무대" },
            { num: "2년+", label: "연속 재섭외 다수" },
            { num: "27곳", label: "대표 진행 사례" },
          ]}
        />
        <RecordBoard
          groups={[
            {
              icon: "🧸",
              title: "유치원 · 어린이집",
              items: [
                { name: "새봄유치원", tags: ["연속 2회", "2년"] },
                { name: "한밭대학교어린이집" },
                { name: "나래유치원" },
                { name: "하은유치원" },
                { name: "키즈원 어린이집", tags: ["체험사진"] },
                { name: "강화군립어린이집" },
                { name: "소담하랑어린이집", tags: ["야외", "2년"] },
                { name: "엑스포유치원" },
                { name: "혜천유치원", tags: ["3회 공연"] },
                { name: "여울유치원", tags: ["연속 2회"] },
                { name: "참샘유치원" },
                { name: "용정어린이집", tags: ["2회 공연"] },
              ],
            },
            {
              icon: "🏫",
              title: "초등학교 · 병설유치원",
              items: [
                { name: "양지초등학교", tags: ["2회 연속"] },
                { name: "구즉초 병설유치원·1학년", tags: ["체험사진"] },
                { name: "중리초병설유치원", tags: ["연속 2회"] },
                { name: "기성초 병설유치원" },
                { name: "상원초등학교 1학년" },
                { name: "공주 탄천초 전교생", tags: ["체험사진"] },
                { name: "공주 태봉초 전교생", tags: ["연속 2회"] },
              ],
            },
            {
              icon: "⛪",
              title: "교회 · 복지관 · 기타",
              items: [
                { name: "예뜰순복음교회", tags: ["2회 연속"] },
                { name: "한밭제일교회 방과후교실" },
                { name: "새로남교회 유년부" },
                { name: "한밭종합사회복지관", tags: ["체험사진"] },
                { name: "롯데마트 문화센터 대덕점" },
                { name: "유성국화마라톤대회 버블체험", tags: ["2년"] },
                { name: "대청호마라톤 버블체험", tags: ["2년"] },
                { name: "통영·아산 버블 강습회" },
              ],
            },
          ]}
        />
      </>
    ),
  },
  {
    id: "flow",
    num: "03",
    label: "공연 구성",
    content: (
      <>
        <SectionTitle>공연은 이렇게 <Em>진행됩니다</Em></SectionTitle>
        <Lead><p>버블쇼와 마술쇼가 자연스럽게 어우러지는 40~60분의 공연 구성입니다. 상황에 따라 일부 내용은 달라질 수 있습니다.</p></Lead>
        <InfoGrid
          cards={[
            { num: "1", title: "인사 & 인트로 버블", desc: "노력맨 인사, 버블건 선물 등장, 해바라기·사각링 오프닝" },
            { num: "2", title: "소링 버블 + 손가락 마술", desc: "드래곤, 수제비, 탁구공, 어항, 벌집, 우주선 등" },
            { num: "3", title: "구름 대포 & 핸드 버블", desc: "구름이 떠다니는 마술과 한손·하트·헤딩·애벌레 버블" },
            { num: "4", title: "로프 버블 & 공중부양", desc: "폭포·스마일 버블, 관객을 놀라게 하는 공중부양 마술" },
            { num: "5", title: "관 버블과 특수 마술", desc: "여의봉, 버블건, 포그머신, 풍선·파이어·물·우유 마술" },
            { num: "6", title: "빅링 버블 & 사진 촬영", desc: "사람 들어가는 거대 버블, 휘날레 공연, 기념 사진 시간" },
          ]}
        />
        <HighlightBox title="공연의 핵심" tone="orange">
          <BulletList items={["단순한 마술이 아니라 스토리가 있는 공연입니다.", "아이들과 호흡하고 참여시키는 인터랙티브 방식입니다.", "현장 상황에 맞춰 구성을 유연하게 조정합니다.", "체험 사진까지 기억에 남는 추억을 만듭니다."]} />
        </HighlightBox>
      </>
    ),
  },
  {
    id: "equip",
    num: "04",
    label: "장비 판매",
    content: (
      <>
        <SectionTitle>장비 <Em>제작 & 판매</Em></SectionTitle>
        <Lead><p>버블쇼 장비는 공연의 완성도를 결정하는 중요한 요소입니다. 현장에서 검증된 장비를 직접 제작하여 안정적이고 화려한 공연을 가능하게 합니다.</p></Lead>
        {hasEquipmentImage && (
          <WideImage
            src="/assets/bubble-equipment.png"
            alt="버블 장비 전체 종류 안내표"
            caption="직접 제작·판매하는 버블 장비 32종"
          />
        )}
        <h3 className="font-display text-2xl font-bold mt-8 mb-4">버블 채</h3>
        <ChipGrid items={["기본링", "사각링", "해바라기", "사람 들어가는 채", "중링 / 원중링", "별 중링", "하트", "상어", "십자가", "쌍둥이 / 엄마-아빠", "삼둥이"]} />
        <h3 className="font-display text-2xl font-bold mt-8 mb-4">대형 채 & 특수 장비</h3>
        <ChipGrid items={["파리채 대형 45×70cm", "레인보우 대형 4m", "블랙홀 170cm", "스파이더 80×100cm", "오징어게임 30×82cm", "꽃 대형 지름 70cm", "태극 채 지름 72cm", "우주선 1~5단", "버블관 스텐드", "구름대포", "버블건", "대형 가방"]} />
        <HighlightBox title="구매 안내">
          <BulletList items={["부가세 별도, 택배비 착불", "재고가 있는 제품은 바로 발송", "재고 없는 경우 제작 기간 약 2주 소요", "버블쇼 시작 가능 풀패키지 구매 가능", "가격은 문의 시 안내합니다."]} />
        </HighlightBox>
      </>
    ),
  },
  {
    id: "class",
    num: "05",
    label: "강습회",
    content: (
      <>
        <SectionTitle>버블쇼 <Em>강습회</Em></SectionTitle>
        <Lead><p>공연을 직접 배우고 싶은 강사·원장·교사·예비 창업자를 위한 프로그램입니다. 공연 구성, 장비 세팅, 음악 활용, 관객 참여 방법, 안전관리까지 실전 중심으로 지도합니다.</p></Lead>
        <InfoGrid
          cards={[
            { icon: "⏰", title: "시간", desc: "3시간 집중 교육으로 핵심 기술을 익힙니다." },
            { icon: "📍", title: "장소", desc: "대전 본점 또는 3명 이상 방문 강습 가능." },
            { icon: "👥", title: "인원", desc: "1명부터 가능하며 그룹 강습도 환영합니다." },
          ]}
        />
        <ChipGrid items={["인트로 버블", "소링 버블", "핸드 버블", "로프 버블", "관 버블", "버블 파이어 쇼", "스토리 버블쇼", "낚시 버블채", "함께하는 버블", "빅링 버블", "휘날레 공연", "레인보우 대형채"]} />
        <HighlightBox title="강습회 특전" tone="red">
          <BulletList items={["음원·영상 자료 전부 공유", "30~60분 공연 가능 수준까지 완성", "버블쇼 + 마술쇼 아이디어 공유", "장비 풀세트 구매 가능", "강습 후 실전 운영 지속 자문 가능"]} />
        </HighlightBox>
      </>
    ),
  },
  {
    id: "apply",
    num: "06",
    label: "신청 방법",
    content: (
      <>
        <SectionTitle>공연 / 강습 <Em>신청 방법</Em></SectionTitle>
        <Lead><p>아래 항목을 정리해서 전화 또는 문자로 연락주세요. 빠르게 안내드리겠습니다.</p></Lead>
        <ProcessSteps
          steps={[
            { title: "예약 문의", desc: "지역·날짜·기관명·행사명·인원·층수·엘리베이터 여부를 알려주세요." },
            { title: "견적 안내", desc: "요청 사항에 맞춰 공연 구성과 비용을 안내드립니다." },
            { title: "공연 진행", desc: "확정 후 일정에 맞춰 방문하여 40~60분 공연을 진행합니다." },
          ]}
        />
        <HighlightBox tone="red">
          <p className="font-display text-2xl italic">"유치원 / 대전 둔산동 / 12월 15일 오전 10시 / 50명 / 2층, 엘리베이터 있음"</p>
        </HighlightBox>
        <InlineCta title="공연 / 강습회 문의" desc="전화 · 문자 모두 환영합니다." label="📞 지금 전화하기" />
      </>
    ),
  },
];

export default function BubblePage() {
  return (
    <>
      <SubpageHero
        eyebrow="— Bubble & Magic Show"
        title="버블쇼"
        titleItalic="+ 마술쇼"
        description="비눗방울이라는 친숙한 소재 안에 담긴 과학, 예술, 놀이, 무대 연출. 유치원·어린이집·학교·축제·기업행사까지 다양한 무대에서 펼쳐집니다."
        deco="Bubble"
      />
      <TabMenu tabs={tabs} />
    </>
  );
}
