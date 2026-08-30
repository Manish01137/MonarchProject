"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { CountUp } from "@/components/ui/CountUp";
import { fadeUp, staggerParent } from "@/lib/motion";
import { useRevealProps } from "@/lib/useReveal";
import { stats } from "@/content/home";

export function StatBar() {
  const reveal = useRevealProps();
  return (
    <section className="bg-navy-900" aria-label="Monarch by the numbers">
      <div className="container-x py-12">
        <motion.ul
          variants={staggerParent(0.08)}
          {...reveal}
          className="grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3 lg:grid-cols-5"
        >
          {stats.map((s) => (
            <motion.li key={s.label} variants={fadeUp} className="flex flex-col items-center text-center">
              <span className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-brand-400">
                <Icon name={s.icon} className="h-5 w-5" />
              </span>
              <span className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                <CountUp
                  value={s.value}
                  decimals={s.decimals ?? 0}
                  prefix={s.prefix ?? ""}
                  suffix={s.suffix ?? ""}
                />
              </span>
              <span className="mt-1 text-xs leading-snug text-white/60">{s.label}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
