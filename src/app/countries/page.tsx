import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { CountriesView } from "@/components/countries/CountriesView";
import { LeadForm } from "@/components/forms/LeadForm";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/lib/jsonld";
import { countries } from "@/content/countries";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Study & Immigration Destinations — Canada, UK, USA, Australia, Germany, Dubai",
  description:
    "Explore study and immigration pathways for Canada, the UK, USA, Australia, Germany and Dubai — visa categories, guidance and next steps from Monarch Visa Advisors.",
  alternates: { canonical: "/countries" },
};

export default function CountriesPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: site.url },
      { name: "Countries", url: `${site.url}/countries` },
    ]),
    ...countries.map((c) =>
      serviceSchema({
        name: `${c.name} Visa & Immigration Services`,
        description: c.intro.replace(/^\[Pending final content\]\s*/, ""),
        url: `${site.url}/countries#${c.slug}`,
        serviceType: `${c.name} visa consultancy`,
        areaServed: c.name === "Dubai" ? "United Arab Emirates" : c.name,
      }),
    ),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <PageHero
        eyebrow="Destinations"
        title="Explore Your Study & Immigration Destinations"
        subtitle="One page, every pathway. Pick a destination to see the visa categories we handle, how we work, and what your next step looks like."
        primaryCta={{ label: "Get Free Profile Assessment", href: "/contact" }}
        image="/images/countries-hero.jpg"
        imageAlt="International students walking together on a university campus"
      />
      <CountriesView />
      <LeadForm />
    </>
  );
}
