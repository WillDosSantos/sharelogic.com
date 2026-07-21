import Image from "next/image";
import { FadeUp } from "@/components/motion/FadeUp";

/**
 * Right-column hero artwork for the home page (no outer section — use inside `Hero` with `visual` prop).
 */
export function HomeHeroArtboard() {
  return (
    <FadeUp delay={0.1} className="relative mx-auto w-full min-w-0 lg:scale-[0.85] lg:origin-center" aria-hidden>
      <Image
        src="/home/hero/home-hero-product.svg"
        alt=""
        width={800}
        height={600}
        className="h-auto w-full object-contain"
        priority
        unoptimized
      />
    </FadeUp>
  );
}
