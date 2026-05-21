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
  SectionTitle,
} from "@/components/ui/ContentBlocks";

const tabs: Tab[] = [
  {
    id: "store",
    num: "01",
    label: "매장 안내",
    content: (
      <>
        <SectionTitle>인라인 · 롱보드 · 스케이트보드 <Em>매장</Em></SectionTitle>
        <Lead><p>대전 둔산동에서 인라인·롱보드·스케이트보드를 직접 보고 구매하실 수 있습니다. 노력맨 대표가 직접 운영하며, 구매와 강습 모두 가능합니다.</p></Lead>
        <InfoGrid cards={[
          { icon: "🛼", num: "제품 1", title: "인라인스케이트", desc: "입문용부터 선수용까지 다양한 사이즈와 브랜드. 직접 신어보고 발에 맞는 제품 선택 가능." },
          { icon: "🛹", num: "제품 2", title: "롱보드", desc: "크루징·다운힐·댄싱·프리스타일 등 용도별 다양한 롱보드 라인업." },
          { icon: "⛸️", num: "제품 3", title: "스케이트보드", desc: "스트리트·파크·올라운드 등 입문자와 전문가용 모두 보유." },
        ]} />
        <HighlightBox title="매장 위치">
          <BulletList items={["주소: 대전 서구 둔산로 241 맑은호수 보라아파트 상가 2층", "전화: 010-8944-3907", "운영 방식: 시간 예약제", "방문 전 반드시 전화로 시간 예약 부탁드립니다."]} />
        </HighlightBox>
        <InlineCta title="네이버 지도에서 매장 위치 확인" desc="네이버 지도로 길찾기 및 매장 정보를 확인하세요." href="https://naver.me/5PVxaaZi" label="🗺️ 네이버 지도" />
        <HighlightBox title="구매 + 강습 패키지">
          <BulletList items={["제품 구매 시 강습 신청도 함께 가능합니다.", "초보자는 안전한 사용법까지 배운 뒤 가져가실 수 있습니다.", "제품 사이즈와 본인 발 사이즈를 직접 맞춰볼 수 있습니다."]} />
        </HighlightBox>
      </>
    ),
  },
  {
    id: "tools",
    num: "02",
    label: "놀이체육 도구",
    content: (
      <>
        <SectionTitle>놀이체육 <Em>도구</Em> 직접 제작</SectionTitle>
        <Lead><p>노력맨 대표가 직접 디자인하고 제작하는 놀이체육 도구입니다. 유치원·어린이집·태권도장·스포츠교실에서 검증되어 현장에서 바로 사용 가능합니다.</p></Lead>
        <InfoGrid cards={[
          { icon: "⚫", num: "제품 01", title: "블랙홀", desc: "지름 60cm 또는 100cm. 점프·균형 훈련용 인기 도구." },
          { icon: "🔘", num: "제품 02", title: "구멍난 매트", desc: "100×100cm, 두께 1cm 단면 / 2cm 양면. 원형판과 링 포함." },
          { icon: "🍯", num: "제품 03", title: "벌집매트 — 소형", desc: "50×50cm, 두께 2cm. 나무색 양면." },
          { icon: "🍯", num: "제품 04", title: "벌집매트 — 대형", desc: "100×100cm, 두께 2cm. 빨강·파랑·녹색·노랑 양면." },
          { icon: "🍩", num: "제품 05", title: "도넛매트", desc: "100×100cm, 두께 2cm. 빨강·파랑 양면." },
          { icon: "⭕", num: "제품 06", title: "양면매트", desc: "큰 원형 지름 12cm, 작은 원형 지름 5cm." },
        ]} />
        <HighlightBox title="별도 구매 안내">
          <BulletList items={["백업이나 볼풀공은 직접 구매하셔야 합니다.", "매트류는 색상과 양면 옵션 확인 후 주문해주세요.", "전 제품 가격 문의는 전화로 안내드립니다."]} />
        </HighlightBox>
        <InfoGrid cards={[
          { icon: "🏫", title: "유치원 · 어린이집", desc: "유아체육 수업, 놀이체육 시간, 행사 활동에 활용." },
          { icon: "🥋", title: "태권도장 · 체육관", desc: "워밍업, 기초체력 훈련, 게임 활동에 활용." },
          { icon: "🎯", title: "방과후 · 학원", desc: "방과후 스포츠, 놀이형 체육 수업에 활용." },
        ]} />
      </>
    ),
  },
  {
    id: "order",
    num: "03",
    label: "구매 안내",
    content: (
      <>
        <SectionTitle>구매 <Em>안내</Em></SectionTitle>
        <Lead><p>매장 방문 또는 전화 문의로 구매하실 수 있습니다.</p></Lead>
        <ProcessSteps steps={[
          { title: "전화 또는 방문 예약", desc: "제품 종류와 수량을 알려주세요. 매장 방문 시 시간 예약 필수." },
          { title: "가격 안내 & 입금", desc: "제품 가격과 배송비 안내. 계좌 입금 후 발송 준비." },
          { title: "발송 / 수령", desc: "매장 방문 수령 또는 택배 발송. 택배비는 착불." },
        ]} />
        <HighlightBox title="결제 & 배송">
          <BulletList items={["결제 방식: 계좌 입금", "배송 방식: 택배 착불 또는 매장 직접 수령", "매장 직접 수령 시 강습 신청 동시 가능", "대량 주문 시 가격 협의 가능"]} />
        </HighlightBox>
        <HighlightBox tone="red">
          <p className="font-display text-2xl italic">"벌집매트 대형 100×100cm / 빨강 · 파랑 각 2장 / 대전 ○○유치원"</p>
        </HighlightBox>
        <InlineCta title="제품 문의 / 견적 상담" desc="대량 구매 견적도 환영합니다." label="📞 010-8944-3907" />
      </>
    ),
  },
];

export default function ShopPage() {
  return (
    <>
      <SubpageHero
        eyebrow="— Shop & Equipment"
        title="SHOP"
        titleItalic="매장 & 도구"
        description="인라인·롱보드·스케이트보드 매장과 직접 제작하는 놀이체육 도구. 대전 둔산동에서 시간 예약제로 운영하고 있습니다."
        deco="Shop"
      />
      <TabMenu tabs={tabs} />
    </>
  );
}
