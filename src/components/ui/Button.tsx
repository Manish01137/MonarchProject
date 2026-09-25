import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "outlineLight" | "maroon" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white rounded-full shadow-[0_8px_20px_rgba(228,78,41,0.28)] hover:bg-brand-700 hover:shadow-[0_10px_26px_rgba(228,78,41,0.34)] active:scale-[0.98]",
  outline:
    "border border-navy-900 text-navy-900 rounded-full hover:bg-navy-900 hover:text-white active:scale-[0.98]",
  // Same shape as `outline`, self-contained (not a className override) so it's
  // safe to use on dark/image backgrounds — see Hero.tsx for why: overriding a
  // variant's hover classes via an external `className` is not reliably ordered
  // by Tailwind, so it can flip only one of bg/text and leave invisible text.
  outlineLight:
    "border border-white/60 text-white rounded-full hover:bg-white hover:text-navy-900 active:scale-[0.98]",
  maroon:
    "bg-maroon-500 text-white rounded-full shadow-[0_8px_20px_rgba(138,42,67,0.32)] hover:bg-maroon-600 active:scale-[0.98]",
  ghost: "text-navy-900 rounded-lg hover:bg-navy-900/5",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  withArrow = false,
  className,
  children,
  ...rest
}: CommonProps &
  ({ href: string } & Omit<React.ComponentProps<typeof Link>, "href" | "className">)) {
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
      {withArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden
        />
      )}
    </Link>
  );
}

export function ButtonEl({
  variant = "primary",
  size = "md",
  withArrow = false,
  className,
  children,
  ...rest
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
      {withArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden
        />
      )}
    </button>
  );
}
