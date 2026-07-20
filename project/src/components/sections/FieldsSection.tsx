import { motion } from 'framer-motion';
import { Leaf, Users, Shield, Recycle, Building2, Globe } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { SUSTAINABILITY_POLICIES } from '../../data/constants';
import { StaggerContainer, StaggerItem } from '../ui/ScrollReveal';

const iconMap: Record<string, React.ElementType> = { Leaf, Users, Shield, Recycle, Building2, Globe };

export function FieldsSection() {
  return (
    <section className="relative py-28 bg-forest-950 overflow-hidden">
      {/* Organic background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-[10%] w-[400px] h-[400px] bg-primary-500/8 blob-shape" />
        <div className="absolute bottom-10 right-[5%] w-[500px] h-[500px] bg-accent-500/5 blob-shape" style={{ animationDelay: '4s' }} />
        <div className="absolute inset-0 topo-pattern opacity-30" />
      </div>

      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-[50px] md:h-[80px]">
          <path d="M0,40 C240,80 720,0 1440,50 L1440,0 L0,0 Z" className="fill-sand-50" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-8">
        <SectionTitle
          title="Phat trien ben vung"
          subtitle="Cam ket vi mot tuong lai xanh, ben vung va thinh vuong"
          dark
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.1}>
          {SUSTAINABILITY_POLICIES.map((policy) => {
            const Icon = iconMap[policy.icon];
            return (
              <StaggerItem key={policy.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative h-full"
                >
                  <div className="relative h-full bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-7 hover:bg-white/[0.08] transition-all duration-500 overflow-hidden">
                    {/* Hover glow */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl bg-primary-500/15 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary-500/25 transition-all duration-300">
                        <Icon className="text-primary-300" size={22} />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-3">{policy.title}</h3>
                      <p className="text-sand-400 text-sm leading-relaxed">{policy.desc}</p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-[50px] md:h-[80px]">
          <path d="M0,30 C480,80 960,0 1440,40 L1440,80 L0,80 Z" className="fill-sand-50" />
        </svg>
      </div>
    </section>
  );
}
