"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TabOption {
  id: string;
  label: React.ReactNode;
  badge?: string;
  icon?: React.ReactNode;
}

export interface TabsProps {
  options: TabOption[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
  fullWidth?: boolean;
}

export function Tabs({ options, activeId, onChange, className, fullWidth = true }: TabsProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
    let nextIndex = currentIndex;
    if (e.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % options.length;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + options.length) % options.length;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = options.length - 1;
    } else {
      return;
    }
    e.preventDefault();
    const nextOption = options[nextIndex];
    if (nextOption) {
      onChange(nextOption.id);
    }
  };

  return (
    <div
      role="tablist"
      className={cn(
        "rounded-card bg-bg-2 border-border no-scrollbar flex items-center gap-1 overflow-x-auto border p-1",
        fullWidth ? "w-full" : "inline-flex",
        className
      )}
    >
      {options.map((option, index) => {
        const isActive = option.id === activeId;
        return (
          <button
            key={option.id}
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(option.id)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={cn(
              "rounded-control font-display focus-visible:outline-accent flex h-11 min-h-[44px] cursor-pointer items-center justify-center gap-2 px-4 text-sm font-semibold tracking-wider whitespace-nowrap uppercase transition-all duration-200 select-none focus-visible:outline-2 active:scale-[0.98]",
              fullWidth ? "flex-1" : "",
              isActive
                ? "bg-accent text-bg shadow-glow-sm"
                : "text-text-muted hover:text-text hover:bg-card-elevated bg-transparent"
            )}
          >
            {option.icon && <span className="shrink-0">{option.icon}</span>}
            <span>{option.label}</span>
            {option.badge && (
              <span
                className={cn(
                  "py-0.2 rounded-full px-1.5 text-[10px]",
                  isActive ? "bg-bg text-accent" : "bg-card text-text-muted"
                )}
              >
                {option.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
