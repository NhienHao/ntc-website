import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { img } from '../../data/constants';
import { ScrollReveal } from '../ui/ScrollReveal';
import { TextReveal } from '../ui/TextReveal';

export function AboutPreview() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary-100/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent-100/20 rounded-full blur-[80px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Image side - asymmetric layout */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left">
              <div className="relative">
                {/* Main image with organic shape mask */}
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-forest-900/10 aspect-[4/5]">
                  <img
                    src={img('about.jpg')}
                    alt="KCN Nam Tan Uyen toan canh"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/40 to-transparent" />

                  {/* Video play overlay */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-2xl backdrop-blur-sm">
                      <Play className="text-primary-700 ml-1" size={28} fill="currentColor" />
                    </div>
                    <div className="absolute inset-0 rounded-full border-2 border-white/40 animate-ping" />
                  </motion.button>
                </div>

                {/* Floating experience card */}
                <motion.div
                  initial={{ opacity: 0, x: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-6 -right-6 lg:-right-12"
                >
                  <div className="bg-forest-800 text-white p-6 rounded-2xl shadow-xl">
                    <p className="text-4xl font-display">20+</p>
                    <p className="text-sm text-sand-300 mt-1">Nam kinh nghiem</p>
                  </div>
                </motion.div>

                {/* Decorative leaf */}
                <div className="absolute -top-4 -left-4 w-20 h-20 opacity-20 leaf-float">
                  <svg viewBox="0 0 80 80" fill="none">
                    <path d="M40 5C20 5 5 25 5 45c0 15 10 25 20 30 0-10 5-20 15-30 10 10 15 20 15 30 10-5 20-15 20-30 0-20-15-40-35-40z" fill="currentColor" className="text-primary-500" />
                  </svg>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Content side */}
          <div className="lg:col-span-7">
            <div className="lg:pl-8">
              <TextReveal>
                <p className="text-sm font-medium text-primary-600 uppercase tracking-wider mb-4">Ve chung toi</p>
              </TextReveal>

              <h2 className="font-display text-4xl md:text-5xl text-forest-900 mb-8 leading-[1.2]">
                <TextReveal delay={0.1}>
                  <span>Cong ty CP Khu Cong nghiep</span>
                </TextReveal>
                <TextReveal delay={0.2}>
                  <span className="text-gradient-nature">Nam Tan Uyen</span>
                </TextReveal>
              </h2>

              <ScrollReveal delay={0.3}>
                <p className="text-forest-600 leading-relaxed mb-6 text-lg">
                  Duoc thanh lap nam 2004, KCN Nam Tan Uyen la thanh vien cua Tap doan Cong nghiep Cao su Viet Nam (VRG). 
                  Voi tong dien tich hon 1,016 ha qua 3 du an KCN, chung toi da thu hut hon 200 doanh nghiep trong va ngoai nuoc 
                  voi tong von dau tu dat 680 trieu USD.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <p className="text-forest-600 leading-relaxed mb-10">
                  Chung toi cam ket cung cap ha tang dong bo, dich vu chuyen nghiep, va moi truong dau tu 
                  ben vung, an toan cho cac nha dau tu trong nuoc va quoc te.
                </p>
              </ScrollReveal>

              {/* Feature highlights */}
              <ScrollReveal delay={0.5}>
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {[
                    { label: 'Tong dien tich', value: '1,016 ha' },
                    { label: 'Doanh nghiep', value: '200+' },
                    { label: 'Von FDI', value: '680 Tr USD' },
                    { label: 'Lao dong', value: '150,000+' },
                  ].map((item) => (
                    <div key={item.label} className="border-l-2 border-primary-300 pl-4">
                      <p className="text-2xl font-display text-forest-900">{item.value}</p>
                      <p className="text-sm text-forest-500">{item.label}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.6}>
                <Link
                  to="/gioi-thieu/tong-quan"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 bg-forest-800 text-white rounded-full font-medium transition-all duration-300 hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-700/20 hover:-translate-y-0.5"
                >
                  Tim hieu them
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
