"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface AccordionItemProps {
  id?: string;
  title: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
  className,
}: AccordionItemProps) {
  return (
    <details
      open={defaultOpen}
      className={cn(
        "group bg-card rounded-card border-border overflow-hidden border transition-all duration-200 select-none",
        className
      )}
    >
      <summary className="font-display text-text focus-visible:outline-accent hover:text-accent flex cursor-pointer list-none items-center justify-between p-4 text-base tracking-wide uppercase transition-colors focus-visible:outline-2 sm:p-5 sm:text-lg">
        <span className="pr-4">{title}</span>
        <ChevronDown className="text-accent h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180" />
      </summary>
      <div className="font-body text-text-muted border-border/40 border-t px-4 pt-3 pb-4 text-sm leading-relaxed sm:px-5 sm:pb-5 sm:text-base">
        {children}
      </div>
    </details>
  );
}

export interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

export function Accordion({ children, className }: AccordionProps) {
  return <div className={cn("flex flex-col gap-2.5", className)}>{children}</div>;
}
