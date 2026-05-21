# 런앤점프 컴퍼니 — Next.js 버전

노력맨 진낙식 대표의 1인 종합 콘텐츠 기업 통합 홈페이지.
Next.js 16 + Tailwind CSS + TypeScript 기반.

## 🚀 시작하기

### 1. Node.js 설치 확인

```bash
node -v
# v20 이상이면 OK
```

없으면 https://nodejs.org 에서 LTS 버전 설치.

### 2. 의존성 설치

```bash
npm install
```

처음 한 번만 실행. node_modules 폴더가 생성됩니다.

### 3. 개발 서버 실행

```bash
npm run dev
```

http://localhost:3000 으로 접속.

### 4. 프로덕션 빌드

```bash
npm run build
npm run start
```

## 📁 폴더 구조

```
runandjump-next/
├── app/                       # 페이지 (Next.js App Router)
│   ├── layout.tsx            # 모든 페이지의 공통 레이아웃
│   ├── page.tsx              # 메인 페이지
│   ├── globals.css           # 전역 CSS
│   ├── about/page.tsx        # 회사소개
│   ├── sports/page.tsx       # 스포츠교실
│   ├── bubble/page.tsx       # 버블쇼
│   ├── cert/page.tsx         # 지도자교육
│   ├── shop/page.tsx         # SHOP
│   ├── pmt/page.tsx          # 자기경영 PT
│   ├── pub/page.tsx          # 출판 PT
│   └── web/page.tsx          # 홈페이지 제작
│
├── components/
│   ├── layout/               # 공통 레이아웃 컴포넌트
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/             # 메인 페이지 섹션
│   │   ├── Hero.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── Philosophy.tsx
│   │   └── CTASection.tsx
│   └── ui/                   # 재사용 UI 컴포넌트
│       ├── SubpageHero.tsx
│       └── TabMenu.tsx
│
├── lib/
│   ├── data.ts               # 사이트 전역 데이터 (회사 정보, 메뉴 등)
│   └── utils.ts              # 유틸 함수
│
├── public/                   # 정적 파일 (이미지, 폰트 등)
├── tailwind.config.ts        # Tailwind 디자인 토큰
├── tsconfig.json             # TypeScript 설정
└── package.json              # 의존성 정의
```

## 🎨 디자인 토큰

`tailwind.config.ts`에서 관리:

- **컬러**: cream, ink, accent-red, accent-blue, accent-orange, accent-gold
- **폰트**: Pretendard (한글), Playfair Display (영문)
- **애니메이션**: blob, fade-up

## 🤖 AI와 협업하기

Claude Code 또는 Cursor에서 이 폴더를 열고 자연어로 요청:

### 다음 단계 작업 예시

```
1. "bubble 페이지의 탭 메뉴를 about 페이지처럼 구현해줘.
    내용은 원본 HTML 파일을 참고해."

2. "Supabase를 연동해서 수강 신청 폼이 실제로
    데이터베이스에 저장되도록 만들어줘."

3. "관리자 페이지를 만들어줘. 노력맨 대표가 로그인해서
    신청자 명단을 확인할 수 있게."

4. "토스페이먼츠 결제 모듈을 연동해서
    지도자 자격증 비용을 결제할 수 있게 해줘."
```

## 🚀 배포

### Vercel (가장 쉬운 방법)

1. https://vercel.com 가입
2. GitHub 저장소에 코드 푸시
3. Vercel 대시보드에서 "New Project" → 저장소 선택
4. Deploy 클릭 → 끝!

도메인 연결도 Vercel 대시보드에서 가능.

## 📞 연락처

- 010-8944-3907
- 05070208@hanmail.net
- 대전 서구 둔산로 241 맑은호수 보라아파트 상가 2층
