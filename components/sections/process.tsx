import { ProcessStep } from "@/components/sections/process-step";
import { Container } from "@/components/ui/container";
import { PromptImage } from "@/components/ui/prompt-image";
import { SectionHeading } from "@/components/ui/section-heading";
import { IMAGE_PROMPTS, PROCESS_STEPS } from "@/constants";
import type { ProcessStep as ProcessStepType } from "@/types";

interface ProcessProps {
  title?: string;
  description?: string;
  steps?: ProcessStepType[];
}

function Process({
  title = "Nosso Processo",
  description = "Um fluxo de trabalho claro do primeiro contato até a entrega final.",
  steps = PROCESS_STEPS,
}: ProcessProps) {
  return (
    <section id="process" className="py-20">
      <Container className="flex flex-col gap-12">
        <SectionHeading title={title} description={description} />

        <PromptImage
          src={IMAGE_PROMPTS.process.src}
          alt={IMAGE_PROMPTS.process.alt}
          fallbackLabel="Ilustração do fluxo de trabalho (placeholder)"
          className="aspect-21/9"
        />

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <ProcessStep key={step.id} step={step} delay={index * 0.1} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export { Process };
