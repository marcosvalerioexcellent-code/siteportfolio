import { PromptImage } from "@/components/ui/prompt-image";
import { Container } from "@/components/ui/container";
import { FOOTER_CONTENT, FOOTER_LINK_GROUPS, IMAGE_PROMPTS, SOCIAL_LINKS, SITE_CONFIG } from "@/constants";
import type { FooterLinkGroup, SocialLink } from "@/types";

interface FooterProps {
  linkGroups?: FooterLinkGroup[];
  socialLinks?: SocialLink[];
}

function Footer({
  linkGroups = FOOTER_LINK_GROUPS,
  socialLinks = SOCIAL_LINKS,
}: FooterProps) {
  return (
    <footer className="relative overflow-hidden border-t bg-background">
      <div className="absolute inset-0 opacity-10">
        <PromptImage
          src={IMAGE_PROMPTS.footer.src}
          alt={IMAGE_PROMPTS.footer.alt}
          fallbackLabel=""
          className="h-full rounded-none border-0"
        />
      </div>

      <Container className="relative grid gap-10 py-12 md:grid-cols-3">
        <div className="flex flex-col gap-3">
          <span className="text-lg font-bold">{SITE_CONFIG.name}</span>
          <p className="max-w-xs text-sm text-muted-foreground">
            {FOOTER_CONTENT.description}
          </p>
        </div>

        {linkGroups.map((group) => (
          <div key={group.title} className="flex flex-col gap-3">
            <span className="text-sm font-semibold">{group.title}</span>
            <ul className="flex flex-col gap-2">
              {group.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold">Redes Sociais</span>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.id}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="size-5" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>

      <div className="relative border-t py-6">
        <Container>
          <p className="text-center text-sm text-muted-foreground">
            {FOOTER_CONTENT.copyright}
          </p>
        </Container>
      </div>
    </footer>
  );
}

export { Footer };
