"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: React.ReactNode;
  error?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, id, checked, defaultChecked, onChange, ...props }, ref) => {
    const generatedId = React.useId();
    const checkboxId = id || generatedId;
    const [isChecked, setIsChecked] = React.useState<boolean>(
      Boolean(checked ?? defaultChecked ?? false)
    );

    React.useEffect(() => {
      if (checked !== undefined) {
        setIsChecked(checked);
      }
    }, [checked]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (checked === undefined) {
        setIsChecked(e.target.checked);
      }
      onChange?.(e);
    };

    return (
      <div className="flex flex-col gap-1">
        <label
          htmlFor={checkboxId}
          className="group flex cursor-pointer items-start gap-3 select-none"
        >
          <div className="relative mt-0.5 flex shrink-0 items-center justify-center">
            <input
              type="checkbox"
              id={checkboxId}
              ref={ref}
              checked={isChecked}
              onChange={handleChange}
              className="sr-only"
              {...props}
            />
            <div
              className={cn(
                "flex h-5 w-5 items-center justify-center rounded-sm border transition-all duration-200",
                isChecked
                  ? "bg-accent border-accent text-bg shadow-glow-sm"
                  : "bg-bg-2 border-border group-hover:border-accent/60",
                error ? "border-red-500" : "",
                className
              )}
            >
              {isChecked && <Check className="h-3.5 w-3.5 stroke-[3]" />}
            </div>
          </div>
          {label && (
            <span className="font-body text-text-muted group-hover:text-text text-xs leading-relaxed transition-colors sm:text-sm">
              {label}
            </span>
          )}
        </label>
        {error && <p className="font-body pl-8 text-xs font-medium text-red-500">{error}</p>}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
