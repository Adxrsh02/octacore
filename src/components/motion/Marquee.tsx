"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export interface MarqueeProps {
  children: React.ReactNode;
  speed?: number; // duration in seconds
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
}

export function Marquee({
  children,
  speed = 25,
  reverse = false,
  pauseOnHover = true,
  className,
}: MarqueeProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={cn("flex flex-wrap items-center gap-6 overflow-hidden", className)}>
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "group flex gap-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] select-none",
        className
      )}
    >
      <div
        className={cn(
          "animate-marquee flex shrink-0 items-center gap-6 will-change-transform",
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
        )}
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "animate-marquee flex shrink-0 items-center gap-6 will-change-transform",
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
        )}
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {children}
      </div>
    </div>
  );
}
