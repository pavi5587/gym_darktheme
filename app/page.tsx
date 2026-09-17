import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import TransformationGrid from "@/components/TransformationGrid";
import Testimonials from "@/components/Testimonials";
import ProcessSteps from "@/components/ProcessSteps";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { programs, transformations, homeTestimonials, classes, waLink } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="border-b border-ink-line py-10">
        <Reveal className="container-page">
          <StatsBar />
        </Reveal>
      </section>

      <section className="border-b border-ink-line py-16 sm:py-24">
        <Reveal className="container-page">
          <p className="eyebrow">Client transformations</p>
          <h2 className="mt-3 max-w-2xl text-3xl text-bone sm:text-5xl">
            These are not influencers. These are my clients.
          </h2>
          <p className="mt-4 max-w-xl font-body text-sm text-bone-dim sm:text-base">
            People with regular 9-to-5 jobs — with a clear understanding,
            structured diet, proper workout protocol, and guidance.
          </p>
          <div className="mt-10">
            <TransformationGrid items={transformations} filterable />
          </div>
        </Reveal>
      </section>

      <section className="border-b border-ink-line py-16 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal className="relative aspect-square w-full overflow-hidden border border-ink-line">
            <Image
              src="https://gurusthetics.com/wp-content/uploads/2026/04/IMG-20241114-WA0009-1024x1024.jpg"
              alt="Guru — Gurusthetics coach"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">About your coach</p>
            <h2 className="mt-3 text-3xl text-bone sm:text-5xl">
              Guru <span className="text-ember">(aka) Gurusthetics</span>
            </h2>
            <p className="mt-5 font-body text-sm leading-relaxed text-bone-dim sm:text-base">
              An experienced online personal trainer, fitness mentor, and
              powerlifter. Whether you&apos;re training at home or in a gym, I
              can help you unlock your full potential and become unstoppable.
            </p>
            <p className="mt-4 font-body text-sm leading-relaxed text-bone-dim sm:text-base">
              I started with zero gym access and six pieces of equipment in
              college. Through relentless research, discipline, and grit, I
              built a competition-ready physique — and I&apos;m here to help
              you do the same.
            </p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {[
                "Online Fitness Coach, 4+ Years Experience",
                "State-Level Bodybuilding Competitor",
                "Proven No-Supplement, No-Excuse System",
                "Science-Backed Workout & Nutrition Guidance",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 font-body text-sm text-bone/90">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-ember" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn-outline mt-7 inline-flex">
              More about Guru
            </Link>
          </Reveal>
        </div>
      </section>

      <section id="programs" className="scroll-mt-20 border-b border-ink-line py-16 sm:py-24">
        <Reveal className="container-page">
          <p className="eyebrow">Explore programs</p>
          <h2 className="mt-3 max-w-2xl text-3xl text-bone sm:text-5xl">
            Transform your body, transform your life.
          </h2>
          <p className="mt-4 max-w-xl font-body text-sm text-bone-dim sm:text-base">
            Specialized programs combining proven training methods with
            personalized nutrition guidance — whatever your goal.
          </p>

          <div className="mt-10 grid gap-px overflow-hidden border border-ink-line bg-ink-line sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((p) => (
              <Link
                key={p.slug}
                href={`/programs/${p.slug}`}
                className="group flex flex-col justify-between bg-ink p-7 transition-colors hover:bg-ink-soft"
              >
                <div>
                  <h3 className="font-display text-xl text-bone">{p.name}</h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-bone-dim">
                    {p.subhead}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-ember">
                  Learn more
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="border-b border-ink-line py-16 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow">Our classes</p>
            <h2 className="mt-3 text-3xl text-bone sm:text-5xl">
              Fitness classes for every skill level.
            </h2>
            <p className="mt-4 max-w-md font-body text-sm text-bone-dim sm:text-base">
              Experience expert-level training from Guru to achieve your
              dream physique. Start your journey right now.
            </p>
            <a
              href={waLink("Hi Guru, I'd like to book a free consultation.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ember mt-7 inline-flex"
            >
              Book a free consultation
            </a>
          </Reveal>
          <Reveal delay={120}>
            <ul className="divide-y divide-ink-line border-y border-ink-line">
              {classes.map((c, i) => (
                <li key={c.title} className="flex items-start gap-4 py-4">
                  <span className="mt-0.5 font-display text-sm text-ember">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-body text-sm font-semibold text-bone">{c.title}</p>
                    <p className="mt-1 font-body text-sm text-bone-dim">{c.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-ink-line py-16 sm:py-24">
        <Reveal className="container-page">
          <p className="eyebrow">Real member stories</p>
          <h2 className="mt-3 max-w-xl text-3xl text-bone sm:text-5xl">
            Testimonials that inspire and motivate.
          </h2>
          <div className="mt-10">
            <Testimonials items={homeTestimonials} />
          </div>
        </Reveal>
      </section>

      <section className="border-b border-ink-line py-16 sm:py-24">
        <Reveal className="container-page">
          <p className="eyebrow">How this program works</p>
          <h2 className="mt-3 max-w-xl text-3xl text-bone sm:text-5xl">
            Your transformation journey.
          </h2>
          <div className="mt-10">
            <ProcessSteps />
          </div>
        </Reveal>
      </section>

      <section className="py-16 sm:py-24">
        <Reveal className="container-page">
          <CTASection
            heading="Ready for your transformation?"
            subheading="Get a plan tailored to your body, lifestyle, and goals. Start seeing real changes in 30–45 days."
            buttonLabel="Start your transformation"
            waMessage="Hi Guru, I came from your website and I'm interested to know about your Fitness Program!!"
          />
        </Reveal>
      </section>
    </>
  );
}
