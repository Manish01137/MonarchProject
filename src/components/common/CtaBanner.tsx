import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CtaBanner({
  title,
  body,
  ctaLabel,
  ctaHref = "/contact",
  size = "md",
  className,
}: {
  title: React.ReactNode;
  body?: string;
  ctaLabel: string;
  ctaHref?: string;
  size?: "sm" | "md";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "relative isolate overflow-hidden rounded-3xl bg-navy-900 text-white",
        size === "sm" ? "p-8 sm:p-10" : "p-10 sm:p-14",
        className,
      )}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 dotted-grid-dark" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 -z-10 h-56 w-56 rounded-full bg-brand-600/25 blur-3xl"
      />
      <div className="flex flex-col items-start gap-5 sm:max-w-2xl">
        <h3
          className={cn(
            "font-bold text-white",
            size === "sm" ? "text-2xl" : "text-2xl sm:text-3xl",
          )}
        >
          {title}
        </h3>
        {body && <p className="text-white/75">{body}</p>}
        <Button href={ctaHref} variant="maroon" size={size === "sm" ? "md" : "lg"} withArrow>
          {ctaLabel}
        </Button>
      </div>
    </Reveal>
  );
}
