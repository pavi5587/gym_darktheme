import Image from "next/image";
import type { Program } from "@/lib/data";
import { waLink } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function ProgramHero({ program }: { program: Program }) {
  return (
    <section className="border-b border-ink-line">
      <div className="container-page grid gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
        <Reveal>
          <p className="eyebrow">{program.name} Program</p>
          <h1 className="mt-4 text-4xl leading-[0.98] text-bone sm:text-6xl">
            {program.headline}
          </h1>
          <p className="mt-5 max-w-lg font-body text-base text-bone-dim">
            {program.subhead}
          </p>
          <a
            href={waLink(`Hi Guru, I want to know about the ${program.name} Program!`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ember mt-8 inline-flex"
          >
            Join the {program.name} program
          </a>
        </Reveal>
        <Reveal delay={120} className="relative aspect-[4/5] w-full overflow-hidden border border-ink-line">
          <Image
            src={program.heroImage}
            alt={`${program.name} program — Gurusthetics`}
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
