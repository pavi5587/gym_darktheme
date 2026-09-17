"use client";

import { useState } from "react";

export default function FAQAccordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink-line border-y border-ink-line">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-body text-base font-medium text-bone">{item.q}</span>
              <span
                className={`flex h-7 w-7 flex-shrink-0 items-center justify-center border border-bone/30 text-ember transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {isOpen && (
              <p className="pb-5 font-body text-sm leading-relaxed text-bone-dim">
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
