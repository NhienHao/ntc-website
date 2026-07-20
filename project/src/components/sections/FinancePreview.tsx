import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, BarChart3, PieChart } from 'lucide-react';
import { COMPANY } from '../../data/constants';
import { useCountUp } from '../../hooks/useAnimations';
import { SectionTitle } from '../ui/SectionTitle';
import { ScrollReveal } from '../ui/ScrollReveal';

const INDUSTRY_DATA = [
  { label: 'Che bien go', pct: 25, color: 'from-primary-400 to-primary-600' },
  { label: 'Dien tu', pct: 20, color: 'from-blue-400 to-blue-600' },
  { label: 'Thuc pham', pct: 18, color: 'from-accent-400 to-accent-600' },
  { label: 'Co khi', pct: 15, color: 'from-forest-400 to-forest-600' },
  { label: 'Det may', pct: 12, color: 'from-rose-400 to-rose-500' },
  { label: 'Khac', pct: 10, color: 'from-sand-400 to-sand-600' },
];

export function FinancePreview() {
  const { count: revenue, ref } = useCountUp(715);

  return (
    <section className="py-28 bg-sand-100/50 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-100/20 rounded-full blur-[200px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Tai chinh & Dau tu" subtitle="Ket qua kinh doanh noi bat" />

        {/* Finance cards - horizontal layout */}
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {[
              { icon: DollarSign, label: 'Von dieu le', value: COMPANY.capital, accent: 'bg-primary-500' },
              { icon: TrendingUp, label: 'Doanh thu', value: `${revenue} ty`, accent: 'bg-accent-500' },
              { icon: BarChart3, label: 'Loi nhuan', value: COMPANY.profit, accent: 'bg-blue-500' },
              { icon: PieChart, label: 'Tong von FDI', value: '680 Tr USD', accent: 'bg-forest-500' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="group bg-white rounded-2xl p-6 border border-sand-200 hover:border-primary-200 transition-all duration-300 hover:shadow-lg"
              >
                <div className={`w-10 h-10 rounded-xl ${item.accent} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon size={18} className="text-white" />
                </div>
                <p className="text-sm text-forest-500 mb-1">{item.label}</p>
                <p className="text-xl font-display text-forest-900">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Industry breakdown - organic horizontal bars */}
        <ScrollReveal>
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-sand-200 shadow-sm">
            <h3 className="font-display text-2xl text-forest-900 mb-8">Co cau nganh nghe dau tu</h3>
            <div className="space-y-5">
              {INDUSTRY_DATA.map((item, i) => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className="text-sm text-forest-600 w-24 shrink-0">{item.label}</span>
                  <div className="flex-1 h-8 bg-sand-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, ease: [0.33, 1, 0.68, 1] }}
                      className={`h-full bg-gradient-to-r ${item.color} rounded-full flex items-center justify-end pr-3`}
                    >
                      <span className="text-xs font-medium text-white">{item.pct}%</span>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
