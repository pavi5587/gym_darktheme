import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { shopProducts, shopIntro } from "@/lib/data";

export const metadata: Metadata = {
  title: "Shop — Recommended Fitness Essentials",
  description:
    "Fitness essentials Guru personally recommends for beginners and serious trainees — gear to help you build strength, improve mobility, and stay consistent.",
};

const categories = Array.from(new Set(shopProducts.map((p) => p.category)));

export default function ShopPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">Shop</p>
          <h1 className="mt-3 max-w-2xl text-4xl text-bone sm:text-6xl">
            {shopIntro.title}
          </h1>
          <p className="mt-4 max-w-xl font-body text-sm text-bone-dim sm:text-base">
            {shopIntro.subtitle}
          </p>

          <div className="mt-6 flex items-start gap-3 border border-ink-line bg-ink-soft p-4">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="mt-0.5 flex-shrink-0 text-ember">
              <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.4" />
              <path d="M9 8V13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              <circle cx="9" cy="5.3" r="0.9" fill="currentColor" />
            </svg>
            <p className="font-body text-xs leading-relaxed text-bone-dim sm:text-sm">
              These are affiliate links — as an Amazon Associate, Guru may earn
              a small commission on qualifying purchases, at no extra cost to
              you. Every product here is something he personally recommends
              and uses.
            </p>
          </div>
        </Reveal>

        {categories.map((category) => (
          <div key={category} className="mt-12">
            <Reveal>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-bone-dim">
                {category}
              </p>
            </Reveal>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {shopProducts
                .filter((p) => p.category === category)
                .map((product, i) => (
                  <Reveal
                    key={product.name}
                    delay={(i % 3) * 80}
                    className="group flex flex-col border border-ink-line bg-ink-soft transition-colors hover:border-ember/60"
                  >
                    <div className="relative aspect-square w-full overflow-hidden bg-bone/[0.06]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                        className="object-contain p-8 transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <h2 className="font-display text-lg text-bone">{product.name}</h2>
                        <p className="mt-2 font-body text-sm leading-relaxed text-bone-dim">
                          {product.description}
                        </p>
                      </div>
                      <div className="mt-5 flex items-center justify-between gap-4">
                        <span className="font-display text-xl text-ember">{product.price}</span>
                        <a
                          href={product.buyUrl}
                          target="_blank"
                          rel="nofollow sponsored noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-ember px-4 py-2.5 font-body text-xs font-semibold text-ink transition-colors hover:bg-ember-light"
                        >
                          Buy on Amazon
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                            <path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </Reveal>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
