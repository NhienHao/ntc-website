import { motion } from 'framer-motion';
import { Eye, Target, Heart, Award, Sparkles, TrendingUp } from 'lucide-react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ui/ScrollReveal';
import { ABOUT_OVERVIEW } from '../data/content';
import { img } from '../data/constants';
import { TextReveal } from '../components/ui/TextReveal';

export default function AboutOverviewPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center ken-burns" style={{ backgroundImage: `url(${img('about-banner.jpg')})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950/60 via-forest-950/30 to-forest-950/70" />
        </div>
        <div className="relative text-center text-white px-6">
          <TextReveal>
            <h1 className="font-display text-4xl md:text-6xl mb-4">Gioi thieu tong quan</h1>
          </TextReveal>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-lg text-sand-200 font-light">
            Cong ty CP Khu Cong nghiep Nam Tan Uyen
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-[50px] md:h-[80px]"><path d="M0,40 C360,80 720,20 1080,60 C1260,80 1380,40 1440,50 L1440,80 L0,80 Z" className="fill-sand-50" /></svg>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-3xl p-9 h-full border border-primary-200/50">
                <div className="w-14 h-14 rounded-2xl bg-primary-600 flex items-center justify-center mb-6">
                  <Eye className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-display text-forest-900 mb-4">Tam nhin</h3>
                <p className="text-forest-600 leading-relaxed">{ABOUT_OVERVIEW.vision}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="bg-gradient-to-br from-accent-50 to-accent-100/50 rounded-3xl p-9 h-full border border-accent-200/50">
                <div className="w-14 h-14 rounded-2xl bg-accent-600 flex items-center justify-center mb-6">
                  <Target className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-display text-forest-900 mb-4">Su menh</h3>
                <p className="text-forest-600 leading-relaxed">{ABOUT_OVERVIEW.mission}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="Gia tri cot loi" />
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {ABOUT_OVERVIEW.coreValues.map((val, i) => {
              const icons = [Award, Heart, Sparkles, TrendingUp];
              const Icon = icons[i];
              return (
                <StaggerItem key={val.title}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="group bg-sand-50 rounded-2xl p-7 border border-sand-200 hover:border-primary-200 h-full text-center transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary-500 transition-colors duration-300">
                      <Icon className="text-primary-600 group-hover:text-white transition-colors" size={24} />
                    </div>
                    <h4 className="text-lg font-semibold text-forest-900 mb-3">{val.title}</h4>
                    <p className="text-sm text-forest-600 leading-relaxed">{val.desc}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ESG */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="Cam ket ESG" subtitle="Environment - Social - Governance" />
          <div className="grid md:grid-cols-3 gap-8">
            {ABOUT_OVERVIEW.esgCommitments.map((esg, i) => {
              const colors = ['bg-primary-500', 'bg-blue-500', 'bg-accent-500'];
              const bgColors = ['bg-primary-50', 'bg-blue-50', 'bg-accent-50'];
              const labels = ['Moi truong', 'Xa hoi', 'Quan tri'];
              return (
                <ScrollReveal key={esg.category} delay={i * 0.15}>
                  <div className={`rounded-2xl ${bgColors[i]} border border-sand-200/50 p-7`}>
                    <div className={`w-3 h-3 rounded-full ${colors[i]} mb-4`} />
                    <h4 className="text-lg font-display text-forest-900 mb-5">{labels[i]}</h4>
                    <ul className="space-y-3">
                      {esg.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-forest-600">
                          <div className={`w-1.5 h-1.5 rounded-full ${colors[i]} mt-2 shrink-0`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
