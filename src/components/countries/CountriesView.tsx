"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { countries } from "@/content/countries";
import { CountrySectionBlock } from "./CountrySectionBlock";

const slugs = countries.map((c) => c.slug);

export function CountriesView() {
  const [active, setActive] = useState<string>(slugs[0]);
  const clickLockRef = useRef(0);

  const scrollTo = useCallback((slug: string) => {
    const el = document.getElementById(slug);
    if (!el) return;
    clickLockRef.current = Date.now();
    setActive(slug);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `/countries#${slug}`);
  }, []);

  // Scroll-spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() - clickLockRef.current < 700) return;
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const slug = (visible[0].target as HTMLElement).dataset.country;
          if (slug) setActive(slug);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    slugs.forEach((s) => {
      const el = document.getElementById(s);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Honour an incoming #hash (from navbar dropdown / homepage cards) after mount.
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && slugs.includes(hash)) {
      const t = setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "auto", block: "start" });
        setActive(hash);
      }, 60);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <>
      <nav
        aria-label="Jump to a destination"
        className="sticky top-[72px] z-30 border-y border-hair bg-white/95 backdrop-blur-md"
      >
        <div className="container-x">
          <ul className="-mx-1 flex gap-1 overflow-x-auto py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {countries.map((c) => {
              const isActive = active === c.slug;
              return (
                <li key={c.slug} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => scrollTo(c.slug)}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      isActive ? "text-brand-700" : "text-navy-900/70 hover:text-navy-900",
                    )}
                  >
                    <span className={`fi fi-${c.flag} rounded-sm`} aria-hidden />
                    {c.name}
                    {isActive && (
                      <motion.span
                        layoutId="jumptab-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-brand-50"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      <div>
        {countries.map((c, i) => (
          <CountrySectionBlock key={c.slug} country={c} index={i} />
        ))}
      </div>
    </>
  );
}
