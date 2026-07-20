export type ParkHighlight = {
  label: string;
  value?: string;
  sublabel?: string;
  icon?: string;
};

export type ParkData = {
  slug: string;
  title: string;
  subtitle: string;
  imageFolder: string;
  highlights: ParkHighlight[];
  products: { label: string; image: string }[];
  mapQuery: string;
  connectivity: { label: string; value: string }[];
  slides: string[];
  features: { text: string; icon: string }[];
  brochures: { label: string; href: string; image: string }[];
  masterPlan?: string;
};

export const parks: Record<string, ParkData> = {
  ntc1: {
    slug: "ntc1",
    title: "KHU CÔNG NGHIỆP NAM TÂN UYÊN (NTC1)",
    subtitle: "Khu phố Long Bình, Phường Tân Hiệp, Thành phố Hồ Chí Minh",
    imageFolder: "kcn-ntc1",
    highlights: [
      { label: "Tổng diện tích", value: "332 HA", icon: "/assets/img/kcn-ntc1/hl-0.png" },
      { label: "Thời hạn thuê lại", value: "Đến 2054", icon: "/assets/img/kcn-ntc1/hl-1.png" },
      { label: "Nhà xưởng xây sẵn", sublabel: "Diện tích linh hoạt", icon: "/assets/img/kcn-ntc1/hl-2.png" },
      { label: "Lao động", value: "17000+", icon: "/assets/img/kcn-ntc1/hl-3.png" },
      { label: "Tiện ích", sublabel: "Ngân hàng, Bưu điện, Khu dịch vụ" },
    ],
    products: [
      { label: "ĐẤT CÔNG NGHIỆP", image: "/assets/img/kcn-ntc1/card-0.jpg" },
      { label: "NHÀ XƯỞNG CHO THUÊ", image: "/assets/img/kcn-ntc1/card-1.jpg" },
    ],
    mapQuery: "KCN Nam Tân Uyên",
    connectivity: [
      { label: "Cảng khô Sóng Thần", value: "16 km" },
      { label: "Sân bay Tân Sơn Nhất", value: "32 km" },
      { label: "Cảng Sài Gòn", value: "40 km" },
      { label: "Cảng Tân Cảng Sài Gòn", value: "40 km" },
      { label: "Trung Tâm TP. Hồ Chí Minh", value: "41 km" },
    ],
    slides: [
      "/assets/img/kcn-ntc1/slide-0.jpg",
      "/assets/img/kcn-ntc1/slide-1.jpg",
      "/assets/img/kcn-ntc1/slide-2.jpg",
      "/assets/img/kcn-ntc1/slide-3.jpg",
      "/assets/img/kcn-ntc1/slide-4.jpg",
      "/assets/img/kcn-ntc1/slide-5.jpg",
      "/assets/img/kcn-ntc1/slide-6.jpg",
    ],
    features: [
      { text: "An ninh khu vực với hệ thống camera 24/7", icon: "/assets/img/kcn-ntc1/feat-0.png" },
      { text: "Trạm 110kV Khánh Bình với công suất 3x63MVA", icon: "/assets/img/kcn-ntc1/feat-1.png" },
      { text: "Nhà máy xử lý nước thải công suất 4.000 m3/ ngày đêm", icon: "/assets/img/kcn-ntc1/feat-2.png" },
      { text: "Hợp tác cùng Nhà máy nước Tân Uyên", icon: "/assets/img/kcn-ntc1/feat-3.png" },
      { text: "Hợp tác cùng VNPT", icon: "/assets/img/kcn-ntc1/feat-4.png" },
    ],
    brochures: [
      {
        label: "E-Brochure - VN",
        href: "https://my.eprofile.vn/namtanuyen/vi/mobile/index.html",
        image: "/assets/img/kcn-ntc1/bro-0.jpg",
      },
      {
        label: "E-Brochure - EN",
        href: "https://my.eprofile.vn/namtanuyen/en/mobile/index.html",
        image: "/assets/img/kcn-ntc1/bro-0.jpg",
      },
    ],
  },
  gd1: {
    slug: "gd1",
    title: "KHU CÔNG NGHIỆP NAM TÂN UYÊN MỞ RỘNG - GIAI ĐOẠN I (NTC2)",
    subtitle: "Phường Bình Cơ, Phường Tân Uyên, Thành phố Hồ Chí Minh",
    imageFolder: "kcn-gd1",
    highlights: [
      { label: "Tổng diện tích", value: "288,5 HA", icon: "/assets/img/kcn-gd1/hl-0.png" },
      { label: "Thời hạn thuê lại", value: "Đến 2059", icon: "/assets/img/kcn-gd1/hl-1.png" },
      { label: "Nhà xưởng xây sẵn", sublabel: "Diện tích linh hoạt", icon: "/assets/img/kcn-gd1/hl-2.png" },
      { label: "Lao động", value: "19000+", icon: "/assets/img/kcn-gd1/hl-3.png" },
      { label: "Tiện ích", sublabel: "Ngân hàng, Bưu điện, Khu dịch vụ" },
    ],
    products: [
      { label: "ĐẤT CÔNG NGHIỆP", image: "/assets/img/kcn-gd1/card-0.jpg" },
      { label: "NHÀ XƯỞNG CHO THUÊ", image: "/assets/img/kcn-gd1/card-1.jpg" },
    ],
    mapQuery: "KCN Nam Tân Uyên mở rộng giai đoạn I",
    connectivity: [
      { label: "Sân bay Long Thành", value: "63 km" },
      { label: "Sân bay Tân Sơn Nhất", value: "41 km" },
      { label: "Cảng Sài Gòn", value: "46 km" },
      { label: "Cảng Hiệp Phước", value: "57 km" },
      { label: "Cảng Cái Mép", value: "90 km" },
    ],
    slides: [
      "/assets/img/kcn-gd1/slide-0.jpg",
      "/assets/img/kcn-gd1/slide-1.jpg",
      "/assets/img/kcn-gd1/slide-2.jpg",
      "/assets/img/kcn-gd1/slide-3.jpg",
      "/assets/img/kcn-gd1/slide-4.jpg",
      "/assets/img/kcn-gd1/slide-5.jpg",
    ],
    features: [
      { text: "An ninh khu vực với hệ thống camera 24/7", icon: "/assets/img/kcn-gd1/feat-0.png" },
      { text: "Hai trạm trung thế 22kV từ 2 trạm biến thế 110/220kV – 2x63MVA Tân Uyên và Uyên Hưng", icon: "/assets/img/kcn-gd1/feat-1.png" },
      { text: "Nhà máy xử lý nước thải công suất 2.000 m3/ ngày đêm", icon: "/assets/img/kcn-gd1/feat-2.png" },
      { text: "Hợp tác cùng Nhà máy nước Tân Uyên", icon: "/assets/img/kcn-gd1/feat-3.png" },
      { text: "Hợp tác cùng VNPT", icon: "/assets/img/kcn-gd1/feat-4.png" },
    ],
    brochures: [
      {
        label: "E-Brochure - VN",
        href: "https://my.eprofile.vn/namtanuyen/vi/mobile/index.html",
        image: "/assets/img/kcn-gd1/bro-0.jpg",
      },
      {
        label: "E-Brochure - EN",
        href: "https://my.eprofile.vn/namtanuyen/en/mobile/index.html",
        image: "/assets/img/kcn-gd1/bro-0.jpg",
      },
    ],
  },
  gd2: {
    slug: "gd2",
    title: "KHU CÔNG NGHIỆP NAM TÂN UYÊN MỞ RỘNG - GIAI ĐOẠN II (NTC3)",
    subtitle: "Phường Bình Cơ, Phường Tân Uyên, Thành phố Hồ Chí Minh",
    imageFolder: "kcn-gd2",
    highlights: [
      { label: "Tổng diện tích", value: "345,86 HA", icon: "/assets/img/kcn-gd2/hl-0.png" },
      { label: "Thời hạn thuê lại", value: "Đến 2068", icon: "/assets/img/kcn-gd2/hl-1.png" },
      {
        label: "Nhà xưởng xây sẵn",
        sublabel: "Nhà xưởng BTS, đáp ứng linh hoạt nhu cầu của Nhà đầu tư",
        icon: "/assets/img/kcn-gd2/hl-2.png",
      },
      { label: "Lao động", sublabel: "Nguồn cung lao động dồi dào", icon: "/assets/img/kcn-gd2/hl-3.png" },
      { label: "Tiện ích", sublabel: "Ngân hàng, Bưu điện, Khu dịch vụ" },
    ],
    products: [
      { label: "ĐẤT CÔNG NGHIỆP", image: "/assets/img/kcn-gd2/card-0.jpg" },
      { label: "NHÀ XƯỞNG CHO THUÊ", image: "/assets/img/kcn-gd2/card-1.jpg" },
    ],
    mapQuery: "KCN Nam Tân Uyên mở rộng giai đoạn II",
    connectivity: [
      { label: "Sân bay Long Thành", value: "63 km" },
      { label: "Sân bay Tân Sơn Nhất", value: "41 km" },
      { label: "Cảng Sài Gòn", value: "46 km" },
      { label: "Cảng Hiệp Phước", value: "57 km" },
      { label: "Cảng Cái Mép", value: "90 km" },
    ],
    slides: ["/assets/img/kcn-gd2/slide-0.jpg", "/assets/img/kcn-gd2/slide-1.jpg"],
    features: [
      { text: "An ninh khu vực với hệ thống camera 24/7", icon: "/assets/img/kcn-gd2/feat-0.png" },
      { text: "Hai trạm trung thế 22kV từ 2 trạm biến thế 110/220kV – 2x63MVA Tân Uyên và Uyên Hưng", icon: "/assets/img/kcn-gd2/feat-1.png" },
      { text: "Nhà máy xử lý nước thải công suất 2.000 m3/ ngày đêm. Dự kiến hoàn thành xây dựng thêm 1 module công suất 2.000 m3/ ngày đêm", icon: "/assets/img/kcn-gd2/feat-2.png" },
      { text: "Hợp tác cùng Nhà máy nước Tân Uyên", icon: "/assets/img/kcn-gd2/feat-3.png" },
      { text: "Hợp tác cùng VNPT", icon: "/assets/img/kcn-gd2/feat-4.png" },
    ],
    brochures: [
      {
        label: "E-Brochure - VN",
        href: "https://my.eprofile.vn/namtanuyen/vi/mobile/index.html",
        image: "/assets/img/kcn-gd2/bro-0.jpg",
      },
      {
        label: "E-Brochure - EN",
        href: "https://my.eprofile.vn/namtanuyen/en/mobile/index.html",
        image: "/assets/img/kcn-gd2/bro-0.jpg",
      },
    ],
    masterPlan: "/assets/img/kcn-gd2/plan-0.jpg",
  },
};

