import Image from "next/image";
import Link from "next/link";
import { HomeSectionFollow } from "@/components/home/HomeSectionFollow";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/motion/FadeUp";
import { sectionHeadingH2 } from "@/lib/section-heading";
import { cn } from "@/lib/utils/cn";
import { buildMetadata } from "@/lib/utils/metadata";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn about ShareLogic’s mission, values, and leadership—built for enterprise integration and workflow governance.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#1F53FF]">
        <div
          className="pointer-events-none absolute left-0 top-0 hidden h-full w-[26%] bg-contain bg-left-top bg-no-repeat md:block"
          aria-hidden
          style={{ backgroundImage: "url('/about/dot-grid-left.png')" }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 hidden h-full w-[26%] bg-contain bg-right-top bg-no-repeat md:block"
          aria-hidden
          style={{ backgroundImage: "url('/about/dot-grid-right.png')" }}
        />

        <div className="pointer-events-none absolute left-[8%] top-[22%] hidden md:block" aria-hidden>
          <Image src="/about/blocks-left.png" alt="" width={96} height={96} unoptimized />
        </div>
        <div className="pointer-events-none absolute right-[8%] top-[18%] hidden md:block" aria-hidden>
          <Image src="/about/blocks-right.png" alt="" width={124} height={124} unoptimized />
        </div>

        <Container className="relative z-10 py-16 sm:py-20 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <FadeUp className="text-center text-white lg:col-span-3 lg:text-left">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Simplifying</h1>
            </FadeUp>

            <FadeUp delay={0.08} className="relative mx-auto w-full max-w-2xl lg:col-span-6">
              <Image
                src="/about/hero-image-main.png"
                alt="ShareLogic integration platform illustration"
                width={860}
                height={520}
                className="h-auto w-full"
                priority
                unoptimized
              />
            </FadeUp>

            <FadeUp delay={0.12} className="text-center text-white lg:col-span-3 lg:text-right">
              <p className="text-4xl font-semibold tracking-tight sm:text-5xl">Complexity</p>
            </FadeUp>
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <Container className="py-8 sm:py-10 lg:py-12">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
            <FadeUp className="lg:col-span-4">
              <h2 className={cn(sectionHeadingH2, "max-w-xl text-slate-900")}>
                ShareLogic, the journey to creating the globally recognised ebonding integration platform
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                ShareLogic Unifi was developed to excel at one thing: ebonding within ServiceNow. Our platform transforms the
                capabilities of companies to create and manage powerful, sophisticated, and flexible integrations, quickly and
                at scale.
              </p>
            </FadeUp>
            <FadeUp delay={0.08} className="relative mx-auto flex w-full max-w-3xl justify-center lg:col-span-8 lg:justify-end">
              <div className="w-full overflow-hidden rounded-2xl bg-[#1F53FF] p-6 shadow-[0_20px_50px_-12px_rgba(31,83,255,0.35)] sm:rounded-3xl sm:p-8 lg:max-w-none lg:p-10">
                <Image
                  src="/about/img-platform.png"
                  alt="ShareLogic integration platform illustration"
                  width={900}
                  height={640}
                  className="h-auto w-full max-h-[min(340px,50vh)] object-contain sm:max-h-[min(420px,58vh)] lg:max-h-[min(520px,64vh)]"
                  unoptimized
                />
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <Container className="py-14 sm:py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <FadeUp className="lg:col-span-6">
              <h2 className={cn(sectionHeadingH2, "text-slate-900")}>Our Founders Story</h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
                ShareLogic was founded by two industry veterans who saw a gap in the market for a platform that could simplify
                the complex world of enterprise integrations. With decades of combined experience, they set out to build a
                solution that would empower businesses to connect their systems seamlessly and efficiently.
              </p>
            </FadeUp>
            <FadeUp delay={0.08} className="flex justify-center lg:col-span-6 lg:justify-end">
              <Image
                src="/about/founder-circles.svg"
                alt=""
                width={420}
                height={420}
                className="h-auto w-full max-w-sm"
                unoptimized
              />
            </FadeUp>
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <Container className="py-14 sm:py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <FadeUp className="lg:col-span-5">
              <div className="overflow-hidden rounded-tl-3xl rounded-br-3xl border border-slate-200 bg-slate-100 shadow-sm">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/about/founder-image.png"
                    alt="ShareLogic founder"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    unoptimized
                  />
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.08} className="lg:col-span-7">
              <p className="text-lg leading-relaxed text-slate-600">
                James Neale and Mark Cripps have worked together for over 20 years, building enterprise software solutions for
                some of the world&apos;s largest organisations. Their journey began with a shared vision: to create technology
                that truly serves business needs, not the other way around.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                After years of witnessing the challenges companies face when trying to integrate disparate systems, they
                recognised the need for a more intuitive, powerful solution. This realisation sparked the creation of
                ShareLogic—a platform designed to bridge the gap between complex technical requirements and business
                objectives.
              </p>
            </FadeUp>
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-[#EEF2FF]">
        <Container className="py-16 sm:py-20">
          <FadeUp>
            <blockquote className="mx-auto max-w-3xl text-center">
            <p className="text-2xl font-medium leading-relaxed text-[#2750F5] sm:text-3xl">
              &ldquo;A very nice quote that goes here from one of the founders.&rdquo;
            </p>
            <footer className="mt-6 text-lg font-semibold text-[#1F53FF]">James Neale</footer>
            </blockquote>
          </FadeUp>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <Container className="py-14 sm:py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <FadeUp className="lg:col-span-7">
              <p className="text-lg leading-relaxed text-slate-600">
                Throughout their careers, James and Mark encountered countless scenarios where businesses struggled with
                outdated, cumbersome integration processes. They saw firsthand how these inefficiencies hindered growth,
                innovation, and customer satisfaction.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Determined to make a difference, they leveraged their extensive industry knowledge and technical expertise to
                develop ShareLogic. Their goal was simple yet ambitious: to provide a platform that not only meets the
                technical demands of modern enterprises but also aligns seamlessly with their strategic goals.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Today, ShareLogic stands as a testament to their dedication and vision, helping businesses worldwide achieve
                smoother, more effective integrations. James and Mark continue to lead the company with the same passion and
                commitment that inspired its inception, driving forward the future of enterprise connectivity.
              </p>
            </FadeUp>
            <FadeUp delay={0.08} className="lg:col-span-5">
              <div className="overflow-hidden rounded-tl-3xl rounded-br-3xl border border-slate-200 bg-slate-100 shadow-sm">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/about/about-2.png"
                    alt="Modern city skyline"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    unoptimized
                  />
                </div>
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-[#1F53FF]">
        <Container className="py-16 sm:py-20 lg:py-24">
          <FadeUp>
            <p className="mx-auto max-w-4xl text-center text-lg leading-relaxed text-white sm:text-xl">
              As the drive to digitalisation continues to generate exponential growth in outsourced supplier operating models and
              connected systems, effective integration at scale, operational insight and automated testing are becoming even more
              mission critical. For customers demanding flexibility, ease of use, security and governance, ShareLogic Unifi has
              continued to deliver the optimal solution defining the difference between OK and excellent!
            </p>
          </FadeUp>
        </Container>
      </section>

      <section className="relative overflow-hidden border-t border-slate-200 bg-white">
        <div
          className="pointer-events-none absolute -right-8 top-0 hidden h-64 w-64 opacity-40 md:block"
          aria-hidden
          style={{ backgroundImage: "url('/about/dot-grid-right.png')", backgroundSize: "contain", backgroundPosition: "top right", backgroundRepeat: "no-repeat" }}
        />
        <Container className="relative z-10 py-14 sm:py-16 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <FadeUp className="lg:col-span-6">
              <h2 className={cn(sectionHeadingH2, "text-slate-900")}>Want to join our team?</h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-700">
                Joining ShareLogic is an exciting chance to be part of an innovative team. Here, collaboration is essential, and
                every member contributes to our future. We embrace new ideas and technologies that propel our mission. At
                ShareLogic, we value creativity, encourage growth, and foster belonging. We&apos;re not just creating software;
                we&apos;re building a thriving community.
              </p>
              <Link
                href="/careers"
                className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#2750F5] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#1f40c4]"
              >
                View the open roles
              </Link>
            </FadeUp>
            <FadeUp delay={0.08} className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/about/about-3.png"
                    alt="ShareLogic team collaborating"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    unoptimized
                  />
                </div>
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      <HomeSectionFollow />
    </>
  );
}
