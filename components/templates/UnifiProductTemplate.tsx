"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { GridStreakOverlay } from "@/components/effects/GridStreakOverlay";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { BUTTON_MOTION } from "@/lib/motion/button";
import { sectionHeadingH2 } from "@/lib/section-heading";
import { cn } from "@/lib/utils/cn";
import { HomeSectionFollow } from "@/components/home/HomeSectionFollow";
import type { ProductPageContent } from "@/lib/types/content";

const HERO_NAVY = "#2750F5";
const HERO_BG = "#2D5BFF";

const CAPABILITY_CARDS = [
  {
    icon: "/unifi/icons/building-08.svg",
    title: "Governance embedded by design",
    description: "Complete message history, payload inspection, and transformation visibility — all directly within the ServiceNow record context.",
  },
  {
    icon: "/unifi/icons/arrow-up-right.svg",
    title: "Upgrade & Change Confidence",
    description: "Built-in regression testing ensures your eBonding integrations remain reliable as APIs, processes, and ServiceNow versions evolve.",
  },
  {
    icon: "/unifi/icons/shield-tick.svg",
    title: "Native ServiceNow Security",
    description: "Fully native to ServiceNow with no middleware or third-party infrastructure, keeping your data secure and compliant.",
  },
  {
    icon: "/unifi/icons/code-02.svg",
    title: "Pro-Code Power at Enterprise Scale",
    description: "Handles complex logic, advanced transformations, and edge cases common in large-scale eBonding environments.",
  },
  {
    icon: "/unifi/icons/dataflow-03.svg",
    title: "Multi-System Integration",
    description: "Seamlessly eBond one ServiceNow record with multiple external systems while maintaining full state integrity and traceability.",
  },
  {
    icon: "/unifi/icons/refresh-ccw-04.svg",
    title: "Long-Term Stability",
    description: "Purpose-built to keep your integrations governed, visible, and reliable as your ecosystem grows.",
  },
];

const MotionLink = motion.create(Link);

type Props = {
  product: ProductPageContent;
};

