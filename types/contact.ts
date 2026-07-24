import type { LucideIcon } from "lucide-react";

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

export interface ProjectTypeOption {
  value: string;
  label: string;
}

export interface ContactInfoItem {
  id: string;
  icon: LucideIcon;
  label: string;
  value: string;
}
