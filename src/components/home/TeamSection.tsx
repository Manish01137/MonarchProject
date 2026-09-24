"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { fadeFromLeft, fadeUp, staggerParent } from "@/lib/motion";
import { useRevealProps } from "@/lib/useReveal";
import { teamBullets } from "@/content/home";

export function TeamSection() {
  const reveal = useRevealProps();
  return (
    <Section id="team" tone="white">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          variants={fadeFromLeft}
          {...reveal}
          className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card-hover"
        >
          <Image
            src="/teamphoto.jpg"
            alt="The Monarch Visa Advisors team at their Ahmedabad office"
            fill
            sizes="(max-width: 1024px) 90vw, 45vw"
            className="object-cover"
          />
        </motion.div>

        <div className="flex flex-col gap-6">
          <Reveal className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
              Our Team
            </span>
            <h2 className="text-h2 font-bold text-navy-900">Meet The People Behind Your Journey.</h2>
            <p className="text-ink">
              Counsellors who have guided students through more than a decade of changing visa rules —
              and who stay with you from the first assessment to the day you fly.
            </p>
          </Reveal>

          <motion.ul variants={staggerParent(0.1)} {...reveal} className="flex flex-col gap-4">
            {teamBullets.map((b) => (
              <motion.li key={b.title} variants={fadeUp} className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={b.icon} className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-semibold text-navy-900">{b.title}</span>
                  <span className="text-sm text-ink">{b.description}</span>
                </span>
              </motion.li>
            ))}
          </motion.ul>

          <Reveal>
            <Button href="/team" size="lg" withArrow>
              Meet Our Team
            </Button>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
