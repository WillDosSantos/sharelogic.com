import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/sections/Hero";
import { LinkButton } from "@/components/ui/LinkButton";
import type { IndustryPageContent } from "@/lib/types/content";
import { sectionHeadingH2 } from "@/lib/section-heading";
import { cn } from "@/lib/utils/cn";

type Props = {
  industry: IndustryPageContent;
};

export function IndustryTemplate({ industry }: Props) {
  return (
    <>
      <Hero title={industry.title} subtitle={industry.tagline}>
        <LinkButton href="/contact" hero>
          Request a briefing
        </LinkButton>
      </Hero>

      <section className="border-t border-slate-200 bg-white">
        <Container className="py-12 sm:py-14">
          <h2 className={cn(sectionHeadingH2, "text-slate-900")}>{industry.challenges.title}</h2>
          <ul className="mt-6 space-y-3">
            {industry.challenges.items.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-slate-700">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-slate-50/60">
        <Container className="py-12 sm:py-14">
          <h2 className={cn(sectionHeadingH2, "text-slate-900")}>{industry.howWeHelp.title}</h2>
          <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-slate-600">
            {industry.howWeHelp.body}
          </p>
          <ul className="mt-6 space-y-2 text-sm text-slate-700">
            {industry.howWeHelp.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" aria-hidden />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <Container className="py-12 sm:py-14">
          <h2 className={cn(sectionHeadingH2, "text-slate-900")}>Relevant use cases</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {industry.useCases.map((u) => (
              <div key={u.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">{u.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{u.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        headline={industry.cta.headline}
        body={industry.cta.body}
        primaryLabel={industry.cta.primaryLabel}
        primaryHref={industry.cta.primaryHref}
      />
    </>
  );
}
