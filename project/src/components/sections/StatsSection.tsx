import { motion } from 'framer-motion';
import { MapPin, Building2, Timer, TrendingUp } from 'lucide-react';
import { useCountUp } from '../../hooks/useAnimations';
import { STATS } from '../../data/constants';

const icons = [MapPin, Building2, Timer, TrendingUp];

function StatCard({ stat, index }: { stat: typeof STATS[0]; index: number }) {
  const { count, ref } = useCountUp(stat.value);
  const Icon = icons[index];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.33, 1, 0.68, 1] }}
      className="relative group"
    >
      <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-sand-200/60 hover:border-primary-200 transition-all duration-500 hover:shadow-xl hover:shadow-primary-500/5 hover:-translate-y-1">
        {/* Organic accent shape */}
        <div className="absolute -top-3 -right-3 w-16 h-16 bg-primary-100 rounded-full opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-500" />

        <div className="relative">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
            <Icon className="text-primary-700" size={22} />
          </div>
          <div className="text-4xl font-display text-forest-900 mb-1">
            {count}
            <span className="text-primary-500">{stat.suffix}</span>
          </div>
          <p className="text-sm text-forest-600 font-medium">{stat.label}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <section className="relative py-20 -mt-12 z-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
