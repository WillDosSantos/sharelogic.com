import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { sectionHeadingH2 } from "@/lib/section-heading";
import { cn } from "@/lib/utils/cn";

type Props = {
  content: string;
};

export function ArticleBody({ content }: Props) {
  return (
    <div className="prose-custom">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          hr: () => <hr className="my-8 border-slate-200" />,
          h2: ({ children }) => (
            <h2 className={cn(sectionHeadingH2, "mt-10 scroll-mt-28 text-slate-900 first:mt-0")}>{children}</h2>
          ),
          h3: ({ children }) => <h3 className="mt-8 text-lg font-semibold text-slate-900">{children}</h3>,
          p: ({ children }) => <p className="mt-4 text-base leading-relaxed text-slate-700 first:mt-0">{children}</p>,
          ul: ({ children }) => <ul className="my-4 list-disc space-y-2 pl-5 text-slate-700">{children}</ul>,
          ol: ({ children }) => (
            <ol className="my-4 list-decimal space-y-2 pl-5 text-slate-700">{children}</ol>
          ),
          li: ({ children }) => <li className="text-base leading-relaxed">{children}</li>,
          strong: ({ children }) => <strong className="font-semibold text-slate-900">{children}</strong>,
          a: ({ href, children }) => (
            <a
              href={href}
              className="font-semibold text-blue-600 underline decoration-blue-600/30 underline-offset-2 hover:text-blue-700 hover:decoration-blue-700"
            >
              {children}
            </a>
          ),
        }}
      >
        {content.trim()}
      </ReactMarkdown>
    </div>
  );
}
