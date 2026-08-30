import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  tone = "light",
  className,
}: Props) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-2xl text-center items-center" : "max-w-2xl",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.18em]",
            tone === "dark" ? "text-brand-400" : "text-brand-600",
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-h2 sm:text-[2.25rem] font-bold",
          tone === "dark" ? "text-white" : "text-navy-900",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p className={cn("text-base leading-relaxed", tone === "dark" ? "text-white/75" : "text-ink")}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}

/** Renders a heading string with one accent word wrapped in brand color. */
export function AccentText({ text, accent }: { text: string; accent: string }) {
  const parts = text.split(accent);
  if (parts.length === 1) return <>{text}</>;
  return (
    <>
      {parts[0]}
      <span className="text-brand-600">{accent}</span>
      {parts.slice(1).join(accent)}
    </>
  );
}
