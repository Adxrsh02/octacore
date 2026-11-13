import * as React from "react";
import Link from "next/link";
import { Compass, MapPin, ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-bg relative flex min-h-[75vh] flex-col items-center justify-center overflow-hidden px-4 py-20 text-center">
      <div className="bg-accent/10 pointer-events-none absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-lg flex-col items-center">
        {/* Telemetry pill */}
        <div className="bg-card text-accent font-display mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs font-semibold tracking-widest uppercase">
          <Compass className="h-3.5 w-3.5 animate-spin" />
          <span>OUT OF BOUNDS // 404</span>
        </div>

        <h1 className="font-display mb-3 text-5xl font-bold tracking-tight text-white uppercase sm:text-7xl">
          SECTOR <span className="text-accent">OFF-GRID</span>
        </h1>

        <p className="text-text-muted mb-8 max-w-md text-sm leading-relaxed sm:text-base">
          The coordinate you requested is outside our athletic training perimeter. Re-route back to
          the main facility or inspect one of our active hubs below.
        </p>

        {/* Action Buttons */}
        <div className="mb-8 flex w-full max-w-sm flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="bg-accent hover:bg-accent-2 text-bg font-display flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-xs font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(255,133,0,0.35)] transition-all active:scale-95"
          >
            <Home className="h-4 w-4" />
            <span>Return to Home Floor</span>
          </Link>

          <Link
            href="/locations"
            className="bg-card hover:bg-card-hover font-display flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 text-xs font-semibold tracking-wider text-white uppercase transition-all active:scale-95"
          >
            <MapPin className="text-accent h-4 w-4" />
            <span>Locations Hub</span>
          </Link>
        </div>

        {/* Quick Branch Links */}
        <div className="bg-card flex w-full flex-col gap-2.5 rounded-2xl border border-white/5 p-4 text-left text-xs">
          <span className="font-display text-text-muted text-[10px] font-semibold tracking-wider uppercase">
            Direct Branch Access:
          </span>
          <div className="grid grid-cols-2 gap-2">
            <Link
              href="/locations/nerul"
              className="bg-bg-2 hover:border-accent/40 group flex items-center justify-between rounded-lg border border-white/5 p-2.5 text-white transition-colors"
            >
              <span>Nerul Club</span>
              <ArrowRight className="text-accent h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/locations/airoli"
              className="bg-bg-2 hover:border-accent/40 group flex items-center justify-between rounded-lg border border-white/5 p-2.5 text-white transition-colors"
            >
              <span>Airoli Club</span>
              <ArrowRight className="text-accent-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
