import Image from "next/image";
import { waLink } from "@/lib/data";
import TickerStrip from "@/components/TickerStrip";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-line">
      <div className="container-page grid gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
        <div>
          <p className="eyebrow animate-in">Train hard. Get stronger.</p>
          <h1 className="animate-in delay-1 mt-4 text-[13vw] leading-[0.95] text-bone sm:text-6xl lg:text-7xl">
            Crush your limits.
            <br />
            Build your <span className="text-ember">dream physique</span>.
          </h1>
          <p className="animate-in delay-2 mt-6 max-w-lg font-body text-base leading-relaxed text-bone-dim">
            Online fitness coaching with Guru — a state-level powerlifter who
            builds structured, personal, no-excuse transformation plans for
            people with regular 9-to-5 lives.
          </p>
          <div className="animate-in delay-3 mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={waLink("Hi Guru, I came from your website and I'm interested to know about your Fitness Program!!")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ember"
            >
              Start your journey
            </a>
            <a href="#programs" className="btn-outline">
              View programs
            </a>
          </div>
        </div>

        <div className="animate-in delay-2 relative aspect-[4/5] w-full overflow-hidden border border-ink-line">
          <Image
            src="https://gurusthetics.com/wp-content/uploads/2025/04/IMG_20241119_223004_991-1-1-scaled.jpg"
            alt="Guru — Gurusthetics online fitness coach"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 border-t border-ink-line bg-ink/80 px-5 py-4 backdrop-blur">
            <p className="font-body text-sm text-bone">
              <span className="text-ember">Only limited slots.</span> I
              personally handle every client.
            </p>
          </div>
        </div>
      </div>

      <TickerStrip />
    </section>
  );
}
