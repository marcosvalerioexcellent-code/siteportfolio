"use client";

import * as React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

interface PromptImageProps {
  src: string;
  alt: string;
  fallbackLabel: string;
  className?: string;
  sizes?: string;
}

function PromptImage({
  src,
  alt,
  fallbackLabel,
  className,
  sizes = "100vw",
}: PromptImageProps) {
  const [errored, setErrored] = React.useState(false);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border border-dashed bg-muted",
        className
      )}
    >
      {errored ? (
        <div className="flex h-full w-full items-center justify-center p-6 text-center text-sm text-muted-foreground">
          {fallbackLabel}
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
          onError={() => setErrored(true)}
        />
      )}
    </div>
  );
}

export { PromptImage };
