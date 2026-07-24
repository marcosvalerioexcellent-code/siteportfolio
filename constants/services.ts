import { AppWindow, Globe, MonitorCog, Table } from "lucide-react";

import type { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    id: "sistemas-personalizados",
    icon: MonitorCog,
    title: "Sistemas Personalizados",
    description:
      "Criamos sistemas sob medida para qualquer necessidade empresarial.",
  },
  {
    id: "aplicativos-personalizados",
    icon: AppWindow,
    title: "Aplicativos Personalizados",
    description:
      "Aplicativos modernos para Android e iOS com foco em desempenho e praticidade.",
  },
  {
    id: "sites-profissionais",
    icon: Globe,
    title: "Sites Profissionais",
    description:
      "Sites institucionais, Landing Pages e páginas comerciais responsivas.",
  },
  {
    id: "sistemas-em-excel",
    icon: Table,
    title: "Sistemas em Excel",
    description:
      "Dashboards, automações, VBA, controles inteligentes e gestão personalizada.",
  },
];
