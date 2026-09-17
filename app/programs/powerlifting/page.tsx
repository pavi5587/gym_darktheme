import type { Metadata } from "next";
import ProgramPageTemplate from "@/components/ProgramPageTemplate";
import { getProgram } from "@/lib/data";

const program = getProgram("powerlifting")!;

export const metadata: Metadata = {
  title: program.headline,
  description: program.subhead,
};

export default function PowerliftingPage() {
  return <ProgramPageTemplate program={program} />;
}
