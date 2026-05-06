import { loadCaseStudies, type CaseStudyDoc } from "@/lib/case-studies/loadCaseStudies";
import type { ResourceItem } from "@/lib/types/content";

export type CaseStudyStoryContent = Pick<CaseStudyDoc, "id" | "summary" | "impact" | "comparison">;

function toResourceItem(d: CaseStudyDoc): ResourceItem {
  return {
    id: d.id,
    slug: d.slug,
    category: d.category,
    title: d.title,
    excerpt: d.excerpt,
    tags: d.tags,
    publishedAt: d.publishedAt,
    readTimeMinutes: d.readTimeMinutes,
  };
}

export function getCaseStudyStoryCopy(id: string): CaseStudyStoryContent {
  const docs = loadCaseStudies();
  const d = docs.find((x) => x.id === id) ?? docs[0];
  if (!d) {
    return { id: "unknown", summary: "", impact: "", comparison: "" };
  }
  return { id: d.id, summary: d.summary, impact: d.impact, comparison: d.comparison };
}

export function getCaseStudyByStorySlug(storySlug: string): ResourceItem | undefined {
  const d = loadCaseStudies().find((x) => x.slug === storySlug);
  return d ? toResourceItem(d) : undefined;
}

export function getCaseStudyFeaturedImage(id: string): string {
  return loadCaseStudies().find((x) => x.id === id)?.featuredImage ?? "/case-studies/case-study-1.png";
}
