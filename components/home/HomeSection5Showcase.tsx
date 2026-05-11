"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { BUTTON_MOTION } from "@/lib/motion/button";
import { sectionHeadingH2 } from "@/lib/section-heading";
import { cn } from "@/lib/utils/cn";

type Slide = {
  id: string;
  title: string;
  body: string;
  imageSrc: string;
};

const SHARED_BODY =
  "Easy API streamlines governance with clear integration standards, clarifying permissions and execution. It establishes ownership and offers a framework for evaluating changes, fostering team collaboration while ensuring quick delivery.";

const SLIDES: Slide[] = [
  {
    id: "easy-api-1",
    title: "Outbound conditions & criteria",
    body: SHARED_BODY,
    imageSrc: "/home/easy-api-image-1.png",
  },
  {
    id: "easy-api-2",
    title: "Policy-aware publishing",
    body: SHARED_BODY,
    imageSrc: "/home/easy-api-img-2.png",
  },
  {
    id: "easy-api-3",
    title: "Contracts operators can trust",
    body: SHARED_BODY,
    imageSrc: "/home/easy-api-img-3.png",
  },
];

const MotionLink = motion.create(Link);

/** Hover/tap without boxShadow so selected border + shadow from className are not overridden. */
const SLIDE_CARD_MOTION = {
  whileHover: { y: -2 },
  whileTap: { y: 0, scale: 0.985 },
  transition: BUTTON_MOTION.transition,
} as const;

export function HomeSection5Showcase() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="section-5"
      className="bg-slate-50"
      aria-labelledby="section-5-heading"
    >
      <Container className="py-12 sm:py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-14 xl:gap-20">
          <div className="relative flex min-h-[280px] items-start justify-center pt-12 pb-8 sm:min-h-[360px] sm:pt-14 sm:pb-10 lg:pt-16 lg:pb-10">
            <div className="relative aspect-[850/869] w-full max-w-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={SLIDES[active].id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={SLIDES[active].imageSrc}
                    alt=""
                    fill
                    className="object-contain object-left"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    unoptimized
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="min-w-0">
            <p className="inline-flex rounded-lg bg-[#2750F5] px-3 py-1.5 text-sm font-bold tracking-tight text-white">
              easyapi
            </p>
            <h2
              id="section-5-heading"
              className={cn(sectionHeadingH2, "mt-4 text-slate-900")}
            >
              Governed APIs without the drag
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-slate-600">
              This approach offers seamless access to Unifi and Easy API, creating a cohesive story. It emphasizes a shared
              vision that covers various domains, enabling informed buyers to make timely choices.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {SLIDES.map((slide, index) => {
                const isActive = active === index;
                return (
                  <motion.button
                    key={slide.id}
                    type="button"
                    aria-pressed={isActive}
                    aria-label={slide.title}
                    onClick={() => setActive(index)}
                    whileHover={SLIDE_CARD_MOTION.whileHover}
                    whileTap={SLIDE_CARD_MOTION.whileTap}
                    transition={SLIDE_CARD_MOTION.transition}
                    className={cn(
                      "w-full rounded-xl border bg-white p-4 text-left ring-0 transition-[box-shadow,border-color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2750F5]/30",
                      isActive
                        ? "z-[1] border-[#2750F5] shadow-[0_0_0_1px_#2750F5,0_12px_32px_-8px_rgba(39,80,245,0.28)]"
                        : "z-0 border-slate-200 shadow-sm hover:border-slate-300",
                    )}
                  >
                    <p className="text-sm font-semibold text-slate-900">{slide.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{slide.body}</p>
                  </motion.button>
                );
              })}
            </div>

            <MotionLink
              href="/products/easy-api"
              whileHover={BUTTON_MOTION.whileHover}
              whileTap={BUTTON_MOTION.whileTap}
              transition={BUTTON_MOTION.transition}
              className="mt-8 inline-flex items-center justify-center rounded-full border border-[#2750F5] bg-white px-5 py-2.5 text-sm font-semibold text-[#2750F5] shadow-sm transition-colors hover:bg-[#2750F5]/5"
            >
              Learn more
            </MotionLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
