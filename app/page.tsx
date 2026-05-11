import Image from "next/image";
import { buildMetadata } from "@/lib/utils/metadata";
import { Container } from "@/components/layout/Container";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Hero } from "@/components/sections/Hero";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { HomeSection4Showcase } from "@/components/home/HomeSection4Showcase";
import { HomeSection5Showcase } from "@/components/home/HomeSection5Showcase";
import { HomeSection6Products } from "@/components/home/HomeSection6Products";
import { HomeSection7Documentation } from "@/components/home/HomeSection7Documentation";
import { HomeSectionFollow } from "@/components/home/HomeSectionFollow";
import { HomeHeroArtboard } from "@/components/home/HomeHeroImages";
import { GridStreakOverlay } from "@/components/effects/GridStreakOverlay";
import { FadeUp } from "@/components/motion/FadeUp";
import { LinkButton } from "@/components/ui/LinkButton";
import { siteConfig } from "@/lib/data/site";
import { sectionHeadingH2 } from "@/lib/section-heading";
import { cn } from "@/lib/utils/cn";

export const metadata = buildMetadata({
  title: `${siteConfig.name} — Enterprise integration & workflows`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero
        title="Smarter ServiceNow Integrations"
        subtitle="Governance, visibility, and control for ServiceNow integrations that matter"
        visual={<HomeHeroArtboard />}
        showBackgroundDots={false}
      >
        <LinkButton href="/contact" hero>
          Talk to an Integration Specialist
        </LinkButton>
        <LinkButton href="/products/easy-api" variant="secondary" hero>
          Watch Overview
        </LinkButton>
      </Hero>

      <SectionIntro
        title="Integration failures aren’t technical problems. They’re governance problems."
        description="This isn’t about poor engineering. It’s about how integrations are created and maintained under  real-world pressure. Governance defines whether integrations scale — or quietly decay."
      />

      <FeatureGrid
        columns={3}
        items={[
          {
            title: "What shows up during incidents",
            description:
              "When incidents occur, teams face unclear ownership, undocumented logic, and hidden dependencies in integrations. Fixes depend on tribal knowledge rather than a shared understanding. Effective governance is key to resolving incidents swiftly and preventing outages.",
            iconSrc: "/section-2/icon-incident.svg",
          },
          {
            title: "What accumulates over time",
            description:
              "Point-to-point logic spans various platforms. Documentation can become outdated, and exceptions accumulate. Each modification raises the risk, even if everything seems fine. Without proper governance, complexity builds up unnoticed.",
            iconSrc: "/section-2/icon-cube.svg",
          },
          {
            title: "What becomes hard to explain",
            description:
              "The reasons for an integration's existence, ownership, and potential impacts of changes are often unclear. Governance equips leaders with the necessary language to justify their decisions, conduct audits, and secure investments.",
            iconSrc: "/section-2/icon-warning.svg",
          },
        ]}
      />

      <section
        id="section-3"
        className="relative overflow-hidden border-t border-slate-200 bg-[#2750F5]"
        aria-labelledby="section-3-heading"
      >
        <GridStreakOverlay />
        <Container className="py-12 sm:py-14">
          <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
            <FadeUp className="flex min-w-0 shrink-0 justify-center lg:w-[46%] lg:justify-start">
              <div className="relative w-full max-w-xl">
                <Image
                  src="/section-3/illustrations/img-grid-cube.png"
                  alt=""
                  width={809}
                  height={740}
                  className="h-auto w-full object-contain object-left"
                  sizes="(max-width: 1024px) 100vw, 46vw"
                />
              </div>
            </FadeUp>
            <FadeUp delay={0.06} className="min-w-0 lg:flex-1">
              <h2 id="section-3-heading" className={cn(sectionHeadingH2, "text-white")}>
                The integration governance layer for ServiceNow
              </h2>
              <p className="mt-4 text-pretty text-base text-xl leading-relaxed text-white">
                ShareLogic enhances governance and visibility in ServiceNow, ensuring consistent tool usage and informed
                decision-making across sectors.
              </p>
            </FadeUp>
          </div>
        </Container>
      </section>
      <HomeSection6Products />
      <HomeSection4Showcase />
      <HomeSection5Showcase />
      
      <TrustedBy />
      <HomeSection7Documentation />

      <HomeSectionFollow />
    </>
  );
}
