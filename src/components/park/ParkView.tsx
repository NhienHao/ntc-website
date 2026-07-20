"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import type { ParkData } from "@/content/parks";

export function ParkView({ park }: { park: ParkData }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (park.slides.length < 2) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % park.slides.length),
      5000,
    );
    return () => clearInterval(id);
  }, [park.slides.length]);

  return (
    <article className="wrap space-y-12 py-10">
      <Reveal>
        <header className="text-center">
          <h1 className="section-title text-2xl text-[var(--green-deep)] md:text-4xl">
            {park.title}
          </h1>
          <p className="mt-3 text-[var(--muted)]">{park.subtitle}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {park.highlights.map((h) => (
              <div
                key={h.label}
                className="surface-panel flex items-center gap-3 p-4 text-left"
              >
                {h.icon ? (
                  <Image src={h.icon} alt="" width={40} height={40} />
                ) : (
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-[var(--green-soft)] text-[var(--green-dark)]">
                    ★
                  </div>
                )}
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
                    {h.label}
                  </div>
                  {h.value ? (
                    <div className="text-lg font-bold text-[var(--green-dark)]">
                      {h.value}
                    </div>
                  ) : null}
                  {h.sublabel ? (
                    <div className="text-sm text-[var(--ink)]">{h.sublabel}</div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </header>
      </Reveal>

      {park.masterPlan ? (
        <Reveal>
          <section>
            <h2 className="section-title mb-4 text-xl text-[var(--green-deep)]">
              Mặt bằng tổng thể
            </h2>
            <div className="overflow-hidden rounded-2xl shadow-[var(--shadow)]">
              <Image
                src={park.masterPlan}
                alt="Mặt bằng tổng thể"
                width={1400}
                height={900}
                className="w-full object-cover"
              />
            </div>
          </section>
        </Reveal>
      ) : null}

      <Reveal>
        <section>
          <h2 className="section-title mb-4 text-xl text-[var(--green-deep)]">
            Sản phẩm
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {park.products.map((p) => (
              <div key={p.label} className="overflow-hidden rounded-2xl shadow-[var(--shadow)]">
                <Image
                  src={p.image}
                  alt={p.label}
                  width={800}
                  height={520}
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="bg-[var(--green-dark)] px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-white">
                  {p.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section>
          <h2 className="section-title mb-4 text-xl text-[var(--green-deep)]">Vị trí</h2>
          <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr]">
            <div className="overflow-hidden rounded-2xl">
              <iframe
                title={`Bản đồ ${park.title}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-[320px] w-full border-0"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(park.mapQuery)}&z=14&output=embed`}
              />
            </div>
            <div className="surface-panel p-5">
              <h3 className="mb-4 font-bold text-[var(--green-deep)]">
                Kết nối giao thông
              </h3>
              <ul className="space-y-3">
                {park.connectivity.map((c) => (
                  <li
                    key={c.label}
                    className="flex items-center justify-between gap-3 border-b border-[var(--line)] pb-2 text-sm"
                  >
                    <span>{c.label}</span>
                    <strong className="text-[var(--green-dark)]">{c.value}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section>
          <h2 className="section-title mb-4 text-xl text-[var(--green-deep)]">
            Cơ sở hạ tầng
          </h2>
          <div className="relative overflow-hidden rounded-2xl bg-black">
            <div className="relative aspect-[16/9]">
              {park.slides.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt="Cơ sở hạ tầng"
                  fill
                  className={`object-cover transition-opacity duration-700 ${
                    i === index ? "opacity-100" : "opacity-0"
                  }`}
                  sizes="100vw"
                  priority={i === 0}
                />
              ))}
            </div>
            {park.slides.length > 1 ? (
              <>
                <button
                  type="button"
                  aria-label="Trước"
                  className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white"
                  onClick={() =>
                    setIndex((i) => (i - 1 + park.slides.length) % park.slides.length)
                  }
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  aria-label="Sau"
                  className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white"
                  onClick={() => setIndex((i) => (i + 1) % park.slides.length)}
                >
                  <ChevronRight size={18} />
                </button>
              </>
            ) : null}
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {park.features.map((f) => (
              <div key={f.text} className="surface-panel p-4 text-center">
                <Image
                  src={f.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="mx-auto"
                />
                <p className="mt-3 text-sm">{f.text}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section>
          <h2 className="section-title mb-4 text-xl text-[var(--green-deep)]">
            E-Brochure
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {park.brochures.map((b) => (
              <a
                key={b.label}
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                className="surface-panel overflow-hidden transition hover:-translate-y-1"
              >
                <Image
                  src={b.image}
                  alt={b.label}
                  width={640}
                  height={400}
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="p-4 text-center font-semibold">{b.label}</div>
              </a>
            ))}
          </div>
        </section>
      </Reveal>
    </article>
  );
}
