import { ServiceCard } from "@/components/sections/service-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SERVICES } from "@/constants";
import type { Service } from "@/types";

interface ServicesProps {
  title?: string;
  description?: string;
  services?: Service[];
}

function Services({
  title = "Nossos Serviços",
  description = "Soluções completas para transformar processos e impulsionar resultados.",
  services = SERVICES,
}: ServicesProps) {
  return (
    <section id="services" className="py-20">
      <Container className="flex flex-col gap-12">
        <SectionHeading title={title} description={description} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} delay={index * 0.1} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export { Services };
