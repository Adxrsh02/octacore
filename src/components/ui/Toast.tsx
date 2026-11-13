"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2, AlertCircle, Info, AlertTriangle, X } from "lucide-react";

export interface ToastProps {
  variant?: "success" | "error" | "info" | "warning";
  title?: string;
  message: React.ReactNode;
  onClose?: () => void;
  className?: string;
}

export function Toast({ variant = "info", title, message, onClose, className }: ToastProps) {
  const icons = {
    success: <CheckCircle2 className="text-accent mt-0.5 h-5 w-5 shrink-0" />,
    error: <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />,
    info: <Info className="text-accent-2 mt-0.5 h-5 w-5 shrink-0" />,
    warning: <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />,
  };

  const borders = {
    success: "border-accent/40 shadow-glow-sm",
    error: "border-red-500/40",
    info: "border-accent-2/40",
    warning: "border-amber-400/40",
  };

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "rounded-card bg-card shadow-card flex items-start gap-3 border p-4",
        borders[variant],
        className
      )}
    >
      {icons[variant]}
      <div className="flex min-w-0 flex-1 flex-col">
        {title && (
          <span className="font-display text-text text-sm font-bold tracking-wider uppercase">
            {title}
          </span>
        )}
        <div className="font-body text-text-muted mt-0.5 text-xs leading-relaxed sm:text-sm">
          {message}
        </div>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          aria-label="Dismiss message"
          className="text-text-tertiary hover:text-text -mt-1 -mr-1 cursor-pointer p-1 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
