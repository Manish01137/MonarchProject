import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { scaleIn } from "@/lib/motion";
import { SectionHeading, AccentText } from "@/components/ui/SectionHeading";
import { IconCard } from "@/components/common/IconCard";
import { CtaBanner } from "@/components/common/CtaBanner";
import { Chip } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { countryFeatureChips, type Country } from "@/content/countries";

export function CountrySectionBlock({ country, index }: { country: Country; index: number }) {
  const tone = index % 2 === 0 ? "bg-white" : "bg-mist";
  return (
    <section
      id={country.slug}
      data-country={country.slug}
      className={cn("scroll-mt-[136px] py-16 sm:py-24", tone)}
      aria-labelledby={`${country.slug}-title`}
    >
      <div className="container-x">
        {/* header */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="order-2 flex flex-col items-start gap-4 lg:order-1">
            <span className="flex items-center gap-3">
              <span className={`fi fi-${country.flag} rounded-sm text-3xl shadow-sm`} aria-hidden />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                {country.subhead}
              </span>
            </span>
            <h2 id={`${country.slug}-title`} className="text-h2 font-bold text-navy-900">
              <AccentText text={country.h2} accent={country.name} />
            </h2>
            <p className="text-lg text-ink">{country.hook}</p>
            {country.pending && (
              <Chip tone="maroon" className="text-xs">
                Content pending client sign-off
              </Chip>
            )}
            <Button href="/contact" size="lg" withArrow className="mt-1">
              Talk to Our {country.name} Visa Experts
            </Button>
          </Reveal>

          <Reveal className="relative order-1 aspect-[4/3] overflow-hidden rounded-3xl shadow-card-hover lg:order-2">
            <Image
              src={country.image}
              alt={country.imageAlt}
              fill
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/35 to-transparent" />
          </Reveal>
        </div>

        {/* intro */}
        <Reveal className="mt-10 max-w-3xl text-base leading-relaxed text-ink">{country.intro}</Reveal>

        {/* services */}
        <div className="mt-14">
          <SectionHeading align="left" title={`Our ${country.name} Visa Services`} />
          <RevealGroup className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
            {country.services.map((s) => (
              <IconCard key={s.title} icon={s.icon} title={s.title} description={s.description} />
            ))}
          </RevealGroup>
        </div>

        {/* why choose */}
        <div className="mt-14 grid gap-8 rounded-3xl border border-hair bg-white/70 p-8 lg:grid-cols-[1fr_1fr] lg:p-10">
          <Reveal className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-navy-900">Why Choose Monarch Visa Advisors?</h3>
            <p className="text-sm leading-relaxed text-ink">{country.whyChoose}</p>
          </Reveal>
          <RevealGroup as="ul" className="grid grid-cols-1 gap-3 sm:grid-cols-2" stagger={0.06}>
            {countryFeatureChips.map((chip) => (
              <RevealItem
                key={chip}
                as="li"
                variants={scaleIn}
                className="flex h-full items-center gap-2.5 rounded-xl border border-hair bg-white p-3.5 text-sm font-medium text-navy-900"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-brand-600" />
                {chip}
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* mini CTA */}
        <CtaBanner
          className="mt-14"
          size="sm"
          title={`Start Your ${country.name} Visa Journey`}
          body={country.closing}
          ctaLabel={`Talk to our ${country.name} Visa Experts`}
        />

        {/* tag row */}
        <Reveal className="mt-10 flex flex-col items-center gap-4 text-center">
          <ul className="flex flex-wrap justify-center gap-2.5">
            {country.tags.map((t) => (
              <li key={t}>
                <Chip tone="brand">{t}</Chip>
              </li>
            ))}
          </ul>
          <Button href="/contact" variant="outline" withArrow>
            Get a Consultation Today
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