export const projectOverview = {
  title: "Khu công nghiệp VRG Nam Tân Uyên",
  subtitle: "Điểm tựa chiến lược tại trung tâm vùng kinh tế trọng điểm phía Nam",
  description:
    "Với hơn hai thập kỷ kiến tạo hạ tầng bền vững, chúng tôi không chỉ cung cấp quỹ đất và nhà xưởng sạch, mà còn mang đến giải pháp đầu tư trọn gói, chuyên nghiệp. Chúng tôi cam kết đồng hành cùng sự thịnh vượng của doanh nghiệp bằng hệ sinh thái hạ tầng hiện đại, an toàn và tối ưu lợi ích cho mọi nhà đầu tư.",
  stats: [
    { value: "03", label: "SỐ DỰ ÁN" },
    { value: "680,07", label: "TỔNG VỐN ĐẦU TƯ", unit: "(triệu USD)" },
    { value: "996,36", label: "TỔNG DIỆN TÍCH", unit: "(Ha)" },
  ],
  projects: [
    {
      name: "KCN NAM TÂN UYÊN",
      href: "/du-an/ntc1",
      image: "/assets/img/cac-du-an/da-0.jpg",
      text: "KCN Nam Tân Uyên (NTC1) – với vị trí chiến lược tại phường Tân Hiệp, Thành phố Hồ Chí Minh – đã trở thành điểm đến đầu tư hấp dẫn nhờ hạ tầng hoàn thiện, tỷ lệ lấp đầy 100% và sự hiện diện của 184 doanh nghiệp trong nhiều lĩnh vực.",
    },
    {
      name: "KCN NAM TÂN UYÊN MỞ RỘNG GIAI ĐOẠN I",
      href: "/du-an/gd1",
      image: "/assets/img/cac-du-an/da-1.jpg",
      text: "KCN Nam Tân Uyên Mở Rộng – Giai đoạn I (NTC2) được triển khai nhằm đáp ứng nhu cầu ngày càng tăng của các nhà đầu tư tại Thành phố Hồ Chí Minh. Với vị trí thuận lợi, hạ tầng đồng bộ và chính sách hỗ trợ toàn diện, dự án nhanh chóng trở thành điểm đến hấp dẫn cho doanh nghiệp trong và ngoài nước. Quỹ đất công nghiệp đa dạng, dịch vụ logistics và hệ thống nhà xưởng hiện đại giúp nhà đầu tư tối ưu chi phí, rút ngắn thời gian triển khai sản xuất, đồng thời mở ra cơ hội tăng trưởng bền vững trong một môi trường đầu tư an toàn và hiệu quả.",
    },
    {
      name: "KCN NAM TÂN UYÊN MỞ RỘNG GIAI ĐOẠN II",
      href: "/du-an/gd2",
      image: "/assets/img/cac-du-an/da-2.jpg",
      text: "KCN Nam Tân Uyên Mở Rộng – Giai đoạn II (NTC3) tiếp tục khẳng định sức hút đầu tư tại Thành phố Hồ Chí Minh với quỹ đất công nghiệp quy mô lớn, hạ tầng hiện đại và vị trí kết nối thuận lợi. Dự án được định hướng phát triển theo tiêu chuẩn xanh – bền vững, đồng thời tích hợp dịch vụ hỗ trợ toàn diện, mang đến cho doanh nghiệp môi trường sản xuất hiệu quả và cơ hội tăng trưởng dài hạn.",
    },
  ],
} as const;
