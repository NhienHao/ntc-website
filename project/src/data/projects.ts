import { img } from './constants';

export interface ParkHighlight {
  icon: string;
  label: string;
  value: string;
}

export interface ParkProduct {
  title: string;
  details: string[];
}

export interface InfraItem {
  title: string;
  desc: string;
}

export interface ParkData {
  id: string;
  name: string;
  fullName: string;
  slug: string;
  image: string;
  galleryImages: string[];
  description: string;
  area: number;
  areaUnit: string;
  occupancy: string;
  status: string;
  investmentTotal: string;
  leaseTerm: string;
  laborForce: string;
  highlights: ParkHighlight[];
  products: ParkProduct[];
  location: {
    desc: string;
    distances: string[];
  };
  infrastructure: InfraItem[];
  features: string[];
}

export const PROJECTS_STATS = {
  totalProjects: 3,
  totalInvestment: '680.07 triệu USD',
  totalArea: '996.36 ha',
};

export const PARKS: ParkData[] = [
  {
    id: 'kcn-ntc1',
    name: 'KCN Nam Tân Uyên',
    fullName: 'Khu Công nghiệp Nam Tân Uyên',
    slug: 'kcn-ntc1',
    image: img('kcn-ntc1.jpg'),
    galleryImages: [img('kcn-ntc1-1.jpg'), img('kcn-ntc1-2.jpg'), img('kcn-ntc1-3.jpg')],
    description: 'KCN Nam Tân Uyên được thành lập năm 2004 với diện tích 331 ha, là KCN đầu tiên của công ty. Hiện đã lấp đầy 100% diện tích cho thuê.',
    area: 331,
    areaUnit: 'ha',
    occupancy: '100%',
    status: 'Đã lấp đầy',
    investmentTotal: '152.43 triệu USD',
    leaseTerm: 'Đến năm 2054',
    laborForce: '45,000+ lao động',
    highlights: [
      { icon: 'MapPin', label: 'Diện tích', value: '331 ha' },
      { icon: 'Calendar', label: 'Thời hạn', value: 'Đến 2054' },
      { icon: 'Building', label: 'Nhà xưởng', value: 'Đa dạng' },
      { icon: 'Users', label: 'Lao động', value: '45,000+' },
      { icon: 'Zap', label: 'Tiện ích', value: 'Đầy đủ' },
    ],
    products: [
      {
        title: 'Đất công nghiệp',
        details: ['Đã cho thuê 100%', 'Hạ tầng hoàn thiện'],
      },
      {
        title: 'Nhà xưởng xây sẵn',
        details: ['Diện tích: 1,000 - 10,000 m²', 'Kết cấu thép tiền chế'],
      },
    ],
    location: {
      desc: 'Tọa lạc tại TP. Tân Uyên, tỉnh Bình Dương',
      distances: [
        'Cách TP.HCM: 45 km',
        'Cách sân bay Tân Sơn Nhất: 50 km',
        'Cách cảng Cát Lái: 55 km',
        'Cách ga Sóng Thần: 25 km',
      ],
    },
    infrastructure: [
      { title: 'Điện', desc: 'Nguồn điện từ lưới quốc gia, trạm biến áp 110/22KV' },
      { title: 'Nước', desc: 'Hệ thống cấp nước sạch công suất 20,000 m³/ngày' },
      { title: 'Xử lý nước thải', desc: 'Nhà máy xử lý nước thải tập trung 10,000 m³/ngày' },
      { title: 'Viễn thông', desc: 'Hệ thống viễn thông, internet cáp quang' },
      { title: 'Giao thông', desc: 'Đường nội bộ rộng 17-32m, kết nối thuận tiện' },
      { title: 'PCCC', desc: 'Hệ thống PCCC theo tiêu chuẩn, đội PCCC chuyên trách' },
    ],
    features: ['Hạ tầng đồng bộ', 'Đã lấp đầy 100%', 'Vị trí chiến lược', 'An ninh 24/7'],
  },
  {
    id: 'kcn-gd1',
    name: 'KCN Nam Tân Uyên MR (GĐ1)',
    fullName: 'Khu Công nghiệp Nam Tân Uyên Mở Rộng - Giai đoạn 1',
    slug: 'kcn-gd1',
    image: img('kcn-gd1.jpg'),
    galleryImages: [img('kcn-gd1-1.jpg'), img('kcn-gd1-2.jpg'), img('kcn-gd1-3.jpg')],
    description: 'KCN Nam Tân Uyên mở rộng giai đoạn 1 với diện tích 346 ha, tiếp nối thành công của KCN Nam Tân Uyên. Đã lấp đầy 100% diện tích cho thuê.',
    area: 346,
    areaUnit: 'ha',
    occupancy: '100%',
    status: 'Đã lấp đầy',
    investmentTotal: '267.32 triệu USD',
    leaseTerm: 'Đến năm 2058',
    laborForce: '50,000+ lao động',
    highlights: [
      { icon: 'MapPin', label: 'Diện tích', value: '346 ha' },
      { icon: 'Calendar', label: 'Thời hạn', value: 'Đến 2058' },
      { icon: 'Building', label: 'Nhà xưởng', value: 'Hiện đại' },
      { icon: 'Users', label: 'Lao động', value: '50,000+' },
      { icon: 'Zap', label: 'Tiện ích', value: 'Đầy đủ' },
    ],
    products: [
      {
        title: 'Đất công nghiệp',
        details: ['Đã cho thuê 100%', 'Hạ tầng hoàn thiện'],
      },
      {
        title: 'Nhà xưởng xây sẵn',
        details: ['Diện tích: 1,000 - 15,000 m²', 'Kết cấu thép tiền chế hiện đại'],
      },
    ],
    location: {
      desc: 'Liền kề KCN Nam Tân Uyên, TP. Tân Uyên, Bình Dương',
      distances: [
        'Cách TP.HCM: 42 km',
        'Cách sân bay Tân Sơn Nhất: 48 km',
        'Cách cảng Cát Lái: 52 km',
        'Tiếp giáp QL 1A mới',
      ],
    },
    infrastructure: [
      { title: 'Điện', desc: 'Trạm biến áp 110/22KV riêng, nguồn dự phòng' },
      { title: 'Nước', desc: 'Hệ thống cấp nước 25,000 m³/ngày' },
      { title: 'Xử lý nước thải', desc: 'Nhà máy XLNT 12,000 m³/ngày, đạt cột A' },
      { title: 'Viễn thông', desc: 'Cáp quang tốc độ cao, 4G/5G coverage' },
      { title: 'Giao thông', desc: 'Đường nội bộ 22-36m, kết nối cao tốc' },
      { title: 'PCCC', desc: 'Hệ thống hiện đại, xe cứu hỏa chuyên dụng' },
    ],
    features: ['Hạ tầng hiện đại', 'Đã lấp đầy 100%', 'Kết nối giao thông thuận lợi', 'Dịch vụ hỗ trợ toàn diện'],
  },
  {
    id: 'kcn-gd2',
    name: 'KCN Nam Tân Uyên MR (GĐ2)',
    fullName: 'Khu Công nghiệp Nam Tân Uyên Mở Rộng - Giai đoạn 2',
    slug: 'kcn-gd2',
    image: img('kcn-gd2.jpg'),
    galleryImages: [img('kcn-gd2-1.jpg'), img('kcn-gd2-2.jpg'), img('kcn-gd2-3.jpg')],
    description: 'KCN Nam Tân Uyên mở rộng giai đoạn 2 với diện tích 339 ha, là dự án mới nhất đang trong giai đoạn cho thuê. Hạ tầng hiện đại, đáp ứng tiêu chuẩn quốc tế.',
    area: 339,
    areaUnit: 'ha',
    occupancy: 'Đang cho thuê',
    status: 'Đang cho thuê',
    investmentTotal: '260.32 triệu USD',
    leaseTerm: 'Đến năm 2060',
    laborForce: '60,000+ lao động (dự kiến)',
    highlights: [
      { icon: 'MapPin', label: 'Diện tích', value: '339 ha' },
      { icon: 'Calendar', label: 'Thời hạn', value: 'Đến 2060' },
      { icon: 'Building', label: 'Nhà xưởng', value: 'Thế hệ mới' },
      { icon: 'Users', label: 'Lao động', value: '60,000+' },
      { icon: 'Zap', label: 'Tiện ích', value: 'Cao cấp' },
    ],
    products: [
      {
        title: 'Đất công nghiệp',
        details: ['Đang cho thuê', 'Giá ưu đãi cho đối tác chiến lược'],
      },
      {
        title: 'Nhà xưởng xây sẵn',
        details: ['Diện tích: 2,000 - 20,000 m²', 'Thiết kế theo yêu cầu'],
      },
    ],
    location: {
      desc: 'Liền kề KCN Nam Tân Uyên MR GĐ1, TP. Tân Uyên, Bình Dương',
      distances: [
        'Cách TP.HCM: 40 km',
        'Cách sân bay Long Thành (tương lai): 60 km',
        'Cách cảng nước sâu Cái Mép: 90 km',
        'Kết nối cao tốc Mỹ Phước - Tân Vạn',
      ],
    },
    infrastructure: [
      { title: 'Điện', desc: 'Trạm 220/110KV, đảm bảo cung cấp ổn định' },
      { title: 'Nước', desc: 'Hệ thống cấp nước 30,000 m³/ngày' },
      { title: 'Xử lý nước thải', desc: 'Nhà máy XLNT 15,000 m³/ngày, công nghệ mới' },
      { title: 'Viễn thông', desc: 'Hạ tầng 5G, trung tâm dữ liệu' },
      { title: 'Giao thông', desc: 'Đường nội bộ 24-40m, landscape đẹp' },
      { title: 'PCCC', desc: 'Hệ thống thông minh, camera AI giám sát' },
    ],
    features: ['Công nghệ thế hệ mới', 'Đang cho thuê', 'Tiêu chuẩn quốc tế', 'Smart Industrial Park'],
  },
];
