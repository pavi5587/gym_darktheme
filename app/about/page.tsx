import type { Metadata } from "next";
import Image from "next/image";
import StatsBar from "@/components/StatsBar";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { waLink } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Guru — Your Coach",
  description:
    "Transform your body, mind, and confidence with Guru (aka Gurusthetics) — an online personal trainer, fitness mentor, and state-level powerlifter.",
};

const achievements = [
  "https://gurusthetics.com/wp-content/uploads/2026/01/20250330_171142-scaled.jpg",
  "https://gurusthetics.com/wp-content/uploads/2026/01/20250330_171312-scaled.jpg",
  "https://gurusthetics.com/wp-content/uploads/2026/01/20250629_203045-scaled.jpg",
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-ink-line py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow">About your coach</p>
            <h1 className="mt-3 text-4xl text-bone sm:text-6xl">
              Guru <span className="text-ember">(aka) Gurusthetics</span>
            </h1>
            <p className="mt-6 font-body text-base leading-relaxed text-bone-dim">
              Transform your body, mind, and confidence with Guru — a
              certified personal trainer, fitness mentor, and powerlifter.
              Whether you&apos;re training at home or in a gym, I&apos;ll help
              you unlock your full potential and become unstoppable.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-bone-dim">
              Fitness isn&apos;t about fancy equipment or expensive
              supplements — it&apos;s about determination, mindset, and
              consistency. I started with zero gym access and just six pieces
              of equipment in college. Through relentless research,
              discipline, and sheer grit, I built a strong, competition-ready
              physique and helped countless others do the same. Now,
              I&apos;m here to help you transform.
            </p>

            <div className="mt-8 grid gap-2.5 sm:grid-cols-2">
              {[
                "Certified Personal Trainer & Fitness Mentor",
                "10,000+ Hours of Training Experience",
                "Proven No-Supplement, No-Excuse Transformation",
                "Home & Gym-Based Workout Expertise",
                "State-Level Bodybuilding Competitor",
                "Science-Backed Workout & Nutrition Guidance",
                "Personalized Fitness Plans for Every Goal",
                "Passionate About Your Best Shape",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 font-body text-sm text-bone/90">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-ember" />
                  {item}
                </div>
              ))}
            </div>

            <a
              href={waLink("Hi Guru, I came from the About page and want to know about your Fitness Program!")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ember mt-8 inline-flex"
            >
              Join me & start your transformation
            </a>
          </Reveal>

          <Reveal delay={120} className="relative aspect-[4/5] w-full overflow-hidden border border-ink-line">
            <Image
              src="https://gurusthetics.com/wp-content/uploads/2025/12/IMG-20241114-WA0009.jpg"
              alt="Guru — abs, Gurusthetics coach"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-ink-line py-10">
        <Reveal className="container-page">
          <StatsBar />
        </Reveal>
      </section>

      <section className="border-b border-ink-line py-16 sm:py-20">
        <Reveal className="container-page">
          <p className="eyebrow">Achievements</p>
          <h2 className="mt-3 max-w-xl text-3xl text-bone sm:text-4xl">
            Over the past year.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {achievements.map((src, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] overflow-hidden border border-ink-line transition-transform duration-300 hover:-translate-y-1"
              >
                <Image
                  src={src}
                  alt="Guru — competition and coaching achievement"
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="py-16 sm:py-20">
        <Reveal className="container-page">
          <CTASection
            heading="No excuses. No limits. Just results."
            subheading="Join Guru and start your transformation today."
            buttonLabel="Message Guru on WhatsApp"
            waMessage="Hi Guru, I came from the About page and want to know about your Fitness Program!"
          />
        </Reveal>
      </section>
    </>
  );
}
