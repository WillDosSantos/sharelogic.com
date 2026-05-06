import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { ResourceItem } from "@/lib/types/content";

const CONTENT_DIR = path.join(process.cwd(), "content/case-studies");

export type CaseStudyDoc = ResourceItem & {
  category: "case-studies";
  summary: string;
  impact: string;
  comparison: string;
  featuredImage: string;
};

function slugFromFilename(fileName: string) {
  return fileName.replace(/\.md$/i, "");
}

function parseDoc(fullPath: string, fileName: string): CaseStudyDoc {
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(raw);

  const slug =
    typeof data.slug === "string" && data.slug.trim() !== "" ? String(data.slug).trim() : slugFromFilename(fileName);

  const id = typeof data.id === "string" && data.id.trim() !== "" ? String(data.id).trim() : slug;
  const tags = Array.isArray(data.tags) ? data.tags.map((t: unknown) => String(t)) : [];

  const summary = data.summary != null ? String(data.summary).trim() : "";
  const impact = data.impact != null ? String(data.impact).trim() : "";
  const comparison = data.comparison != null ? String(data.comparison).trim() : "";
  const featuredImage = data.featuredImage != null ? String(data.featuredImage).trim() : "";

  return {
    id,
    slug,
    category: "case-studies",
    title: data.title != null ? String(data.title) : "",
    excerpt: data.excerpt != null ? String(data.excerpt) : "",
    tags,
    publishedAt: data.publishedAt != null ? String(data.publishedAt) : "",
    readTimeMinutes: typeof data.readTimeMinutes === "number" ? data.readTimeMinutes : Number(data.readTimeMinutes) || 0,
    summary,
    impact,
    comparison,
    featuredImage,
  };
}

/** All case studies from `content/case-studies/*.md`. Body after frontmatter is ignored by current templates (use frontmatter `summary`, `impact`, `comparison`). */
export function loadCaseStudies(): CaseStudyDoc[] {
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"));
  const bySlug = new Map<string, CaseStudyDoc>();

  for (const file of files) {
    const doc = parseDoc(path.join(CONTENT_DIR, file), file);
    if (!doc.slug || !doc.title || !doc.excerpt || !doc.summary || !doc.impact || !doc.comparison || !doc.featuredImage || !doc.publishedAt || !doc.id) {
      throw new Error(
        `[case-studies] ${file}: frontmatter requires id, slug (or derive from filename), title, excerpt, publishedAt, readTimeMinutes, featuredImage, summary, impact, comparison.`,
      );
    }
    if (bySlug.has(doc.slug)) {
      throw new Error(`[case-studies] Duplicate slug "${doc.slug}" — check ${file}`);
    }
    bySlug.set(doc.slug, doc);
  }

  return [...bySlug.values()];
}

export function getCaseStudyDocumentBySlug(slug: string): CaseStudyDoc | undefined {
  return loadCaseStudies().find((d) => d.slug === slug);
}
