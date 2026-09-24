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
    <section className="relative isolate overflow-hidden bg-navy-900">
      {/* Mobile / tablet banner — normal block (image-first), own flag chips + badge */}
      <div className="relative h-[400px] w-full sm:h-[460px] lg:hidden">
        <Image
          src="/mobileheroimg.png"
          alt="Illustration of a student traveler with luggage looking out over a world map connecting Toronto, London, New York, Sydney and Dubai skylines, with a plane departing"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_18%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/10 via-transparent via-60% to-navy-900" />

        <motion.div
          className="absolute left-[6%] top-[92px] flex gap-2"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
        >
          {heroFlags.slice(0, 2).map((f) => (
            <FlagChip key={f.code} code={f.code} label={f.label} small />
          ))}
        </motion.div>
        <motion.div
          className="absolute right-[6%] top-[92px] flex gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        >
          {heroFlags.slice(2).map((f) => (
            <FlagChip key={f.code} code={f.code} label={f.label} small />
          ))}
        </motion.div>
        <motion.div
          className="absolute bottom-[14%] right-[6%] flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-card-hover"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <BadgeCheck className="h-3.5 w-3.5" aria-hidden />
          </span>
          <span className="text-xs font-bold text-navy-900">
            Visa Approved
            <span className="ml-1 text-emerald-600">✓</span>
          </span>
        </motion.div>
      </div>

      {/* Desktop banner — full-bleed, text overlaid on its dark (left) side */}
      <div className="absolute inset-0 hidden lg:block">
        <Image
          src="/webistehomepagebanner.jpg"
          alt="Illustration of a student traveler with luggage looking out over a world map connecting Toronto, London, New York, Sydney and Dubai skylines, with a plane departing"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[32%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/55 to-navy-900/10" />

        <motion.div
          className="absolute right-[20%] top-[10%] flex flex-col gap-2"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
        >
          {heroFlags.slice(0, 2).map((f) => (
            <FlagChip key={f.code} code={f.code} label={f.label} />
          ))}
        </motion.div>
        <motion.div
          className="absolute right-[4%] top-[16%] flex flex-col gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        >
          {heroFlags.slice(2).map((f) => (
            <FlagChip key={f.code} code={f.code} label={f.label} />
          ))}
        </motion.div>
        <motion.div
          className="absolute bottom-[10%] right-[8%] flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-card-hover"
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
      </div>

      {/* content — dark zone below the image on mobile, overlaid on the image on desktop */}
      <div className="container-x relative z-10 bg-navy-900 pb-14 pt-8 lg:flex lg:min-h-[640px] lg:items-center lg:bg-transparent lg:pb-0 lg:pt-[112px]">
        <motion.div
          variants={staggerParent(0.1)}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start gap-6 lg:max-w-xl"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-brand-500" />
            Free Counselling · 10+ Years of Expertise
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-[2rem] font-bold leading-[1.08] text-white sm:text-[2.75rem] lg:text-display-lg"
          >
            Turn Your Study Abroad Dream Into Your <span className="text-brand-400">Reality</span>.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
          >
            Personalised guidance from your first profile assessment to landing day — university
            selection, applications, and visa filing, handled by one experienced team.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
            <Button href="/contact" size="lg" withArrow>
              Get Free Profile Assessment
            </Button>
            <Button
              href="/countries"
              size="lg"
              variant="outline"
              className="border-white/60 text-white hover:bg-white hover:text-navy-900"
            >
              Explore Destinations
            </Button>
          </motion.div>

          <motion.ul variants={fadeUp} className="mt-2 flex flex-wrap gap-x-6 gap-y-3">
            {heroTrustIcons.map((t) => (
              <li key={t.label} className="flex items-center gap-2 text-sm font-medium text-white">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-brand-400">
                  <Icon name={t.icon} className="h-4 w-4" />
                </span>
                {t.label}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}

function FlagChip({
  code,
  label,
  small = false,
}: {
  code: string;
  label: string;
  small?: boolean;
}) {
  return (
    <span
      aria-label={label}
      className={
        small
          ? "flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-card"
          : "flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-card"
      }
    >
      <span className={`fi fi-${code} rounded-sm ${small ? "text-lg" : "text-2xl"}`} aria-hidden />
    </span>
  );
}
