"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LeafParticles } from "@/components/home/LeafParticles";
import { Parallax } from "@/components/motion/Parallax";
import { site } from "@/content/site";

const slides = [
  { src: "/assets/img/home/hero-1.jpg", alt: "Khu công nghiệp Nam Tân Uyên" },
  { src: "/assets/img/home/hero-2.jpg", alt: "Hạ tầng khu công nghiệp" },
  { src: "/assets/img/thu-vien-1-19b696e60b.jpg", alt: "Không gian xanh Nam Tân Uyên" },
  { src: "/assets/img/gioi-thieu-1-d4d20c9cd5.jpg", alt: "Tổng quan dự án" },
  { src: "/assets/img/cac-du-an-1-2395ac6b12.jpg", alt: "Các dự án KCN" },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const reduce = useReducedMotion();
  const canAnimate = ready && !reduce;

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6500);
    return () => clearInterval(id);
  }, []);

  const go = (n: number) =>
    setIndex(((n % slides.length) + slides.length) % slides.length);

  return (
    <section
      className="relative h-[min(86vh,720px)] overflow-hidden bg-[#111]"
      aria-label="Banner"
    >
      {canAnimate ? (
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="ken-burns absolute inset-[-4%]">
              <Image
                src={slides[index].src}
                alt={slides[index].alt}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <div className="absolute inset-0">
          <Image
            src={slides[index].src}
            alt={slides[index].alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(6,72,32,0.82)] via-[rgba(6,72,32,0.42)] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,72,32,0.55)] via-transparent to-black/15" />

      <LeafParticles />

      <div className="relative z-[3] flex h-full items-end">
        <div className="wrap w-full pb-20 pt-28">
          <Parallax speed={0.08}>
            <p
              className={`eyebrow !text-white/85 ${canAnimate ? "hero-fade-up" : ""}`}
              style={canAnimate ? { animationDelay: "0.1s" } : undefined}
            >
              Thành viên {site.parent}
            </p>
            <h1
              className={`section-title mt-4 max-w-3xl text-3xl text-white md:text-5xl lg:text-[3.4rem] ${canAnimate ? "hero-fade-up" : ""}`}
              style={canAnimate ? { animationDelay: "0.2s" } : undefined}
            >
              {site.name}
            </h1>
            <p
              className={`mt-4 max-w-xl text-base text-white/90 md:text-lg ${canAnimate ? "hero-fade-up" : ""}`}
              style={canAnimate ? { animationDelay: "0.3s" } : undefined}
            >
              Hệ sinh thái hạ tầng công nghiệp toàn diện — đồng hành cùng doanh nghiệp trên hành trình đầu tư và tăng trưởng bền vững.
            </p>
            <div
              className={`mt-8 flex flex-wrap gap-3 ${canAnimate ? "hero-fade-up" : ""}`}
              style={canAnimate ? { animationDelay: "0.4s" } : undefined}
            >
              <a href="/tu-van-dau-tu" className="btn-primary">
                Tư vấn đầu tư
              </a>
              <a
                href="/du-an"
                className="btn-ghost !border-white/40 !text-white hover:!bg-white/10"
              >
                Khám phá dự án
              </a>
            </div>
          </Parallax>
        </div>
      </div>

      <button
        type="button"
        className="absolute left-3 top-1/2 z-[4] grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/35 text-white backdrop-blur-sm"
        aria-label="Ảnh trước"
        onClick={() => go(index - 1)}
      >
        <ChevronLeft size={18} />
      </button>
      <button
        type="button"
        className="absolute right-3 top-1/2 z-[4] grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/35 text-white backdrop-blur-sm"
        aria-label="Ảnh sau"
        onClick={() => go(index + 1)}
      >
        <ChevronRight size={18} />
      </button>

      <div
        className="absolute bottom-6 left-1/2 z-[4] flex -translate-x-1/2 gap-2"
        role="tablist"
      >
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            aria-label={`Slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-7 bg-[var(--green)]" : "w-2.5 bg-white/50"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      {/* Nature wave cut into next section */}
      <div className="absolute inset-x-0 bottom-0 z-[4] text-[var(--bg)]" aria-hidden>
        <svg className="block h-12 w-full md:h-16" viewBox="0 0 1440 64" preserveAspectRatio="none">
          <path
            d="M0,32 C180,64 360,0 540,24 C720,48 900,64 1080,40 C1260,16 1350,8 1440,28 L1440,64 L0,64 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
