import { cn } from "@/lib/cn";

export function Chip({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  tone?: "light" | "brand" | "dark" | "maroon";
  className?: string;
}) {
  const tones = {
    light: "bg-white text-navy-900 border border-hair",
    brand: "bg-brand-50 text-brand-700 border border-brand-600/15",
    dark: "bg-white/10 text-white border border-white/15",
    maroon: "bg-maroon-500/10 text-maroon-600 border border-maroon-500/25",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function TagRow({ tags, tone = "light" }: { tags: string[]; tone?: "light" | "dark" }) {
  return (
    <ul className="flex flex-wrap items-center gap-2.5">
      {tags.map((t) => (
        <li key={t}>
          <Chip tone={tone === "dark" ? "dark" : "brand"}>{t}</Chip>
        </li>
      ))}
    </ul>
  );
}
