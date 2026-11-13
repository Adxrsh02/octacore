"use client";

import * as React from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

export interface SplitHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  text: string;
  delay?: number;
  threshold?: number;
}

export function SplitHeading({
  as: Component = "h2",
  text,
  className,
  delay = 0,
  threshold = 0.2,
  ...props
}: SplitHeadingProps) {
  const containerRef = React.useRef<HTMLHeadingElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const words = React.useMemo(() => text.split(" "), [text]);

  React.useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    const wordSpans = containerRef.current.querySelectorAll(".split-word-inner");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordSpans,
        {
          yPercent: 100,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.8,
          delay,
          stagger: 0.05,
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
  }, [delay, threshold, prefersReducedMotion]);

  return (
    <Component
      ref={containerRef}
      className={cn("font-display font-bold tracking-tight uppercase", className)}
      {...props}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="mr-[0.25em] inline-block overflow-hidden last:mr-0"
        >
          <span className="split-word-inner inline-block will-change-[transform,opacity]">
            {word}
          </span>
        </span>
      ))}
    </Component>
  );
}
