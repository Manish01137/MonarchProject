import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { universities, universityFilters } from "@/content/home";

export function UniversitySection() {
  const loop = [...universities, ...universities];
  return (
    <Section id="universities" tone="mist">
      <SectionHeading
        eyebrow="Universities"
        title="Your Dream University Starts With the Right Choice."
        intro="We work across hundreds of institutions worldwide. Here are a few our students have joined."
      />

      <Reveal className="marquee marquee-mask mt-12 overflow-hidden">
        <div className="marquee-track items-center gap-14 py-2">
          {loop.map((u, i) => (
            <div
              key={`${u.name}-${i}`}
              className="relative h-12 w-[150px] shrink-0 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={u.logo}
                alt={`${u.name} logo`}
                fill
                sizes="150px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="mx-auto mt-12 max-w-4xl rounded-2xl border border-hair bg-white p-5 shadow-card">
        <p className="mb-4 text-sm font-semibold text-navy-900">Find your match</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {universityFilters.map((f) => (
            <label key={f.label} className="flex flex-col gap-1.5 text-xs font-medium text-ink">
              {f.label}
              <select
                aria-label={f.label}
                defaultValue=""
                className="rounded-lg border border-hair bg-white px-3 py-2.5 text-sm text-navy-900 outline-none transition focus:border-brand-600"
              >
                <option value="" disabled>
                  Any {f.label.toLowerCase()}
                </option>
                {f.options.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </div>
        <div className="mt-5 flex justify-end">
          <Button href="/contact" withArrow>
            Explore Universities
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
