import Link from "next/link";
import Image from "next/image";
import { COMPANY, NAV_ITEMS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-ink text-cream/80">
      <div className="container-rj py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* 회사 정보 */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="relative size-14 overflow-hidden rounded-full bg-white">
                <Image
                  src="/assets/runandjump-logo.png"
                  alt="런앤점프 컴퍼니 로고"
                  fill
                  sizes="56px"
                  className="object-contain p-1"
                />
              </span>
              <div className="font-display text-2xl font-black text-cream">
                Run & Jump
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              {COMPANY.slogan}
            </p>
            <p className="text-xs opacity-60">
              {COMPANY.name}
              <br />
              대표 {COMPANY.ceo}
            </p>
          </div>

          {/* 사업 분야 */}
          <div>
            <h4 className="text-cream font-semibold mb-4 text-sm">사업 분야</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/${item.slug}`}
                    className="text-sm hover:text-accent-red transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h4 className="text-cream font-semibold mb-4 text-sm">연락처</h4>
            <ul className="space-y-2 text-sm">
              <li>📞 {COMPANY.phone}</li>
              <li>✉ {COMPANY.email}</li>
              {COMPANY.entities.map((entity) => (
                <li
                  key={entity.name}
                  className="text-xs opacity-70 pt-2 leading-relaxed"
                >
                  <span className="text-cream/90">{entity.name}</span>
                  <br />
                  {entity.address}
                </li>
              ))}
              <li>
                <a
                  href={COMPANY.naverMap}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-xs underline hover:text-accent-red"
                >
                  🗺️ 네이버 지도에서 보기
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 하단 정보 */}
        <div className="border-t border-cream/10 pt-6 flex flex-col md:flex-row justify-between gap-4 text-xs opacity-50">
          <div className="leading-relaxed">
            {COMPANY.entities.map((entity) => (
              <span key={entity.name} className="mr-3">
                {entity.name} 사업자등록번호 {entity.bizNumber}
              </span>
            ))}
            <span>통신판매업 {COMPANY.ecommerceNumber}</span>
          </div>
          <div>© 2026 {COMPANY.name}. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
