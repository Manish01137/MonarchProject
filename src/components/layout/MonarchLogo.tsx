import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Monarch Visa Advisors LLP brand lockup (supplied: /public/monarch-logo.png).
 * It's a stacked mark + maroon wordmark. On dark surfaces (`tone="light"`) the
 * maroon wordmark loses contrast, so the lockup sits on a small white plate.
 */
export function MonarchLogo({
  className,
  tone = "dark",
  priority = false,
}: {
  className?: string;
  tone?: "dark" | "light";
  /** kept for API compatibility with older call sites */
  compact?: boolean;
  priority?: boolean;
}) {
  const img = (
    <Image
      src="/monarch-logo.png"
      alt="Monarch Visa Advisors LLP"
      width={347}
      height={291}
      priority={priority}
      className="h-full w-auto object-contain"
    />
  );

  if (tone === "light") {
    return (
      <span
        className={cn(
          "inline-flex h-[52px] items-center rounded-xl bg-white px-2.5 py-1.5 shadow-sm",
          className,
        )}
      >
        {img}
      </span>
    );
  }

  return <span className={cn("inline-flex h-11 items-center sm:h-12", className)}>{img}</span>;
}
