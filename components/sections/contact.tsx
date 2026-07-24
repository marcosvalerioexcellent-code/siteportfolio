"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PromptImage } from "@/components/ui/prompt-image";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT_CONTENT, CONTACT_INFO, IMAGE_PROMPTS, PROJECT_TYPE_OPTIONS } from "@/constants";
import type { ContactFormData, ContactInfoItem, ProjectTypeOption } from "@/types";

const INITIAL_FORM_DATA: ContactFormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
};

interface ContactProps {
  title?: string;
  description?: string;
  projectTypeOptions?: ProjectTypeOption[];
  contactInfo?: ContactInfoItem[];
}

function Contact({
  title = CONTACT_CONTENT.title,
  description = CONTACT_CONTENT.description,
  projectTypeOptions = PROJECT_TYPE_OPTIONS,
  contactInfo = CONTACT_INFO,
}: ContactProps) {
  const [formData, setFormData] = React.useState<ContactFormData>(INITIAL_FORM_DATA);

  function handleChange(field: keyof ContactFormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormData(INITIAL_FORM_DATA);
  }

  return (
    <section id="contact" className="py-20">
      <Container className="flex flex-col gap-12">
        <SectionHeading title={title} description={description} align="left" />

        <div className="grid gap-12 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(event) => handleChange("name", event.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="company">Empresa</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(event) => handleChange("company", event.target.value)}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(event) => handleChange("email", event.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(event) => handleChange("phone", event.target.value)}
                />
              </div>

              <div className="flex flex-col gap-2 sm:col-span-2">
                <Label htmlFor="projectType">Tipo de Projeto</Label>
                <Select
                  value={formData.projectType}
                  onValueChange={(value) => handleChange("projectType", value)}
                >
                  <SelectTrigger id="projectType">
                    <SelectValue placeholder="Selecione o tipo de projeto" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectTypeOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2 sm:col-span-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(event) => handleChange("message", event.target.value)}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="sm:col-span-2 sm:w-fit">
                {CONTACT_CONTENT.submitLabel}
              </Button>
            </form>
          </Reveal>

          <Reveal delay={0.15} className="flex flex-col gap-6">
            <PromptImage
              src={IMAGE_PROMPTS.contact.src}
              alt={IMAGE_PROMPTS.contact.alt}
              fallbackLabel="Imagem de contato (placeholder)"
              className="aspect-4/3"
            />
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div key={info.id} className="flex items-start gap-3">
                  <Icon className="mt-0.5 size-5 text-primary" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">{info.label}</span>
                    <span className="text-sm text-muted-foreground">
                      {info.value}
                    </span>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export { Contact };
