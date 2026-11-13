"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { mainNavItems } from "@/content/navigation";
import { branches } from "@/content/branches";
import { siteConfig } from "@/content/site";
import { X, Phone, MessageSquare, Instagram, Facebook } from "lucide-react";

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const menuRef = React.useRef<HTMLDivElement>(null);

  // Body scroll lock
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ESC key to close
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Focus trap
  React.useEffect(() => {
    if (!isOpen || !menuRef.current) return;

    const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
      "a[href], button:not([disabled]), textarea, input, select"
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    firstElement?.focus();

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    window.addEventListener("keydown", handleTab);
    return () => window.removeEventListener("keydown", handleTab);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="bg-bg/98 pt-safe pb-safe animate-fade-in fixed inset-0 z-50 flex flex-col justify-between overflow-y-auto px-5 backdrop-blur-2xl"
    >
      {/* Top Bar with Brand & Close Button */}
      <div className="border-border flex h-16 items-center justify-between border-b">
        <Link
          href="/"
          onClick={onClose}
          className="font-display text-text flex items-center gap-3 text-xl font-bold tracking-wider uppercase"
        >
          <div className="border-accent/30 relative h-10 w-10 shrink-0 overflow-hidden rounded-full border bg-black shadow-[0_0_12px_rgba(255,133,0,0.3)]">
            <Image
              src={siteConfig.logo.url}
              alt=""
              width={40}
              height={40}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="leading-none">{siteConfig.shortName}</span>
            <span className="font-display text-accent mt-1 text-[9px] leading-none font-semibold tracking-[0.2em] uppercase">
              Fitness
            </span>
          </div>
        </Link>
        <button
          onClick={onClose}
          aria-label="Close Navigation Menu"
          className="rounded-control bg-card-elevated border-border text-text hover:text-accent flex h-11 w-11 cursor-pointer items-center justify-center border transition-transform active:scale-95"
        >
          <X className="text-accent h-6 w-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav aria-label="Mobile Navigation" className="my-auto flex flex-col gap-2 py-8">
        {mainNavItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`font-display py-2 text-2xl tracking-wide uppercase transition-colors duration-200 sm:text-3xl ${
                isActive
                  ? "text-accent border-accent border-l-2 pl-2"
                  : "text-text hover:text-accent"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions & Branch Hotlines */}
      <div className="border-border flex flex-col gap-4 border-t pt-4 pb-6">
        <Link
          href="/membership"
          onClick={onClose}
          className="bg-accent text-bg font-display rounded-control shadow-glow-sm flex h-13 min-h-[52px] w-full items-center justify-center text-base font-bold tracking-wider uppercase transition-all active:scale-95"
        >
          Join OCTACORE
        </Link>

        {/* Hotlines */}
        <div className="rounded-card bg-card border-border flex flex-col gap-2 border p-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-display text-text-muted tracking-wider uppercase">Nerul Hub</span>
            <a
              href={`tel:${branches.nerul.phone}`}
              className="text-text hover:text-accent flex items-center gap-1 font-semibold"
            >
              <Phone className="text-accent h-3.5 w-3.5" />
              {branches.nerul.displayPhone}
            </a>
          </div>
          <div className="border-border/50 flex items-center justify-between border-t pt-2 text-xs">
            <span className="font-display text-text-muted tracking-wider uppercase">
              Airoli Hub
            </span>
            <a
              href={`tel:${branches.airoli.phone}`}
              className="text-text hover:text-accent flex items-center gap-1 font-semibold"
            >
              <Phone className="text-accent h-3.5 w-3.5" />
              {branches.airoli.displayPhone}
            </a>
          </div>
        </div>

        {/* Socials & WhatsApp */}
        <div className="text-text-muted flex items-center justify-center gap-4">
          <a
            href={siteConfig.socials.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="rounded-control bg-card-elevated border-border hover:text-accent flex h-11 w-11 items-center justify-center border transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.socials.facebook.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="rounded-control bg-card-elevated border-border hover:text-accent flex h-11 w-11 items-center justify-center border transition-colors"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href={`https://wa.me/${branches.nerul.whatsappNumber}?text=${encodeURIComponent(
              branches.nerul.whatsappPrefillText
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="rounded-control bg-card-elevated border-border hover:text-accent-2 flex h-11 w-11 items-center justify-center border transition-colors"
          >
            <MessageSquare className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
