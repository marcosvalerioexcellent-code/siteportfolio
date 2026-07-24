import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PromptImage } from "@/components/ui/prompt-image";
import { Reveal } from "@/components/ui/reveal";
import { IMAGE_PROMPTS } from "@/constants";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
  delay?: number;
}

function ServiceCard({ service, delay = 0 }: ServiceCardProps) {
  const Icon = service.icon;
  const image = IMAGE_PROMPTS[service.id];

  return (
    <Reveal delay={delay}>
      <Card className="h-full overflow-hidden py-0">
        {image ? (
          <PromptImage
            src={image.src}
            alt={image.alt}
            fallbackLabel="Imagem do serviço (placeholder)"
            className="aspect-video rounded-none border-x-0 border-t-0"
          />
        ) : null}
        <CardHeader className="pt-6">
          <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="size-6" />
          </div>
          <CardTitle>{service.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{service.description}</CardDescription>
        </CardContent>
      </Card>
    </Reveal>
  );
}

export { ServiceCard };
