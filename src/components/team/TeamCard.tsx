"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { scaleIn } from "@/lib/motion";
import type { TeamMember } from "@/content/team";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <motion.article
      variants={scaleIn}
      className="group flex flex-col gap-4 rounded-2xl border border-hair bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-xl">
        <Image
          src={member.photo}
          alt={`${member.name} — ${member.role}`}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.05]"
        />
      </div>
      <div>
        <h3 className="text-base font-bold text-navy-900">{member.name}</h3>
        <p className="mt-1 text-sm leading-snug text-ink">{member.role}</p>
      </div>
    </motion.article>
  );
}
