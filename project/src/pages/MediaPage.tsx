import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Download, FileText, Video } from 'lucide-react';
import { img } from '../data/constants';
import { SectionTitle } from '../components/ui/SectionTitle';
import { StaggerContainer, StaggerItem } from '../components/ui/ScrollReveal';

const TABS = [
  { id: 'video', label: 'Video', icon: Video },
  { id: 'brochure', label: 'E-Brochure', icon: FileText },
] as const;

const VIDEOS = [
  {
    id: 1,
    title: 'Giới thiệu KCN Nam Tân Uyên',
    thumbnail: img('video-thumb-1.jpg'),
    duration: '5:30',
  },
  {
    id: 2,
    title: 'Hạ tầng KCN Nam Tân Uyên mở rộng',
    thumbnail: img('video-thumb-2.jpg'),
    duration: '4:15',
  },
  {
    id: 3,
    title: 'Hệ thống xử lý nước thải tập trung',
    thumbnail: img('video-thumb-3.jpg'),
    duration: '3:45',
  },
  {
    id: 4,
    title: 'Phóng sự KCN Nam Tân Uyên trên VTV',
    thumbnail: img('video-thumb-4.jpg'),
    duration: '8:20',
  },
  {
    id: 5,
    title: 'Lễ kỷ niệm 20 năm thành lập',
    thumbnail: img('video-thumb-5.jpg'),
    duration: '12:00',
  },
  {
    id: 6,
    title: 'Hoạt động CSR & Môi trường xanh',
    thumbnail: img('video-thumb-6.jpg'),
    duration: '6:10',
  },
];

const BROCHURES = [
  {
    id: 1,
    title: 'E-Brochure KCN Nam Tân Uyên (Tiếng Việt)',
    description: 'Tài liệu giới thiệu tổng quan về KCN Nam Tân Uyên, hạ tầng kỹ thuật, dịch vụ và ưu đãi đầu tư.',
    language: 'Tiếng Việt',
    fileUrl: '#',
    thumbnail: img('brochure-vi.jpg'),
  },
  {
    id: 2,
    title: 'E-Brochure Nam Tan Uyen IP (English)',
    description: 'Overview of Nam Tan Uyen Industrial Park, infrastructure, services, and investment incentives.',
    language: 'English',
    fileUrl: '#',
    thumbnail: img('brochure-en.jpg'),
  },
];

type TabId = (typeof TABS)[number]['id'];

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState<TabId>('video');

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[35vh] min-h-[280px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${img('media-banner.jpg')})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-forest-900/80 to-forest-950/60" />
        </div>
        <div className="relative text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Thư viện đa phương tiện
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/80"
          >
            Video & Tài liệu giới thiệu KCN Nam Tân Uyên
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-4 mb-14"
          >
            {TABS.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                      : 'bg-sand-100 text-forest-600 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </motion.div>

          {/* Video Tab */}
          {activeTab === 'video' && (
            <>
              <SectionTitle title="Video" subtitle="Xem các video giới thiệu về KCN Nam Tân Uyên" />
              <StaggerContainer
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                staggerDelay={0.1}
              >
                {VIDEOS.map((video) => (
                  <StaggerItem key={video.id}>
                    <motion.div
                      whileHover={{ y: -6 }}
                      className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-sand-200 cursor-pointer"
                    >
                      {/* Thumbnail */}
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                        {/* Play Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-16 h-16 rounded-full bg-primary-500/90 flex items-center justify-center shadow-2xl group-hover:bg-primary-500 transition-colors"
                          >
                            <Play className="w-7 h-7 text-white ml-1" fill="white" />
                          </motion.div>
                        </div>
                        {/* Duration */}
                        <span className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/70 text-white text-xs rounded-md font-medium">
                          {video.duration}
                        </span>
                      </div>
                      {/* Title */}
                      <div className="p-5">
                        <h3 className="text-base font-semibold text-forest-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                          {video.title}
                        </h3>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </>
          )}

          {/* E-Brochure Tab */}
          {activeTab === 'brochure' && (
            <>
              <SectionTitle
                title="E-Brochure"
                subtitle="Tải về tài liệu giới thiệu KCN Nam Tân Uyên"
              />
              <StaggerContainer
                className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                staggerDelay={0.15}
              >
                {BROCHURES.map((brochure) => (
                  <StaggerItem key={brochure.id}>
                    <motion.div
                      whileHover={{ y: -6 }}
                      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-sand-200"
                    >
                      {/* Thumbnail */}
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={brochure.thumbnail}
                          alt={brochure.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <span className="absolute top-4 right-4 px-3 py-1 bg-white/90 text-forest-800 text-xs font-semibold rounded-full">
                          {brochure.language}
                        </span>
                      </div>
                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-forest-900 mb-2">
                          {brochure.title}
                        </h3>
                        <p className="text-forest-500 text-sm leading-relaxed mb-5">
                          {brochure.description}
                        </p>
                        <a
                          href={brochure.fileUrl}
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-500 text-white rounded-lg font-medium text-sm hover:bg-primary-600 transition-colors shadow-md hover:shadow-lg"
                        >
                          <Download className="w-4 h-4" />
                          Tải về
                        </a>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </>
          )}
        </div>
      </section>
    </>
  );
}
