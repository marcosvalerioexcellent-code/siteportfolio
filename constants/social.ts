import { Briefcase, Camera, Users } from "lucide-react";

import type { FooterLinkGroup, SocialLink } from "@/types";

// Generic placeholders: lucide-react no longer ships brand/logo icons.
export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://instagram.com",
    icon: Camera,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: Briefcase,
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://facebook.com",
    icon: Users,
  },
];

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    title: "Menu Rápido",
    links: [
      { label: "Serviços", href: "#services" },
      { label: "Portfólio", href: "#portfolio" },
      { label: "Equipe", href: "#team" },
      { label: "Contato", href: "#contact" },
    ],
  },
];
