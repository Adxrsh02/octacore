import * as React from "react";
import { HelpCircle } from "lucide-react";

export interface AnswerBlockProps {
  question: string;
  answer: string;
  className?: string;
  badge?: string;
}

/**
 * Answer-First Block for Generative Engine Optimization (GEO/AEO).
 * Provides a self-contained 40-60 word quotable factual answer
 * placed cleanly at the top of core pages for search and answer engines.
 */
export function AnswerBlock({
  question,
  answer,
  className = "",
  badge = "Direct Answer // Quick Overview",
}: AnswerBlockProps) {
  return (
    <aside
      aria-label={`Quick Answer: ${question}`}
      className={`bg-card border-accent/20 relative flex flex-col gap-2 overflow-hidden rounded-2xl border p-5 shadow-md sm:p-6 ${className}`}
    >
      <div className="flex items-center gap-2">
        <HelpCircle className="text-accent h-4 w-4 shrink-0" />
        <span className="font-display text-accent text-[11px] font-semibold tracking-wider uppercase">
          {badge}
        </span>
      </div>

      <h2 className="font-display text-lg font-bold tracking-wide text-white uppercase sm:text-xl">
        {question}
      </h2>

      <p className="text-text-muted text-sm leading-relaxed font-normal">{answer}</p>
    </aside>
  );
}

export default AnswerBlock;
