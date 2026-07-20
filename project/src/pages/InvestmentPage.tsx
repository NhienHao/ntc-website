import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Building2,
  Headphones,
  Users,
  BadgePercent,
  ShieldCheck,
  ArrowRight,
  Phone,
  Mail,
  ClipboardList,
  Search,
  FileSignature,
  Rocket,
} from 'lucide-react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ui/ScrollReveal';
import { COMPANY, img } from '../data/constants';

const BENEFITS = [
  {
    icon: MapPin,
    title: 'Vị trí chiến lược',
    desc: 'Nằm tại trung tâm vùng kinh tế trọng điểm phía Nam, kết nối thuận tiện TP.HCM và các cảng biển lớn.',
  },
  {
    icon: Building2,
    title: 'Hạ tầng đồng bộ',
    desc: 'Hệ thống hạ tầng kỹ thuật hiện đại, đạt chuẩn quốc tế: điện, nước, xử lý nước thải, viễn thông.',
  },
  {
    icon: Headphones,
    title: 'Dịch vụ one-stop',
    desc: 'Hỗ trợ trọn gói từ thủ tục pháp lý, giấy phép đầu tư đến triển khai xây dựng.',
  },
  {
    icon: Users,
    title: 'Nguồn nhân lực dồi dào',
    desc: 'Tiếp cận nguồn lao động trẻ, dồi dào với hơn 150,000 lao động trong khu vực.',
  },
  {
    icon: BadgePercent,
    title: 'Ưu đãi đầu tư',
    desc: 'Chính sách ưu đãi hấp dẫn về thuế, giá thuê đất cạnh tranh cho nhà đầu tư chiến lược.',
  },
  {
    icon: ShieldCheck,
    title: 'An ninh 24/7',
    desc: 'Hệ thống an ninh chuyên nghiệp, camera giám sát toàn khu, đội bảo vệ hoạt động 24/7.',
  },
];

const PROCESS_STEPS = [
  {
    icon: Search,
    step: '01',
    title: 'Tìm hiểu',
    desc: 'Tìm hiểu thông tin về KCN, chính sách ưu đãi và điều kiện đầu tư.',
  },
  {
    icon: ClipboardList,
    step: '02',
    title: 'Đăng ký',
    desc: 'Nộp hồ sơ đăng ký đầu tư và các tài liệu liên quan.',
  },
  {
    icon: MapPin,
    step: '03',
    title: 'Khảo sát',
    desc: 'Khảo sát thực địa, đánh giá vị trí và hạ tầng kỹ thuật.',
  },
  {
    icon: FileSignature,
    step: '04',
    title: 'Ký hợp đồng',
    desc: 'Thỏa thuận điều khoản và ký kết hợp đồng thuê đất/nhà xưởng.',
  },
  {
    icon: Rocket,
    step: '05',
    title: 'Triển khai',
    desc: 'Bàn giao mặt bằng, hỗ trợ xây dựng và đưa vào hoạt động.',
  },
];

export default function InvestmentPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src={img('hero-1.jpg')}
          alt="Tư vấn đầu tư"
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
            Tư Vấn Đầu Tư
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Đồng hành cùng nhà đầu tư từ ý tưởng đến hiện thực hóa dự án
          </motion.p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Lợi thế đầu tư"
            subtitle="Những lý do hàng đầu để lựa chọn KCN Nam Tân Uyên"
          />

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            staggerDelay={0.1}
          >
            {BENEFITS.map((benefit, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: '0 16px 32px rgba(0,0,0,0.08)' }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-8 rounded-2xl border border-sand-200 shadow-sm hover:border-primary-200 transition-colors h-full"
                >
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-5">
                    <benefit.icon className="w-7 h-7 text-primary-500" />
                  </div>
                  <h3 className="text-xl font-bold text-forest-900 mb-3">{benefit.title}</h3>
                  <p className="text-forest-500 leading-relaxed">{benefit.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Investment Process Timeline */}
      <section className="py-20 bg-sand-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Quy trình đầu tư"
            subtitle="5 bước đơn giản để trở thành nhà đầu tư tại KCN Nam Tân Uyên"
          />

          <div className="max-w-5xl mx-auto">
            {/* Desktop Timeline */}
            <div className="hidden md:block relative">
              {/* Timeline Line */}
              <div className="absolute top-16 left-0 right-0 h-0.5 bg-primary-200" />

              <div className="grid grid-cols-5 gap-4 relative">
                {PROCESS_STEPS.map((step, idx) => (
                  <ScrollReveal key={idx} direction="up" delay={idx * 0.12}>
                    <div className="flex flex-col items-center text-center">
                      {/* Icon Circle */}
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-14 h-14 bg-primary-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary-500/30 relative z-10"
                      >
                        <step.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      {/* Step Number */}
                      <span className="text-sm font-bold text-primary-500 mb-2">{step.step}</span>
                      {/* Title */}
                      <h4 className="text-base font-bold text-forest-900 mb-2">{step.title}</h4>
                      {/* Description */}
                      <p className="text-sm text-forest-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden space-y-6">
              {PROCESS_STEPS.map((step, idx) => (
                <ScrollReveal key={idx} direction="left" delay={idx * 0.1}>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-primary-500/30">
                        <step.icon className="w-5 h-5 text-white" />
                      </div>
                      {idx < PROCESS_STEPS.length - 1 && (
                        <div className="w-0.5 h-full bg-primary-200 mt-2" />
                      )}
                    </div>
                    <div className="pb-8">
                      <span className="text-xs font-bold text-primary-500">{step.step}</span>
                      <h4 className="text-lg font-bold text-forest-900 mb-1">{step.title}</h4>
                      <p className="text-sm text-forest-500">{step.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-forest-900 to-dark-800">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Sẵn sàng đầu tư?
              </h2>
              <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                Đội ngũ chuyên viên của chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7. Liên hệ ngay để được tư vấn miễn phí.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto mb-10">
                <motion.a
                  href={`tel:${COMPANY.phone}`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20 hover:border-primary-400 transition-colors"
                >
                  <div className="w-11 h-11 bg-primary-500 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-gray-400 text-xs">Hotline</p>
                    <p className="text-white font-semibold">{COMPANY.phone}</p>
                  </div>
                </motion.a>

                <motion.a
                  href={`mailto:${COMPANY.email}`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20 hover:border-primary-400 transition-colors"
                >
                  <div className="w-11 h-11 bg-primary-500 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-gray-400 text-xs">Email</p>
                    <p className="text-white font-semibold text-sm">{COMPANY.email}</p>
                  </div>
                </motion.a>
              </div>

              <Link
                to="/lien-he"
                className="inline-flex items-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/30"
              >
                Gửi yêu cầu tư vấn
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
