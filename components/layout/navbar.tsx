"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { NAV_CTA_LABEL, NAV_LINKS, SITE_CONFIG } from "@/constants";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/types";

interface NavbarProps {
  links?: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
}

function Navbar({
  links = NAV_LINKS,
  ctaLabel = NAV_CTA_LABEL,
  ctaHref = "#contact",
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-bold text-lg">
          {SITE_CONFIG.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
          aria-label="Abrir menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      <div
        className={cn(
          "md:hidden",
          isMenuOpen ? "block" : "hidden",
          "border-t bg-background"
        )}
      >
        <Container className="flex flex-col gap-4 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button asChild onClick={handleLinkClick}>
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
        </Container>
      </div>
    </header>
  );
}

export { Navbar };
