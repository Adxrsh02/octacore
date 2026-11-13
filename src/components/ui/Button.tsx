"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline" | "icon";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-display uppercase tracking-wider font-bold transition-all duration-200 select-none cursor-pointer focus-visible:outline-2 focus-visible:outline-accent active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-accent text-bg hover:bg-[#ff9924] shadow-glow-sm hover:shadow-glow-md active:bg-[#e07500]",
      secondary:
        "bg-card-elevated text-text border border-border hover:border-accent hover:text-accent hover:bg-card active:bg-bg-2",
      ghost: "bg-transparent text-text-muted hover:text-text hover:bg-card-elevated active:bg-card",
      outline:
        "bg-transparent text-accent border border-accent/60 hover:bg-accent/10 active:bg-accent/20",
      icon: "bg-card-elevated text-text border border-border hover:text-accent hover:border-accent active:scale-95 p-0",
    };

    const sizes = {
      sm: "h-9 px-3 text-xs rounded-control gap-1.5",
      md: "h-12 min-h-[48px] px-5 text-sm rounded-control gap-2",
      lg: "h-14 min-h-[56px] px-7 text-base rounded-control gap-2.5",
      icon: "w-11 h-11 min-w-[44px] min-h-[44px] rounded-control",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="h-5 w-5 animate-spin text-current" />
        ) : (
          <>
            {leftIcon && <span className="shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="shrink-0">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
