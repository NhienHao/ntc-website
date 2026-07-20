import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Building2, Users, MapPin, Shield } from 'lucide-react';
import { img } from '../data/constants';
import { SectionTitle } from '../components/ui/SectionTitle';
import { StaggerContainer, StaggerItem } from '../components/ui/ScrollReveal';

const STRENGTHS = [
  {
    icon: Award,
    title: 'Kinh nghiệm 20+ năm',
    description:
      'Hơn 20 năm kinh nghiệm phát triển và quản lý KCN, là đơn vị tiên phong trong lĩnh vực hạ tầng công nghiệp tại Bình Dương.',
  },
  {
    icon: TrendingUp,
    title: 'Tài chính vững mạnh',
    description:
      'Vốn điều lệ 239 tỷ đồng, doanh thu hàng năm ổn định, khả năng tài chính vững mạnh đảm bảo triển khai các dự án quy mô lớn.',
  },
  {
    icon: Building2,
    title: 'Hạ tầng đồng bộ',
    description:
      'Hệ thống hạ tầng kỹ thuật đồng bộ, hiện đại gồm đường giao thông, cấp điện, cấp nước, xử lý nước thải đạt chuẩn quốc gia.',
  },
  {
    icon: Users,
    title: 'Đội ngũ chuyên nghiệp',
    description:
      'Đội ngũ cán bộ, nhân viên giàu kinh nghiệm, được đào tạo bài bản, sẵn sàng hỗ trợ nhà đầu tư 24/7.',
  },
  {
    icon: MapPin,
    title: 'Vị trí chiến lược',
    description:
      'Tọa lạc tại vùng kinh tế trọng điểm phía Nam, kết nối thuận lợi với các cảng biển, sân bay và trung tâm kinh tế lớn.',
  },
  {
    icon: Shield,
    title: 'Thành viên VRG',
    description:
      'Là thành viên của Tập đoàn Công nghiệp Cao su Việt Nam (VRG) – một trong những tập đoàn kinh tế hàng đầu quốc gia.',
  },
];

export default function StrengthsPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[35vh] min-h-[280px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${img('strengths-banner.jpg')})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-forest-900/80 to-forest-950/60" />
        </div>
        <div className="relative text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Tiềm lực công ty
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/80"
          >
            Nền tảng vững chắc cho sự phát triển bền vững
          </motion.p>
        </div>
      </section>

      {/* Strengths Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            title="Thế mạnh của chúng tôi"
            subtitle="Những yếu tố tạo nên sự khác biệt và uy tín của KCN Nam Tân Uyên"
          />

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            staggerDelay={0.1}
          >
            {STRENGTHS.map((strength, idx) => {
              const Icon = strength.icon;
              const isHovered = hoveredId === idx;

              return (
                <StaggerItem key={idx}>
                  <motion.div
                    onHoverStart={() => setHoveredId(idx)}
                    onHoverEnd={() => setHoveredId(null)}
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: isHovered
                        ? 'perspective(1000px) rotateX(2deg) rotateY(-2deg)'
                        : 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                    }}
                    className="relative group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-sand-200 overflow-hidden"
                  >
                    {/* Background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        animate={isHovered ? { scale: 1.1, rotate: -5 } : { scale: 1, rotate: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-14 h-14 rounded-xl bg-primary-100 group-hover:bg-primary-500 flex items-center justify-center mb-6 transition-colors duration-300"
                      >
                        <Icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors duration-300" />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-forest-900 mb-3 group-hover:text-primary-700 transition-colors">
                        {strength.title}
                      </h3>

                      {/* Description */}
                      <p className="text-forest-500 text-sm leading-relaxed">
                        {strength.description}
                      </p>
                    </div>

                    {/* Decorative corner */}
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-primary-500/5 group-hover:bg-primary-500/10 transition-colors duration-500" />
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
