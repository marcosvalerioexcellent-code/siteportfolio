import { Reveal } from "@/components/ui/reveal";
import type { StatItem as StatItemType } from "@/types";

interface StatItemProps {
  stat: StatItemType;
  delay?: number;
}

function StatItem({ stat, delay = 0 }: StatItemProps) {
  const Icon = stat.icon;

  return (
    <Reveal delay={delay} className="flex flex-col items-center gap-2 text-center">
      <Icon className="size-8 text-primary" />
      <span className="text-3xl font-bold">{stat.value}</span>
      <span className="text-sm text-muted-foreground">{stat.label}</span>
    </Reveal>
  );
}

export { StatItem };
