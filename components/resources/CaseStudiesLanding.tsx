import Image from "next/image";
import Link from "next/link";
import { HomeSectionFollow } from "@/components/home/HomeSectionFollow";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { getCaseStudyFeaturedImage, getCaseStudyStoryCopy } from "@/lib/data/caseStudies";
import type { ResourceItem } from "@/lib/types/content";
import { sectionHeadingH2 } from "@/lib/section-heading";
import { cn } from "@/lib/utils/cn";

type Props = {
  items: ResourceItem[];
};

const HERO_IMAGES = ["/case-studies/case-study-1.png", "/case-studies/case-study-2.png", "/case-studies/case-study-3.png"] as const;

export function CaseStudiesLanding({ items }: Props) {
  return (
    <>
      <section className="bg-white">
        <Container className="py-14 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold text-blue-600">Hear from our customers</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Real Stories</h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Companies adopt governance not just as a necessity, but inspired by peers who successfully manage change.
              These experiences show that a governance-first approach improves ownership clarity and reduces risk.
            </p>
          </div>

          <div className="mt-12 grid gap-3 md:grid-cols-3">
            <div className="grid gap-3">
              <FadeUp delay={0.05}>
                <div className="flex min-h-28 flex-col justify-center rounded-2xl bg-amber-300 px-8 py-6">
                  <p className="text-5xl font-semibold tracking-tight text-slate-950">100+</p>
                  <p className="mt-1 text-xl font-medium text-slate-900">Customer Satisfaction</p>
                </div>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div className="relative aspect-[16/12] overflow-hidden rounded-2xl bg-slate-100">
                  <Image src={HERO_IMAGES[0]} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" unoptimized />
                </div>
              </FadeUp>
            </div>

            <FadeUp delay={0.25}>
              <div className="relative aspect-[16/20] overflow-hidden rounded-2xl bg-slate-100">
                <Image src={HERO_IMAGES[1]} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" unoptimized />
              </div>
            </FadeUp>

            <div className="grid gap-3">
              <FadeUp delay={0.35}>
                <div className="relative aspect-[16/12] overflow-hidden rounded-2xl bg-slate-100">
                  <Image src={HERO_IMAGES[2]} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" unoptimized />
                </div>
              </FadeUp>
              <FadeUp delay={0.45}>
                <div className="flex min-h-28 flex-col justify-center rounded-2xl bg-blue-600 px-8 py-6">
                  <p className="text-5xl font-semibold tracking-tight text-white">100+</p>
                  <p className="mt-1 text-xl font-medium text-white">Customer Satisfaction</p>
                </div>
              </FadeUp>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="pb-16 sm:pb-20">
          <div className="space-y-14 sm:space-y-16">
            {items.map((item, index) => {
              const story = getCaseStudyStoryCopy(item.id);
              const imageSrc = getCaseStudyFeaturedImage(item.id);
              const imageLeft = index % 2 === 1;

              return (
                <article key={item.id} id={`case-${item.slug}`} className="border-t border-slate-200 pt-10 sm:pt-12">
                  <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
                    <div className={imageLeft ? "lg:col-span-6 lg:order-2" : "lg:col-span-6"}>
                      <h2 className={cn(sectionHeadingH2, "max-w-xl text-slate-950")}>{item.title}</h2>
                    </div>
                    <div className={imageLeft ? "lg:col-span-6 lg:order-1" : "lg:col-span-6"}>
                      <p className="text-lg leading-relaxed text-slate-600 sm:text-xl">{story.summary}</p>
                    </div>
                  </div>

                  <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
                    <div className={imageLeft ? "lg:col-span-6 lg:order-2" : "lg:col-span-6"}>
                      <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-slate-100">
                        <Image src={imageSrc} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" unoptimized />
                      </div>
                    </div>
                    <div className={imageLeft ? "lg:col-span-6 lg:order-1" : "lg:col-span-6"}>
                      <div className="space-y-7">
                        <p className="text-lg leading-relaxed text-slate-600 sm:text-xl">{story.impact}</p>
                        <p className="text-lg leading-relaxed text-slate-600 sm:text-xl">{story.comparison}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 flex justify-end">
                    <Link
                      href={`/resources/case-studies/${item.slug}`}
                      className="inline-flex items-center rounded-full border-2 border-blue-500 px-4 py-1.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
                    >
                      Learn more about this story
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <HomeSectionFollow />
    </>
  );
}
