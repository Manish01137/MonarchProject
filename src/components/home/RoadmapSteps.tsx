import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup } from "@/components/ui/Reveal";
import { IconCard } from "@/components/common/IconCard";
import { roadmapSteps } from "@/content/home";

export function RoadmapSteps() {
  return (
    <Section id="roadmap" tone="white">
      <SectionHeading
        eyebrow="Our Process"
        title="More Than Visa Assistance. We Build Your Roadmap."
        intro="A single, structured path from first conversation to pre-departure — no guesswork, no gaps."
      />
      <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
        {roadmapSteps.map((s) => (
          <IconCard
            key={s.n}
            number={s.n}
            icon={s.icon}
            title={s.title}
            description={s.description}
          />
        ))}
      </RevealGroup>
    </Section>
  );
}
