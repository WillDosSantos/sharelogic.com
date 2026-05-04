import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HomeSectionFollow } from "@/components/home/HomeSectionFollow";
import { Container } from "@/components/layout/Container";
import { CASE_STUDY_IMAGE_BY_ID, getCaseStudyByStorySlug, getCaseStudyStoryCopy } from "@/lib/data/caseStudies";
import { resourceItems } from "@/lib/data/resources";
import { buildMetadata } from "@/lib/utils/metadata";

type Props = { params: Promise<{ storySlug: string }> };

export function generateStaticParams() {
  return resourceItems.filter((item) => item.category === "case-studies").map((item) => ({ storySlug: item.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { storySlug } = await params;
  const item = getCaseStudyByStorySlug(storySlug);
  if (!item) return {};
  return buildMetadata({
    title: `${item.title} | Case Study`,
    description: item.excerpt,
    path: `/resources/case-studies/${item.slug}`,
  });
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { storySlug } = await params;
  const item = getCaseStudyByStorySlug(storySlug);
  if (!item) notFound();

  const story = getCaseStudyStoryCopy(item.id);
  const imageSrc = CASE_STUDY_IMAGE_BY_ID[item.id] ?? "/case-studies/case-study-1.png";

  return (
    <>
      <section className="bg-white">
        <Container className="py-12 sm:py-16">
          <Link href="/resources/case-studies" className="inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700">
            Back to case studies
          </Link>

          <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{item.title}</h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">{story.summary}</p>
            </div>
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-slate-100">
                <Image src={imageSrc} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" unoptimized />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <Container className="py-12 sm:py-16">
          <div className="mx-auto max-w-4xl space-y-8">
            <p className="text-lg leading-relaxed text-slate-600 sm:text-xl">{story.impact}</p>
            <p className="text-lg leading-relaxed text-slate-600 sm:text-xl">{story.comparison}</p>
          </div>
        </Container>
      </section>

      <HomeSectionFollow />
    </>
  );
}