export function UnifiProductTemplate({ product }: Props) {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-white">
        {/* Dot-grid background */}
        <div className="pointer-events-none absolute inset-y-0 right-[400px] flex items-center" aria-hidden>
          <Image
            src="/unifi/dot-grid.svg"
            alt=""
            width={688}
            height={515}
            className="h-auto w-[688px] max-w-none opacity-60"
          />
        </div>
        <Container className="relative z-10 py-16 sm:py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">

            {/* Left: copy */}
            <div className="flex flex-col">
              <FadeUp className="mb-6 inline-flex">
                <Image
                  src="/unifi/logo-unifi.svg"
                  alt="Unifi"
                  width={120}
                  height={36}
                  className="h-9 w-auto"
                  priority
                />
              </FadeUp>

              <FadeUp delay={0.08}>
                <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
                  Take the risk out of eBonding with Unifi
                </h1>
              </FadeUp>

              <FadeUp delay={0.14}>
                <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-slate-500 sm:text-lg">
                  Unifi delivers the control, visibility, and stability needed for
                  robust enterprise integrations in ServiceNow.
                </p>
              </FadeUp>

              <FadeUp delay={0.2} className="mt-8 flex flex-col gap-3 sm:flex-row">
                <MotionLink
                  href="/contact"
                  whileHover={BUTTON_MOTION.whileHover}
                  whileTap={BUTTON_MOTION.whileTap}
                  transition={BUTTON_MOTION.transition}
                  className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:opacity-90"
                  style={{ backgroundColor: HERO_NAVY }}
                >
                  Talk to a Specialist
                </MotionLink>
                <MotionLink
                  href="#how-it-works"
                  whileHover={BUTTON_MOTION.whileHover}
                  whileTap={BUTTON_MOTION.whileTap}
                  transition={BUTTON_MOTION.transition}
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-transparent px-8 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50"
                  style={{ color: HERO_NAVY }}
                >
                  Architecture Overview
                </MotionLink>
              </FadeUp>

              {/* Jump to nav */}
              <FadeUp delay={0.26}>
                <div className="mt-10 flex items-center gap-3 border-t border-slate-100 pt-8">
                  <span className="text-sm text-slate-500">Jump to:</span>
                  {[
                    { label: "Features", href: "#features", icon: (
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth={1.8}>
                        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" fill="currentColor" stroke="none"/>
                      </svg>
                    )},
                    { label: "Pricing", href: "#pricing", icon: (
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth={2}>
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 6v12M9 9.5c0-1.1.9-2 2-2h2a2 2 0 0 1 0 4h-2a2 2 0 0 0 0 4h2a2 2 0 0 0 2-2" strokeLinecap="round"/>
                      </svg>
                    )},
                    { label: "Support", href: "#faqs", icon: (
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth={2}>
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" strokeLinecap="round"/>
                        <circle cx="12" cy="17" r="0.5" fill="currentColor"/>
                      </svg>
                    )},
                  ].map(({ label, href, icon }) => (
                    <Link
                      key={href}
                      href={href}
                      className="inline-flex items-center gap-2.5 text-sm font-medium text-slate-800 transition-opacity hover:opacity-70"
                    >
                      <span
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white"
                        style={{ backgroundColor: HERO_NAVY }}
                      >
                        {icon}
                      </span>
                      {label}
                    </Link>
                  ))}
                </div>
              </FadeUp>
            </div>

            {/* Right: hero illustration */}
            <FadeUp delay={0.1} className="hidden lg:flex lg:items-center lg:justify-center">
              <div className="relative h-[480px] w-full max-w-[560px]" aria-hidden>
                {/* Dot-grid background */}
                <Image
                  src="/unifi/background-ui.svg"
                  alt=""
                  fill
                  className="object-contain object-center"
                />
      
                {/* card-CMDB — top left */}
                <motion.div
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
                  className="absolute left-0 top-[10%] w-[46%]"
                >
                  <Image
                    src="/unifi/card-CMDB.svg"
                    alt="CMDB integration card"
                    width={280}
                    height={160}
                    className="h-auto w-full drop-shadow-xl"
                  />
                </motion.div>

                {/* card-Problem — bottom right */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                  className="absolute bottom-[8%] right-0 w-[48%]"
                >
                  <Image
                    src="/unifi/card-Problem.svg"
                    alt="Problem management card"
                    width={280}
                    height={160}
                    className="h-auto w-full drop-shadow-xl"
                  />
                </motion.div>
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* ── Trusted by ── */}
      <section className="border-b border-slate-100 bg-white" aria-labelledby="unifi-trusted-heading">
        <Container className="py-10 sm:py-12">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-10">
            <p id="unifi-trusted-heading" className="shrink-0 text-sm font-semibold text-slate-900">
              Trusted by over 70<br className="hidden sm:block" /> companies
            </p>
            <div className="h-px w-full bg-slate-200 sm:hidden" />
            <div className="w-px self-stretch bg-slate-200 hidden sm:block" />
            <ul className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-10">
              {[
                { src: "/logos/BT.png", alt: "BT" },
                { src: "/logos/CDW.png", alt: "CDW" },
                { src: "/logos/MOJ.png", alt: "MOJ" },
                { src: "/logos/NTT.png", alt: "NTT" },
                { src: "/logos/SKF.png", alt: "SKF" },
                { src: "/logos/advania.png", alt: "Advania" },
                { src: "/logos/husqvarna.png", alt: "Husqvarna" },
              ].map(({ src, alt }) => (
                <li key={src} className="flex items-center justify-center">
                  <Image
                    src={src}
                    alt={alt}
                    width={120}
                    height={40}
                    className="h-8 w-auto max-w-[100px] object-contain grayscale opacity-60 transition-opacity hover:opacity-100 hover:grayscale-0"
                  />
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ── Why most integrations become a risk ── */}
      <section className="border-b border-slate-200 bg-[#F0F2F8]">
        <Container className="py-14 sm:py-16 lg:py-20">
          <ScrollReveal direction="up" className="mx-auto max-w-2xl text-center">
            <h2 className={cn(sectionHeadingH2, "text-slate-900")}>
              Why most integrations become an operational risk
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Integrations rarely blow up on day one. They become liabilities over time —
              as APIs change, upgrades shift behaviour, and processes evolve without governance.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.12} className="mx-auto mt-12 max-w-4xl">
            <div className="overflow-hidden rounded-2xl border border-slate-200/60 shadow-xl">
              <Image
                src="/unifi/unifi-ui.png"
                alt="Unifi dashboard showing monitored integration flow and diagnostics"
                width={1200}
                height={700}
                className="h-auto w-full object-cover object-top"
              />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── Capabilities (6-card features) ── */}
      <section id="features" className="border-b border-slate-100 bg-white">
        <Container className="py-16 sm:py-20 lg:py-24">
          <ScrollReveal direction="up" className="mx-auto max-w-2xl text-center mb-12">
            <h2 className={cn(sectionHeadingH2, "text-slate-900")}>
              Take the risk out of eBonding with Unifi
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Unifi delivers the control, visibility, and stability needed for robust enterprise integrations in ServiceNow.
            </p>
          </ScrollReveal>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITY_CARDS.map(({ icon, title, description }, i) => (
              <ScrollReveal key={title} direction="up" delay={i * 0.08} className="flex flex-col">
                <span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: HERO_NAVY }}
                  aria-hidden
                >
                  <Image src={icon} alt="" width={20} height={20} className="h-5 w-5 brightness-0 invert" />
                </span>
                <h3 className="mt-5 text-base font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Testimonial ── */}
      <section style={{ backgroundColor: HERO_NAVY }}>
        <Container className="py-20 sm:py-24 lg:py-28">
          <FadeUp className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <Image
              src="/quote.svg"
              alt=""
              width={48}
              height={48}
              className="mb-8 h-12 w-auto"
              aria-hidden
            />
            <blockquote className="text-lg font-medium leading-relaxed text-white sm:text-xl lg:text-2xl">
              Unifi has fundamentally changed how we approach eBonding. What used to take weeks to debug
              now takes minutes — the visibility into every message and transformation inside ServiceNow
              is unlike anything else we&apos;ve used.
            </blockquote>
            <figcaption className="mt-8">
              <p className="text-xl font-bold text-white">Tim Attenborough</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-white/60">
                CTO, ShareLogic
              </p>
            </figcaption>
          </FadeUp>
        </Container>
      </section>

      {/* ── How it Works + Governance — blue accordion container ── */}
      {(() => {
        function AccordionRow({ label, body }: { label: string; body: string }) {
          const [open, setOpen] = useState(false);
          return (
            <div className="border-t border-white/20 last:border-b last:border-white/20">
              <button
                onClick={() => setOpen((o) => !o)}
                className="flex w-full items-center justify-between gap-4 py-4 text-left"
                aria-expanded={open}
              >
                <span className="text-base font-medium text-white">{label}</span>
                <motion.span
                  animate={{ rotate: open ? 45 : 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/40 text-white"
                  aria-hidden
                >
                  <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3" stroke="currentColor" strokeWidth={2}>
                    <line x1="8" y1="2" x2="8" y2="14" />
                    <line x1="2" y1="8" x2="14" y2="8" />
                  </svg>
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    key="body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-sm leading-relaxed text-white/75">{body}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        }

        return (
          <section id="how-it-works" className="border-b border-slate-200 bg-white py-16 sm:py-20 lg:py-24">
            <Container>
              <div
                className="overflow-hidden p-8 sm:p-12 lg:p-16"
                style={{
                  backgroundColor: HERO_NAVY,
                  borderRadius: "4rem 0 4rem 0",
                }}
              >
                {/* Block 1: image left, accordion right */}
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  <ScrollReveal direction="right">
                    <div className="overflow-hidden rounded-2xl bg-[#0d1524] shadow-lg">
                      <Image
                        src="/unifi/unifi-ui.png"
                        alt="Unifi integration monitoring view"
                        width={1200}
                        height={700}
                        className="h-auto w-full object-cover object-top"
                      />
                    </div>
                  </ScrollReveal>
                  <ScrollReveal direction="left" delay={0.1}>
                    <h2 className={cn(sectionHeadingH2, "text-white")}>
                      How Unifi Works
                    </h2>
                    <p className="mt-3 text-base text-white/70">
                      Unifi introduces a governed control layer that standardizes how integrations operate across every ServiceNow environment.
                    </p>
                    <div className="mt-8">
                      <AccordionRow
                        label="Mission-Critical Operations"
                        body="Agents and operations staff can see integration activity, replay messages, and resolve issues without needing specialist help — empowering the whole team, not just developers."
                      />
                      <AccordionRow
                        label="Reliable Messaging"
                        body="Robust asynchronous integration with real-time monitoring and delivery assurance, so your most important messages always arrive. Guaranteed delivery for business-critical flows."
                      />
                      <AccordionRow
                        label="Automated Testing"
                        body="Quickly create and run automated regression tests to ensure your integrations remain reliable after every update. Never fear an upgrade again."
                      />
                    </div>
                  </ScrollReveal>
                </div>

                <div className="my-32 lg:my-48" />

                {/* Block 2: accordion left, image right */}
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  <ScrollReveal direction="right">
                    <h2 className={cn(sectionHeadingH2, "text-white")}>
                      Operational Clarity at Every Level
                    </h2>
                    <p className="mt-3 text-base text-white/70">
                      Most tools give you logs. Unifi gives you real operational clarity — embedded in every ServiceNow record.
                    </p>
                    <div className="mt-8">
                      <AccordionRow
                        label="Governance embedded in every record"
                        body="From any integrated record, instantly see what was sent, received, how it was transformed, and where failures occurred — without switching systems or reconciling logs."
                      />
                      <AccordionRow
                        label="Native ServiceNow security model"
                        body="Because Unifi runs natively inside ServiceNow, it automatically inherits the platform's security model, audit controls, and access governance. No extra layers. No added risk."
                      />
                      <AccordionRow
                        label="Delightful Development"
                        body="Build integrations faster with Unifi Integration Designer. Even complex requirements like asynchronous messaging become simple — low-code to pro-code flexibility."
                      />
                    </div>
                  </ScrollReveal>
                  <ScrollReveal direction="left" delay={0.1}>
                    <div className="overflow-hidden rounded-2xl bg-[#0d1524] shadow-lg">
                      <Image
                        src="/unifi/ui-example.png"
                        alt="Unifi integration designer interface"
                        width={1234}
                        height={700}
                        className="h-auto w-full object-cover object-top"
                      />
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </Container>
          </section>
        );
      })()}

      {/* ── Built for scale / Architecture ── */}
      <section className="border-b border-slate-100 bg-white">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal direction="right" className="flex flex-col">
              <p className="text-2xl font-bold text-slate-400 leading-snug">Designed for eBonding</p>
              <h2 className={cn(sectionHeadingH2, "text-slate-900 mt-0")}>
                Designed for eBonding
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                eBonding is one of the toughest integration challenges. It requires bi-directional sync,
                complex state management, strict SLA alignment, and long-term reliability.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Most platforms struggle here. Unifi was purpose-built for it — giving platform owners
                clear visibility into what systems are connected and how they interact with the platform.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
              <div className="relative mx-auto w-full max-w-3xl">
                <Image
                  src="/unifi/pattern-section/cubes.svg"
                  alt=""
                  width={163}
                  height={203}
                  className="pointer-events-none absolute -left-8 -top-10 z-[1] h-auto w-[clamp(110px,20vw,165px)]"
                />
                <Image
                  src="/unifi/pattern-section/cube.svg"
                  alt=""
                  width={204}
                  height={262}
                  className="pointer-events-none absolute -right-8 -bottom-8 z-[1] h-auto w-[clamp(130px,24vw,200px)]"
                />
                <Image
                  src="/unifi/pattern-section/UI.svg"
                  alt="Architecture flow between systems for eBonding"
                  width={566}
                  height={349}
                  className="relative z-[2] h-auto w-full"
                />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── Where Unifi is the right choice ── */}
      <section className="border-b border-slate-100 bg-[#F0F2F8]">
        <Container className="py-16 sm:py-20 lg:py-24">
          <ScrollReveal direction="up" className="mx-auto max-w-2xl text-center mb-14">
            <h2 className={cn(sectionHeadingH2, "text-slate-900")}>
              Where Unifi is the right choice
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Unifi is designed for organisations that treat integrations as truly business-critical and long-lived.
            </p>
          </ScrollReveal>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal direction="right" className="flex flex-col gap-4 text-slate-600 text-base leading-relaxed">
              <p>
                Unifi shines in environments with customer-facing or revenue-impacting workflows, multiple
                external systems and vendors, strict governance and audit requirements, and growing integration
                portfolios where upgrades and changes carry real operational risk.
              </p>
              <p>
                Unifi is built for teams that need structure and control as complexity increases.
              </p>
              <p>
                For over a decade, Unifi has powered large, complex integration estates for enterprises and
                MSPs. Mature, stable, and continuously refined in real-world conditions, it has become a
                trusted integration backbone inside the ServiceNow ecosystem globally.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl">
                <Image
                  src="/unifi/ui-example.png"
                  alt="Unifi integration designer interface example"
                  width={1234}
                  height={700}
                  className="h-auto w-full object-cover object-center"
                />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── FAQ ── */}
      {(() => {
        const FAQS = [
          {
            q: "What is Unifi?",
            a: "Unifi is a native ServiceNow application that provides a governed control layer for enterprise integrations. It standardizes how integrations are built, monitored, and maintained — with full visibility into every message and transformation.",
          },
          {
            q: "What is eBonding and why does Unifi excel at it?",
            a: "eBonding is the bi-directional synchronisation of records between ServiceNow and external systems (like other ITSM platforms). It requires complex state management, strict SLA alignment, and long-term reliability — exactly what Unifi was purpose-built for.",
          },
          {
            q: "Does Unifi require external infrastructure?",
            a: "No. Unifi runs entirely natively within ServiceNow, which means it inherits the platform's security model, audit controls, and access governance automatically. No middleware, no third-party infrastructure.",
          },
          {
            q: "How does Unifi handle upgrades and changes?",
            a: "Unifi includes built-in automated regression testing so you can validate that integrations remain reliable after every ServiceNow upgrade or process change. It's designed to remove the fear from upgrades.",
          },
          {
            q: "Who can use Unifi — do you need developer skills?",
            a: "Unifi is designed for both pro-code developers and operational teams. Non-developers can see integration activity, replay messages, and resolve issues without specialist help. Developers get full flexibility for complex logic.",
          },
          {
            q: "How do I get started with Unifi?",
            a: "Talk to one of our specialists — we'll walk you through a demo tailored to your integration challenges and help you understand how Unifi would fit into your ServiceNow environment.",
          },
        ];

        function FaqRow({ q, a }: { q: string; a: string }) {
          const [open, setOpen] = useState(false);
          return (
            <div
              className="cursor-pointer overflow-hidden rounded-2xl border border-white/30 px-6 py-5 transition-colors hover:border-white/50"
              onClick={() => setOpen((o) => !o)}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-base font-medium text-white">{q}</span>
                <motion.span
                  animate={{ rotate: open ? 45 : 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="flex h-7 w-7 shrink-0 items-center justify-center text-white"
                  aria-hidden
                >
                  <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth={2}>
                    <line x1="8" y1="2" x2="8" y2="14" />
                    <line x1="2" y1="8" x2="14" y2="8" />
                  </svg>
                </motion.span>
              </div>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-sm leading-relaxed text-white/70">{a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        }

        return (
          <section id="faqs" style={{ backgroundColor: HERO_NAVY }} className="relative overflow-hidden">
            <GridStreakOverlay />
            <Container className="relative z-10 py-16 sm:py-20 lg:py-24">
              <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
                <FadeUp className="flex items-start lg:items-center">
                  <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    Still have questions?
                  </h2>
                </FadeUp>
                <FadeUp delay={0.08} className="flex flex-col gap-4">
                  {FAQS.map(({ q, a }) => (
                    <FaqRow key={q} q={q} a={a} />
                  ))}
                </FadeUp>
              </div>
            </Container>
          </section>
        );
      })()}

      <HomeSectionFollow />

      <CtaBand
        headline={product.cta.headline}
        body={product.cta.body}
        primaryLabel={product.cta.primaryLabel}
        primaryHref={product.cta.primaryHref}
      />
    </>
  );
}
