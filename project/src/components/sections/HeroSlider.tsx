import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { HERO_SLIDES } from '../../data/constants';
import { LeafParticles } from '../ui/LeafParticles';

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 600], [0, 200]);
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const textY = useTransform(scrollY, [0, 400], [0, 80]);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next, current]);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Ken Burns background images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
          className="absolute inset-0"
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center ken-burns"
            style={{
              backgroundImage: `url(${HERO_SLIDES[current].image})`,
              y: parallaxY,
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Nature-inspired gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950/30 via-transparent to-forest-950/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950/40 via-transparent to-transparent" />

      {/* Floating leaf particles */}
      <LeafParticles count={8} />

      {/* Content with parallax */}
      <motion.div
        className="relative h-full flex flex-col items-center justify-center text-center z-10 px-6"
        style={{ opacity: textOpacity, y: textY }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl"
          >
            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-16 h-[1px] bg-primary-300 mx-auto mb-8 origin-center"
            />

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
              className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[1.1]"
              style={{ textShadow: '0 4px 30px rgba(0,0,0,0.3)' }}
            >
              {HERO_SLIDES[current].title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-lg md:text-xl text-sand-200 mb-12 max-w-2xl mx-auto font-light tracking-wide"
            >
              {HERO_SLIDES[current].subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/du-an"
                className="group px-8 py-4 bg-primary-600 text-white rounded-full font-medium transition-all duration-300 hover:bg-primary-500 hover:shadow-xl hover:shadow-primary-600/30 hover:-translate-y-0.5"
              >
                <span className="flex items-center gap-2">
                  Kham pha du an
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </a>
              <a
                href="/lien-he"
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-medium transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5"
              >
                Lien he tu van
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Slide indicators - organic dots */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className="group relative"
            aria-label={`Slide ${idx + 1}`}
          >
            <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
              idx === current
                ? 'bg-primary-400 scale-150'
                : 'bg-white/40 hover:bg-white/70'
            }`} />
            {idx === current && (
              <motion.div
                layoutId="hero-indicator"
                className="absolute -inset-1.5 rounded-full border border-primary-400/50"
              />
            )}
          </button>
        ))}
      </div>

      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="text-white/60" size={28} />
      </motion.div>

      {/* Bottom organic wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none" className="w-full h-[60px] md:h-[80px]">
          <path
            d="M0,60 C360,100 720,20 1080,60 C1260,80 1380,40 1440,50 L1440,100 L0,100 Z"
            className="fill-sand-50"
          />
        </svg>
      </div>
    </section>
  );
}
