import { FadeUp } from "@/components/motion/FadeUp";
import { Container } from "@/components/layout/Container";
import { sectionHeadingH2 } from "@/lib/section-heading";
import { cn } from "@/lib/utils/cn";

type Props = {
  title: string;
  description?: string;
  className?: string;
};

export function SectionIntro({ title, description, className }: Props) {
  return (
    <Container className={cn("pt-12 pb-0 sm:pt-14 sm:pb-0", className)}>
      <FadeUp className="max-w-3xl">
        <h2 className={cn(sectionHeadingH2, "text-slate-900")}>{title}</h2>
        {description ? <p className="mt-4 text-pretty text-base leading-relaxed text-xl text-slate-600">{description}</p> : null}
      </FadeUp>
    </Container>
  );
}
