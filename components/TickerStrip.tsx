const facts = [
  "State-Level Bodybuilding Competitor",
  "4+ Years Coaching Experience",
  "No-Supplement, No-Excuse System",
  "300+ Clients Transformed",
  "Home & Gym Programming",
  "Weekly Check-Ins, Every Client",
];

export default function TickerStrip() {
  const loop = [...facts, ...facts];

  return (
    <div className="overflow-hidden border-t border-ink-line bg-ink-soft py-3">
      <div className="flex w-max animate-marquee gap-8 motion-reduce:animate-none">
        {loop.map((fact, i) => (
          <span
            key={i}
            className="flex items-center gap-3 whitespace-nowrap font-body text-xs font-semibold uppercase tracking-[0.14em] text-bone-dim"
          >
            <span className="h-1 w-1 bg-ember" aria-hidden="true" />
            {fact}
          </span>
        ))}
      </div>
    </div>
  );
}
