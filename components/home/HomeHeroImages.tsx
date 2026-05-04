import Image from "next/image";
import { FadeUp } from "@/components/motion/FadeUp";

/**
 * Layered hero artwork for the home page (`public/home/hero`).
 * Array order = fade-in sequence. `z-*` on each layer keeps stacking correct.
 */
const HERO_LAYERS = [
  {
    key: "graph",
    src: "/home/hero/graph.png",
    alt: "",
    boxClass:
      "pointer-events-none absolute left-[-20%] bottom-[20%] z-[20] h-[22%] w-[46%] sm:top-[22%] sm:h-[34%] sm:w-[60%]",
  },
  {
    key: "color-graph",
    src: "/home/hero/color-graph.png",
    alt: "",
    boxClass:
      "pointer-events-none absolute right-0 top-[14%] z-[20] h-[24%] w-[48%] sm:top-[-9%] sm:h-[36%] sm:w-[56%]",
  },
  {
    key: "ring-ui",
    src: "/home/hero/ring-ui.png",
    alt: "",
    boxClass: "pointer-events-none absolute inset-0 z-[7]",
  },
  {
    key: "toggle",
    src: "/home/hero/toggle.png",
    alt: "",
    boxClass:
      "pointer-events-none absolute bottom-[10%] right-[4%] z-[20] h-[20%] w-[34%] sm:bottom-[-8%] sm:right-[6%] sm:h-[32%] sm:w-[42%]",
  },
] as const;

const STAGGER_SEC = 0.1;
const BASE_DELAY_SEC = 0.04;

/**
 * Right-column hero artwork for the home page (no outer section — use inside `Hero` with `visual` prop).
 */
export function HomeHeroArtboard() {
  return (
    <div
      className="relative mx-auto w-full min-w-0 max-w-[min(100%,520px)] sm:max-w-[min(100%,580px)] lg:max-w-none"
      aria-hidden
    >
      <div className="relative aspect-[786/728] w-full overflow-visible">
        {HERO_LAYERS.map((layer, index) => (
          <FadeUp
            key={layer.key}
            delay={BASE_DELAY_SEC + index * STAGGER_SEC}
            className={layer.boxClass}
            y={18}
          >
            <div className="relative h-full w-full">
              <Image
                src={layer.src}
                alt={layer.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 90vw, 45vw"
                priority={layer.key === "graph" || layer.key === "ring-ui"}
                unoptimized
              />
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}
