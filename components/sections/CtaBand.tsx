import Link from "next/link";
import { FadeUp } from "@/components/motion/FadeUp";
import { Container } from "@/components/layout/Container";
import { sectionHeadingH2 } from "@/lib/section-heading";
import { cn } from "@/lib/utils/cn";

type Props = {
  headline: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  className?: string;
};

export function CtaBand({
  headline,
  body,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  className,
}: Props) {
  return (
    <section className={cn("border-t border-slate-200 bg-slate-900", className)}>
      <Container className="py-14 sm:py-16">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <FadeUp className="max-w-2xl">
            <h2 className={cn(sectionHeadingH2, "text-white")}>{headline}</h2>
            <p className="mt-3 text-pretty text-base leading-relaxed text-slate-200">{body}</p>
          </FadeUp>
          <FadeUp delay={0.1} className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100"
            >
              {primaryLabel}
            </Link>
            {secondaryLabel && secondaryHref ? (
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
