import { loadNewsPosts } from "@/lib/news/loadNewsPosts";
import type { NewsPost } from "@/lib/types/content";

export const newsPosts: NewsPost[] = loadNewsPosts();

export function getPostBySlug(slug: string): NewsPost | undefined {
  return newsPosts.find((p) => p.slug === slug);
}

export function getAllPostsSorted(): NewsPost[] {
  return [...newsPosts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getFeaturedPost(): NewsPost | undefined {
  return newsPosts.find((p) => p.featured) ?? getAllPostsSorted()[0];
}

export function getRelatedPosts(current: NewsPost, limit = 3): NewsPost[] {
  const scored = newsPosts
    .filter((p) => p.slug !== current.slug)
    .map((p) => {
      let score = 0;
      if (p.topic === current.topic) score += 3;
      const sharedTags = p.tags.filter((t) => current.tags.includes(t)).length;
      score += sharedTags;
      return { post: p, score };
    })
    .sort((a, b) => b.score - a.score || (a.post.publishedAt < b.post.publishedAt ? 1 : -1));
  return scored.slice(0, limit).map((s) => s.post);
}

export function allNewsTags(): string[] {
  const set = new Set<string>();
  newsPosts.forEach((p) => p.tags.forEach((t) => set.add(t)));
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}
