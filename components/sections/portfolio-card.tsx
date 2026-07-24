import { ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PromptImage } from "@/components/ui/prompt-image";
import { Reveal } from "@/components/ui/reveal";
import { IMAGE_PROMPTS } from "@/constants";
import type { PortfolioItem } from "@/types";

interface PortfolioCardProps {
  item: PortfolioItem;
  delay?: number;
}

function PortfolioCard({ item, delay = 0 }: PortfolioCardProps) {
  return (
    <Reveal delay={delay}>
      <Card className="h-full overflow-hidden py-0">
        <PromptImage
          src={item.imageUrl ?? IMAGE_PROMPTS.portfolio.src}
          alt={IMAGE_PROMPTS.portfolio.alt}
          fallbackLabel="Imagem do projeto (placeholder)"
          className="aspect-video rounded-none border-x-0 border-t-0"
        />
        <CardHeader className="pt-6">
          <Badge variant="secondary" className="w-fit">
            {item.category}
          </Badge>
          <CardTitle>{item.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{item.description}</CardDescription>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm">
            Ver Projeto
            <ExternalLink />
          </Button>
        </CardFooter>
      </Card>
    </Reveal>
  );
}

export { PortfolioCard };
