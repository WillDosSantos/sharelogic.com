import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { sectionHeadingH2 } from "@/lib/section-heading";
import { cn } from "@/lib/utils/cn";

const CARDS = [
  {
    iconSrc: "/documentation/code-circle-01.svg",
    title: "Developers",
    description: "Developers play a crucial role in project success by fostering collaboration across systems, APIs, and release pipelines.",
    href: "/resources/concepts",
  },
  {
    iconSrc: "/documentation/dataflow-04.svg",
    title: "Architecture",
    description: "Map flows and dependencies so integration design stays explicit—traceable from blueprint to runtime behavior.",
    href: "/resources/patterns",
  },
  {
    iconSrc: "/documentation/user-check-01.svg",
    title: "Stakeholders",
    description: "Give sponsors and operators a clear view of ownership, risk, and impact so decisions stay aligned with outcomes.",
    href: "/resources/case-studies",
  },
] as const;

export function HomeSection7Documentation() {
  return (
    <section
      id="section-7"
      className="relative overflow-hidden border-t border-slate-200 bg-white"
      aria-labelledby="section-7-heading"
    >
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-full opacity-[0.35] sm:w-[72%] lg:w-[55%]"
        aria-hidden
        style={{
          backgroundImage: `radial-gradient(circle at center, rgb(203 213 225) 1px, transparent 1px)`,
          backgroundSize: "22px 22px",
        }}
      />

      <Container className="relative z-10 py-12 sm:py-14 lg:py-16">
        <p className="inline-flex rounded-md bg-[#2750F5] px-2.5 py-1 text-xs font-semibold text-white">Features</p>
        <h2 id="section-7-heading" className={cn(sectionHeadingH2, "mt-4 text-slate-900")}>
          Documentation
        </h2>
        <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-slate-600">
          Check out our blog and resources at ShareLogic, where we specialize in seamless integrations with ServiceNow. Committed to
          excellence and customer satisfaction, we deliver valuable insights and advanced technology to enhance your business
          operations.
        </p>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {CARDS.map((card) => (
            <li key={card.title}>
              <article className="flex h-full flex-col rounded-3xl border border-slate-100 bg-slate-50/90 p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2750F5] shadow-sm">
                  <Image src={card.iconSrc} alt="" width={24} height={24} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-900">{card.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{card.description}</p>
                <Link
                  href={card.href}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2750F5] transition-colors hover:text-[#1f40c4]"
                >
                  Learn more
                  <span aria-hidden className="text-base leading-none">
                    →
                  </span>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
