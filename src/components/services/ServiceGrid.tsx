"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { scaleIn, staggerParent } from "@/lib/motion";
import { useRevealProps } from "@/lib/useReveal";
import { services } from "@/content/services";

const iconBySlug: Record<string, string> = {
  "student-visa": "graduation",
  "university-admissions": "school",
  "work-permit-pr": "work",
  "documentation-visa-filing": "file",
  "test-preparation": "badge",
};

export function ServiceGrid() {
  const reveal = useRevealProps();
  return (
    <motion.ul
      variants={staggerParent(0.08)}
      {...reveal}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {services.map((s) => (
        <motion.li key={s.slug} variants={scaleIn}>
          <Link
            href={`/services/${s.slug}`}
            className="group flex h-full flex-col gap-4 rounded-2xl border border-hair bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
              <Icon name={iconBySlug[s.slug] ?? "compass"} className="h-6 w-6" />
            </span>
            <h3 className="text-lg font-bold text-navy-900">{s.name}</h3>
            <p className="flex-1 text-sm leading-relaxed text-ink">{s.summary}</p>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </span>
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}
