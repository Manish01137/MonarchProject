import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { CtaBanner } from "@/components/common/CtaBanner";
import { Button } from "@/components/ui/Button";
import { LeadForm } from "@/components/forms/LeadForm";
import { scaleIn } from "@/lib/motion";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/lib/jsonld";
import { getService, services } from "@/content/services";
import { site } from "@/content/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  return {
    title: service.metaTitle.replace(` | ${site.name}`, ""),
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${site.url}/services/${service.slug}`,
    },
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: service.name,
            description: service.metaDescription,
            url: `${site.url}/services/${service.slug}`,
            serviceType: service.name,
          }),
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "Services", url: `${site.url}/services` },
            { name: service.name, url: `${site.url}/services/${service.slug}` },
          ]),
        ]}
      />

      <PageHero
        eyebrow={service.subhead}
        title={service.name}
        subtitle={service.hook}
        primaryCta={{ label: "Get Free Profile Assessment", href: "/contact" }}
        secondaryCta={{ label: "All Services", href: "/services" }}
        image={service.image}
        imageAlt={service.imageAlt}
      />

      <Section tone="white">
        <Reveal className="max-w-3xl text-base leading-relaxed text-ink sm:text-lg">
          {service.intro}
        </Reveal>
      </Section>

      <Section tone="mist" pattern>
        <SectionHeading align="left" eyebrow="What's covered" title={service.includesTitle} />
        <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-2" stagger={0.06}>
          {service.includes.map((item) => (
            <RevealItem
              key={item}
              as="article"
              variants={scaleIn}
              className="flex items-start gap-3 rounded-2xl border border-hair bg-white p-5 shadow-card"
            >
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <Check className="h-4 w-4" aria-hidden />
              </span>
              <span className="text-sm font-medium text-navy-900">{item}</span>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-12">
          <CtaBanner
            title={service.closing}
            body="Book a free profile assessment and we'll map out your next steps together."
            ctaLabel="Start With a Free Assessment"
          />
        </Reveal>

        <Reveal className="mt-10 flex flex-wrap items-center gap-3">
          <Button href="/contact" size="lg" withArrow>
            Get a Consultation Today
          </Button>
          <Button href="/services" size="lg" variant="outline">
            Explore Other Services
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </Reveal>
      </Section>

      <LeadForm />
    </>
  );
}
