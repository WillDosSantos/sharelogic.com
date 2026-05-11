"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";
import { BoxiconExpand, BoxiconLayer, BoxiconServer, BoxiconShield } from "@/components/icons/IntegrityPlatformColumnIcons";
import { Container } from "@/components/layout/Container";
import { GridStreakOverlay } from "@/components/effects/GridStreakOverlay";
import { FadeUp } from "@/components/motion/FadeUp";
import { BUTTON_MOTION } from "@/lib/motion/button";
import { sectionHeadingH2 } from "@/lib/section-heading";
import { cn } from "@/lib/utils/cn";
import type { ProductPageContent } from "@/lib/types/content";

const HERO_NAVY = "#2750F5";
const HERO_ACCENT = "#2b59ff";
const FINAL_CTA_BG = "#2750F5";
const FINAL_CTA_BLUE = "#2e5bff";

type IntegrityIconProps = SVGProps<SVGSVGElement> & { size?: number };

const INTEGRITY_PLATFORM_COLUMNS: {
  text: string;
  Icon: ComponentType<IntegrityIconProps>;
}[] = [
  {
    Icon: BoxiconServer,
    text: "ServiceNow often becomes the operational backbone of the organisation. As more teams adopt the platform, the number of systems interacting with it grows.",
  },
  {
    Icon: BoxiconLayer,
    text: "Without clear governance, integrations can emerge organically as teams build tools, reports or small applications around the platform. Over time, ServiceNow can unintentionally become the integration layer for systems that were never formally designed to rely on it.",
  },
  {
    Icon: BoxiconShield,
    text: "Easy API helps platform owners maintain architectural control. By ensuring integrations are introduced through managed APIs, organisations can support innovation while protecting the integrity of the platform.",
  },
];

type Props = {
  product: ProductPageContent;
};

