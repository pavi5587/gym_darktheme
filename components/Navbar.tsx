"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, site, waLink } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-line bg-ink/95 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl tracking-tight text-bone">
            GURU<span className="text-ember">STHETICS</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="group relative"
                onMouseEnter={() => setProgramsOpen(true)}
                onMouseLeave={() => setProgramsOpen(false)}
              >
                <button className="flex items-center gap-1 font-body text-sm font-medium text-bone/90 transition-colors hover:text-ember">
                  {link.label}
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </button>
                {programsOpen && (
                  <div className="absolute left-0 top-full w-56 border border-ink-line bg-ink-soft py-2 shadow-xl">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 font-body text-sm text-bone/90 transition-colors hover:bg-ink hover:text-ember"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium text-bone/90 transition-colors hover:text-ember"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <a
            href={waLink("Hi Guru, can you tell me about your fitness program?")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ember"
          >
            Contact
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M6 6L18 18M6 18L18 6"
                stroke="currentColor"
                strokeWidth="1.8"
                className="text-bone"
              />
            ) : (
              <path
                d="M3 6H21M3 12H21M3 18H21"
                stroke="currentColor"
                strokeWidth="1.8"
                className="text-bone"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-ink-line bg-ink lg:hidden">
          <div className="container-page flex flex-col py-4">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="py-2">
                  <p className="px-1 py-2 font-body text-xs font-semibold uppercase tracking-wide text-bone-dim">
                    {link.label}
                  </p>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-1 py-2.5 font-body text-sm text-bone/90"
                      onClick={() => setOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border-t border-ink-line px-1 py-3 font-body text-sm text-bone/90"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href={waLink("Hi Guru, can you tell me about your fitness program?")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ember mt-4 w-full"
            >
              Contact on WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
