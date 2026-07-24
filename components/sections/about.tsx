import { Container } from "@/components/ui/container";
import { PromptImage } from "@/components/ui/prompt-image";
import { Reveal } from "@/components/ui/reveal";
import { ABOUT_CONTENT, IMAGE_PROMPTS } from "@/constants";

interface AboutProps {
  title?: string;
  description?: string;
}

function About({
  title = ABOUT_CONTENT.title,
  description = ABOUT_CONTENT.description,
}: AboutProps) {
  return (
    <section id="about" className="py-20">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <PromptImage
            src={IMAGE_PROMPTS.about.src}
            alt={IMAGE_PROMPTS.about.alt}
            fallbackLabel="Imagem institucional (placeholder)"
            className="aspect-4/3"
          />
        </Reveal>

        <Reveal delay={0.15} className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="text-muted-foreground">{description}</p>
        </Reveal>
      </Container>
    </section>
  );
}

export { About };
