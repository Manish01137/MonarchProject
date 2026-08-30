"use client";

import { useRouter } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup } from "@/components/ui/Reveal";
import { DestinationCard } from "@/components/common/DestinationCard";
import { Button } from "@/components/ui/Button";
import { destinations } from "@/content/home";
import { countries } from "@/content/countries";

const flagBySlug = Object.fromEntries(countries.map((c) => [c.slug, c.flag]));

export function DestinationGrid() {
  const router = useRouter();
  return (
    <Section id="destinations" tone="mist" pattern>
      <SectionHeading
        eyebrow="Destinations"
        title="Where Will Your Story Take You?"
        intro="Six of our most-requested destinations — each with study, work, and settlement pathways our advisors know inside out."
      />
      <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
        {destinations.map((d, i) => (
          <DestinationCard
            key={d.slug}
            data={{ ...d, flag: flagBySlug[d.slug] }}
            href={`/countries#${d.slug}`}
            priority={i < 3}
            onClick={(e) => {
              e.preventDefault();
              router.push(`/countries#${d.slug}`);
            }}
          />
        ))}
      </RevealGroup>
      <div className="mt-10 flex justify-center">
        <Button href="/countries" variant="outline" size="lg" withArrow>
          View All Countries
        </Button>
      </div>
    </Section>
  );
}
