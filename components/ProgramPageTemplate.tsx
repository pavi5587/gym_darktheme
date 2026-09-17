import ProgramHero from "@/components/ProgramHero";
import TransformationGrid from "@/components/TransformationGrid";
import Testimonials from "@/components/Testimonials";
import ProcessSteps from "@/components/ProcessSteps";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import type { Program } from "@/lib/data";
import { transformations } from "@/lib/data";

export default function ProgramPageTemplate({ program }: { program: Program }) {
  const relatedTransformations =
    program.category === "all"
      ? transformations
      : transformations.filter((t) => t.category === program.category);

  return (
    <>
      <ProgramHero program={program} />

      <section className="border-b border-ink-line py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <p className="eyebrow">Description</p>
            <div className="mt-4 space-y-4">
              {program.description.map((p, i) => (
                <p key={i} className="font-body text-base leading-relaxed text-bone-dim">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120} className="border border-ink-line p-7">
            <p className="eyebrow">Who should join?</p>
            <ul className="mt-4 space-y-3">
              {program.whoShouldJoin.map((item) => (
                <li key={item} className="flex items-start gap-2.5 font-body text-sm text-bone/90">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-ember" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-ink-line py-16 sm:py-20">
        <Reveal className="container-page">
          <p className="eyebrow">Key benefits</p>
          <h2 className="mt-3 max-w-xl text-3xl text-bone sm:text-4xl">
            What&apos;s included in the {program.name} program.
          </h2>
          <ul className="mt-8 grid gap-px overflow-hidden border border-ink-line bg-ink-line sm:grid-cols-2">
            {program.benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 bg-ink p-5 font-body text-sm text-bone/90 transition-colors hover:bg-ink-soft">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center border border-ember text-xs text-ember">
                  ✓
                </span>
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {relatedTransformations.length > 0 && (
        <section className="border-b border-ink-line py-16 sm:py-20">
          <Reveal className="container-page">
            <p className="eyebrow">Client transformations</p>
            <h2 className="mt-3 max-w-xl text-3xl text-bone sm:text-4xl">
              Real people, real results.
            </h2>
            <div className="mt-8">
              <TransformationGrid items={relatedTransformations} limit={8} />
            </div>
          </Reveal>
        </section>
      )}

      <section className="border-b border-ink-line py-16 sm:py-20">
        <Reveal className="container-page">
          <CTASection
            heading={`Start your ${program.name.toLowerCase()} transformation today`}
            subheading="Get a customized plan designed for your body, lifestyle, and schedule."
            buttonLabel={`Join ${program.name} program now`}
            waMessage={`Hi Guru, I want to know about the ${program.name} Program!`}
          />
        </Reveal>
      </section>

      <section className="border-b border-ink-line py-16 sm:py-20">
        <Reveal className="container-page">
          <p className="eyebrow">Real member stories</p>
          <h2 className="mt-3 max-w-xl text-3xl text-bone sm:text-4xl">
            Testimonials that inspire and motivate.
          </h2>
          <div className="mt-8">
            <Testimonials items={program.testimonials} />
          </div>
        </Reveal>
      </section>

      <section className="border-b border-ink-line py-16 sm:py-20">
        <Reveal className="container-page">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-3 max-w-xl text-3xl text-bone sm:text-4xl">
            Unlock your potential with a simple process.
          </h2>
          <div className="mt-8">
            <ProcessSteps />
          </div>
        </Reveal>
      </section>

      <section className="py-16 sm:py-20">
        <Reveal className="container-page">
          <p className="eyebrow">Common questions</p>
          <h2 className="mt-3 max-w-xl text-3xl text-bone sm:text-4xl">
            Got questions? Find answers here.
          </h2>
          <div className="mt-8">
            <FAQAccordion items={program.faqs} />
          </div>
        </Reveal>
      </section>
    </>
  );
}
