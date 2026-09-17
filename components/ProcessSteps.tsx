import { processSteps } from "@/lib/data";

export default function ProcessSteps() {
  return (
    <ol className="grid gap-0 border border-ink-line sm:grid-cols-2 lg:grid-cols-4">
      {processSteps.map((s, i) => (
        <li
          key={s.step}
          className={`p-7 ${i !== 0 ? "border-t border-ink-line sm:border-t-0 sm:border-l" : ""}`}
        >
          <span className="font-display text-3xl text-ember">{s.step}</span>
          <h3 className="mt-4 font-display text-lg text-bone">{s.title}</h3>
          <p className="mt-2 font-body text-sm leading-relaxed text-bone-dim">
            {s.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
