import type { ResourceCategory, ResourceCategoryMeta, ResourceItem } from "@/lib/types/content";
import { loadCaseStudies } from "@/lib/case-studies/loadCaseStudies";

function caseStudyDocToResourceItem(d: ReturnType<typeof loadCaseStudies>[number]): ResourceItem {
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

export const resourceCategories: ResourceCategoryMeta[] = [
  {
    slug: "case-studies",
    title: "Case Studies",
    intro:
      "See how organizations operationalize ShareLogic patterns across complex estates—governance included, surprises minimized.",
    seo: {
      title: "Case Studies | ShareLogic",
      description: "Explore customer stories on integration governance, workflow orchestration, and measurable outcomes.",
    },
  },
  {
    slug: "concepts",
    title: "Concepts",
    intro:
      "Foundational ideas for building an integration program that scales: ownership models, lifecycle discipline, and operating metrics.",
    seo: {
      title: "Concepts | ShareLogic",
      description: "Concept guides for enterprise integration strategy, platform thinking, and operational excellence.",
    },
  },
  {
    slug: "patterns",
    title: "Patterns",
    intro:
      "Reusable architectural patterns for common enterprise scenarios—designed to be adapted, not copy-pasted blindly.",
    seo: {
      title: "Patterns | ShareLogic",
      description: "Integration and workflow patterns for enterprise teams building reliable, governable systems.",
    },
  },
  {
    slug: "comparisons",
    title: "Comparisons",
    intro:
      "Structured comparisons to help stakeholders align on trade-offs—without turning architecture into opinion-only debates.",
    seo: {
      title: "Comparisons | ShareLogic",
      description: "Compare approaches to integration platforms, API strategies, and workflow orchestration for enterprises.",
    },
  },
  {
    slug: "articles",
    title: "Articles",
    intro:
      "Practical articles on operating integration programs, improving reliability, and making governance a velocity enabler.",
    seo: {
      title: "Articles | ShareLogic",
      description: "Articles on enterprise integration, workflow orchestration, governance, and platform operations.",
    },
  },
];

export const resourceItems: ResourceItem[] = [
  ...loadCaseStudies().map(caseStudyDocToResourceItem),
  {
    id: "r-003",
    slug: "integration-as-a-product",
    category: "concepts",
    title: "Integration as a product: ownership, lifecycle, and metrics",
    excerpt:
      "Why treating integrations like products improves reliability—and what to measure from day one.",
    tags: ["Operating model", "Platform"],
    publishedAt: "2025-09-18",
    readTimeMinutes: 12,
  },
  {
    id: "r-004",
    slug: "evidence-trails-for-enterprise-automation",
    category: "concepts",
    title: "Evidence trails that satisfy security and operations",
    excerpt:
      "A practical model for auditability that doesn’t drown teams in logs they can’t action.",
    tags: ["Security", "Compliance"],
    publishedAt: "2025-08-26",
    readTimeMinutes: 9,
  },
  {
    id: "r-005",
    slug: "saga-pattern-for-b2b-workflows",
    category: "patterns",
    title: "Saga-style orchestration for long-running B2B workflows",
    excerpt:
      "When to compensate, when to retry, and how to keep human approvals in the loop responsibly.",
    tags: ["Workflows", "Reliability"],
    publishedAt: "2025-07-30",
    readTimeMinutes: 11,
  },
  {
    id: "r-006",
    slug: "api-gateway-vs-mesh-pragmatic",
    category: "patterns",
    title: "API gateway vs. mesh: a pragmatic enterprise framing",
    excerpt:
      "Cut through buzzwords with decision criteria grounded in operating constraints and team skills.",
    tags: ["APIs", "Architecture"],
    publishedAt: "2025-07-01",
    readTimeMinutes: 10,
  },
  {
    id: "r-007",
    slug: "ipaas-vs-custom-integration",
    category: "comparisons",
    title: "iPaaS vs. custom integration: total cost of ownership",
    excerpt:
      "A stakeholder-friendly comparison covering build, operate, govern, and retire.",
    tags: ["Strategy", "TCO"],
    publishedAt: "2025-06-11",
    readTimeMinutes: 14,
  },
  {
    id: "r-008",
    slug: "batch-vs-event-driven-sync",
    category: "comparisons",
    title: "Batch vs. event-driven: choosing sync models under pressure",
    excerpt:
      "Latency, consistency, and failure modes—explained for teams shipping under real constraints.",
    tags: ["Data", "Events"],
    publishedAt: "2025-05-22",
    readTimeMinutes: 8,
  },
  {
    id: "r-009",
    slug: "error-budgets-for-integration-teams",
    category: "articles",
    title: "Error budgets for integration teams (yes, really)",
    excerpt:
      "Borrow SRE thinking without turning your program into a metrics theater.",
    tags: ["SRE", "Operations"],
    publishedAt: "2025-04-09",
    readTimeMinutes: 6,
  },
  {
    id: "r-010",
    slug: "change-windows-that-dont-break-customers",
    category: "articles",
    title: "Change windows that don’t break customers",
    excerpt:
      "Operational patterns for communicating risk, sequencing cutovers, and recovering confidently.",
    tags: ["Change management"],
    publishedAt: "2025-03-14",
    readTimeMinutes: 7,
  },
  {
    id: "r-012",
    slug: "data-contracts-for-cross-team-integration",
    category: "patterns",
    title: "Data contracts: making integration changes predictable",
    excerpt:
      "From schema evolution to consumer-driven checks—what to implement first.",
    tags: ["Contracts", "Quality"],
    publishedAt: "2025-01-19",
    readTimeMinutes: 10,
  },
];

export function getResourceCategory(slug: string): ResourceCategoryMeta | undefined {
  return resourceCategories.find((c) => c.slug === slug);
}

export function getResourcesByCategory(category: ResourceCategory): ResourceItem[] {
  return resourceItems.filter((r) => r.category === category);
}
