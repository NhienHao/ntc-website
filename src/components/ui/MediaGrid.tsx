import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import type { MediaItem } from "@/content/media";

export function MediaGrid({
  items,
  showPlay = false,
}: {
  items: readonly MediaItem[];
  showPlay?: boolean;
}) {
  return (
    <div className="wrap grid gap-5 py-10 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <Reveal key={`${item.href}-${i}`} delay={i * 0.04}>
          <article className="surface-panel overflow-hidden transition hover:-translate-y-1">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block aspect-[16/10] overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {showPlay ? (
                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[var(--green)] text-white shadow-lg">
                    ▶
                  </span>
                </span>
              ) : null}
            </a>
            <div className="p-4">
              <time className="text-xs font-semibold uppercase tracking-wide text-[var(--green-dark)]">
                {item.date}
              </time>
              <h2 className="mt-2 text-base font-semibold leading-snug">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--green-dark)]"
                >
                  {item.title}
                </a>
              </h2>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
