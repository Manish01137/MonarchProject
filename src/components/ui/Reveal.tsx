"use client";

import type { ElementType } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { fadeUp, staggerParent, VIEWPORT } from "@/lib/motion";

type Tag = "div" | "section" | "li" | "ul" | "span" | "article";

function motionTag(as: Tag): ElementType {
  return motion[as] as ElementType;
}

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  as?: Tag;
  delay?: number;
};

/**
 * Single scroll-reveal block. Defaults to fade-up 24px.
 * When the visitor prefers reduced motion, content renders immediately with no
 * scroll gating (never a flash of invisible content).
 */
export function Reveal({ children, className, variants = fadeUp, as = "div", delay = 0 }: RevealProps) {
  const MotionTag = motionTag(as);
  const reduce = useReducedMotion();
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial={reduce ? "show" : "hidden"}
      whileInView="show"
      viewport={VIEWPORT}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  );
}

/** Wraps a list/grid so children with `variants` animate in sequence. */
export function RevealGroup({
  children,
  className,
  as = "div",
  stagger = 0.1,
  delayChildren = 0,
}: {
  children: React.ReactNode;
  className?: string;
  as?: Tag;
  stagger?: number;
  delayChildren?: number;
}) {
  const MotionTag = motionTag(as);
  const reduce = useReducedMotion();
  return (
    <MotionTag
      className={className}
      variants={staggerParent(stagger, delayChildren)}
      initial={reduce ? "show" : "hidden"}
      whileInView="show"
      viewport={VIEWPORT}
    >
      {children}
    </MotionTag>
  );
}

/** A child inside <RevealGroup>. */
export function RevealItem({
  children,
  className,
  variants = fadeUp,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  as?: Tag;
}) {
  const MotionTag = motionTag(as);
  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  );
}
