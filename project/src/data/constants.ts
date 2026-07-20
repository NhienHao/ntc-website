const IMG_BASE = 'https://raw.githubusercontent.com/NhienHao/ntc-website/c15066da5de1d4256a0738e3ad2e2313717d9a5c/assets/img';

export function img(path: string): string {
  return `${IMG_BASE}/${path}`;
}

export const LOGO = img('logo.png');

export const COMPANY = {
  name: 'Công ty Cổ phần Khu Công nghiệp Nam Tân Uyên',
  shortName: 'KCN Nam Tân Uyên',
  ticker: 'NTC',
  parent: 'Tập đoàn Công nghiệp Cao su Việt Nam (VRG)',
  phone: '(0274) 3.641.006',
  fax: '(0274) 3.641.007',
  email: 'info@namtanuyen.com.vn',
  website: 'www.namtanuyen.com.vn',
  address: 'Phường Uyên Hưng, TP. Tân Uyên, Tỉnh Bình Dương, Việt Nam',
  workHours: 'Thứ Hai - Thứ Sáu: 7:30 - 17:00 | Thứ Bảy: 7:30 - 11:30',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.123456!2d106.786789!3d11.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDA3JzI0LjQiTiAxMDbCsDQ3JzEyLjQiRQ!5e0!3m2!1svi!2svn!4v1234567890',
  founded: 2004,
  capital: '239 tỷ đồng',
  revenue: '715 tỷ đồng',
  profit: '383 tỷ đồng',
};

export const NAV_ITEMS = [
  {
    label: 'Giới thiệu',
    path: '/gioi-thieu',
    children: [
      { label: 'Tổng quan', path: '/gioi-thieu/tong-quan' },
      { label: 'Tiềm lực', path: '/gioi-thieu/tiem-luc' },
      { label: 'Lịch sử hình thành', path: '/gioi-thieu/lich-su' },
      { label: 'Sơ đồ tổ chức', path: '/gioi-thieu/so-do-to-chuc' },
    ],
  },
  {
    label: 'Các dự án',
    path: '/du-an',
    children: [
      { label: 'Tổng quan dự án', path: '/du-an' },
      { label: 'KCN Nam Tân Uyên', path: '/du-an/kcn-ntc1' },
      { label: 'KCN Nam Tân Uyên MR (GĐ1)', path: '/du-an/kcn-gd1' },
      { label: 'KCN Nam Tân Uyên MR (GĐ2)', path: '/du-an/kcn-gd2' },
    ],
  },
  {
    label: 'Công ty liên kết',
    path: '/cong-ty-lien-ket',
  },
  {
    label: 'Tư vấn đầu tư',
    path: '/tu-van-dau-tu',
  },
  {
    label: 'Quan hệ cổ đông',
    path: '/co-dong',
    children: [
      { label: 'Thông báo cổ đông', path: '/co-dong/thong-bao' },
      { label: 'Đại hội cổ đông', path: '/co-dong/dai-hoi' },
      { label: 'Báo cáo tài chính', path: '/co-dong/bao-cao' },
      { label: 'Điều lệ & Quy chế', path: '/co-dong/dieu-le' },
    ],
  },
  {
    label: 'Tra cứu',
    path: '/tra-cuu',
    children: [
      { label: 'Môi trường', path: '/tra-cuu/moi-truong' },
      { label: 'Đấu thầu', path: '/tra-cuu/dau-thau' },
    ],
  },
  {
    label: 'Thư viện',
    path: '/thu-vien',
    children: [
      { label: 'Tin tức', path: '/thu-vien/tin-tuc' },
      { label: 'Video', path: '/thu-vien/video' },
      { label: 'E-Brochure', path: '/thu-vien/e-brochure' },
    ],
  },
  {
    label: 'Tuyển dụng',
    path: '/tuyen-dung',
  },
  {
    label: 'Liên hệ',
    path: '/lien-he',
  },
];

export const HERO_SLIDES = [
  {
    image: img('hero-1.jpg'),
    title: 'KCN Nam Tân Uyên',
    subtitle: 'Nơi đầu tư lý tưởng tại Bình Dương',
  },
  {
    image: img('hero-2.jpg'),
    title: 'Hạ tầng hiện đại',
    subtitle: 'Đồng bộ - Bền vững - Chuyên nghiệp',
  },
  {
    image: img('hero-3.jpg'),
    title: 'Phát triển bền vững',
    subtitle: 'Thành viên Tập đoàn VRG',
  },
];

export const STATS = [
  { value: 1016, suffix: '+', label: 'Hecta diện tích', unit: 'ha' },
  { value: 200, suffix: '+', label: 'Doanh nghiệp', unit: 'DN' },
  { value: 20, suffix: '+', label: 'Năm hoạt động', unit: 'năm' },
  { value: 100, suffix: '%', label: 'Tỷ lệ lấp đầy', unit: '' },
];

export const SUSTAINABILITY_POLICIES = [
  {
    icon: 'Leaf',
    title: 'Môi trường xanh',
    desc: 'Cam kết bảo vệ môi trường, xử lý nước thải đạt chuẩn, trồng cây xanh toàn khu',
  },
  {
    icon: 'Users',
    title: 'Trách nhiệm xã hội',
    desc: 'Tạo việc làm, hỗ trợ cộng đồng, đóng góp phát triển địa phương',
  },
  {
    icon: 'Shield',
    title: 'An toàn lao động',
    desc: 'Đảm bảo an toàn cho người lao động, phòng cháy chữa cháy',
  },
  {
    icon: 'Recycle',
    title: 'Kinh tế tuần hoàn',
    desc: 'Khuyến khích tái chế, giảm thiểu chất thải, sử dụng năng lượng hiệu quả',
  },
  {
    icon: 'Building2',
    title: 'Hạ tầng bền vững',
    desc: 'Đầu tư hạ tầng đồng bộ, hiện đại, đáp ứng tiêu chuẩn quốc tế',
  },
  {
    icon: 'Globe',
    title: 'Hội nhập quốc tế',
    desc: 'Thu hút đầu tư FDI, hợp tác quốc tế, nâng cao năng lực cạnh tranh',
  },
];

export const FIELDS_OF_ACTIVITY = [
  {
    image: img('field-1.jpg'),
    title: 'Cho thuê đất công nghiệp',
    desc: 'Đất công nghiệp đã hoàn thiện hạ tầng, sẵn sàng cho doanh nghiệp triển khai dự án',
  },
  {
    image: img('field-2.jpg'),
    title: 'Cho thuê nhà xưởng',
    desc: 'Nhà xưởng xây sẵn đa dạng diện tích, phù hợp nhiều ngành nghề sản xuất',
  },
];

export const PARTNERS_LOGOS = [
  img('partners/partner-1.png'),
  img('partners/partner-2.png'),
  img('partners/partner-3.png'),
  img('partners/partner-4.png'),
  img('partners/partner-5.png'),
  img('partners/partner-6.png'),
];
