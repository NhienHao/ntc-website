export type NavChild = { label: string; href: string };
export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const mainNav: NavItem[] = [
  { label: "Trang chủ", href: "/" },
  {
    label: "Giới thiệu",
    href: "/gioi-thieu",
    children: [
      { label: "Giới thiệu tổng quan", href: "/gioi-thieu/tong-quan" },
      { label: "Dấu mốc lịch sử", href: "/gioi-thieu/lich-su" },
      { label: "Sơ đồ tổ chức", href: "/gioi-thieu/so-do-to-chuc" },
      { label: "Tiềm lực & lợi thế", href: "/gioi-thieu/tiem-luc" },
    ],
  },
  {
    label: "Các dự án",
    href: "/du-an",
    children: [
      { label: "Tổng quan dự án", href: "/du-an" },
      { label: "KCN Nam Tân Uyên", href: "/du-an/ntc1" },
      { label: "Mở rộng giai đoạn I", href: "/du-an/gd1" },
      { label: "Mở rộng giai đoạn II", href: "/du-an/gd2" },
    ],
  },
  { label: "Các công ty KCN liên kết", href: "/cong-ty-lien-ket" },
  { label: "Tư vấn đầu tư", href: "/tu-van-dau-tu" },
  {
    label: "Quan hệ cổ đông",
    href: "/quan-he-co-dong",
    children: [
      { label: "Thông báo cổ đông", href: "/quan-he-co-dong/thong-bao" },
      { label: "Đại hội cổ đông", href: "/quan-he-co-dong/dai-hoi" },
      { label: "Báo cáo tài chính", href: "/quan-he-co-dong/bao-cao-tai-chinh" },
      { label: "Điều lệ & quy chế", href: "/quan-he-co-dong/dieu-le" },
    ],
  },
  {
    label: "Tra cứu",
    href: "/tra-cuu",
    children: [
      { label: "Thông tin môi trường", href: "/tra-cuu/moi-truong" },
      { label: "Thông tin đấu thầu", href: "/tra-cuu/dau-thau" },
    ],
  },
  {
    label: "Thư viện đa phương tiện",
    href: "/thu-vien",
    children: [
      { label: "Tin tức", href: "/thu-vien/tin-tuc" },
      { label: "Tin video", href: "/thu-vien/tin-video" },
      { label: "E-Brochure", href: "/thu-vien/e-brochure" },
    ],
  },
  { label: "Tuyển dụng", href: "/tuyen-dung" },
  { label: "Liên hệ", href: "/lien-he" },
  {
    label: "Đăng nhập",
    href: "#",
    children: [
      { label: "Doanh nghiệp", href: "/dang-nhap/doanh-nghiep" },
      { label: "NTC", href: "/dang-nhap/ntc" },
    ],
  },
];

/** Legacy .html → new App Router paths */
export const legacyRedirects: Record<string, string> = {
  "/index.html": "/",
  "/gioi-thieu.html": "/gioi-thieu",
  "/gioi-thieu-tong-quan.html": "/gioi-thieu/tong-quan",
  "/lich-su.html": "/gioi-thieu/lich-su",
  "/so-do-to-chuc.html": "/gioi-thieu/so-do-to-chuc",
  "/tiem-luc.html": "/gioi-thieu/tiem-luc",
  "/cac-du-an.html": "/du-an",
  "/kcn-ntc1.html": "/du-an/ntc1",
  "/kcn-gd1.html": "/du-an/gd1",
  "/kcn-gd2.html": "/du-an/gd2",
  "/cong-ty-lien-ket.html": "/cong-ty-lien-ket",
  "/tu-van-dau-tu.html": "/tu-van-dau-tu",
  "/quan-he-co-dong.html": "/quan-he-co-dong",
  "/thong-bao-co-dong.html": "/quan-he-co-dong/thong-bao",
  "/dai-hoi-co-dong.html": "/quan-he-co-dong/dai-hoi",
  "/bao-cao-tai-chinh.html": "/quan-he-co-dong/bao-cao-tai-chinh",
  "/dieu-le.html": "/quan-he-co-dong/dieu-le",
  "/tra-cuu.html": "/tra-cuu",
  "/moi-truong.html": "/tra-cuu/moi-truong",
  "/dau-thau.html": "/tra-cuu/dau-thau",
  "/thu-vien.html": "/thu-vien",
  "/tin-tuc.html": "/thu-vien/tin-tuc",
  "/tin-video.html": "/thu-vien/tin-video",
  "/e-brochure.html": "/thu-vien/e-brochure",
  "/tuyen-dung.html": "/tuyen-dung",
  "/lien-he.html": "/lien-he",
  "/dang-nhap-doanh-nghiep.html": "/dang-nhap/doanh-nghiep",
  "/dang-nhap-ntc.html": "/dang-nhap/ntc",
};
