import * as React from "react";

export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="focus:bg-accent focus:text-bg focus:font-display focus:rounded-control focus:shadow-glow-md sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:tracking-wider focus:uppercase focus:outline-none"
    >
      Skip to main content
    </a>
  );
}
