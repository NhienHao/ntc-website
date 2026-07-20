import { motion } from 'framer-motion';
import { SplitTextReveal } from './TextReveal';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  dark?: boolean;
  align?: 'left' | 'center';
}

export function SectionTitle({ title, subtitle, dark = false, align = 'center' }: SectionTitleProps) {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {/* Decorative leaf icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`inline-block mb-4 ${align === 'center' ? '' : ''}`}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={dark ? 'text-primary-300' : 'text-primary-500'}>
          <path
            d="M16 2C8 2 2 10 2 18c0 6 4 10 8 12 0-4 2-8 6-12 4 4 6 8 6 12 4-2 8-6 8-12 0-8-6-16-14-16z"
            fill="currentColor"
            opacity="0.2"
          />
          <path
            d="M16 2C8 2 2 10 2 18c0 6 4 10 8 12 0-4 2-8 6-12 4 4 6 8 6 12 4-2 8-6 8-12 0-8-6-16-14-16z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </motion.div>

      <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl mb-4 ${
        dark ? 'text-white' : 'text-forest-900'
      }`}>
        <SplitTextReveal text={title} />
      </h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`h-[2px] w-20 origin-left ${align === 'center' ? 'mx-auto' : ''} ${
          dark ? 'bg-primary-400' : 'bg-primary-500'
        }`}
      />

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`mt-5 text-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${
            dark ? 'text-sand-300' : 'text-forest-600'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
