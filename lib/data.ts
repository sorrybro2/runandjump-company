// 사이트 전역 데이터
// 모든 콘텐츠는 여기서 관리하면 나중에 CMS나 DB로 옮기기 쉽습니다.

export const COMPANY = {
  name: "런앤점프 컴퍼니",
  nameEn: "Run & Jump Company",
  ceo: "노력맨 진낙식",
  ceoTitle: "체육학 박사 / 1인 종합 콘텐츠 기업가",
  address: "대전 서구 둔산로 241 맑은호수 보라아파트 상가 2층",
  bizNumber: "404-10-94015",
  ecommerceNumber: "2023-대전서구-0164호",
  phone: "010-8944-3907",
  email: "05070208@hanmail.net",
  associationPhone: "042-862-6199",
  naverMap: "https://naver.me/5PVxaaZi",
  slogan: "뛰고, 배우고, 성장하는 사람들",
} as const;

// 메인 네비게이션 (8개 사업)
export const NAV_ITEMS = [
  { slug: "about", label: "회사소개", labelEn: "About" },
  { slug: "sports", label: "스포츠교실", labelEn: "Sports Class" },
  { slug: "bubble", label: "버블쇼", labelEn: "Bubble Show" },
  { slug: "cert", label: "지도자교육", labelEn: "Certification" },
  { slug: "shop", label: "SHOP", labelEn: "Shop" },
  { slug: "pmt", label: "자기경영PT", labelEn: "Personal Management" },
  { slug: "pub", label: "출판PT", labelEn: "Publishing" },
  { slug: "web", label: "홈페이지제작", labelEn: "Web Development" },
] as const;

// 사업 카드 (메인 페이지에서 사용)
export const SERVICES = [
  {
    slug: "sports",
    num: "01",
    label: "Sports Class",
    title: "스포츠교실",
    desc: "인라인·음악줄넘기·농구·보드·놀이체육·축구. 6개 종목을 검증된 커리큘럼으로 가르칩니다.",
    icon: "🛼",
    color: "accent-red",
  },
  {
    slug: "bubble",
    num: "02",
    label: "Bubble & Magic Show",
    title: "버블쇼 + 마술쇼",
    desc: "유치원·학교·축제·기업 행사까지. 50여 곳에서 검증된 무대.",
    icon: "🫧",
    color: "accent-blue",
  },
  {
    slug: "cert",
    num: "03",
    label: "Certification",
    title: "지도자교육",
    desc: "한국유소년스포츠협회 8개 민간자격. 실전형 교육으로 자격증 + 노하우 동시 획득.",
    icon: "🎓",
    color: "accent-gold",
  },
  {
    slug: "shop",
    num: "04",
    label: "Shop",
    title: "SHOP",
    desc: "인라인·롱보드·스케이트보드 매장 + 직접 제작하는 놀이체육 도구.",
    icon: "🏪",
    color: "accent-orange",
  },
  {
    slug: "pmt",
    num: "05",
    label: "Personal Management",
    title: "자기경영 PT",
    desc: "10주 1:1 코칭으로 본인만의 인생 관리 시스템을 완성합니다.",
    icon: "🎯",
    color: "accent-red",
  },
  {
    slug: "pub",
    num: "06",
    label: "Publishing",
    title: "출판 PT",
    desc: "4개월에 무조건 출판. 원고부터 종이책까지 1:1로 완성.",
    icon: "📚",
    color: "accent-blue-deep",
  },
  {
    slug: "web",
    num: "07",
    label: "Web Development",
    title: "홈페이지 제작",
    desc: "강사·매장·학원·1인기업을 위한 실용적인 맞춤형 홈페이지.",
    icon: "💻",
    color: "accent-orange",
  },
] as const;

// 회사 철학
export const PHILOSOPHY = [
  {
    num: "01",
    title: "성장은 노력의 산물",
    desc: "타고난 재능보다 꾸준한 노력이 사람을 만든다.",
  },
  {
    num: "02",
    title: "이론보다 실전",
    desc: "현장에서 검증된 것만 가르치고 만든다.",
  },
  {
    num: "03",
    title: "1인 → 시스템",
    desc: "혼자서도 운영 가능한 자립형 노하우를 전한다.",
  },
] as const;

// 회사 통계
export const STATS = [
  { num: "Ph.D", label: "체육학 박사" },
  { num: "30+", label: "출간 도서" },
  { num: "50+", label: "보유 자격증" },
  { num: "15Y+", label: "현장 경험" },
] as const;
