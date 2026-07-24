import type { ProcessStep } from "@/types";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "diagnostico",
    number: "01",
    title: "Diagnóstico",
    description: "Entendemos o problema e os objetivos.",
  },
  {
    id: "planejamento",
    number: "02",
    title: "Planejamento",
    description: "Organizamos funcionalidades, estrutura e experiência.",
  },
  {
    id: "desenvolvimento",
    number: "03",
    title: "Desenvolvimento",
    description: "Construção da solução com foco em qualidade.",
  },
  {
    id: "entrega",
    number: "04",
    title: "Entrega",
    description: "Publicação e suporte pós entrega.",
  },
];
