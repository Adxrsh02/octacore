"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type = "text", label, error, helperText, leftIcon, rightIcon, id, ...props },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;

    return (
      <div className="flex w-full flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="font-display text-text-muted flex items-center justify-between text-xs tracking-wider uppercase"
          >
            <span>{label}</span>
            {props.required && <span className="text-accent font-mono text-[11px]">REQUIRED</span>}
          </label>
        )}
        <div className="relative flex w-full items-center">
          {leftIcon && (
            <span className="text-text-muted pointer-events-none absolute left-3.5 flex items-center justify-center">
              {leftIcon}
            </span>
          )}
          <input
            id={inputId}
            type={type}
            ref={ref}
            className={cn(
              "rounded-control bg-bg-2 border-border text-text placeholder:text-text-tertiary font-body focus:border-accent focus:ring-accent h-12 min-h-[48px] w-full border px-4 text-sm transition-all duration-200 focus:ring-1 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 sm:text-base",
              leftIcon ? "pl-11" : "",
              rightIcon ? "pr-11" : "",
              error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "",
              className
            )}
            {...props}
          />
          {rightIcon && (
            <span className="text-text-muted absolute right-3.5 flex items-center justify-center">
              {rightIcon}
            </span>
          )}
        </div>
        {error && <p className="font-body text-xs font-medium text-red-500">{error}</p>}
        {helperText && !error && (
          <p className="font-body text-text-tertiary text-xs">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
