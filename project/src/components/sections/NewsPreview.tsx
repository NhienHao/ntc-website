import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { NEWS_ITEMS } from '../../data/content';
import { SectionTitle } from '../ui/SectionTitle';
import { ScrollReveal } from '../ui/ScrollReveal';

export function NewsPreview() {
  const featured = NEWS_ITEMS[0];
  const others = NEWS_ITEMS.slice(1);

  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Tin tuc & Su kien" subtitle="Cap nhat thong tin moi nhat" />

        {/* Asymmetric bento layout */}
        <div className="grid md:grid-cols-12 gap-6">
          {/* Featured news - large */}
          <ScrollReveal direction="left" className="md:col-span-7">
            <motion.article
              whileHover={{ y: -6 }}
              className="group relative h-full rounded-3xl overflow-hidden bg-forest-900 min-h-[400px]"
            >
              <img
                src={featured.image}
                alt={featured.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/40 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-8">
                <span className="inline-block w-fit px-3 py-1 rounded-full text-xs font-medium bg-primary-500/80 backdrop-blur text-white mb-4">
                  {featured.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-display text-white mb-3 leading-tight">
                  {featured.title}
                </h3>
                <p className="text-sand-300 text-sm mb-4 line-clamp-2 max-w-lg">{featured.excerpt}</p>
                <div className="flex items-center gap-2 text-xs text-sand-400">
                  <Calendar size={12} />
                  {featured.date}
                </div>
              </div>
            </motion.article>
          </ScrollReveal>

          {/* Smaller news cards stacked */}
          <div className="md:col-span-5 flex flex-col gap-5">
            {others.map((item, i) => (
              <ScrollReveal key={item.id} direction="right" delay={i * 0.12}>
                <motion.article
                  whileHover={{ x: 4 }}
                  className="group flex gap-4 p-4 bg-white rounded-2xl border border-sand-200 hover:border-primary-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col justify-center min-w-0">
                    <span className="text-[11px] text-primary-600 font-medium mb-1">{item.category}</span>
                    <h4 className="text-sm font-semibold text-forest-900 line-clamp-2 mb-1.5 group-hover:text-primary-700 transition-colors">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs text-forest-400">
                      <Calendar size={10} />
                      {item.date}
                    </div>
                  </div>
                </motion.article>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal className="text-center mt-12">
          <Link
            to="/thu-vien/tin-tuc"
            className="group inline-flex items-center gap-2 text-sm font-medium text-primary-700 hover:text-primary-600 transition-all"
          >
            Xem tat ca tin tuc
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