export function EasyApiProductTemplate(_props: Props) {
  const MotionLink = motion.create(Link);

  return (
    <>
      <section
        className="relative overflow-hidden border-b border-white/10 text-white"
        style={{ backgroundColor: HERO_NAVY }}
      >
        <GridStreakOverlay />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_0%,rgba(43,89,255,0.2),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-1/2 top-[42%] hidden h-[min(480px,65vh)] w-[min(380px,88vw)] -translate-x-1/2 -translate-y-1/2 opacity-[0.35] sm:block"
          aria-hidden
          style={{
            backgroundImage: "url('/easyapi/dot-grid.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        />
        <div
          className="pointer-events-none absolute left-1/2 top-[42%] h-[min(420px,58vh)] w-[min(340px,92vw)] -translate-x-1/2 -translate-y-1/2 opacity-30 sm:hidden"
          aria-hidden
          style={{
            backgroundImage: "url('/easyapi/dot-grid.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        />

        <div className="pointer-events-none absolute inset-x-0 top-[18%] hidden md:block" aria-hidden>
          <div className="mx-auto flex w-full max-w-6xl items-start justify-between px-4 sm:px-6 lg:px-8">
            <Image
              src="/easyapi/hero/cubes-1.png"
              alt=""
              width={260}
              height={320}
              className="h-auto max-h-[min(420px,56vh)] w-auto max-w-[min(270px,28vw)] lg:max-w-[min(300px,26vw)]"
              priority
              unoptimized
            />
            <Image
              src="/easyapi/hero/cubes-2.png"
              alt=""
              width={260}
              height={320}
              className="h-auto max-h-[min(420px,56vh)] w-auto max-w-[min(270px,28vw)] lg:max-w-[min(300px,26vw)]"
              priority
              unoptimized
            />
          </div>
        </div>

        <Container className="relative z-10 flex min-h-[660px] flex-col justify-center py-14 sm:py-16 lg:py-20">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
            <FadeUp className="mb-6 inline-flex">
              <Image
                src="/easyapi/easyapi.svg"
                alt="Easy API"
                width={144}
                height={48}
                className="h-[4.7rem] w-auto"
                priority
              />
            </FadeUp>

            <FadeUp delay={0.08}>
              <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[3rem] lg:leading-[1.1]">
                The secure replacement for ServiceNow Table APIs
              </h1>
            </FadeUp>

            <FadeUp delay={0.14}>
              <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
                ServiceNow Table APIs are available by default, allowing ungoverned and often undesired integrations into your
                platform. Easy API puts you back in control.
              </p>
            </FadeUp>

            <FadeUp delay={0.2} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <MotionLink
                href="/contact"
                whileHover={BUTTON_MOTION.whileHover}
                whileTap={BUTTON_MOTION.whileTap}
                transition={BUTTON_MOTION.transition}
                className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:opacity-95"
                style={{ backgroundColor: HERO_ACCENT }}
              >
                Start Free Trial
              </MotionLink>
              <MotionLink
                href="/contact"
                whileHover={BUTTON_MOTION.whileHover}
                whileTap={BUTTON_MOTION.whileTap}
                transition={BUTTON_MOTION.transition}
                className="inline-flex items-center justify-center rounded-full border border-white/80 bg-transparent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                See How It Works
              </MotionLink>
            </FadeUp>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50 text-slate-900">
        <Container className="relative z-10 py-14 sm:py-16 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <FadeUp>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#2750F5] text-lg font-semibold text-white" aria-hidden>
                  !
                </span>
                <h2 className={cn(sectionHeadingH2, "mt-6")}>
                  Table APIs: Convenient, But Unmanaged
                </h2>
                <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
                  Table APIs are essential for integrating with ServiceNow, enabling external systems to read, create, update, and
                  delete records efficiently. However, their default availability allows third-party systems and users to access
                  your data in unintended ways, often bypassing governance processes and remaining unnoticed by platform owners.
                  This can lead to hidden dependency risks, as ServiceNow may end up managing integrations or applications that were
                  never approved or designed. Easy API addresses this issue by providing a managed gateway into ServiceNow,
                  ensuring that integrations are intentionally created and remain visible and governed as the platform evolves.
                </p>
              </FadeUp>
            </div>
            <FadeUp delay={0.08} className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg p-8 overflow-hidden rounded-3xl border border-[#1f40c4] bg-[#2750F5] shadow-sm">
                <Image
                  src="/easyapi/api-illustration.png"
                  alt="Managed API gateway concept: governed access to ServiceNow"
                  width={640}
                  height={520}
                  className="h-auto w-full object-contain"
                  unoptimized
                />
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      <section
        className="relative overflow-hidden border-b border-white/10 text-white"
        style={{ backgroundColor: HERO_NAVY }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          aria-hidden
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="pointer-events-none absolute left-1/2 top-24 h-72 w-full max-w-2xl -translate-x-1/2 opacity-25"
          aria-hidden
          style={{
            backgroundImage: "url('/easyapi/dot-grid.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            backgroundSize: "contain",
          }}
        />
        <Container className="relative z-10 py-14 sm:py-16 lg:py-20">
          <FadeUp className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left">
            <h2 className={cn(sectionHeadingH2)}>
              A Controlled Way to Expose ServiceNow Data
            </h2>
            <p className="mt-4 text-lg text-slate-300 sm:text-xl">
              Easy API delivers structural control across complex integration portfolios.
            </p>
          </FadeUp>

          <div className="mt-14 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-4">
              {[
                "Instead of integrations connecting directly through out-of-box Table APIs, APIs are created and managed through Easy API.",
                "Decisions can be quickly made about what data and operations are exposed, and which users or systems can interact with them.",
                "Existing Scripted REST APIs can also be managed within Easy API, bringing API access and activity into one place.",
              ].map((text, index) => (
                <FadeUp key={index}>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-base leading-relaxed text-white/95 shadow-sm backdrop-blur-sm sm:px-6 sm:py-5">
                    {text}
                  </div>
                </FadeUp>
              ))}
            </div>
            <FadeUp delay={0.06} className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d1524] shadow-lg">
                <Image
                  src="/easyapi/dashboard-img.png"
                  alt="Easy API dashboard showing request volume, errors, and performance metrics"
                  width={1200}
                  height={900}
                  className="h-auto w-full object-cover object-top"
                  unoptimized
                />
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-b border-slate-200 bg-[#FDC443] text-slate-900">
        <div className="absolute inset-x-0 top-0 h-2 bg-[#2750F5]" aria-hidden />
        <div className="pointer-events-none absolute -right-28 -bottom-40 h-[420px] w-[420px] rounded-full border-[3px] border-dashed border-white/70" aria-hidden />
        <div className="pointer-events-none absolute right-4 -bottom-52 h-[360px] w-[360px] rounded-full border-[3px] border-dashed border-white/70" aria-hidden />
        <div className="pointer-events-none absolute right-16 top-14 h-6 w-6 rounded-full border-4 border-white/85" aria-hidden />
        <div className="pointer-events-none absolute right-2 top-16 h-12 w-12 rounded-full bg-white/90" aria-hidden />
        <div className="pointer-events-none absolute right-16 top-32 h-7 w-7 rounded-full bg-white/85" aria-hidden />
        <div className="pointer-events-none absolute right-[39%] top-28 hidden h-7 w-7 rounded-full bg-white/85 md:block" aria-hidden />
        <Container className="relative z-10 py-16 sm:py-20 lg:py-24">
          <FadeUp className="max-w-3xl">
            <h2 className={cn(sectionHeadingH2)}>Control, Visibility and Governance</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-800 sm:text-xl">
              Easy API provides the control and visibility needed to safely manage ServiceNow APIs as more integrations are needed.
            </p>
          </FadeUp>
        </Container>
      </section>

      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50 text-slate-900">
        <Container className="relative z-10 py-16 sm:py-20 lg:py-24">
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
            <FadeUp className="order-1">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <Image
                  src="/easyapi/ui-1.png"
                  alt="Easy API requests view in the product UI"
                  width={1200}
                  height={900}
                  className="h-auto w-full object-cover object-top"
                  unoptimized
                />
              </div>
            </FadeUp>
            <div className="order-2 flex flex-col gap-4">
              {[
                {
                  title: "Create APIs quickly",
                  body: "Configure APIs in minutes without writing code.",
                },
                {
                  title: "Control what data is exposed",
                  body: "Define exactly what can be accessed and apply permissions across users, services and APIs.",
                },
                {
                  title: "See how APIs are used",
                  body: "Monitor who accessed an API, when requests were made and what data was involved.",
                },
              ].map((item, index) => (
                <FadeUp key={item.title} delay={index * 0.05}>
                  <div className="rounded-2xl border border-slate-200 bg-[#f2f2f2] px-5 py-5 shadow-sm sm:px-6 sm:py-6">
                    <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">{item.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-slate-700">{item.body}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          <div className="mt-10 grid items-start gap-8 lg:mt-10 lg:grid-cols-2 lg:gap-10">
            <div className="flex flex-col gap-4 lg:order-1">
              {[
                {
                  title: "See how APIs are used",
                  body: "Monitor who accessed an API, when requests were made and what data was involved.",
                },
                {
                  title: "Respond instantly when needed",
                  body: "Disable APIs or restrict access to specific users or services to quickly isolate issues.",
                },
              ].map((item, index) => (
                <FadeUp key={`row2-${item.title}`} delay={index * 0.05}>
                  <div className="rounded-2xl border border-slate-200 bg-[#f2f2f2] px-5 py-5 shadow-sm sm:px-6 sm:py-6">
                    <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">{item.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-slate-700">{item.body}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
            <FadeUp delay={0.06} className="lg:order-2">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <Image
                  src="/easyapi/ui-2.png"
                  alt="Easy API systems view in the product UI"
                  width={1200}
                  height={900}
                  className="h-auto w-full object-cover object-top"
                  unoptimized
                />
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      <section
        className="relative overflow-hidden border-b border-white/10 text-white"
        style={{ backgroundColor: HERO_NAVY }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          aria-hidden
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <Container className="relative z-10 py-16 sm:py-20 lg:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeUp>
              <div className="relative mx-auto aspect-[4/5] w-full max-w-md min-h-[320px] sm:min-h-[380px] lg:mx-0 lg:max-w-none">
                <div className="absolute left-0 top-[6%] z-0 w-[92%] overflow-hidden rounded-2xl border border-white/10 bg-[#0d1524] shadow-lg">
                  <Image
                    src="/easyapi/mod-1.png"
                    alt="Easy API charts showing request methods and errors over time"
                    width={1200}
                    height={900}
                    className="h-auto w-full object-cover object-top"
                    unoptimized
                  />
                </div>
                <div className="absolute bottom-0 right-0 z-10 w-[78%] overflow-hidden rounded-2xl border border-white/10 bg-[#0d1524] shadow-2xl ring-1 ring-white/10">
                  <Image
                    src="/easyapi/mod-2.png"
                    alt="Easy API provisioning and workflow automation in the product UI"
                    width={1200}
                    height={900}
                    className="h-auto w-full object-cover object-top"
                    unoptimized
                  />
                </div>
              </div>
            </FadeUp>
            <div>
              <FadeUp>
                <span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white"
                  aria-hidden
                >
                  <BoxiconExpand size={22} className="shrink-0 text-white" />
                </span>
                <h2 className={cn(sectionHeadingH2, "mt-6")}>Built for Scale</h2>
              </FadeUp>
              <div className="mt-8 flex flex-col gap-4">
                {[
                  "As ServiceNow adoption grows, so does the number of integrations connected to it.",
                  "What begins as a handful of integrations can quickly expand into dozens or hundreds of systems interacting with the platform. Without a structured approach, managing those integrations becomes increasingly difficult.",
                  "Easy API provides a consistent way to expose ServiceNow data as integrations scale. APIs are created through a single managed framework, giving platform owners clear visibility into what systems are connected and how they interact with the platform.",
                ].map((text, index) => (
                  <FadeUp key={index} delay={0.05 + index * 0.05}>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-5 shadow-sm backdrop-blur-sm sm:px-6 sm:py-6">
                      <p className="text-base leading-relaxed text-slate-200">{text}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        className="relative overflow-hidden border-b border-white/10 text-white"
        style={{ backgroundColor: HERO_NAVY }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          aria-hidden
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <Container className="relative z-10 py-16 sm:py-20 lg:py-24">
          <FadeUp>
            <span
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white"
              aria-hidden
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0 text-amber-300" aria-hidden>
                <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="currentColor" />
              </svg>
            </span>
            <h2 className={cn(sectionHeadingH2, "mt-6")}>Automate API Provisioning</h2>
          </FadeUp>

          <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-6">
            {[
              "Introducing new integrations often requires coordination between teams. Without a defined process, API access requests can become informal, inconsistent or difficult to track.",
              "Because Easy API runs natively within ServiceNow, organisations can integrate API provisioning into their existing service workflows.",
              "Platform teams can create request items and workflows that automate the API request and fulfilment process. New APIs can be requested, reviewed and provisioned through standard ServiceNow processes, ensuring integrations are introduced in a controlled and auditable way.",
            ].map((text, index) => (
              <FadeUp key={`provision-${index}`} delay={0.1 + index * 0.05}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-5 shadow-sm backdrop-blur-sm sm:px-6 sm:py-6">
                  <p className="text-base leading-relaxed text-slate-200">{text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-b border-slate-200 bg-white text-slate-900">
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-[min(65%,720px)] opacity-60"
          aria-hidden
          style={{
            backgroundImage: "radial-gradient(circle at center, rgb(203 213 225) 1px, transparent 1px)",
            backgroundRepeat: "repeat",
            backgroundSize: "10px 10px",
            maskImage: "linear-gradient(to left, black 55%, transparent)",
            WebkitMaskImage: "linear-gradient(to left, black 55%, transparent)",
          }}
        />
        <Container className="relative z-10 py-16 sm:py-20 lg:py-24">
          <FadeUp>
            <h2 className={cn(sectionHeadingH2, "max-w-4xl")}>
              Protect the Integrity of the Platform
            </h2>
          </FadeUp>
          <div className="mt-8 border-t border-slate-200" aria-hidden />

          <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
            {INTEGRITY_PLATFORM_COLUMNS.map(({ text, Icon }, index) => (
              <FadeUp key={`integrity-${index}`} delay={index * 0.06}>
                <div className="flex flex-col items-start text-left">
                  <span
                    className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700"
                    aria-hidden
                  >
                    <Icon size={26} className="shrink-0 text-current" />
                  </span>
                  <p className="mt-5 text-base leading-relaxed text-slate-700">{text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      <section
        className="relative overflow-hidden border-b border-white/10 text-white"
        style={{ backgroundColor: HERO_NAVY }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          aria-hidden
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <Container className="relative z-10 py-16 sm:py-20 lg:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <FadeUp>
                <h2 className={cn(sectionHeadingH2)}>
                  Where Easy API Fits
                </h2>
              </FadeUp>
              <div className="mt-8 flex flex-col gap-4">
                <FadeUp delay={0.06}>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-5 shadow-sm backdrop-blur-sm sm:px-6 sm:py-6">
                    <p className="text-base leading-relaxed text-slate-200">
                      Easy API is designed for safely exposing ServiceNow data through inbound APIs.
                    </p>
                  </div>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-5 shadow-sm backdrop-blur-sm sm:px-6 sm:py-6">
                    <p className="text-base leading-relaxed text-slate-200">
                      For more complex integration scenarios such as bidirectional integrations or ebonding,{" "}
                      <strong className="font-semibold text-white">ShareLogic&apos;s Unifi</strong> platform provides a
                      dedicated integration framework for ServiceNow.
                    </p>
                  </div>
                </FadeUp>
              </div>
            </div>
            <FadeUp delay={0.08} className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d1524] shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_24px_80px_-20px_rgba(0,0,0,0.65)]">
                <Image
                  src="/easyapi/ui-3.png"
                  alt="Easy API ITSM services and endpoint configuration in the product UI"
                  width={1200}
                  height={900}
                  className="h-auto w-full object-cover object-top"
                  unoptimized
                />
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-t border-slate-200 bg-white text-slate-900">
        <div className="absolute inset-x-0 top-0 h-1 bg-[#2750F5]" aria-hidden />
        <div className="pointer-events-none absolute -left-8 top-1/2 hidden -translate-y-1/2 md:block" aria-hidden>
          <div className="relative h-52 w-52">
            <div className="absolute inset-0 rounded-full border border-dashed border-[#cfd6ec]" />
            <div className="absolute inset-8 rounded-full border border-dashed border-[#cfd6ec]" />
            <div className="absolute bottom-0 left-16 h-10 w-10 rotate-45 rounded bg-[#c8c4f7]" />
            <div className="absolute left-14 top-[7.5rem] h-4 w-4 rotate-45 rounded-sm bg-[#c8c4f7]" />
          </div>
        </div>
        <div className="pointer-events-none absolute -right-8 top-8 hidden md:block" aria-hidden>
          <div className="relative h-52 w-52">
            <div className="absolute inset-0 rounded-full border border-dashed border-[#cfd6ec]" />
            <div className="absolute inset-8 rounded-full border border-dashed border-[#cfd6ec]" />
            <div className="absolute left-10 top-0 h-10 w-10 rotate-45 rounded bg-[#c8c4f7]" />
            <div className="absolute left-24 top-12 h-4 w-4 rotate-45 rounded-sm bg-[#c8c4f7]" />
          </div>
        </div>

        <Container className="relative z-10 py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp>
              <h2 className={cn(sectionHeadingH2, "text-balance")}>
                Take Control of Your ServiceNow APIs
              </h2>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-slate-700 sm:text-xl">
                Start a free trial and see how Easy API helps you manage and control your ServiceNow APIs.
              </p>
            </FadeUp>
            <FadeUp delay={0.12} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <MotionLink
                href="/contact"
                whileHover={BUTTON_MOTION.whileHover}
                whileTap={BUTTON_MOTION.whileTap}
                transition={BUTTON_MOTION.transition}
                className="inline-flex w-full min-w-[200px] items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-opacity hover:opacity-95 sm:w-auto"
                style={{ backgroundColor: FINAL_CTA_BLUE }}
              >
                Start Free Trial
              </MotionLink>
              <MotionLink
                href="/contact"
                whileHover={BUTTON_MOTION.whileHover}
                whileTap={BUTTON_MOTION.whileTap}
                transition={BUTTON_MOTION.transition}
                className="inline-flex w-full min-w-[200px] items-center justify-center rounded-full border border-[#8ea2eb] bg-white px-8 py-3.5 text-sm font-semibold text-[#2750F5] shadow-sm transition-colors hover:bg-slate-50 sm:w-auto"
              >
                See How It Works
              </MotionLink>
            </FadeUp>
          </div>
        </Container>
      </section>
    </>
  );
}
