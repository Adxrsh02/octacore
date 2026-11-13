"use client";

import * as React from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface SmoothScrollContextValue {
  lenis: Lenis | null;
}

const SmoothScrollContext = React.createContext<SmoothScrollContextValue>({
  lenis: null,
});

export function useLenis() {
  return React.useContext(SmoothScrollContext).lenis;
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const [lenisInstance, setLenisInstance] = React.useState<Lenis | null>(null);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    // Detect touch device coarse pointer
    const isTouch = window.matchMedia("(pointer: coarse)").matches;

    // If reduced motion or mobile touch device, preserve 100% native momentum feel
    if (prefersReducedMotion || isTouch) {
      return;
    }

    // Initialize Lenis for desktop pointer devices
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    setLenisInstance(lenis);

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const updateLenisTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenisTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateLenisTicker);
      lenis.destroy();
      setLenisInstance(null);
    };
  }, [prefersReducedMotion]);

  // Handle route changes
  React.useEffect(() => {
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
      ScrollTrigger.refresh();
    }
  }, [pathname, lenisInstance]);

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisInstance }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
