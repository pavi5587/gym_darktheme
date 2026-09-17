"use client";

import { useRef } from "react";
import type { Testimonial } from "@/lib/data";

export default function Testimonials({ items }: { items: Testimonial[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollBy(direction: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * 340, behavior: "smooth" });
  }

  return (
    <div>
      <div
        ref={trackRef}
        className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:px-0"
      >
        {items.map((t, i) => (
          <figure
            key={i}
            className="min-w-[280px] max-w-[340px] flex-shrink-0 snap-start border border-ink-line bg-ink-soft p-6"
          >
            <svg width="28" height="20" viewBox="0 0 28 20" fill="none" aria-hidden="true" className="text-ember">
              <path d="M0 20V11.5C0 4.5 4.5 0.3 11 0V4.6C7.6 5 5.6 7 5.4 10.3H11V20H0ZM17 20V11.5C17 4.5 21.5 0.3 28 0V4.6C24.6 5 22.6 7 22.4 10.3H28V20H17Z" fill="currentColor" />
            </svg>
            <blockquote className="mt-4 font-body text-sm leading-relaxed text-bone/90">
              {t.quote}
            </blockquote>
            <figcaption className="mt-5 font-body text-sm font-semibold text-bone">
              {t.name} <span className="ml-1 font-normal text-bone-dim">{t.location} {t.flag}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-2 flex justify-end gap-2">
        <button
          onClick={() => scrollBy(-1)}
          aria-label="Previous testimonial"
          className="flex h-9 w-9 items-center justify-center border border-ink-line text-bone-dim transition-colors hover:border-ember hover:text-ember"
        >
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
            <path d="M13 5H1M1 5L5 1M1 5L5 9" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
        <button
          onClick={() => scrollBy(1)}
          aria-label="Next testimonial"
          className="flex h-9 w-9 items-center justify-center border border-ink-line text-bone-dim transition-colors hover:border-ember hover:text-ember"
        >
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
            <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>
    </div>
  );
}
