import { cn } from "@/lib/cn";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  /** visual ground */
  tone?: "white" | "mist" | "navy";
  /** show the dotted-grid pattern behind the content */
  pattern?: boolean;
  /** vertical rhythm */
  size?: "sm" | "md" | "lg";
};

const tones: Record<NonNullable<SectionProps["tone"]>, string> = {
  white: "bg-white text-ink",
  mist: "bg-mist text-ink",
  navy: "bg-navy-900 text-white",
};

const sizes: Record<NonNullable<SectionProps["size"]>, string> = {
  sm: "py-14 sm:py-16",
  md: "py-16 sm:py-24",
  lg: "py-20 sm:py-28 lg:py-32",
};

export function Section({
  id,
  children,
  className,
  tone = "white",
  pattern = false,
  size = "md",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative isolate overflow-hidden", tones[tone], sizes[size], className)}
    >
      {pattern && (
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 -z-10",
            tone === "navy" ? "dotted-grid-dark" : "dotted-grid",
          )}
        />
      )}
      <div className="container-x">{children}</div>
    </section>
  );
}
