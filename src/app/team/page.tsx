import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/ui/Section";
import { RevealGroup } from "@/components/ui/Reveal";
import { CtaBanner } from "@/components/common/CtaBanner";
import { LeadForm } from "@/components/forms/LeadForm";
import { TeamCard } from "@/components/team/TeamCard";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";
import { team } from "@/content/team";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Team — Study Visa & Immigration Counsellors",
  description:
    "Meet the Monarch Visa Advisors team — study visa counsellors, immigration operations, documentation, and test-prep faculty guiding your journey end to end.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Team", url: `${site.url}/team` },
        ])}
      />

      <PageHero
        eyebrow="Our Team"
        title="Meet The People Behind Your Journey"
        subtitle="Counsellors, operations, and coaching faculty who stay with you from the first assessment to the day you fly."
        primaryCta={{ label: "Get Free Profile Assessment", href: "/contact" }}
      />

      <Section tone="mist" pattern>
        <RevealGroup
          className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4"
          stagger={0.06}
        >
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </RevealGroup>

        <CtaBanner
          className="mt-16"
          title="Ready to start your own journey?"
          body="Talk to one of our counsellors and get a free, no-obligation profile assessment."
          ctaLabel="Talk to an Advisor"
        />
      </Section>

      <LeadForm />
    </>
  );
}
