"use client";

import * as React from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useDeviceCapabilities } from "@/hooks/useDeviceCapabilities";
import { cn } from "@/lib/utils";

export interface ParallaxProps extends React.HTMLAttributes<HTMLDivElement> {
  speed?: number; // e.g. -40 to 40 (pixels)
  children: React.ReactNode;
}

export function Parallax({ speed = 30, children, className, ...props }: ParallaxProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { isPointerFine } = useDeviceCapabilities();

  React.useEffect(() => {
    // Parallax disabled on touch devices and for reduced motion to ensure flawless 60fps mobile scroll
    if (prefersReducedMotion || !isPointerFine || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(containerRef.current, {
        y: speed,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [speed, prefersReducedMotion, isPointerFine]);

  return (
    <div ref={containerRef} className={cn("will-change-transform", className)} {...props}>
      {children}
    </div>
  );
}
