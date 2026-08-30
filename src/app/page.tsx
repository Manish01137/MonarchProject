import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { StatBar } from "@/components/home/StatBar";
import { DestinationGrid } from "@/components/home/DestinationGrid";
import { RoadmapSteps } from "@/components/home/RoadmapSteps";
import { JourneyBanner } from "@/components/home/JourneyBanner";
import { UniversitySection } from "@/components/home/UniversitySection";
import { TeamSection } from "@/components/home/TeamSection";
import { LeadForm } from "@/components/forms/LeadForm";
import { JsonLd, serviceSchema } from "@/lib/jsonld";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Study Abroad & Immigration Consultants in Ahmedabad",
  description:
    "Monarch Visa Advisors turns study-abroad plans into reality — free profile assessment, university selection, applications and visa filing, backed by 10+ years and a 98% visa success rate.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Study Abroad & Visa Consultancy",
          description:
            "End-to-end study-abroad and immigration guidance: profile assessment, country and university selection, applications, and visa filing.",
          url: site.url,
        })}
      />
      <Hero />
      <StatBar />
      <DestinationGrid />
      <RoadmapSteps />
      <JourneyBanner />
      <UniversitySection />
      <TeamSection />
      <LeadForm />
    </>
  );
}
