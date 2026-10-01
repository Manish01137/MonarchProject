import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { footerNav, site } from "@/content/site";
import { MonarchLogo } from "./MonarchLogo";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white/70">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div className="flex flex-col gap-5">
          <MonarchLogo tone="light" />
          <p className="max-w-xs text-sm leading-relaxed">{site.tagline}</p>
          <ul className="flex gap-3">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-600"
                >
                  <SocialIcon name={s.icon} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-1 inline-flex w-fit items-center rounded-xl bg-white px-3 py-2 shadow-sm">
            <Image
              src="/iso-9001-certified.jpg"
              alt="ISO 9001:2015 Certified"
              width={637}
              height={274}
              className="h-9 w-auto object-contain"
            />
          </div>
        </div>

        <FooterCol title="Explore" links={footerNav.explore} />
        <FooterCol title="Resources" links={footerNav.resources} />

        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Contact Us</h3>
          <ul className="flex flex-col gap-3 text-sm">
            {site.phones.map((p) => (
              <li key={p.label} className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden />
                <span>
                  <span className="block text-xs uppercase tracking-wide text-white/50">
                    {p.label}
                  </span>
                  <a href={p.href} className="text-white/80 hover:text-white">
                    {p.value}
                  </a>
                </span>
              </li>
            ))}
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden />
              <a href={`mailto:${site.email}`} className="text-white/80 hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden />
              <a
                href={site.mapsShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white"
              >
                <span className="block">{site.address.line1}</span>
                <span className="block">{site.address.line2}</span>
              </a>
            </li>
          </ul>

          <div className="mt-1 rounded-2xl border border-maroon-400/40 bg-maroon-500/15 p-4">
            <p className="text-sm font-semibold text-brand-400">Free Counselling</p>
            <p className="mt-1 text-xs text-white/70">
              Book a no-obligation profile assessment with an advisor.
            </p>
            <Button href="/contact" variant="maroon" size="sm" className="mt-3" withArrow>
              Book Now
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Ellisbridge, Ahmedabad, Gujarat 380009</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">{title}</h3>
      <ul className="flex flex-col gap-2.5 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="transition-colors hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
