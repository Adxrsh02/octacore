"use client";

import * as React from "react";
import Link from "next/link";
import { ShieldCheck, X } from "lucide-react";
import { getCookieConsent, setCookieConsent } from "@/lib/analytics";

export function CookieConsent() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    // Only show if user hasn't made a choice yet
    if (getCookieConsent() === "pending") {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!visible) return null;

  const handleAccept = () => {
    setCookieConsent("accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    setCookieConsent("declined");
    setVisible(false);
  };

  return (
    <aside
      aria-label="Cookie consent banner"
      role="region"
      className="bg-card/95 animate-fade-in fixed right-4 bottom-20 left-4 z-50 mx-auto flex max-w-lg flex-col gap-3 rounded-2xl border border-white/10 p-4 shadow-2xl backdrop-blur-xl sm:right-6 sm:left-auto sm:p-5 lg:bottom-6"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-accent h-5 w-5 shrink-0" />
          <span className="font-display text-sm font-bold tracking-wider text-white uppercase">
            Privacy &amp; Analytics
          </span>
        </div>
        <button
          onClick={handleDecline}
          aria-label="Close cookie banner"
          className="text-text-muted rounded-md p-1 transition-colors hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <p className="text-text-muted text-xs leading-relaxed font-normal">
        We use privacy-friendly analytics to measure member engagement across our Nerul &amp; Airoli
        clubs. Read our{" "}
        <Link
          href="/privacy-policy"
          className="text-accent underline transition-colors hover:text-white"
        >
          Privacy Policy
        </Link>
        .
      </p>

      <div className="flex items-center gap-2 pt-1">
        <button
          onClick={handleAccept}
          className="bg-accent hover:bg-accent-2 text-bg font-display flex-1 rounded-lg px-3 py-2 text-xs font-bold tracking-wider uppercase shadow-sm transition-all active:scale-95"
        >
          Accept
        </button>
        <button
          onClick={handleDecline}
          className="bg-bg-2 hover:bg-card font-display flex-1 rounded-lg border border-white/10 px-3 py-2 text-xs font-semibold tracking-wider text-white uppercase transition-all active:scale-95"
        >
          Decline
        </button>
      </div>
    </aside>
  );
}

export default CookieConsent;
