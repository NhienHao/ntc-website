import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Maximize2 } from 'lucide-react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ui/ScrollReveal';
import { LINKED_COMPANIES } from '../data/companies';
import { img } from '../data/constants';

export default function LinkedCompaniesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCompanies = LINKED_COMPANIES.filter(
    (company) =>
      company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src={img('hero-3.jpg')}
          alt="Công ty liên kết"
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
            Công Ty Liên Kết
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Hệ sinh thái các khu công nghiệp liên kết trải dài khắp miền Đông Nam Bộ
          </motion.p>
        </div>
      </section>

      {/* Search & Grid */}
      <section className="py-20 bg-sand-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Danh sách công ty liên kết"
            subtitle="Các khu công nghiệp thuộc hệ thống liên kết"
          />

          {/* Search Input */}
          <ScrollReveal direction="up">
            <div className="max-w-xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-forest-400" />
                <input
                  type="text"
                  placeholder="Tìm kiếm theo tên hoặc địa điểm..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-sand-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all text-forest-700 placeholder:text-forest-400"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Companies Grid */}
          {filteredCompanies.length > 0 ? (
            <StaggerContainer
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              staggerDelay={0.08}
            >
              {filteredCompanies.map((company) => (
                <StaggerItem key={company.id}>
                  <motion.div
                    whileHover={{ y: -6, boxShadow: '0 16px 32px rgba(0,0,0,0.1)' }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-sand-200 h-full flex flex-col"
                  >
                    {/* Image */}
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={company.image}
                        alt={company.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      {/* Status Badge */}
                      <div className="absolute top-3 right-3">
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                            company.status === 'Đã lấp đầy'
                              ? 'bg-red-100 text-red-700'
                              : company.status === 'Đang hoạt động'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-amber-100 text-amber-700'
                          }`}
                        >
                          {company.status}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-base font-bold text-forest-900 mb-2 line-clamp-2">
                        {company.name}
                      </h3>
                      <div className="flex items-center gap-1.5 text-forest-500 text-sm mb-2">
                        <MapPin className="w-3.5 h-3.5 text-primary-500" />
                        <span>{company.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-forest-500 text-sm">
                        <Maximize2 className="w-3.5 h-3.5 text-primary-500" />
                        <span>{company.area}</span>
                      </div>
                      <p className="text-forest-400 text-sm mt-3">{company.description}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          ) : (
            <div className="text-center py-12">
              <p className="text-forest-500 text-lg">
                Không tìm thấy công ty nào phù hợp với "{searchQuery}"
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
