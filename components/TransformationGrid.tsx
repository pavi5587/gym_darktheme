"use client";

import { useState } from "react";
import Image from "next/image";
import type { Transformation } from "@/lib/data";

const categories = ["All", "Weight Loss", "Muscle Building", "Powerlifting"] as const;

export default function TransformationGrid({
  items,
  limit,
  filterable = false,
}: {
  items: Transformation[];
  limit?: number;
  filterable?: boolean;
}) {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered =
    filterable && active !== "All" ? items.filter((t) => t.category === active) : items;
  const list = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div>
      {filterable && (
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`border px-4 py-2 font-body text-xs font-semibold uppercase tracking-wide transition-colors ${
                active === cat
                  ? "border-ember bg-ember text-ink"
                  : "border-ink-line text-bone-dim hover:border-bone/40 hover:text-bone"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {list.map((t, i) => (
          <div
            key={`${t.name}-${i}`}
            className={`group relative overflow-hidden border border-ink-line ${
              i % 7 === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-[3/4]"
            }`}
          >
            <Image
              src={t.image}
              alt={`${t.name} — ${t.category} transformation, ${t.days}`}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-3">
              <p className="font-body text-sm font-semibold text-bone">{t.name}</p>
              <p className="font-body text-xs text-bone-dim">
                {t.location} · {t.days}
              </p>
            </div>
          </div>
        ))}
        {list.length === 0 && (
          <p className="col-span-full py-10 text-center font-body text-sm text-bone-dim">
            No transformations in this category yet.
          </p>
        )}
      </div>
    </div>
  );
}
