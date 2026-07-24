import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PromptImage } from "@/components/ui/prompt-image";
import { Reveal } from "@/components/ui/reveal";
import { HERO_CONTENT, IMAGE_PROMPTS } from "@/constants";

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonLabel?: string;
  secondaryButtonLabel?: string;
}

function Hero({
  title = HERO_CONTENT.title,
  subtitle = HERO_CONTENT.subtitle,
  description = HERO_CONTENT.description,
  primaryButtonLabel = HERO_CONTENT.primaryButtonLabel,
  secondaryButtonLabel = HERO_CONTENT.secondaryButtonLabel,
}: HeroProps) {
  return (
    <section id="top" className="py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="flex flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            {subtitle}
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            {description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <a href="#contact">
                {primaryButtonLabel}
                <ArrowRight />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#portfolio">{secondaryButtonLabel}</a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <PromptImage
            src={IMAGE_PROMPTS.hero.src}
            alt={IMAGE_PROMPTS.hero.alt}
            fallbackLabel="Ilustração / Mockup (placeholder)"
            className="aspect-square lg:aspect-4/3"
          />
        </Reveal>
      </Container>
    </section>
  );
}

export { Hero };
