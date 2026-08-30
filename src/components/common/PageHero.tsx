"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

type Cta = { label: string; href: string };

export function PageHero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  image,
  imageAlt,
  compact = false,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  image?: string;
  imageAlt?: string;
  compact?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-white",
        compact ? "pt-[104px] pb-14 lg:pt-[124px]" : "pt-[112px] pb-16 lg:pt-[140px] lg:pb-24",
      )}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 dotted-grid" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-10 -z-10 h-72 w-72 rounded-full bg-brand-50 blur-3xl"
      />
      <div
        className={cn(
          "container-x grid gap-10",
          image ? "items-center lg:grid-cols-[1.1fr_0.9fr]" : "max-w-3xl",
        )}
      >
        <Reveal className={cn("flex flex-col items-start gap-5", image && "order-2 lg:order-1")}>
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full border border-hair bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-navy-900 shadow-card">
              <span className="h-2 w-2 rounded-full bg-brand-600" />
              {eyebrow}
            </span>
          )}
          <h1
            className={cn(
              "font-bold leading-[1.1] text-navy-900",
              compact ? "text-[1.9rem] sm:text-4xl" : "text-[2rem] sm:text-[2.75rem] lg:text-display",
            )}
          >
            {title}
          </h1>
          {subtitle && <p className="max-w-xl text-base leading-relaxed text-ink sm:text-lg">{subtitle}</p>}
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap items-center gap-3">
              {primaryCta && (
                <Button href={primaryCta.href} size="lg" withArrow>
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} size="lg" variant="outline">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
          {children}
        </Reveal>

        {image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-1 aspect-[4/3] overflow-hidden rounded-[26px] shadow-card-hover lg:order-2"
          >
            <Image
              src={image}
              alt={imageAlt ?? ""}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent" />
          </motion.div>
        )}
      </div>
    </section>
  );
}
