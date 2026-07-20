import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPin,
  Calendar,
  Building,
  Users,
  Zap,
  ArrowRight,
  Droplets,
  Wifi,
  Route,
  ShieldCheck,
} from 'lucide-react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ui/ScrollReveal';
import { PARKS } from '../data/projects';

const iconMap: Record<string, React.ElementType> = {
  MapPin,
  Calendar,
  Building,
  Users,
  Zap,
};

const infraIconMap: Record<string, React.ElementType> = {
  'Điện': Zap,
  'Nước': Droplets,
  'Xử lý nước thải': Droplets,
  'Viễn thông': Wifi,
  'Giao thông': Route,
  'PCCC': ShieldCheck,
};

export default function ParkDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const park = PARKS.find((p) => p.slug === slug);

  if (!park) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-forest-900 mb-4">Không tìm thấy dự án</h1>
          <p className="text-forest-500 mb-8">Dự án bạn tìm kiếm không tồn tại hoặc đã bị xóa.</p>
          <Link
            to="/du-an"
            className="inline-flex items-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Quay lại danh sách dự án
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[450px] md:h-[550px] flex items-end overflow-hidden">
        <img
          src={park.image}
          alt={park.fullName}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-dark-900/40 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              {park.status}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">{park.fullName}</h1>
            <p className="text-gray-200 text-lg max-w-3xl">{park.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Highlights Row */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-5 gap-4" staggerDelay={0.1}>
            {park.highlights.map((highlight, idx) => {
              const Icon = iconMap[highlight.icon] || MapPin;
              return (
                <StaggerItem key={idx}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="text-center p-5 rounded-xl bg-sand-50 border border-sand-200 hover:border-primary-200 transition-colors"
                  >
                    <Icon className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                    <p className="text-sm text-forest-500 mb-1">{highlight.label}</p>
                    <p className="text-lg font-bold text-forest-900">{highlight.value}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-sand-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Sản phẩm cho thuê"
            subtitle="Đa dạng sản phẩm đáp ứng mọi nhu cầu đầu tư"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {park.products.map((product, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 0.15}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(0,0,0,0.08)' }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-sand-200"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                    <Building className="w-6 h-6 text-primary-500" />
                  </div>
                  <h3 className="text-xl font-bold text-forest-900 mb-4">{product.title}</h3>
                  <ul className="space-y-2">
                    {product.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-forest-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Vị trí chiến lược"
            subtitle={park.location.desc}
          />

          <ScrollReveal direction="up">
            <div className="max-w-3xl mx-auto bg-sand-50 rounded-2xl p-8 border border-sand-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-500" />
                </div>
                <h3 className="text-lg font-semibold text-forest-900">Khoảng cách kết nối</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {park.location.distances.map((distance, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="flex items-center gap-3 p-3 bg-white rounded-lg border border-sand-200"
                  >
                    <Route className="w-4 h-4 text-primary-500 shrink-0" />
                    <span className="text-forest-600 text-sm">{distance}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-20 bg-sand-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Hạ tầng kỹ thuật"
            subtitle="Hệ thống hạ tầng đồng bộ, hiện đại, đáp ứng tiêu chuẩn quốc tế"
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto" staggerDelay={0.1}>
            {park.infrastructure.map((item, idx) => {
              const Icon = infraIconMap[item.title] || Zap;
              return (
                <StaggerItem key={idx}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-white p-6 rounded-xl border border-sand-200 hover:border-primary-200 transition-all hover:shadow-md"
                  >
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-primary-500" />
                    </div>
                    <h4 className="text-lg font-semibold text-forest-900 mb-2">{item.title}</h4>
                    <p className="text-forest-500 text-sm">{item.desc}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Hình ảnh dự án"
            subtitle="Cận cảnh khu công nghiệp hiện đại"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {park.galleryImages.map((image, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative h-64 rounded-xl overflow-hidden shadow-md"
                >
                  <img
                    src={image}
                    alt={`${park.name} - Hình ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quan tâm đến dự án này?
            </h2>
            <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
              Liên hệ với chúng tôi để được tư vấn chi tiết về các cơ hội đầu tư tại {park.name}
            </p>
            <Link
              to="/lien-he"
              className="inline-flex items-center gap-2 bg-white text-primary-500 px-8 py-4 rounded-xl font-semibold hover:bg-sand-50 transition-colors shadow-lg"
            >
              Liên hệ ngay
              <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
