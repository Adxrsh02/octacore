"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { useDeviceCapabilities } from "@/hooks/useDeviceCapabilities";
import { SceneFallback } from "./SceneFallback";

const DynamicHeroScene = dynamic(() => import("./HeroScene").then((mod) => mod.HeroScene), {
  ssr: false,
  loading: () => <SceneFallback />,
});

export interface Hero3DContainerProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Hero3DContainer({ className, size = "md" }: Hero3DContainerProps) {
  const { canRender3D, isTouch } = useDeviceCapabilities();
  const [mounted, setMounted] = React.useState(false);
  const [readyForCanvas, setReadyForCanvas] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;

    // Delay 3D mount until after page load & idle frame so LCP (text/poster) paints first
    const scheduleMount = () => {
      if ("requestIdleCallback" in window) {
        const handle = (window as Window).requestIdleCallback(() => setReadyForCanvas(true), {
          timeout: 3000,
        });
        return () => (window as Window).cancelIdleCallback?.(handle);
      } else {
        const timer = setTimeout(() => setReadyForCanvas(true), 1500);
        return () => clearTimeout(timer);
      }
    };

    if (document.readyState === "complete") {
      return scheduleMount();
    } else {
      window.addEventListener("load", scheduleMount, { once: true });
      return () => window.removeEventListener("load", scheduleMount);
    }
  }, []);

  const sizeClasses = {
    sm: "w-32 h-32 sm:w-40 sm:h-40",
    md: "w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64",
    lg: "w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80",
  }[size];

  // Prioritize static poster SVG if not mounted or device incapable
  if (!mounted || !canRender3D || !readyForCanvas) {
    return (
      <div
        className={`relative flex items-center justify-center ${sizeClasses} ${className ?? ""}`}
      >
        <SceneFallback />
      </div>
    );
  }

  return (
    <div className={`relative flex items-center justify-center ${sizeClasses} ${className ?? ""}`}>
      <React.Suspense fallback={<SceneFallback />}>
        <DynamicHeroScene isTouch={isTouch} className="h-full w-full" />
      </React.Suspense>
    </div>
  );
}

export default Hero3DContainer;
