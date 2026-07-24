import { StatItem } from "@/components/sections/stat-item";
import { Container } from "@/components/ui/container";
import { PromptImage } from "@/components/ui/prompt-image";
import { IMAGE_PROMPTS, STATS } from "@/constants";
import type { StatItem as StatItemType } from "@/types";

interface StatsProps {
  stats?: StatItemType[];
}

function Stats({ stats = STATS }: StatsProps) {
  return (
    <section className="border-y bg-muted/40 py-16">
      <Container className="flex flex-col gap-10">
        <PromptImage
          src={IMAGE_PROMPTS.stats.src}
          alt={IMAGE_PROMPTS.stats.alt}
          fallbackLabel="Ilustração de indicadores (placeholder)"
          className="aspect-21/9"
        />
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatItem key={stat.id} stat={stat} delay={index * 0.1} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export { Stats };
