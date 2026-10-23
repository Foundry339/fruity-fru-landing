"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site";
import { BookButton } from "@/components/ui/Button";
import { Sticker } from "@/components/ui/Sticker";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-blush)] bg-[var(--color-pale-pink)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#home"
          className="flex items-center gap-2 rounded-md font-display text-xl sm:text-2xl text-[var(--color-deep-berry)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-dark)]"
        >
          <Sticker kind="sparkle" color="var(--color-fruity-pink)" className="h-7 w-7" />
          {siteConfig.name}
        </a>

        <nav aria-label="Main" className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md text-sm font-semibold text-[var(--color-dark)]/80 transition-colors hover:text-[var(--color-deep-berry)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-dark)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <BookButton size="sm" className="max-sm:hidden" />
          <button
            ref={toggleRef}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full p-2 text-[var(--color-dark)] hover:bg-[var(--color-blush)]/50 focus-visible:outline-2 focus-visible:outline-[var(--color-dark)] lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-[var(--color-blush)] bg-[var(--color-pale-pink)] lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col px-5 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3.5 font-display text-xl text-[var(--color-dark)] hover:bg-[var(--color-blush)]/50 focus-visible:outline-2 focus-visible:outline-[var(--color-dark)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="px-5 pb-6 pt-2">
            <BookButton size="lg" className="w-full" onClick={() => setOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
}
