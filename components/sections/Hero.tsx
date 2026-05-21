import Link from "next/link";
import { COMPANY } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* 배경 도트 그리드 */}
      <div className="absolute inset-0 dot-grid opacity-50" />

      {/* Blob 애니메이션 */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent-orange/20 rounded-full blur-3xl animate-blob" />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl animate-blob"
        style={{ animationDelay: "5s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent-gold/15 rounded-full blur-3xl animate-blob"
        style={{ animationDelay: "10s" }}
      />

      <div className="container-rj relative z-10">
        <div className="max-w-4xl">
          <div className="eyebrow mb-6">— Run & Jump Company</div>

          <h1 className="section-title mb-8">
            뛰고, 배우고,
            <br />
            <span className="italic text-accent-red">성장하는 사람들</span>
          </h1>

          <p className="text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl mb-10">
            노력맨 진낙식 대표가 운영하는 1인 종합 콘텐츠 기업.
            <br />
            스포츠 교육부터 자기경영, 출판, 홈페이지까지 8개 사업을 운영합니다.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/about" className="btn-primary">
              회사 소개 보기 →
            </Link>
            <a href={`tel:${COMPANY.phone}`} className="btn-secondary">
              📞 상담 신청
            </a>
          </div>
        </div>
      </div>

      {/* 떠다니는 카드들 (큰 화면에서만) */}
      <div className="hidden xl:block">
        <FloatingCard
          className="top-32 right-20"
          icon="🛼"
          title="Sports Class"
          subtitle="6개 종목"
        />
        <FloatingCard
          className="bottom-40 right-40 animation-delay-2000"
          icon="🫧"
          title="Bubble Show"
          subtitle="50+ 공연"
        />
        <FloatingCard
          className="top-1/2 right-60 animation-delay-4000"
          icon="🎓"
          title="Certification"
          subtitle="8개 자격"
        />
      </div>
    </section>
  );
}

function FloatingCard({
  className,
  icon,
  title,
  subtitle,
}: {
  className?: string;
  icon: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div
      className={`absolute bg-white/80 backdrop-blur-md border border-line rounded-2xl p-4 shadow-lg animate-blob ${className}`}
    >
      <div className="text-3xl mb-2">{icon}</div>
      <div className="font-display font-bold text-sm">{title}</div>
      <div className="text-xs text-ink-mute">{subtitle}</div>
    </div>
  );
}
