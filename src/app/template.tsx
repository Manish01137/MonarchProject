"use client";

import { motion } from "framer-motion";

/**
 * app/template.tsx re-mounts on every navigation, giving us a lightweight
 * cross-fade between routes. Kept short (220ms) and opacity-only so it never
 * blocks interaction or shifts layout; collapses to nothing under reduce-motion
 * via <MotionConfig reducedMotion="user">.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
