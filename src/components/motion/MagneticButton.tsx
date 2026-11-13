"use client";

import * as React from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useDeviceCapabilities } from "@/hooks/useDeviceCapabilities";
import { cn } from "@/lib/utils";

export interface MagneticButtonProps {
  children: React.ReactNode;
  strength?: number; // max offset in px
  className?: string;
}

export function MagneticButton({ children, strength = 12, className }: MagneticButtonProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { isPointerFine } = useDeviceCapabilities();

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el || prefersReducedMotion || !isPointerFine) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      gsap.to(el, {
        x: (x / (rect.width / 2)) * strength,
        y: (y / (rect.height / 2)) * strength,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.4)",
      });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
      gsap.killTweensOf(el);
    };
  }, [strength, prefersReducedMotion, isPointerFine]);

  return (
    <div ref={containerRef} className={cn("inline-block will-change-transform", className)}>
      {children}
    </div>
  );
}
