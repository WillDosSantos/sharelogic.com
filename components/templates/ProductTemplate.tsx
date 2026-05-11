import { CtaBand } from "@/components/sections/CtaBand";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Hero } from "@/components/sections/Hero";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { ContentCard } from "@/components/ui/ContentCard";
import { LinkButton } from "@/components/ui/LinkButton";
import type { ProductPageContent } from "@/lib/types/content";
import { sectionHeadingH2 } from "@/lib/section-heading";
import { cn } from "@/lib/utils/cn";

type Props = {
  product: ProductPageContent;
};

export function ProductTemplate({ product }: Props) {
  return (
    <>
      <Hero
        title={product.title}
        subtitle={product.tagline}
      >
        <LinkButton href="/contact" hero>
          Request a demo
        </LinkButton>
        <LinkButton href="/products/product-comparison" variant="secondary" hero>
          Compare products
        </LinkButton>
      </Hero>

      <SectionIntro title="Overview" description={product.intro} />

      <FeatureGrid items={product.features} />

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
              <h2 className={cn(sectionHeadingH2, "text-slate-900")}>{product.problem.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{product.problem.body}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className={cn(sectionHeadingH2, "text-slate-900")}>{product.solution.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{product.solution.body}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <h2 className={cn(sectionHeadingH2, "text-slate-900")}>Supporting capabilities</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {product.supportingCards.map((c) => (
              <ContentCard key={c.title} title={c.title} description={c.description} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        headline={product.cta.headline}
        body={product.cta.body}
        primaryLabel={product.cta.primaryLabel}
        primaryHref={product.cta.primaryHref}
      />
    </>
  );
}
