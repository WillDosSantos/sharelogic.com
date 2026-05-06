import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Author, NewsPost, NewsTopic } from "@/lib/types/content";

const CONTENT_DIR = path.join(process.cwd(), "content/news");
const ALLOWED_TOPICS = new Set<NewsTopic>(["platform", "governance", "integrations", "security", "company"]);

function slugFromFilename(fileName: string) {
  return fileName.replace(/\.md$/i, "");
}

function parseAuthor(raw: unknown): Author {
  if (!raw || typeof raw !== "object") {
    throw new Error("Missing or invalid `author` — use { name: string; role?: string }");
  }
  const obj = raw as Record<string, unknown>;
  const name = obj.name != null ? String(obj.name).trim() : "";
  if (!name) throw new Error("Author `name` is required.");
  const roleRaw = obj.role != null ? String(obj.role).trim() : "";
  return roleRaw ? { name, role: roleRaw } : { name };
}

function parsePost(fullPath: string, fileName: string): NewsPost {
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  const slug =
    typeof data.slug === "string" && data.slug.trim() !== "" ? String(data.slug).trim() : slugFromFilename(fileName);

  const topic = data.topic != null ? String(data.topic).trim() : "";
  if (!ALLOWED_TOPICS.has(topic as NewsTopic)) {
    throw new Error(
      `Invalid topic "${topic}" in ${fileName}. Use one of: ${[...ALLOWED_TOPICS].join(", ")}`,
    );
  }

  const tags = Array.isArray(data.tags) ? data.tags.map((t) => String(t)) : [];

  const id = typeof data.id === "string" && data.id.trim() !== "" ? String(data.id).trim() : slug;

  return {
    id,
    slug,
    title: data.title != null ? String(data.title) : "",
    excerpt: data.excerpt != null ? String(data.excerpt) : "",
    body: typeof content === "string" ? content.trim() : "",
    featuredImage: data.featuredImage != null ? String(data.featuredImage) : "",
    publishedAt: data.publishedAt != null ? String(data.publishedAt) : "",
    author: parseAuthor(data.author),
    tags,
    topic: topic as NewsTopic,
    featured: Boolean(data.featured),
  };
}

/** All news posts discovered as Markdown files under `content/news/`. Filename may be `{slug}.md`; override `slug` in frontmatter if needed. */
export function loadNewsPosts(): NewsPost[] {
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"));
  const bySlug = new Map<string, NewsPost>();

  for (const file of files) {
    const post = parsePost(path.join(CONTENT_DIR, file), file);
    if (!post.slug || !post.title || !post.excerpt || !post.body || !post.featuredImage || !post.publishedAt) {
      throw new Error(
        `[news] ${file}: frontmatter requires title, excerpt, featuredImage, publishedAt (and non-empty markdown body).`,
      );
    }
    if (bySlug.has(post.slug)) {
      throw new Error(`[news] Duplicate slug "${post.slug}" — check ${file}`);
    }
    bySlug.set(post.slug, post);
  }

  return [...bySlug.values()];
}
