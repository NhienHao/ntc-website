import { img } from './constants';

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
}

export interface DocumentItem {
  id: number;
  title: string;
  date: string;
  year: number;
  fileUrl: string;
  type: 'pdf' | 'doc' | 'xls';
}

export interface JobPosting {
  id: number;
  company: string;
  position: string;
  location: string;
  deadline: string;
  requirements: string[];
  contact: string;
}

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    title: 'KCN Nam Tân Uyên đạt chứng nhận ISO 14001:2015',
    date: '15/03/2024',
    excerpt: 'Công ty CP KCN Nam Tân Uyên vừa được cấp chứng nhận hệ thống quản lý môi trường ISO 14001:2015, khẳng định cam kết bảo vệ môi trường.',
    image: img('news-1.jpg'),
    category: 'Tin tức',
  },
  {
    id: 2,
    title: 'Lễ khởi công nhà máy XLNT giai đoạn 2',
    date: '20/02/2024',
    excerpt: 'Ngày 20/02/2024, Công ty đã tổ chức lễ khởi công xây dựng nhà máy xử lý nước thải tập trung giai đoạn 2 với công suất 15,000 m³/ngày.',
    image: img('news-2.jpg'),
    category: 'Sự kiện',
  },
  {
    id: 3,
    title: 'Kết quả kinh doanh Q4/2023 tăng trưởng 25%',
    date: '31/01/2024',
    excerpt: 'Doanh thu quý 4 năm 2023 của công ty đạt 180 tỷ đồng, tăng 25% so với cùng kỳ năm trước.',
    image: img('news-3.jpg'),
    category: 'Tài chính',
  },
  {
    id: 4,
    title: 'NTC ký kết hợp tác với đối tác Nhật Bản',
    date: '10/01/2024',
    excerpt: 'Công ty CP KCN Nam Tân Uyên ký kết biên bản ghi nhớ hợp tác với tập đoàn công nghiệp hàng đầu Nhật Bản.',
    image: img('news-4.jpg'),
    category: 'Hợp tác',
  },
];

export const FINANCIAL_REPORTS: DocumentItem[] = [
  { id: 1, title: 'Báo cáo tài chính Quý 1/2025', date: '20/04/2025', year: 2025, fileUrl: '#', type: 'pdf' },
  { id: 2, title: 'Báo cáo tài chính năm 2024 (đã kiểm toán)', date: '28/03/2025', year: 2025, fileUrl: '#', type: 'pdf' },
  { id: 3, title: 'Báo cáo tài chính Quý 4/2024', date: '20/01/2025', year: 2024, fileUrl: '#', type: 'pdf' },
  { id: 4, title: 'Báo cáo tài chính Quý 3/2024', date: '20/10/2024', year: 2024, fileUrl: '#', type: 'pdf' },
  { id: 5, title: 'Báo cáo tài chính Quý 2/2024', date: '20/07/2024', year: 2024, fileUrl: '#', type: 'pdf' },
  { id: 6, title: 'Báo cáo tài chính Quý 1/2024', date: '20/04/2024', year: 2024, fileUrl: '#', type: 'pdf' },
  { id: 7, title: 'Báo cáo tài chính năm 2023 (đã kiểm toán)', date: '28/03/2024', year: 2023, fileUrl: '#', type: 'pdf' },
  { id: 8, title: 'Báo cáo tài chính Quý 4/2023', date: '20/01/2024', year: 2023, fileUrl: '#', type: 'pdf' },
  { id: 9, title: 'Báo cáo tài chính năm 2022 (đã kiểm toán)', date: '28/03/2023', year: 2022, fileUrl: '#', type: 'pdf' },
  { id: 10, title: 'Báo cáo tài chính năm 2021 (đã kiểm toán)', date: '28/03/2022', year: 2021, fileUrl: '#', type: 'pdf' },
];

