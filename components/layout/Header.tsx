"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { COMPANY, NAV_ITEMS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 스크롤 시 헤더 배경 변화
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-cream/95 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      )}
    >
      <div className="container-rj">
        <div className="flex items-center justify-between h-20">
          {/* 로고 */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-display text-2xl font-black tracking-tight">
              R<span className="text-accent-red">&</span>J
            </span>
            <span className="hidden md:block text-sm text-ink-soft font-medium border-l border-line pl-2 ml-1">
              런앤점프 컴퍼니
            </span>
          </Link>

          {/* 데스크탑 네비게이션 */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.slug}
                href={`/${item.slug}`}
                className="px-3 py-2 text-sm font-medium text-ink-soft hover:text-accent-red transition-colors rounded-md hover:bg-cream-deep/50"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA 버튼 */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${COMPANY.phone}`}
              className="text-sm font-semibold text-ink hover:text-accent-red transition-colors"
            >
              📞 {COMPANY.phone}
            </a>
          </div>

          {/* 모바일 토글 */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
            aria-label="메뉴 토글"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isOpen && (
          <div className="lg:hidden border-t border-line py-4 animate-fade-up">
            <nav className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${item.slug}`}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-sm font-medium hover:bg-cream-deep rounded-md transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={`tel:${COMPANY.phone}`}
                className="mt-2 mx-4 btn-primary justify-center"
              >
                📞 상담 전화
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
