import { Globe2, Headset, Sparkles, Target } from "lucide-react";

import type { StatItem } from "@/types";

export const STATS: StatItem[] = [
  {
    id: "projetos",
    icon: Target,
    value: "+50",
    label: "Projetos",
  },
  {
    id: "presenca",
    icon: Globe2,
    value: "Global",
    label: "Presença",
  },
  {
    id: "personalizacao",
    icon: Sparkles,
    value: "100%",
    label: "Personalização",
  },
  {
    id: "suporte",
    icon: Headset,
    value: "7–30 dias",
    label: "Suporte",
  },
];
