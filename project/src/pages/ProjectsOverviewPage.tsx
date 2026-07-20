import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, MapPin, CheckCircle } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ui/ScrollReveal';
import { PARKS } from '../data/projects';
import { img } from '../data/constants';

function AnimatedCounter({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function ProjectsOverviewPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src={img('hero-2.jpg')}
          alt="Tổng quan dự án"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/80 to-forest-950/40" />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Các Dự Án
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Hệ thống KCN Nam Tân Uyên - Điểm đến đầu tư hàng đầu tại Bình Dương
          </motion.p>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <ScrollReveal direction="up" delay={0}>
              <div className="text-center p-6 rounded-2xl bg-primary-50 border border-primary-100">
                <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">
                  <AnimatedCounter end={3} suffix="" duration={1500} />
                </div>
                <p className="text-forest-600 font-medium">Dự án</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.15}>
              <div className="text-center p-6 rounded-2xl bg-primary-50 border border-primary-100">
                <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">
                  <AnimatedCounter end={680} suffix=".07" duration={2000} />
                </div>
                <p className="text-forest-600 font-medium">Triệu USD vốn đầu tư</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <div className="text-center p-6 rounded-2xl bg-primary-50 border border-primary-100">
                <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">
                  <AnimatedCounter end={996} suffix=".36" duration={2000} />
                </div>
                <p className="text-forest-600 font-medium">Hecta diện tích</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Park Cards Grid */}
      <section className="py-20 bg-sand-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Hệ thống Khu Công nghiệp"
            subtitle="Ba khu công nghiệp quy mô lớn, hạ tầng đồng bộ, vị trí chiến lược"
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12" staggerDelay={0.15}>
            {PARKS.map((park) => (
              <StaggerItem key={park.id}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md border border-sand-200 h-full flex flex-col"
                >
                  {/* Card Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={park.image}
                      alt={park.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          park.status === 'Đã lấp đầy'
                            ? 'bg-red-100 text-red-700'
                            : 'bg-green-100 text-green-700'
                        }`}
                      >
                        {park.status}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-forest-900 mb-2">{park.name}</h3>
                    <div className="flex items-center gap-2 text-forest-500 mb-3">
                      <MapPin className="w-4 h-4 text-primary-500" />
                      <span className="text-sm">{park.area} {park.areaUnit}</span>
                    </div>
                    <p className="text-forest-500 text-sm mb-4 line-clamp-2">{park.description}</p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {park.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 text-xs bg-sand-100 text-forest-600 px-2 py-1 rounded-full"
                        >
                          <CheckCircle className="w-3 h-3 text-primary-500" />
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <Link
                      to={`/du-an/${park.slug}`}
                      className="mt-auto inline-flex items-center gap-2 text-primary-500 font-semibold hover:text-primary-600 transition-colors group"
                    >
                      Xem chi tiết
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
