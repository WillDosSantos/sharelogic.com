import { Container } from "@/components/layout/Container";
import { sectionHeadingH2 } from "@/lib/section-heading";
import { cn } from "@/lib/utils/cn";

type Props = {
  title: string;
  description: string;
  className?: string;
};

export function NewsletterBlock({ title, description, className }: Props) {
  return (
    <section className={cn("border-t border-slate-200 bg-slate-50/60", className)}>
      <Container className="py-12 sm:py-14">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="max-w-2xl">
            <h2 className={cn(sectionHeadingH2, "text-slate-900")}>{title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
          </div>
          <form className="mt-6 flex flex-col gap-3 sm:flex-row" aria-label="Newsletter signup">
            <label htmlFor="newsletter-email" className="sr-only">
              Work email
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Work email"
              className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-slate-300 focus:ring-2 focus:ring-slate-900/10"
            />
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-3 text-xs text-slate-500">
            No backend wired yet—this is a UI placeholder for future marketing automation.
          </p>
        </div>
      </Container>
    </section>
  );
}