export const SHAREHOLDER_ANNOUNCEMENTS: DocumentItem[] = [
  { id: 1, title: 'Thông báo chi trả cổ tức năm 2024', date: '15/05/2025', year: 2025, fileUrl: '#', type: 'pdf' },
  { id: 2, title: 'Nghị quyết HĐQT về phân phối lợi nhuận', date: '10/04/2025', year: 2025, fileUrl: '#', type: 'pdf' },
  { id: 3, title: 'Thông báo ngày đăng ký cuối cùng', date: '01/03/2025', year: 2025, fileUrl: '#', type: 'pdf' },
  { id: 4, title: 'Báo cáo quản trị năm 2024', date: '28/01/2025', year: 2024, fileUrl: '#', type: 'pdf' },
  { id: 5, title: 'Thông báo thay đổi nhân sự', date: '15/12/2024', year: 2024, fileUrl: '#', type: 'pdf' },
];

export const AGM_DOCUMENTS: DocumentItem[] = [
  { id: 1, title: 'Biên bản ĐHCĐ thường niên năm 2025', date: '20/04/2025', year: 2025, fileUrl: '#', type: 'pdf' },
  { id: 2, title: 'Nghị quyết ĐHCĐ thường niên năm 2025', date: '20/04/2025', year: 2025, fileUrl: '#', type: 'pdf' },
  { id: 3, title: 'Tài liệu họp ĐHCĐ thường niên 2025', date: '01/04/2025', year: 2025, fileUrl: '#', type: 'pdf' },
  { id: 4, title: 'Thư mời họp ĐHCĐ thường niên 2025', date: '25/03/2025', year: 2025, fileUrl: '#', type: 'pdf' },
  { id: 5, title: 'Biên bản ĐHCĐ thường niên năm 2024', date: '20/04/2024', year: 2024, fileUrl: '#', type: 'pdf' },
  { id: 6, title: 'Nghị quyết ĐHCĐ thường niên năm 2024', date: '20/04/2024', year: 2024, fileUrl: '#', type: 'pdf' },
];

export const CHARTER_DOCS: DocumentItem[] = [
  { id: 1, title: 'Điều lệ Công ty (sửa đổi lần 5)', date: '20/04/2025', year: 2025, fileUrl: '#', type: 'pdf' },
  { id: 2, title: 'Quy chế quản trị nội bộ', date: '20/04/2025', year: 2025, fileUrl: '#', type: 'pdf' },
  { id: 3, title: 'Quy chế hoạt động HĐQT', date: '15/04/2024', year: 2024, fileUrl: '#', type: 'pdf' },
  { id: 4, title: 'Quy chế hoạt động Ban Kiểm soát', date: '15/04/2024', year: 2024, fileUrl: '#', type: 'pdf' },
];

export const ENVIRONMENT_DOCS: DocumentItem[] = [
  { id: 1, title: 'Báo cáo quan trắc môi trường Quý 1/2025', date: '15/04/2025', year: 2025, fileUrl: '#', type: 'pdf' },
  { id: 2, title: 'Báo cáo quan trắc môi trường Quý 4/2024', date: '15/01/2025', year: 2024, fileUrl: '#', type: 'pdf' },
  { id: 3, title: 'Kết quả đo lường khí thải 2024', date: '30/12/2024', year: 2024, fileUrl: '#', type: 'pdf' },
  { id: 4, title: 'Báo cáo giám sát nước thải tháng 12/2024', date: '31/12/2024', year: 2024, fileUrl: '#', type: 'pdf' },
  { id: 5, title: 'Báo cáo công tác bảo vệ môi trường 2024', date: '28/12/2024', year: 2024, fileUrl: '#', type: 'pdf' },
];

export const BIDDING_DOCS: DocumentItem[] = [
  { id: 1, title: 'Thông báo mời thầu: Xây dựng hạ tầng GĐ2 - Gói 5', date: '01/06/2025', year: 2025, fileUrl: '#', type: 'pdf' },
  { id: 2, title: 'Kết quả đấu thầu: Cung cấp thiết bị XLNT', date: '15/05/2025', year: 2025, fileUrl: '#', type: 'pdf' },
  { id: 3, title: 'Thông báo mời thầu: Trồng cây xanh KCN GĐ2', date: '01/04/2025', year: 2025, fileUrl: '#', type: 'pdf' },
];

