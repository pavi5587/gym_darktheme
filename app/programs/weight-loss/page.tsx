import type { Metadata } from "next";
import ProgramPageTemplate from "@/components/ProgramPageTemplate";
import { getProgram } from "@/lib/data";

const program = getProgram("weight-loss")!;

export const metadata: Metadata = {
  title: program.headline,
  description: program.subhead,
};

export default function WeightLossPage() {
  return <ProgramPageTemplate program={program} />;
}
