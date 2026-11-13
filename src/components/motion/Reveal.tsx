"use client";

import * as React from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

export interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
  duration?: number;
  yOffset?: number;
  threshold?: number;
}

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.8,
  yOffset = 24,
  threshold = 0.15,
  ...props
}: RevealProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  React.useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        {
          opacity: 0,
          y: yOffset,
        },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: `top ${100 - threshold * 100}%`,
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [delay, duration, yOffset, threshold, prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className={cn(
        // Default opacity-100 so if JS is disabled or during SSR it remains fully visible!
        "will-change-[opacity,transform]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
