import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 dotted-grid" />
      <div className="container-x flex flex-col items-center gap-5 py-24 text-center">
        <span className="font-display text-6xl font-extrabold text-brand-600/25">404</span>
        <h1 className="text-h2 font-bold text-navy-900">This page took a different route.</h1>
        <p className="max-w-md text-ink">
          The page you were looking for isn&apos;t here. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href="/" size="lg" withArrow>
            Back to Home
          </Button>
          <Button href="/countries" size="lg" variant="outline">
            Explore Destinations
          </Button>
        </div>
      </div>
    </section>
  );
}
