"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { fadeUp, staggerParent } from "@/lib/motion";
import { heroFlags, heroTrustIcons } from "@/content/home";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white pt-[104px] pb-16 sm:pb-20 lg:pt-[132px]">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 dotted-grid" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-24 -z-10 h-72 w-72 rounded-full bg-brand-50 blur-3xl"
      />
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          variants={staggerParent(0.1)}
          initial="hidden"
          animate="show"
          className="order-2 flex flex-col items-start gap-6 lg:order-1"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-hair bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-navy-900 shadow-card"
          >
            <span className="h-2 w-2 rounded-full bg-brand-600" />
            Free Counselling · 10+ Years of Expertise
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-[2rem] font-bold leading-[1.08] text-navy-900 sm:text-[2.75rem] lg:text-display-lg"
          >
            Turn Your Study Abroad Dream Into Your <span className="text-brand-600">Reality</span>.
          </motion.h1>

          <motion.p variants={fadeUp} className="max-w-xl text-base leading-relaxed text-ink sm:text-lg">
            Personalised guidance from your first profile assessment to landing day — university
            selection, applications, and visa filing, handled by one experienced team.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
            <Button href="/contact" size="lg" withArrow>
              Get Free Profile Assessment
            </Button>
            <Button href="/countries" size="lg" variant="outline">
              Explore Destinations
            </Button>
          </motion.div>

          <motion.ul variants={fadeUp} className="mt-2 flex flex-wrap gap-x-6 gap-y-3">
            {heroTrustIcons.map((t) => (
              <li key={t.label} className="flex items-center gap-2 text-sm font-medium text-navy-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <Icon name={t.icon} className="h-4 w-4" />
                </span>
                {t.label}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-card-hover">
            <Image
              src="/images/hero-graduation.jpg"
              alt="A group of international graduates celebrating in caps and gowns outside their university"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent" />
          </div>

          {/* floating flag chips */}
          <motion.div
            className="absolute -left-4 top-10 flex flex-col gap-2 sm:-left-8"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
          >
            {heroFlags.slice(0, 2).map((f) => (
              <FlagChip key={f.code} code={f.code} label={f.label} />
            ))}
          </motion.div>
          <motion.div
            className="absolute -right-3 top-28 flex flex-col gap-2 sm:-right-6"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
          >
            {heroFlags.slice(2).map((f) => (
              <FlagChip key={f.code} code={f.code} label={f.label} />
            ))}
          </motion.div>

          {/* visa approved badge */}
          <motion.div
            className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-card-hover"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <BadgeCheck className="h-5 w-5" aria-hidden />
            </span>
            <span className="text-sm font-bold text-navy-900">
              Visa Approved
              <span className="ml-1 text-emerald-600">✓</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function FlagChip({ code, label }: { code: string; label: string }) {
  return (
    <span className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-semibold text-navy-900 shadow-card">
      <span className={`fi fi-${code} rounded-sm`} aria-hidden />
      {label}
    </span>
  );
}