export const JOB_POSTINGS: JobPosting[] = [
  {
    id: 1,
    company: 'Công ty TNHH Thực Phẩm Á Châu III',
    position: 'Công nhân sản xuất',
    location: 'KCN Nam Tân Uyên, Bình Dương',
    deadline: '30/06/2025',
    requirements: ['Nam/Nữ 18-40 tuổi', 'Sức khỏe tốt', 'Không yêu cầu kinh nghiệm'],
    contact: '0274.3641.xxx',
  },
  {
    id: 2,
    company: 'Công ty TNHH Đầu Tư Quốc Tế CS',
    position: 'Nhân viên kỹ thuật',
    location: 'KCN Nam Tân Uyên MR, Bình Dương',
    deadline: '15/07/2025',
    requirements: ['Tốt nghiệp Cao đẳng/Đại học chuyên ngành kỹ thuật', '1-2 năm kinh nghiệm', 'Tiếng Anh giao tiếp'],
    contact: '0274.3641.xxx',
  },
];

export const TIMELINE_DATA = [
  {
    period: '2003 - 2005',
    title: 'Giai đoạn thành lập',
    events: [
      { year: '2003', text: 'Quyết định thành lập KCN Nam Tân Uyên' },
      { year: '2004', text: 'Thành lập Công ty CP KCN Nam Tân Uyên, bắt đầu triển khai xây dựng hạ tầng' },
      { year: '2005', text: 'Hoàn thành hạ tầng giai đoạn 1, đón nhà đầu tư đầu tiên' },
    ],
  },
  {
    period: '2006 - 2010',
    title: 'Giai đoạn phát triển',
    events: [
      { year: '2006', text: 'Niêm yết cổ phiếu NTC trên sàn HoSE' },
      { year: '2008', text: 'KCN đạt tỷ lệ lấp đầy 70%' },
      { year: '2010', text: 'KCN Nam Tân Uyên đạt tỷ lệ lấp đầy 100%' },
    ],
  },
  {
    period: '2011 - 2018',
    title: 'Giai đoạn mở rộng',
    events: [
      { year: '2012', text: 'Được chấp thuận đầu tư KCN Nam Tân Uyên mở rộng' },
      { year: '2014', text: 'Khởi công xây dựng KCN mở rộng GĐ1 (346 ha)' },
      { year: '2016', text: 'KCN mở rộng GĐ1 đi vào hoạt động' },
      { year: '2018', text: 'KCN GĐ1 đạt tỷ lệ lấp đầy 100%' },
    ],
  },
  {
    period: '2019 - Nay',
    title: 'Giai đoạn bứt phá',
    events: [
      { year: '2019', text: 'Được chấp thuận đầu tư KCN mở rộng GĐ2 (339 ha)' },
      { year: '2021', text: 'Khởi công xây dựng KCN mở rộng GĐ2' },
      { year: '2023', text: 'KCN GĐ2 bắt đầu đón nhà đầu tư' },
      { year: '2024', text: 'Tổng vốn đầu tư thu hút đạt 680 triệu USD' },
    ],
  },
];

export const ABOUT_OVERVIEW = {
  vision: 'Trở thành nhà phát triển KCN hàng đầu Việt Nam, cung cấp giải pháp hạ tầng công nghiệp đẳng cấp quốc tế.',
  mission: 'Phát triển hạ tầng KCN đồng bộ, bền vững; tạo môi trường đầu tư thuận lợi, an toàn; đóng góp vào sự phát triển kinh tế - xã hội.',
  coreValues: [
    { title: 'Chuyên nghiệp', desc: 'Đội ngũ chuyên gia giàu kinh nghiệm, quy trình làm việc chuẩn mực' },
    { title: 'Bền vững', desc: 'Phát triển hài hòa giữa kinh tế, xã hội và môi trường' },
    { title: 'Đổi mới', desc: 'Liên tục cải tiến, ứng dụng công nghệ mới vào quản lý và vận hành' },
    { title: 'Tận tâm', desc: 'Lắng nghe và đáp ứng tốt nhất nhu cầu của nhà đầu tư' },
  ],
  esgCommitments: [
    { category: 'Environment', items: ['Xử lý nước thải đạt chuẩn quốc gia', 'Trồng cây xanh 15% diện tích', 'Giám sát môi trường liên tục'] },
    { category: 'Social', items: ['Tạo việc làm cho 150,000+ lao động', 'Hỗ trợ cộng đồng địa phương', 'An toàn lao động'] },
    { category: 'Governance', items: ['Quản trị minh bạch', 'Báo cáo tài chính công khai', 'Tuân thủ pháp luật'] },
  ],
};
