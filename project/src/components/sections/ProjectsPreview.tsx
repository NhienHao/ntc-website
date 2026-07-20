import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import { PARKS } from '../../data/projects';
import { SectionTitle } from '../ui/SectionTitle';
import { ScrollReveal } from '../ui/ScrollReveal';

export function ProjectsPreview() {
  return (
    <section className="py-28 relative">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-50/50 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Cac du an KCN"
          subtitle="Ba du an KCN voi tong dien tich 996 ha va tong von dau tu 680 trieu USD"
        />

        {/* Bento-style grid - varied card sizes */}
        <div className="grid md:grid-cols-12 gap-6">
          {/* Featured large card */}
          <ScrollReveal direction="left" className="md:col-span-7">
            <motion.div
              whileHover={{ y: -6 }}
              className="group relative h-full bg-white rounded-3xl overflow-hidden border border-sand-200 hover:border-primary-200 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="grid md:grid-cols-2 h-full">
                <div className="relative h-64 md:h-full overflow-hidden">
                  <img
                    src={PARKS[0].image}
                    alt={PARKS[0].name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 md:bg-gradient-to-l" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="inline-block w-fit px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700 mb-4">
                    {PARKS[0].status}
                  </span>
                  <h3 className="text-2xl font-display text-forest-900 mb-3">{PARKS[0].name}</h3>
                  <p className="text-sm text-forest-600 mb-4 leading-relaxed">{PARKS[0].description}</p>
                  <div className="flex items-center gap-2 text-sm text-forest-500 mb-6">
                    <MapPin size={14} className="text-primary-500" />
                    {PARKS[0].area} ha | {PARKS[0].location.desc}
                  </div>
                  <Link
                    to={`/du-an/${PARKS[0].slug}`}
                    className="group/link inline-flex items-center gap-2 text-sm font-medium text-primary-700 hover:text-primary-600"
                  >
                    Chi tiet du an
                    <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Two stacked smaller cards */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {PARKS.slice(1).map((park, i) => (
              <ScrollReveal key={park.id} direction="right" delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-sand-200 hover:border-primary-200 shadow-sm hover:shadow-lg transition-all duration-500"
                >
                  <div className="flex gap-0">
                    <div className="relative w-36 md:w-40 shrink-0 overflow-hidden">
                      <img
                        src={park.image}
                        alt={park.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5 flex flex-col justify-center flex-1 min-w-0">
                      <span className={`inline-block w-fit px-2.5 py-0.5 rounded-full text-xs font-medium mb-2 ${
                        park.status === 'Đã lấp đầy'
                          ? 'bg-primary-100 text-primary-700'
                          : 'bg-accent-100 text-accent-700'
                      }`}>
                        {park.status}
                      </span>
                      <h3 className="text-base font-semibold text-forest-900 mb-1.5 truncate group-hover:text-primary-700 transition-colors">
                        {park.name}
                      </h3>
                      <p className="text-xs text-forest-500 mb-3">{park.area} ha</p>
                      <div className="flex flex-wrap gap-1.5">
                        {park.features.slice(0, 2).map((f) => (
                          <span key={f} className="flex items-center gap-1 text-[11px] text-forest-600 bg-sand-100 px-2 py-0.5 rounded-full">
                            <CheckCircle2 size={10} className="text-primary-500" />
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal className="text-center mt-14">
          <Link
            to="/du-an"
            className="group inline-flex items-center gap-3 px-7 py-3.5 border-2 border-forest-800 text-forest-800 rounded-full font-medium transition-all duration-300 hover:bg-forest-800 hover:text-white hover:-translate-y-0.5"
          >
            Xem tat ca du an
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
