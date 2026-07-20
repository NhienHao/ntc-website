import { motion } from 'framer-motion';
import { PARTNERS_LOGOS } from '../../data/constants';

export function PartnersSection() {
  return (
    <section className="py-20 border-t border-sand-200">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-forest-500 font-medium mb-10 uppercase tracking-[0.2em]"
        >
          Doi tac & Khach hang tieu bieu
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14">
          {PARTNERS_LOGOS.map((logo, i) => (
            <motion.img
              key={i}
              src={logo}
              alt={`Partner ${i + 1}`}
              className="h-9 md:h-11 w-auto grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-500"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 0.4, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
