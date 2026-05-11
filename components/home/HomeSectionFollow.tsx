import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { sectionHeadingH2 } from "@/lib/section-heading";
import { cn } from "@/lib/utils/cn";
import { HomeFollowLeadForm } from "@/components/home/HomeFollowLeadForm";

export function HomeSectionFollow() {
  return (
    <section
      id="section-follow"
      className="section-follow relative overflow-hidden border-t border-slate-200 bg-white"
      aria-labelledby="section-follow-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-repeat opacity-55"
        aria-hidden
        style={{
          backgroundImage: "url('/square-bg-pattern.png')",
          backgroundSize: "36px 36px",
        }}
      />
      <div className="pointer-events-none absolute left-4 top-16 opacity-75 sm:left-8 sm:top-14 sm:opacity-90 lg:left-16 lg:top-12">
        <Image
          src="/section-follow/cubset-1.svg"
          alt=""
          width={224}
          height={269}
          className="h-auto w-[min(140px,42vw)] max-w-none sm:w-[min(200px,40vw)]"
        />
      </div>
      <div className="pointer-events-none absolute right-4 top-[36%] opacity-75 sm:right-8 sm:top-[34%] sm:opacity-90 lg:right-16 lg:top-[32%]">
        <Image
          src="/section-follow/cubeset-2.svg"
          alt=""
          width={224}
          height={243}
          className="h-auto w-[min(130px,36vw)] max-w-none sm:w-[min(190px,38vw)]"
        />
      </div>

      <Container className="relative z-10 py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="section-follow-heading" className={cn(sectionHeadingH2, "text-black")}>
            Let&apos;s talk about your integrations
          </h2>
          <p className="mt-3 text-pretty text-base leading-relaxed text-[#666666]">
            We&apos;d love to hear from you. Please fill out this form.
          </p>
        </div>

        <div className="mx-auto mt-6 max-w-lg sm:mt-8">
          <HomeFollowLeadForm />
        </div>
      </Container>
    </section>
  );
}
