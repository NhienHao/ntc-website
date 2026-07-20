import { motion } from 'framer-motion';
import { TIMELINE_DATA } from '../data/content';
import { img } from '../data/constants';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { TextReveal } from '../components/ui/TextReveal';

export default function HistoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[320px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center ken-burns" style={{ backgroundImage: `url(${img('history-banner.jpg')})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950/50 to-forest-950/70" />
        </div>
        <div className="relative text-center text-white px-6">
          <TextReveal>
            <h1 className="font-display text-4xl md:text-6xl mb-4">Lich su hinh thanh</h1>
          </TextReveal>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-lg text-sand-200 font-light">
            Hanh trinh 20 nam phat trien
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-[50px] md:h-[80px]"><path d="M0,40 C360,80 720,20 1080,60 C1260,80 1380,40 1440,50 L1440,80 L0,80 Z" className="fill-sand-50" /></svg>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative">
            {/* Central line with gradient */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2">
              <div className="h-full bg-gradient-to-b from-primary-300 via-primary-500 to-primary-300 rounded-full" />
            </div>

            {TIMELINE_DATA.map((period) => (
              <div key={period.period} className="mb-20">
                {/* Period header */}
                <ScrollReveal>
                  <div className="relative flex items-center mb-10">
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-primary-500 border-4 border-sand-50 z-10 shadow-lg shadow-primary-500/30" />
                    <div className="ml-16 md:ml-0 md:text-center md:w-full">
                      <span className="inline-block px-5 py-2 bg-forest-800 text-white text-sm font-medium rounded-full shadow-lg">
                        {period.period}
                      </span>
                      <h3 className="text-xl font-display text-forest-900 mt-3">{period.title}</h3>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Events */}
                {period.events.map((event, eIdx) => (
                  <ScrollReveal key={event.year + eIdx} delay={eIdx * 0.08}>
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      className={`relative flex items-start mb-6 ${eIdx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    >
                      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary-300 border-2 border-sand-50 z-10 mt-5" />
                      <div className={`ml-16 md:ml-0 md:w-[44%] ${eIdx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                        <div className="bg-white rounded-2xl p-5 shadow-sm border border-sand-200 hover:border-primary-200 hover:shadow-md transition-all duration-300">
                          <span className="text-sm font-display text-primary-600">{event.year}</span>
                          <p className="text-forest-700 mt-1.5 leading-relaxed">{event.text}</p>
                        </div>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
