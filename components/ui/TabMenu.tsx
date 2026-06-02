"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export interface Tab {
  id: string;
  num: string;
  label: string;
  content: React.ReactNode;
}

interface TabMenuProps {
  tabs: Tab[];
}

export function TabMenu({ tabs }: TabMenuProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  return (
    <>
      {/* 탭 버튼 */}
      <div className="sticky top-20 z-30 border-b border-line bg-cream shadow-sm">
        <div className="container-rj">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                  activeTab === tab.id
                    ? "bg-ink text-cream"
                    : "text-ink-soft hover:bg-cream-deep"
                )}
              >
                <span
                  className={cn(
                    "text-xs font-display italic",
                    activeTab === tab.id ? "text-accent-red" : "text-ink-mute"
                  )}
                >
                  {tab.num}
                </span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 탭 콘텐츠 */}
      <div className="container-rj py-16">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={cn(
              "transition-opacity duration-300",
              activeTab === tab.id ? "block animate-fade-up" : "hidden"
            )}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </>
  );
}
