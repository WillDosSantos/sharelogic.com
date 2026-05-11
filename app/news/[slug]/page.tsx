import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/news/ArticleBody";
import { SharePostCta } from "@/components/news/SharePostCta";
import { Container } from "@/components/layout/Container";
import { TagPill } from "@/components/ui/TagPill";
import { getPostBySlug, getRelatedPosts, newsPosts } from "@/lib/data/news";
import { newsTopics } from "@/lib/data/newsTopics";
import { siteConfig } from "@/lib/data/site";
import { sectionHeadingH2 } from "@/lib/section-heading";
import { cn } from "@/lib/utils/cn";
import { buildMetadata } from "@/lib/utils/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return newsPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/news/${slug}`,
    ogImage: post.featuredImage,
  });
}

export default async function NewsPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const topicLabel = newsTopics.find((t) => t.id === post.topic)?.label ?? post.topic;
  const shareUrl = `${siteConfig.url}/news/${post.slug}`;

  return (
    <>
      <article>
        <div className="border-b border-slate-200 bg-white">
          <Container className="py-10 sm:py-12">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <Link href="/news" className="text-sm font-semibold text-slate-700 hover:text-slate-950">
                  ← Back to news
                </Link>
                <p className="mt-6 text-sm font-semibold text-blue-600">
                  {post.publishedAt} · Topic: {topicLabel}
                </p>
                <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                  {post.title}
                </h1>
                <p className="mt-5 text-pretty text-lg leading-relaxed text-slate-600">{post.excerpt}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <TagPill key={t}>{t}</TagPill>
                  ))}
                </div>
                <p className="mt-6 text-sm text-slate-500">
                  {post.author.name}
                  {post.author.role ? ` · ${post.author.role}` : ""}
                </p>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 lg:col-span-7">
                <Image
                  src={post.featuredImage}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </Container>
        </div>

        <Container className="py-10 sm:py-12">
          <ArticleBody content={post.body} />
          <SharePostCta shareUrl={shareUrl} title={post.title} />
        </Container>
      </article>

      <section className="border-t border-slate-200 bg-white">
        <Container className="relative py-12 sm:py-14">
          <Image
            src="/news/decorative-circle-group-3.svg"
            alt=""
            width={600}
            height={110}
            className="pointer-events-none absolute -right-3 top-24 hidden h-auto w-[600px] max-w-none md:block"
            unoptimized
          />
          <p className="text-sm font-semibold text-blue-600">See more</p>
          <h2 className={cn(sectionHeadingH2, "mt-3 text-slate-900")}>Latest Articles</h2>
          <p className="mt-2 text-lg text-slate-600">See other articles that may be interesting to you!</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <article key={r.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <Link href={`/news/${r.slug}`} className="group block">
                  <div className="relative aspect-[16/10] bg-slate-100">
                    <Image src={r.featuredImage} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" unoptimized />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-4 pb-4 pt-10 text-white">
                      <p className="text-base font-semibold">{r.author.name}</p>
                      <p className="text-xs text-white/90">{r.publishedAt}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-2xl font-semibold tracking-tight text-slate-900 transition group-hover:text-blue-700">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-slate-600">{r.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-lg font-semibold text-blue-600">
                      Read post <span aria-hidden>↗</span>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
