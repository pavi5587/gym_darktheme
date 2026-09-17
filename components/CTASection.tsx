import { waLink } from "@/lib/data";

export default function CTASection({
  heading,
  subheading,
  buttonLabel,
  waMessage,
}: {
  heading: string;
  subheading: string;
  buttonLabel: string;
  waMessage: string;
}) {
  return (
    <div className="border border-ink-line bg-ink-soft p-8 text-center sm:p-14">
      <h2 className="text-2xl text-bone sm:text-4xl">{heading}</h2>
      <p className="mx-auto mt-4 max-w-xl font-body text-sm text-bone-dim sm:text-base">
        {subheading}
      </p>
      <a
        href={waLink(waMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ember mt-7 inline-flex"
      >
        {buttonLabel}
      </a>
      <p className="mt-4 font-body text-xs text-bone-dim">
        Only limited slots available — I personally coach every client.
      </p>
    </div>
  );
}
