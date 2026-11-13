import * as React from "react";
import Image from "next/image";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export interface SceneFallbackProps {
  className?: string;
  interactive?: boolean;
}

export function SceneFallback({ className, interactive = true }: SceneFallbackProps) {
  return (
    <div
      className={cn(
        "group relative flex h-36 w-36 items-center justify-center select-none sm:h-44 sm:w-44 md:h-52 md:w-52",
        interactive ? "cursor-pointer" : "",
        className
      )}
    >
      {/* Ambient Kinetic Core Aura Pulse */}
      <div className="bg-accent/25 pointer-events-none absolute -inset-4 animate-pulse rounded-full blur-2xl" />
      <div className="bg-accent-2/15 pointer-events-none absolute inset-0 rounded-full blur-lg" />

      {/* Official OCTACORE Fitness Crest Logo */}
      <div className="border-accent/40 relative h-32 w-32 overflow-hidden rounded-full border bg-black shadow-[0_0_35px_rgba(255,133,0,0.45)] transition-transform duration-500 ease-out group-hover:scale-105 active:scale-95 sm:h-40 sm:w-40 md:h-48 md:w-48">
        <Image
          src={siteConfig.logo.url}
          alt={siteConfig.logo.alt}
          width={192}
          height={192}
          priority
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
}

export default SceneFallback;
