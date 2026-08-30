"use client";

import { useReducedMotion } from "framer-motion";
import { VIEWPORT } from "./motion";

/**
 * Props for a scroll-revealed motion element. When the visitor prefers reduced
 * motion the element starts in its "show" state, so content is never gated
 * behind a scroll/opacity transition (and never a flash of invisible content).
 *
 * Use with a `variants` prop that defines "hidden" / "show".
 */
export function useRevealProps() {
  const reduce = useReducedMotion();
  return {
    initial: (reduce ? "show" : "hidden") as "show" | "hidden",
    whileInView: "show" as const,
    viewport: VIEWPORT,
  };
}
