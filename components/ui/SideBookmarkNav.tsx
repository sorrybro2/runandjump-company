"use client";

import { useEffect, useState } from "react";

type NavItem = { id: string; label: string };

// 오른쪽에 책갈피처럼 붙어 스크롤을 따라다니는 섹션 네비게이션.
// 데스크탑(lg+)에서만 노출되고, 모바일에서는 상단 바를 그대로 사용한다.
export function SideBookmarkNav({ items }: { items: NavItem[] }) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="섹션 바로가기"
      className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 lg:flex"
    >
      {items.map((item) => {
        const isActive = active === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={isActive ? "true" : undefined}
            className={`group flex items-center justify-end gap-2 rounded-l-full border border-r-0 py-2.5 pl-5 pr-4 text-sm font-medium shadow-sm transition-all duration-200 ${
              isActive
                ? "translate-x-0 border-accent-red bg-accent-red text-white"
                : "translate-x-2 border-line bg-white/90 text-ink-soft hover:translate-x-0 hover:border-accent-red hover:text-accent-red"
            }`}
          >
            <span
              className={`size-1.5 rounded-full transition-colors ${
                isActive ? "bg-white" : "bg-accent-red/50 group-hover:bg-accent-red"
              }`}
            />
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
