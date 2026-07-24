import { Reveal } from "@/components/ui/reveal";
import type { ProcessStep as ProcessStepType } from "@/types";

interface ProcessStepProps {
  step: ProcessStepType;
  delay?: number;
}

function ProcessStep({ step, delay = 0 }: ProcessStepProps) {
  return (
    <Reveal delay={delay} className="flex flex-col gap-3">
      <span className="text-4xl font-bold text-primary/30">{step.number}</span>
      <h3 className="text-lg font-semibold">{step.title}</h3>
      <p className="text-sm text-muted-foreground">{step.description}</p>
    </Reveal>
  );
}

export { ProcessStep };
