import { site } from "@/content/site";

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/monarch-logo.png`,
  description: site.description,
  sameAs: site.socials.map((s) => s.href),
  contactPoint: site.phones.map((p) => ({
    "@type": "ContactPoint",
    telephone: p.value,
    contactType: p.label,
    areaServed: "IN",
    availableLanguage: ["en", "hi", "gu"],
  })),
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  image: `${site.url}/teamphoto.jpg`,
  url: site.url,
  telephone: site.phones[0].value,
  email: site.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  hasMap: site.mapsShareUrl,
  openingHours: "Mo-Sa 10:00-19:00",
  areaServed: "Worldwide",
};

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType ?? "Immigration and visa consultancy",
    url: opts.url,
    areaServed: opts.areaServed ?? "Worldwide",
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
