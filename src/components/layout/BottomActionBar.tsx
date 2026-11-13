"use client";

import * as React from "react";
import Link from "next/link";
import { branches } from "@/content/branches";
import { Phone, MessageSquare, Zap } from "lucide-react";

export function BottomActionBar() {
  const activeBranch = branches.nerul; // Default primary hotline

  return (
    <nav
      aria-label="Mobile Quick Actions"
      className="pb-safe bg-bg/90 border-border fixed inset-x-0 bottom-0 z-40 border-t shadow-[0_-8px_32px_rgba(0,0,0,0.7)] backdrop-blur-xl lg:hidden"
    >
      <div className="flex h-18 items-center justify-between gap-2.5 px-4">
        {/* Quick Call */}
        <a
          href={`tel:${activeBranch.phone}`}
          aria-label="Call"
          className="rounded-control bg-card-elevated border-border text-text font-display hover:bg-card flex h-12 min-h-[48px] flex-1 items-center justify-center gap-1.5 border text-xs font-semibold tracking-wider uppercase transition-transform active:scale-95"
        >
          <Phone className="text-accent h-4 w-4" />
          <span>Call</span>
        </a>

        {/* Quick WhatsApp */}
        <a
          href={`https://wa.me/${activeBranch.whatsappNumber}?text=${encodeURIComponent(
            activeBranch.whatsappPrefillText
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="rounded-control bg-card-elevated border-border text-text font-display hover:bg-card flex h-12 min-h-[48px] flex-1 items-center justify-center gap-1.5 border text-xs font-semibold tracking-wider uppercase transition-transform active:scale-95"
        >
          <MessageSquare className="text-accent-2 h-4 w-4" />
          <span>WhatsApp</span>
        </a>

        {/* Primary Join Action */}
        <Link
          href="/membership"
          className="rounded-control bg-accent text-bg font-display shadow-glow-sm flex h-12 min-h-[48px] flex-[1.4] items-center justify-center gap-1.5 text-sm font-bold tracking-wider uppercase transition-all active:scale-95"
        >
          <Zap className="h-4 w-4 fill-current stroke-[2.5]" />
          <span>Join</span>
        </Link>
      </div>
    </nav>
  );
}
