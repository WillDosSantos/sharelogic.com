import Image from "next/image";
import { Container } from "@/components/layout/Container";

/** Partner logos under `public/logos/` — add or remove entries when files change. */
const TRUSTED_LOGOS = [
  { src: "/logos/BT.png", alt: "BT" },
  { src: "/logos/CDW.png", alt: "CDW" },
  { src: "/logos/MOJ.png", alt: "MOJ" },
  { src: "/logos/NTT.png", alt: "NTT" },
  { src: "/logos/SKF.png", alt: "SKF" },
  { src: "/logos/advania.png", alt: "Advania" },
  { src: "/logos/husqvarna.png", alt: "Husqvarna" },
] as const;

export function TrustedBy() {
  return (
    <section className="border-t border-slate-200 bg-white" aria-labelledby="trusted-by-heading">
      <Container className="py-24 sm:py-32">
        <p id="trusted-by-heading" className="text-center text-sm font-medium tracking-wide text-slate-500">
          Trusted by
        </p>
        <ul className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-5 lg:gap-6">
          {TRUSTED_LOGOS.map(({ src, alt }) => (
            <li
              key={src}
              className="w-[calc((100%-1rem)/2)] shrink-0 sm:w-[calc((100%-3.75rem)/4)] lg:w-[calc((100%-4.5rem)/4)]"
            >
              <div className="flex min-h-[4.5rem] items-center justify-center rounded-xl border border-slate-200/80 bg-slate-50 px-4 py-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                <Image
                  src={src}
                  alt={alt}
                  width={200}
                  height={56}
                  className="h-10 w-auto max-w-full object-contain object-center"
                />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
