"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { countryNav, serviceNav } from "@/content/site";
import { MonarchLogo } from "./MonarchLogo";
import { Button } from "@/components/ui/Button";

const dropdownMotion = {
  initial: { opacity: 0, y: 8, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 8, scale: 0.98 },
  transition: { duration: 0.15 },
};

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<"countries" | "services" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<"countries" | "services" | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const goToCountry = useCallback(
    (slug: string) => (e: React.MouseEvent) => {
      setOpenMenu(null);
      setMobileOpen(false);
      if (pathname === "/countries") {
        e.preventDefault();
        document.getElementById(slug)?.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", `/countries#${slug}`);
      } else {
        e.preventDefault();
        router.push(`/countries#${slug}`);
      }
    },
    [pathname, router],
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-nav"
          : "bg-white/80 backdrop-blur-sm",
      )}
    >
      <nav className="container-x flex h-[72px] items-center justify-between gap-4" aria-label="Primary">
        <Link href="/" className="shrink-0" aria-label="Monarch Visa Advisors — home">
          <MonarchLogo />
        </Link>

        {/* desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          <NavLink href="/" label="Home" active={pathname === "/"} />

          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("countries")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              type="button"
              className={cn(
                "flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium text-navy-900 transition-colors hover:text-brand-600",
                pathname === "/countries" && "text-brand-600",
              )}
              aria-expanded={openMenu === "countries"}
              aria-haspopup="true"
              onClick={() => setOpenMenu((v) => (v === "countries" ? null : "countries"))}
            >
              Countries
              <ChevronDown className="h-4 w-4" aria-hidden />
            </button>
            <AnimatePresence>
              {openMenu === "countries" && (
                <motion.div
                  {...dropdownMotion}
                  className="absolute left-0 top-full w-64 pt-3"
                >
                  <div className="overflow-hidden rounded-2xl border border-hair bg-white p-2 shadow-card">
                    {countryNav.map((c) => (
                      <a
                        key={c.slug}
                        href={`/countries#${c.slug}`}
                        onClick={goToCountry(c.slug)}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-navy-900 transition-colors hover:bg-brand-50 hover:text-brand-700"
                      >
                        {c.label}
                      </a>
                    ))}
                    <div className="my-1.5 h-px bg-hair" />
                    <Link
                      href="/countries"
                      className="block rounded-lg px-3 py-2 text-sm font-semibold text-brand-600 hover:bg-brand-50"
                    >
                      View All Countries →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("services")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              type="button"
              className={cn(
                "flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium text-navy-900 transition-colors hover:text-brand-600",
                pathname.startsWith("/services") && "text-brand-600",
              )}
              aria-expanded={openMenu === "services"}
              aria-haspopup="true"
              onClick={() => setOpenMenu((v) => (v === "services" ? null : "services"))}
            >
              Services
              <ChevronDown className="h-4 w-4" aria-hidden />
            </button>
            <AnimatePresence>
              {openMenu === "services" && (
                <motion.div {...dropdownMotion} className="absolute left-0 top-full w-[19rem] pt-3">
                  <div className="overflow-hidden rounded-2xl border border-hair bg-white p-2 shadow-card">
                    {serviceNav.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-navy-900 transition-colors hover:bg-brand-50 hover:text-brand-700"
                      >
                        {s.label}
                      </Link>
                    ))}
                    <div className="my-1.5 h-px bg-hair" />
                    <Link
                      href="/services"
                      className="block rounded-lg px-3 py-2 text-sm font-semibold text-brand-600 hover:bg-brand-50"
                    >
                      View All Services →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink href="/team" label="Team" active={pathname === "/team"} />
          <NavLink href="/contact" label="Contact" active={pathname === "/contact"} />
        </div>

        <div className="hidden lg:block">
          <Button href="/contact" size="sm" withArrow>
            <Phone className="h-4 w-4" aria-hidden />
            Free Counselling
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-navy-900 lg:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {/* mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-navy-900/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col bg-white lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
            >
              <div className="flex items-center justify-between border-b border-hair px-5 py-4">
                <MonarchLogo />
                <button
                  type="button"
                  className="rounded-lg p-2 text-navy-900"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-4">
                <MobileLink href="/" label="Home" onNavigate={() => setMobileOpen(false)} />

                <MobileAccordion
                  label="Countries"
                  open={mobileAccordion === "countries"}
                  onToggle={() =>
                    setMobileAccordion((v) => (v === "countries" ? null : "countries"))
                  }
                >
                  {countryNav.map((c) => (
                    <a
                      key={c.slug}
                      href={`/countries#${c.slug}`}
                      onClick={goToCountry(c.slug)}
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-brand-50 hover:text-brand-700"
                    >
                      {c.label}
                    </a>
                  ))}
                  <Link
                    href="/countries"
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-brand-600 hover:bg-brand-50"
                  >
                    View All Countries →
                  </Link>
                </MobileAccordion>

                <MobileAccordion
                  label="Services"
                  open={mobileAccordion === "services"}
                  onToggle={() =>
                    setMobileAccordion((v) => (v === "services" ? null : "services"))
                  }
                >
                  {serviceNav.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-brand-50 hover:text-brand-700"
                    >
                      {s.label}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-brand-600 hover:bg-brand-50"
                  >
                    View All Services →
                  </Link>
                </MobileAccordion>

                <MobileLink href="/team" label="Team" onNavigate={() => setMobileOpen(false)} />
                <MobileLink
                  href="/contact"
                  label="Contact"
                  onNavigate={() => setMobileOpen(false)}
                />
              </div>

              <div className="border-t border-hair p-5">
                <Button href="/contact" className="w-full" withArrow onClick={() => setMobileOpen(false)}>
                  <Phone className="h-4 w-4" aria-hidden />
                  Free Counselling
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-lg px-3.5 py-2 text-sm font-medium transition-colors hover:text-brand-600",
        active ? "text-brand-600" : "text-navy-900",
      )}
    >
      {label}
    </Link>
  );
}

function MobileLink({
  href,
  label,
  onNavigate,
}: {
  href: string;
  label: string;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="block border-b border-hair py-3.5 text-base font-semibold text-navy-900"
    >
      {label}
    </Link>
  );
}

function MobileAccordion({
  label,
  open,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-hair">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-3.5 text-base font-semibold text-navy-900"
        aria-expanded={open}
      >
        {label}
        <ChevronDown
          className={cn("h-5 w-5 transition-transform", open && "rotate-180")}
          aria-hidden
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-3 pl-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
