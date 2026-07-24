import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PromptImage } from "@/components/ui/prompt-image";
import { Reveal } from "@/components/ui/reveal";
import { CTA_CONTENT, IMAGE_PROMPTS } from "@/constants";

interface CtaProps {
  title?: string;
  description?: string;
  buttonLabel?: string;
}

function Cta({
  title = CTA_CONTENT.title,
  description = CTA_CONTENT.description,
  buttonLabel = CTA_CONTENT.buttonLabel,
}: CtaProps) {
  return (
    <section className="py-20">
      <Container>
        <Reveal className="relative overflow-hidden rounded-2xl">
          <PromptImage
            src={IMAGE_PROMPTS.cta.src}
            alt={IMAGE_PROMPTS.cta.alt}
            fallbackLabel="Ilustração de transformação digital (placeholder)"
            className="absolute inset-0 rounded-none border-0"
          />
          <div className="absolute inset-0 bg-primary/85" />
          <div className="relative flex flex-col items-center gap-6 px-6 py-16 text-center text-primary-foreground">
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="max-w-xl text-primary-foreground/80">{description}</p>
            <Button size="lg" variant="secondary" asChild>
              <a href="#contact">{buttonLabel}</a>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export { Cta };
