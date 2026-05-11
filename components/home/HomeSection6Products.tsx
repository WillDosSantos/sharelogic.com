import { Container } from "@/components/layout/Container";
import { sectionHeadingH2 } from "@/lib/section-heading";
import { cn } from "@/lib/utils/cn";

export function HomeSection6Products() {
  return (
    <section
      id="section-6"
      className="relative overflow-hidden bg-white"
      aria-labelledby="section-6-heading"
    >
      {/* Dot grid: starts mid-section, extends to the right (behind cards) */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-full opacity-[0.35] sm:w-[85%] lg:w-[68%]"
        aria-hidden
        style={{
          backgroundImage: `radial-gradient(circle at center, rgb(203 213 225) 1px, transparent 1px)`,
          backgroundSize: "22px 22px",
        }}
      />

      <Container className="relative z-10 py-12 sm:py-24 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-8 xl:gap-10">
          <div className="min-w-0 max-w-sm lg:pr-2 flex w-full">
            <h2 id="section-6-heading" className={cn(sectionHeadingH2, "text-slate-900")}>
              The same standards, applied where you need them
            </h2>
          </div>
          <div className="min-w-0 lg:pr-2 flex w-full">
          <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600">
              This approach offers seamless access to Unifi and Easy API while maintaining a cohesive narrative. It emphasizes a
              unified philosophy applied across various scopes and facilitates early self-selection for buyers who are already aware
              of their needs.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
