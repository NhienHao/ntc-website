import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { COMPANY, img } from '../data/constants';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset after showing success
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${img('about-banner.jpg')})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-forest-900/80 to-forest-950/60" />
        </div>
        <div className="relative text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Liên hệ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/80"
          >
            Chúng tôi luôn sẵn sàng hỗ trợ bạn
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            title="Thông tin liên hệ"
            subtitle="Kết nối với chúng tôi qua các kênh dưới đây"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Phone/Fax Card */}
            <ScrollReveal delay={0}>
              <div className="bg-white rounded-2xl p-8 border border-sand-200 shadow-sm hover:shadow-lg hover:border-primary-200 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-6">
                  <Phone className="text-primary-500" size={26} />
                </div>
                <h3 className="text-xl font-bold text-forest-900 mb-4">
                  Điện thoại / Fax
                </h3>
                <div className="space-y-3">
                  <p className="text-forest-600">
                    <span className="text-forest-400 text-sm">Điện thoại:</span>
                    <br />
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="font-medium hover:text-primary-500 transition-colors"
                    >
                      {COMPANY.phone}
                    </a>
                  </p>
                  <p className="text-forest-600">
                    <span className="text-forest-400 text-sm">Fax:</span>
                    <br />
                    <span className="font-medium">{COMPANY.fax}</span>
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Email/Website Card */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-2xl p-8 border border-sand-200 shadow-sm hover:shadow-lg hover:border-primary-200 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-xl bg-accent-50 flex items-center justify-center mb-6">
                  <Mail className="text-accent-400" size={26} />
                </div>
                <h3 className="text-xl font-bold text-forest-900 mb-4">
                  Email / Website
                </h3>
                <div className="space-y-3">
                  <p className="text-forest-600">
                    <span className="text-forest-400 text-sm">Email:</span>
                    <br />
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="font-medium hover:text-primary-500 transition-colors"
                    >
                      {COMPANY.email}
                    </a>
                  </p>
                  <p className="text-forest-600">
                    <span className="text-forest-400 text-sm">Website:</span>
                    <br />
                    <a
                      href={`https://${COMPANY.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:text-primary-500 transition-colors"
                    >
                      {COMPANY.website}
                    </a>
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Address Card */}
            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-2xl p-8 border border-sand-200 shadow-sm hover:shadow-lg hover:border-primary-200 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-6">
                  <MapPin className="text-primary-500" size={26} />
                </div>
                <h3 className="text-xl font-bold text-forest-900 mb-4">
                  Địa chỉ
                </h3>
                <p className="text-forest-600 leading-relaxed">
                  {COMPANY.name}
                  <br />
                  <span className="font-medium">{COMPANY.address}</span>
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Work Hours */}
          <ScrollReveal delay={0.3}>
            <div className="mt-10 flex items-center justify-center gap-3 bg-primary-50 rounded-xl p-5">
              <Clock className="text-primary-500" size={22} />
              <p className="text-forest-700 font-medium">
                Giờ làm việc: {COMPANY.workHours}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-sand-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            title="Gửi tin nhắn cho chúng tôi"
            subtitle="Điền thông tin bên dưới, chúng tôi sẽ phản hồi trong thời gian sớm nhất"
          />

          <div className="grid lg:grid-cols-2 gap-12 mt-12">
            {/* Contact Form */}
            <ScrollReveal direction="left">
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 shadow-sm border border-sand-200"
              >
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-2">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all text-dark-800"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all text-dark-800"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-2">
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all text-dark-800"
                      placeholder="0912 345 678"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-2">
                      Chủ đề *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all text-dark-800"
                      placeholder="Tư vấn đầu tư"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-forest-700 mb-2">
                    Nội dung *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all text-dark-800 resize-none"
                    placeholder="Nhập nội dung tin nhắn..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={submitted}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 ${
                    submitted
                      ? 'bg-green-500'
                      : 'bg-primary-500 hover:bg-primary-600 shadow-md hover:shadow-lg'
                  }`}
                >
                  {submitted ? (
                    'Đã gửi thành công!'
                  ) : (
                    <>
                      <Send size={18} />
                      Gửi tin nhắn
                    </>
                  )}
                </motion.button>
              </form>
            </ScrollReveal>

            {/* Google Maps Embed */}
            <ScrollReveal direction="right">
              <div className="rounded-2xl overflow-hidden shadow-sm border border-sand-200 h-full min-h-[400px]">
                <iframe
                  src={COMPANY.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bản đồ KCN Nam Tân Uyên"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
