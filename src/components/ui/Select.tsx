"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  error?: string;
  helperText?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, options, error, helperText, id, ...props }, ref) => {
    const generatedId = React.useId();
    const selectId = id || generatedId;

    return (
      <div className="flex w-full flex-col gap-1.5">
        {label && (
          <label
            htmlFor={selectId}
            className="font-display text-text-muted flex items-center justify-between text-xs tracking-wider uppercase"
          >
            <span>{label}</span>
            {props.required && <span className="text-accent font-mono text-[11px]">REQUIRED</span>}
          </label>
        )}
        <div className="relative flex w-full items-center">
          <select
            id={selectId}
            ref={ref}
            className={cn(
              "rounded-control bg-bg-2 border-border text-text font-body focus:border-accent focus:ring-accent h-12 min-h-[48px] w-full cursor-pointer appearance-none border px-4 pr-10 text-sm transition-all duration-200 focus:ring-1 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 sm:text-base",
              error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "",
              className
            )}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value} className="bg-card text-text py-2">
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="text-text-muted pointer-events-none absolute right-3.5 h-5 w-5" />
        </div>
        {error && <p className="font-body text-xs font-medium text-red-500">{error}</p>}
        {helperText && !error && (
          <p className="font-body text-text-tertiary text-xs">{helperText}</p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
