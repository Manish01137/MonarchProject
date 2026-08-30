import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/ui/Section";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { CtaBanner } from "@/components/common/CtaBanner";
import { LeadForm } from "@/components/forms/LeadForm";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/lib/jsonld";
import { services } from "@/content/services";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Services — Student Visas, Admissions, PR, Documentation & Test Prep",
  description:
    "From course selection and university admissions to work permits, PR pathways, visa filing and IELTS/PTE/TOEFL coaching — explore how Monarch Visa Advisors can help.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: site.url },
      { name: "Services", url: `${site.url}/services` },
    ]),
    ...services.map((s) =>
      serviceSchema({
        name: s.name,
        description: s.summary,
        url: `${site.url}/services/${s.slug}`,
        serviceType: s.name,
      }),
    ),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <PageHero
        eyebrow="Services"
        title="More Than Visa Assistance. Explore Our Services."
        subtitle="Five focused services that cover the full journey — from picking a course to preparing for your English test and filing your visa."
        primaryCta={{ label: "Get Free Profile Assessment", href: "/contact" }}
      />
      <Section tone="mist" pattern>
        <ServiceGrid />
        <CtaBanner
          className="mt-16"
          title="Not sure which service you need?"
          body="Tell us your goal and we'll point you to the right starting line — often it's the free profile assessment."
          ctaLabel="Talk to an Advisor"
        />
      </Section>
      <LeadForm />
    </>
  );
}
