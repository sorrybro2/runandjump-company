"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, PhoneCall, X } from "lucide-react";
import { COMPANY, NAV_ITEMS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const activeItem = NAV_ITEMS.find((item) => pathname === `/${item.slug}`);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 transition-all duration-300 sm:px-5">
      <div className="mx-auto max-w-7xl">
        <div
          className={cn(
            "flex min-h-16 items-center justify-between gap-3 rounded-2xl border border-line/80 bg-cream/95 px-3 shadow-lg shadow-ink/5 backdrop-blur-xl transition-all duration-300 sm:px-4",
            scrolled && "min-h-14 bg-white/95 shadow-xl shadow-ink/10"
          )}
        >
          <Link href="/" className="group flex min-w-0 items-center gap-3">
            <span className="relative size-12 shrink-0 overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-line transition-transform group-hover:scale-105">
              <Image
                src="/assets/runandjump-logo.png"
                alt="런앤점프 컴퍼니 로고"
                fill
                sizes="48px"
                className="object-contain p-0.5"
                priority
              />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-extrabold text-ink sm:text-base">
                런앤점프 컴퍼니
              </span>
              <span className="hidden text-[11px] font-semibold text-accent-red sm:block">
                Run & Jump Company
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {NAV_ITEMS.map((item) => {
              const active = pathname === `/${item.slug}`;
              return (
                <Link
                  key={item.slug}
                  href={`/${item.slug}`}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm font-semibold text-ink-soft transition-colors hover:bg-white hover:text-accent-red",
                    active && "bg-ink text-white hover:bg-ink hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            {activeItem && (
              <span className="hidden rounded-full border border-line bg-white px-3 py-2 text-xs font-bold text-ink-soft lg:inline-flex">
                {activeItem.label}
              </span>
            )}
            <a
              href={`tel:${COMPANY.phone}`}
              className="hidden items-center gap-2 rounded-full bg-accent-red px-4 py-2.5 text-sm font-extrabold text-white shadow-lg shadow-accent-red/20 transition-all hover:-translate-y-0.5 hover:bg-accent-red-deep md:inline-flex"
            >
              <PhoneCall size={16} strokeWidth={2.5} />
              <span>상담 신청</span>
              <span className="hidden font-bold lg:inline">{COMPANY.phone}</span>
            </a>

            <button
              onClick={() => setIsOpen((value) => !value)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-accent-red hover:text-accent-red xl:hidden"
              aria-label="메뉴 열기"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="mt-2 rounded-2xl border border-line bg-white p-3 shadow-xl shadow-ink/10 xl:hidden">
            <nav className="grid gap-1 sm:grid-cols-2">
              {NAV_ITEMS.map((item) => {
                const active = pathname === `/${item.slug}`;
                return (
                  <Link
                    key={item.slug}
                    href={`/${item.slug}`}
                    className={cn(
                      "rounded-xl px-4 py-3 text-sm font-bold text-ink-soft transition-colors hover:bg-cream-deep hover:text-accent-red",
                      active && "bg-ink text-white hover:bg-ink hover:text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href={`tel:${COMPANY.phone}`}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-accent-red px-4 py-3 text-sm font-extrabold text-white sm:col-span-2"
              >
                <PhoneCall size={16} />
                상담 전화 {COMPANY.phone}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
