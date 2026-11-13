"use client";

import * as React from "react";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <LazyMotion features={domAnimation} strict>
      <AnimatePresence mode="wait">
        <m.div
          key={pathname}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex w-full flex-1 flex-col"
        >
          {children}
        </m.div>
      </AnimatePresence>
    </LazyMotion>
  );
}
