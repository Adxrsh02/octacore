"use client";

import * as React from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

export interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function CountUp({
  end,
  duration = 1.8,
  prefix = "",
  suffix = "",
  className,
}: CountUpProps) {
  const spanRef = React.useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = useReducedMotion();

  React.useEffect(() => {
    if (prefersReducedMotion || !spanRef.current) return;

    const targetObj = { val: 0 };
    const el = spanRef.current;

    const ctx = gsap.context(() => {
      gsap.to(targetObj, {
        val: end,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
        onUpdate: () => {
          el.textContent = `${prefix}${Math.round(targetObj.val)}${suffix}`;
        },
      });
    }, spanRef);

    return () => ctx.revert();
  }, [end, duration, prefix, suffix, prefersReducedMotion]);

  return (
    <span ref={spanRef} className={cn("font-display font-bold tabular-nums", className)}>
      {prefix}
      {end}
      {suffix}
    </span>
  );
}
