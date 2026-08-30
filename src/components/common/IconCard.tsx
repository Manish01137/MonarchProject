"use client";

import { motion } from "framer-motion";
import { scaleIn } from "@/lib/motion";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";

export function IconCard({
  icon,
  title,
  description,
  number,
  className,
}: {
  icon: string;
  title: string;
  description: string;
  number?: string;
  className?: string;
}) {
  return (
    <motion.article
      variants={scaleIn}
      className={cn(
        "group flex h-full flex-col gap-3 rounded-2xl border border-hair bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
          <Icon name={icon} className="h-6 w-6" />
        </span>
        {number && (
          <span className="font-display text-2xl font-extrabold text-brand-600/25">{number}</span>
        )}
      </div>
      <h3 className="text-lg font-bold text-navy-900">{title}</h3>
      <p className="text-sm leading-relaxed text-ink">{description}</p>
    </motion.article>
  );
}

export function BulletCard({ text, icon = "badge" }: { text: string; icon?: string }) {
  return (
    <motion.li
      variants={scaleIn}
      className="flex items-start gap-3 rounded-xl border border-hair bg-white p-4 shadow-card"
    >
      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
        <Icon name={icon} className="h-4 w-4" />
      </span>
      <span className="text-sm font-medium text-navy-900">{text}</span>
    </motion.li>
  );
}
