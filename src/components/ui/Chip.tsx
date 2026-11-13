import * as React from "react";
import { cn } from "@/lib/utils";

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "amber" | "live" | "outline";
  size?: "sm" | "md";
  pulse?: boolean;
}

export const Chip = React.forwardRef<HTMLSpanElement, ChipProps>(
  ({ className, variant = "default", size = "md", pulse = false, children, ...props }, ref) => {
    const variants = {
      default: "bg-card-elevated text-text border border-border",
      accent: "bg-accent/15 text-accent border border-accent/30",
      amber: "bg-accent-2/15 text-accent-2 border border-accent-2/30",
      live: "bg-card-elevated text-text border border-border",
      outline: "bg-transparent text-text-muted border border-border",
    };

    const sizes = {
      sm: "px-2 py-0.5 text-[10px] font-display tracking-widest uppercase rounded-full gap-1",
      md: "px-2.5 py-1 text-xs font-display tracking-wider uppercase rounded-full gap-1.5",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center font-semibold shadow-sm select-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {pulse && (
          <span className="relative flex h-2 w-2">
            <span className="bg-accent absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
            <span className="bg-accent relative inline-flex h-2 w-2 rounded-full" />
          </span>
        )}
        {children}
      </span>
    );
  }
);

Chip.displayName = "Chip";
