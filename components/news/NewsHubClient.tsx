"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { Pagination } from "@/components/ui/Pagination";
import type { NewsPost, NewsTopic } from "@/lib/types/content";
import { newsTopics } from "@/lib/data/newsTopics";
import { sectionHeadingH2 } from "@/lib/section-heading";
import { cn } from "@/lib/utils/cn";

const PAGE_SIZE = 6;

type Props = {
  posts: NewsPost[];
  featured: NewsPost;
};

export function NewsHubClient({ posts, featured }: Props) {
  const [topic, setTopic] = useState<NewsTopic | "all">("all");
  const [sort, setSort] = useState<"newest" | "oldest">("newest");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const byTopic = posts.filter((p) => {
      if (p.slug === featured.slug) return false;
      return topic === "all" || p.topic === topic;
    });
    return byTopic.sort((a, b) =>
      sort === "newest"
        ? (a.publishedAt < b.publishedAt ? 1 : -1)
        : (a.publishedAt > b.publishedAt ? 1 : -1),
    );
  }, [posts, featured.slug, topic, sort]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount);
  const pageItems = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  return (
    <>
      <section className="bg-white">
        <Container className="py-10 sm:py-12">
          <p className="text-sm font-semibold text-blue-600">Get the latest information</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">News and Updates</h1>
          <p className="mt-3 max-w-2xl text-lg text-slate-600">The latest industry news, interviews, technologies, and resources.</p>
          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
            <div className="grid gap-0 lg:grid-cols-12">
              <div className="relative aspect-[16/9] lg:col-span-8 lg:aspect-auto lg:min-h-[420px]">
                <Image
                  src={featured.featuredImage}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  priority
                  unoptimized
                />
              </div>
              <div className="flex flex-col justify-center p-8 lg:col-span-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Featured story</p>
                <h2 className={cn(sectionHeadingH2, "mt-3 text-slate-900")}>
                  <Link href={`/news/${featured.slug}`} className="hover:underline">
                    {featured.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{featured.excerpt}</p>
                <p className="mt-4 text-xs text-slate-500">
                  {featured.publishedAt} · {featured.author.name}
                </p>
                <div className="mt-6">
                  <Link
                    href={`/news/${featured.slug}`}
                    className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    Read article
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <Container className="py-10 sm:py-12">
          <div className="flex flex-col gap-5 border-b border-slate-200 pb-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setTopic("all");
                  setPage(1);
                }}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm font-medium transition",
                  topic === "all" ? "bg-blue-100 text-blue-700" : "text-slate-600 hover:bg-slate-100",
                )}
              >
                View all
              </button>
              {newsTopics.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    setTopic(t.id);
                    setPage(1);
                  }}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-sm font-medium transition",
                    topic === t.id ? "bg-blue-100 text-blue-700" : "text-slate-600 hover:bg-slate-100",
                  )}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <label htmlFor="sort-news" className="text-sm font-medium text-slate-600">
                Sort
              </label>
              <select
                id="sort-news"
                value={sort}
                onChange={(e) => {
                  setSort(e.target.value as "newest" | "oldest");
                  setPage(1);
                }}
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:ring-2 focus:ring-slate-900/10"
              >
                <option value="newest">Most recent</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>
          </div>

          {pageItems.length === 0 ? (
            <EmptyState
              className="mt-10"
              title="No articles match your filters"
              description="Try changing topics or sort order."
              action={
                <button
                  type="button"
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
                  onClick={() => {
                    setTopic("all");
                    setSort("newest");
                    setPage(1);
                  }}
                >
                  Reset view
                </button>
              }
            />
          ) : (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pageItems.map((p) => (
                <ArticleCard
                  key={p.id}
                  href={`/news/${p.slug}`}
                  title={p.title}
                  excerpt={p.excerpt}
                  imageSrc={p.featuredImage}
                  topicLabel={newsTopics.find((t) => t.id === p.topic)?.label ?? p.topic}
                  authorName={p.author.name}
                  publishedAt={p.publishedAt}
                />
              ))}
            </div>
          )}

          <Pagination
            className="mt-10"
            page={safePage}
            pageCount={pageCount}
            onPageChange={(p) => setPage(p)}
          />
        </Container>
      </section>
    </>
  );
}
