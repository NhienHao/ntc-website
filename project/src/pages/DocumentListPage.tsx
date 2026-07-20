import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Download, FileText, FileSpreadsheet, File } from 'lucide-react';
import { img } from '../data/constants';

interface DocumentListPageProps {
  title: string;
  subtitle: string;
  documents: Array<{
    id: number;
    title: string;
    date: string;
    year: number;
    fileUrl: string;
    type: 'pdf' | 'doc' | 'xls';
  }>;
  bannerImage?: string;
}

const fileIcons = {
  pdf: <FileText className="text-red-500" size={22} />,
  doc: <File className="text-blue-500" size={22} />,
  xls: <FileSpreadsheet className="text-green-600" size={22} />,
};

const fileLabels = {
  pdf: 'PDF',
  doc: 'DOC',
  xls: 'XLS',
};

export function DocumentListPage({
  title,
  subtitle,
  documents,
  bannerImage,
}: DocumentListPageProps) {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const years = useMemo(() => {
    const uniqueYears = [...new Set(documents.map((d) => d.year))];
    return uniqueYears.sort((a, b) => b - a);
  }, [documents]);

  const filteredDocs = useMemo(() => {
    return documents.filter((doc) => {
      const matchesYear = selectedYear === null || doc.year === selectedYear;
      const matchesSearch =
        searchQuery === '' ||
        doc.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesYear && matchesSearch;
    });
  }, [documents, selectedYear, searchQuery]);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bannerImage || img('about-banner.jpg')})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-forest-900/80 to-forest-950/60" />
        </div>
        <div className="relative text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/80"
          >
            {subtitle}
          </motion.p>
        </div>
      </section>

      {/* Filters & Document List */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          {/* Year Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-2 mb-8"
          >
            <button
              onClick={() => setSelectedYear(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedYear === null
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'bg-sand-100 text-forest-600 hover:bg-primary-50 hover:text-primary-600'
              }`}
            >
              Tất cả
            </button>
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedYear === year
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'bg-sand-100 text-forest-600 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {year}
              </button>
            ))}
          </motion.div>

          {/* Search Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative mb-10"
          >
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-forest-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Tìm kiếm tài liệu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-sand-200 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all bg-white text-forest-800 placeholder:text-forest-400"
            />
          </motion.div>

          {/* Document List */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedYear}-${searchQuery}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {filteredDocs.length === 0 ? (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-forest-500 py-12"
                >
                  Không tìm thấy tài liệu nào.
                </motion.p>
              ) : (
                filteredDocs.map((doc, index) => (
                  <motion.div
                    key={doc.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="group flex items-center gap-4 p-5 bg-white rounded-xl border border-sand-200 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300"
                  >
                    {/* File Type Icon */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-sand-50 group-hover:bg-primary-50 flex items-center justify-center transition-colors">
                      {fileIcons[doc.type]}
                    </div>

                    {/* Document Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-forest-800 font-medium group-hover:text-primary-600 transition-colors truncate">
                        {doc.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-sm text-forest-400">
                          {doc.date}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded bg-sand-100 text-forest-500 uppercase font-medium">
                          {fileLabels[doc.type]}
                        </span>
                      </div>
                    </div>

                    {/* Download Button */}
                    <a
                      href={doc.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-50 text-primary-500 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300"
                      title="Tải xuống"
                    >
                      <Download size={18} />
                    </a>
                  </motion.div>
                ))
              )}
            </motion.div>
          </AnimatePresence>

          {/* Result count */}
          {filteredDocs.length > 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-sm text-forest-400 text-center"
            >
              Hiển thị {filteredDocs.length} / {documents.length} tài liệu
            </motion.p>
          )}
        </div>
      </section>
    </>
  );
}

export default DocumentListPage;
