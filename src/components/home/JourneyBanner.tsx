"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { popIn, staggerParent } from "@/lib/motion";
import { useRevealProps } from "@/lib/useReveal";
import { journeySteps } from "@/content/home";

export function JourneyBanner() {
  const reveal = useRevealProps();
  return (
    <Section tone="navy" pattern size="md">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-400">
          From Dream → Destination
        </span>
        <h2 className="text-h2 font-bold text-white">One destination. One strategy. One team beside you.</h2>
        <p className="text-white/70">
          Every step connects to the next. We keep the plan moving so you always know what happens now
          — and what happens after.
        </p>
      </div>

      <motion.div
        variants={staggerParent(0.16)}
        {...reveal}
        className="relative mx-auto mt-12 grid max-w-4xl grid-cols-3 gap-y-10 sm:grid-cols-6"
      >
        {/* connecting line that "draws" in */}
        <motion.div
          aria-hidden
          className="absolute left-0 right-0 top-7 hidden h-px origin-left bg-white/20 sm:block"
          variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1 } }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
        />
        {journeySteps.map((s, i) => (
          <motion.div key={s.label} variants={popIn} className="relative z-10 flex flex-col items-center gap-3">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-navy-800 text-brand-400">
              <Icon name={s.icon} className="h-6 w-6" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wide text-white/80">
              {String(i + 1).padStart(2, "0")} · {s.label}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-12 flex justify-center">
        <Button href="/contact" variant="maroon" size="lg" withArrow>
          Start My Journey
        </Button>
      </div>
    </Section>
  );
}
