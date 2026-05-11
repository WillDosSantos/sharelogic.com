import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/sections/Hero";
import { LinkButton } from "@/components/ui/LinkButton";
import type { IntegrationPageContent } from "@/lib/types/content";
import { sectionHeadingH2 } from "@/lib/section-heading";
import { cn } from "@/lib/utils/cn";

type Props = {
  integration: IntegrationPageContent;
};

export function IntegrationTemplate({ integration }: Props) {
  return (
    <>
      <Hero title={integration.title} subtitle={integration.tagline}>
        <LinkButton href="/contact" hero>
          Talk to an expert
        </LinkButton>
      </Hero>

      <section className="border-t border-slate-200 bg-white">
        <Container className="py-12 sm:py-14">
          <h2 className={cn(sectionHeadingH2, "text-slate-900")}>
            {integration.businessProblem.title}
          </h2>
          <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-slate-600">
            {integration.businessProblem.summary}
          </p>
          <ul className="mt-6 space-y-2 text-sm text-slate-700">
            {integration.businessProblem.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" aria-hidden />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-slate-50/60">
        <Container className="py-12 sm:py-14">
          <h2 className={cn(sectionHeadingH2, "text-slate-900")}>Key capabilities</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {integration.capabilities.map((c) => (
              <div key={c.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <Container className="py-12 sm:py-14">
          <h2 className={cn(sectionHeadingH2, "text-slate-900")}>{integration.workflow.title}</h2>
          <ol className="mt-8 space-y-4">
            {integration.workflow.steps.map((step, idx) => (
              <li key={step.title} className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Step {idx + 1}
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-slate-50/60">
        <Container className="py-12 sm:py-14">
          <h2 className={cn(sectionHeadingH2, "text-slate-900")}>{integration.outcomes.title}</h2>
          <ul className="mt-6 space-y-3">
            {integration.outcomes.items.map((item) => (
              <li
                key={item}
                className={cn(
                  "rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm",
                )}
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand
        headline={integration.cta.headline}
        body={integration.cta.body}
        primaryLabel={integration.cta.primaryLabel}
        primaryHref={integration.cta.primaryHref}
      />
    </>
  );
}
