import { Mail, MapPin, Phone } from "lucide-react";

import type { ContactInfoItem, ProjectTypeOption } from "@/types";

export const PROJECT_TYPE_OPTIONS: ProjectTypeOption[] = [
  { value: "sistema", label: "Sistema Personalizado" },
  { value: "aplicativo", label: "Aplicativo" },
  { value: "site", label: "Site Profissional" },
  { value: "excel", label: "Sistema em Excel" },
  { value: "outro", label: "Outro" },
];

export const CONTACT_INFO: ContactInfoItem[] = [
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: "contato@excellentservices.com.br",
  },
  {
    id: "telefone",
    icon: Phone,
    label: "Telefone",
    value: "+55 (00) 00000-0000",
  },
  {
    id: "localizacao",
    icon: MapPin,
    label: "Localização",
    value: "Atendimento remoto para todo o Brasil",
  },
];
