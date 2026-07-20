import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Briefcase, CheckCircle } from 'lucide-react';
import { JOB_POSTINGS } from '../data/content';
import { img } from '../data/constants';
import { SectionTitle } from '../components/ui/SectionTitle';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ui/ScrollReveal';

export default function RecruitmentPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[35vh] min-h-[280px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${img('recruitment-banner.jpg')})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-forest-900/80 to-forest-950/60" />
        </div>
        <div className="relative text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Tuyển dụng
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/80"
          >
            Cơ hội việc làm tại KCN Nam Tân Uyên
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-sand-50">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="bg-white rounded-2xl p-8 shadow-md border border-sand-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                  <Briefcase className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-forest-900 mb-3">
                    Thông tin tuyển dụng tại KCN Nam Tân Uyên
                  </h2>
                  <p className="text-forest-600 leading-relaxed">
                    KCN Nam Tân Uyên là nơi tập trung hơn 200 doanh nghiệp trong và ngoài nước, tạo ra
                    hàng chục ngàn cơ hội việc làm cho người lao động. Các doanh nghiệp hoạt động trong
                    KCN thường xuyên có nhu cầu tuyển dụng lao động ở nhiều vị trí khác nhau, từ công
                    nhân sản xuất đến nhân viên quản lý. Dưới đây là các thông tin tuyển dụng mới nhất
                    từ các doanh nghiệp trong KCN.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Job Postings */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionTitle
            title="Vị trí đang tuyển"
            subtitle="Các cơ hội việc làm mới nhất từ doanh nghiệp trong KCN"
          />

          <StaggerContainer className="space-y-8" staggerDelay={0.15}>
            {JOB_POSTINGS.map((job) => (
              <StaggerItem key={job.id}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-sand-200"
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-forest-900 mb-1">{job.position}</h3>
                      <p className="text-primary-600 font-semibold">{job.company}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-accent-50 text-accent-600 text-sm font-medium rounded-full border border-accent-200 whitespace-nowrap">
                      <Clock className="w-4 h-4" />
                      Hạn: {job.deadline}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-forest-600">
                      <MapPin className="w-5 h-5 text-primary-500" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-forest-600">
                      <Phone className="w-5 h-5 text-primary-500" />
                      <span className="text-sm">{job.contact}</span>
                    </div>
                  </div>

                  {/* Requirements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-forest-800 mb-3 uppercase tracking-wide">
                      Yêu cầu
                    </h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-forest-600 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`tel:${job.contact.replace(/\./g, '')}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-500 text-white rounded-lg font-medium text-sm hover:bg-primary-600 transition-colors shadow-md hover:shadow-lg"
                    >
                      <Phone className="w-4 h-4" />
                      Liên hệ ngay
                    </a>
                    <a
                      href="mailto:info@namtanuyen.com.vn"
                      className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-primary-500 text-primary-600 rounded-lg font-medium text-sm hover:bg-primary-50 transition-colors"
                    >
                      Gửi hồ sơ
                    </a>
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
