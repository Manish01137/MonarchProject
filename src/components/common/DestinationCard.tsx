"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { scaleIn } from "@/lib/motion";
import { cn } from "@/lib/cn";

export type DestinationCardData = {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  flag?: string;
};

export function DestinationCard({
  data,
  href,
  onClick,
  priority = false,
  className,
}: {
  data: DestinationCardData;
  href: string;
  onClick?: (e: React.MouseEvent) => void;
  priority?: boolean;
  className?: string;
}) {
  return (
    <motion.article variants={scaleIn} className={cn("h-full", className)}>
      <Link
        href={href}
        onClick={onClick}
        className="group relative flex h-full min-h-[300px] flex-col justify-end overflow-hidden rounded-2xl shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
      >
        <Image
          src={data.image}
          alt={`${data.name} — study and immigration destination`}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/45 to-navy-900/5" />
        <div className="relative z-10 flex items-end justify-between gap-3 p-5">
          <div>
            <div className="flex items-center gap-2">
              {data.flag && (
                <span
                  className={`fi fi-${data.flag} rounded-sm text-lg shadow`}
                  aria-hidden
                />
              )}
              <h3 className="text-lg font-bold text-white">{data.name}</h3>
            </div>
            <p className="mt-1 text-sm text-white/80">{data.tagline}</p>
          </div>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors group-hover:bg-brand-600">
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
