"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { mainNavItems } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { MobileMenu } from "./MobileMenu";
import { Menu, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const lastScrollY = React.useRef(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Glass effect toggle after 20px
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide on scroll down, show on scroll up (with a threshold of 10px)
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY.current + 8) {
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY.current - 8) {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "pt-safe fixed inset-x-0 top-0 z-40 transition-all duration-300",
          isVisible ? "translate-y-0" : "-translate-y-full",
          isScrolled
            ? "bg-bg/85 border-border border-b shadow-[0_4px_24px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 transition-transform active:scale-95"
          >
            {/* Official Logo */}
            <div className="border-accent/30 group-hover:border-accent relative h-10 w-10 shrink-0 overflow-hidden rounded-full border bg-black shadow-[0_0_15px_rgba(255,133,0,0.25)] transition-all group-hover:shadow-[0_0_20px_rgba(255,133,0,0.4)] sm:h-12 sm:w-12">
              <Image
                src={siteConfig.logo.url}
                alt=""
                width={48}
                height={48}
                priority
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-text text-xl leading-none font-bold tracking-wider uppercase sm:text-2xl">
                OCTA<span className="text-accent">CORE</span>
              </span>
              <span className="font-display text-accent mt-1 text-[9px] leading-none font-semibold tracking-[0.2em] uppercase sm:text-[10px]">
                Fitness
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden items-center gap-1 lg:flex xl:gap-2">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-control font-display relative px-3 py-2 text-sm tracking-wider uppercase transition-colors",
                    isActive
                      ? "text-accent font-semibold"
                      : "text-text-muted hover:text-text hover:bg-card/50"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="bg-accent shadow-glow-sm absolute right-3 bottom-0 left-3 h-[2px] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Nerul Quick Phone Dial */}
            <a
              href="tel:+919069819090"
              aria-label="Call +91 90698 19090"
              className="rounded-control bg-card-elevated border-border text-text hover:text-accent hover:border-accent font-display hidden items-center gap-2 border px-3 py-2 text-xs tracking-wider uppercase transition-colors sm:flex"
            >
              <Phone className="text-accent h-3.5 w-3.5" />
              <span>+91 90698 19090</span>
            </a>

            {/* Desktop Join CTA */}
            <Link
              href="/membership"
              className="rounded-control bg-accent text-bg font-display shadow-glow-sm hidden h-10 items-center justify-center px-5 text-sm font-bold tracking-wider uppercase transition-all hover:bg-[#ff9924] active:scale-95 lg:inline-flex"
            >
              Join Club
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Mobile Menu"
              className="rounded-control bg-card-elevated border-border text-text hover:text-accent flex h-11 w-11 cursor-pointer items-center justify-center border transition-transform active:scale-95 lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
