import { PortfolioCard } from "@/components/sections/portfolio-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PORTFOLIO_ITEMS } from "@/constants";
import type { PortfolioItem } from "@/types";

interface PortfolioProps {
  title?: string;
  description?: string;
  items?: PortfolioItem[];
}

function Portfolio({
  title = "Portfólio",
  description = "Alguns dos projetos que estamos desenvolvendo para nossos clientes.",
  items = PORTFOLIO_ITEMS,
}: PortfolioProps) {
  return (
    <section id="portfolio" className="py-20">
      <Container className="flex flex-col gap-12">
        <SectionHeading title={title} description={description} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <PortfolioCard key={item.id} item={item} delay={index * 0.1} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export { Portfolio };
