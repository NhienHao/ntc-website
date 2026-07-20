import { motion } from 'framer-motion';
import { img } from '../data/constants';
import { SectionTitle } from '../components/ui/SectionTitle';

const nodeVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

function OrgNode({
  title,
  className = '',
  delay = 0,
  highlight = false,
}: {
  title: string;
  className?: string;
  delay?: number;
  highlight?: boolean;
}) {
  return (
    <motion.div
      variants={nodeVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.05, y: -3 }}
      className={`px-5 py-3.5 rounded-xl font-semibold text-center text-sm md:text-base shadow-md transition-all cursor-default ${
        highlight
          ? 'bg-primary-500 text-white shadow-primary-500/30'
          : 'bg-white text-forest-800 border border-sand-200 hover:border-primary-300 hover:shadow-lg'
      } ${className}`}
    >
      {title}
    </motion.div>
  );
}

export default function OrgChartPage() {
  const departments = [
    'Phòng TC-HC',
    'Phòng Kế toán',
    'Phòng KD-ĐT',
    'Phòng Kỹ thuật',
    'Ban Quản lý KCN',
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[35vh] min-h-[280px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${img('org-banner.jpg')})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-forest-900/80 to-forest-950/60" />
        </div>
        <div className="relative text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Sơ đồ tổ chức
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/80"
          >
            Cơ cấu tổ chức Công ty CP KCN Nam Tân Uyên
          </motion.p>
        </div>
      </section>

      {/* Org Chart */}
      <section className="py-20 bg-sand-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle title="Cơ cấu tổ chức" subtitle="Hệ thống quản lý và điều hành công ty" />

          {/* Chart Container */}
          <div className="relative flex flex-col items-center">
            {/* Level 1: Đại hội đồng cổ đông */}
            <OrgNode title="Đại hội đồng cổ đông" highlight delay={0} />

            {/* Connector */}
            <div className="w-0.5 h-10 bg-primary-300" />

            {/* Level 2: Hội đồng quản trị + Ban Kiểm soát */}
            <div className="relative flex items-start justify-center w-full">
              {/* HĐQT */}
              <div className="flex flex-col items-center">
                <OrgNode title="Hội đồng quản trị" highlight delay={0.1} />
              </div>

              {/* Ban Kiểm soát - positioned to the right */}
              <div className="absolute right-0 md:right-12 lg:right-24 top-0 flex items-center">
                {/* Horizontal connector from center */}
                <div className="hidden md:block w-12 lg:w-20 h-0.5 bg-primary-300" />
                <OrgNode title="Ban Kiểm soát" delay={0.15} />
              </div>
            </div>

            {/* Connector */}
            <div className="w-0.5 h-10 bg-primary-300" />

            {/* Level 3: Ban Tổng Giám đốc */}
            <OrgNode title="Ban Tổng Giám đốc" highlight delay={0.2} />

            {/* Connector */}
            <div className="w-0.5 h-10 bg-primary-300" />

            {/* Horizontal bar for departments */}
            <div className="relative w-full max-w-4xl">
              <div className="hidden md:block absolute top-0 left-[10%] right-[10%] h-0.5 bg-primary-300" />

              {/* Level 4: Departments */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-3 pt-0 md:pt-10">
                {departments.map((dept, idx) => (
                  <div key={dept} className="relative flex flex-col items-center">
                    {/* Vertical connector from bar */}
                    <div className="hidden md:block absolute -top-10 left-1/2 -translate-x-1/2 w-0.5 h-10 bg-primary-300" />
                    <OrgNode title={dept} delay={0.3 + idx * 0.08} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
