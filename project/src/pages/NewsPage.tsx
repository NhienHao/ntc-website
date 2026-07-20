import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { NEWS_ITEMS } from '../data/content';
import { img } from '../data/constants';
import { SectionTitle } from '../components/ui/SectionTitle';
import { StaggerContainer, StaggerItem } from '../components/ui/ScrollReveal';

const CATEGORIES = ['Tất cả', 'Tin tức', 'Sự kiện', 'Tài chính', 'Hợp tác'];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('Tất cả');

  const filteredNews =
    activeCategory === 'Tất cả'
      ? NEWS_ITEMS
      : NEWS_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[35vh] min-h-[280px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${img('news-banner.jpg')})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-forest-900/80 to-forest-950/60" />
        </div>
        <div className="relative text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Tin tức & Sự kiện
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/80"
          >
            Cập nhật những thông tin mới nhất từ KCN Nam Tân Uyên
          </motion.p>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="Bài viết mới nhất" subtitle="Theo dõi các tin tức, sự kiện nổi bật" />

          {/* Category Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-sand-100 text-forest-600 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* News Grid */}
          <AnimatePresence mode="wait">
            <StaggerContainer
              key={activeCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              staggerDelay={0.1}
            >
              {filteredNews.map((item) => (
                <StaggerItem key={item.id}>
                  <motion.article
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 border border-sand-200"
                  >
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      {/* Category Badge */}
                      <span className="absolute top-4 left-4 px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">
                        {item.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-forest-400 mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{item.date}</span>
                      </div>
                      <h3 className="text-lg font-bold text-forest-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-forest-500 text-sm leading-relaxed line-clamp-3 mb-4">
                        {item.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-primary-500 text-sm font-medium group-hover:gap-3 transition-all">
                        <span>Đọc thêm</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </AnimatePresence>

          {filteredNews.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-forest-400 py-12 text-lg"
            >
              Không có bài viết nào trong danh mục này.
            </motion.p>
          )}
        </div>
      </section>
    </>
  );
}
