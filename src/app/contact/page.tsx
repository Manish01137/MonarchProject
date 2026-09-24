import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { LeadForm } from "@/components/forms/LeadForm";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { JsonLd, breadcrumbSchema, localBusinessSchema } from "@/lib/jsonld";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Monarch Visa Advisors — Ahmedabad, Gujarat",
  description:
    "Get in touch with Monarch Visa Advisors for a free profile assessment. Call our study visa or work visa & PR lines, email us, or visit our Ahmedabad office.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema,
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "Contact", url: `${site.url}/contact` },
          ]),
        ]}
      />

      <PageHero
        compact
        eyebrow="Contact"
        title="Let's Start Your Journey — Get In Touch"
        subtitle="Send a message or call us directly. Every enquiry starts with a free, no-obligation profile assessment."
      />

      <Section tone="mist" pattern>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <ContactForm />

          <Reveal className="flex flex-col gap-5">
            <div className="rounded-3xl border border-hair bg-white p-6 shadow-card sm:p-8">
              <h2 className="text-lg font-bold text-navy-900">Reach us directly</h2>
              <ul className="mt-4 flex flex-col gap-4 text-sm">
                {site.phones.map((p) => (
                  <li key={p.label} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                      <Phone className="h-4 w-4" aria-hidden />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wide text-ink">{p.label}</span>
                      <a href={p.href} className="font-medium text-navy-900 hover:text-brand-600">
                        {p.value}
                      </a>
                    </span>
                  </li>
                ))}
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <Mail className="h-4 w-4" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-ink">Email</span>
                    <a
                      href={`mailto:${site.email}`}
                      className="font-medium text-navy-900 hover:text-brand-600"
                    >
                      {site.email}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <MapPin className="h-4 w-4" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-ink">Office</span>
                    <a
                      href={site.mapsShareUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-navy-900 hover:text-brand-600"
                    >
                      {site.address.line2}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <Clock className="h-4 w-4" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-ink">Hours</span>
                    <span className="font-medium text-navy-900">{site.hours}</span>
                  </span>
                </li>
              </ul>

              <div className="mt-6 flex gap-3">
                {site.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-900/5 text-navy-900 transition-colors hover:bg-brand-600 hover:text-white"
                  >
                    <SocialIcon name={s.icon} className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-hair shadow-card">
              <iframe
                title="Monarch Visa Advisors office location — Ahmedabad, Gujarat"
                src={site.mapEmbedSrc}
                className="h-56 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={site.mapsShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 border-t border-hair bg-white py-3 text-sm font-semibold text-brand-600 hover:bg-brand-50"
              >
                <MapPin className="h-4 w-4" aria-hidden />
                Get Directions on Google Maps
              </a>
            </div>
          </Reveal>
        </div>
      </Section>

      <LeadForm id="assessment" />
    </>
  );
}
