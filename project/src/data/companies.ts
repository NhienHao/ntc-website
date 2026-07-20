import { img } from './constants';

export interface LinkedCompany {
  id: number;
  name: string;
  shortName: string;
  location: string;
  area: string;
  status: string;
  image: string;
  description: string;
}

export const LINKED_COMPANIES: LinkedCompany[] = [
  {
    id: 1,
    name: 'Công ty CP KCN Nam Tân Uyên - Bình Dương',
    shortName: 'KCN Nam Tân Uyên',
    location: 'Bình Dương',
    area: '331 ha',
    status: 'Đã lấp đầy',
    image: img('company-1.jpg'),
    description: 'KCN đầu tiên, đã lấp đầy 100%',
  },
  {
    id: 2,
    name: 'Công ty CP KCN Phước Hòa',
    shortName: 'KCN Phước Hòa',
    location: 'Bình Dương',
    area: '200 ha',
    status: 'Đang hoạt động',
    image: img('company-2.jpg'),
    description: 'KCN tại huyện Phú Giáo, Bình Dương',
  },
  {
    id: 3,
    name: 'Công ty CP KCN Tân Bình',
    shortName: 'KCN Tân Bình',
    location: 'Bình Dương',
    area: '352 ha',
    status: 'Đang hoạt động',
    image: img('company-3.jpg'),
    description: 'KCN tại TP. Tân Uyên, Bình Dương',
  },
  {
    id: 4,
    name: 'Công ty CP KCN Long Khánh',
    shortName: 'KCN Long Khánh',
    location: 'Đồng Nai',
    area: '264 ha',
    status: 'Đang hoạt động',
    image: img('company-4.jpg'),
    description: 'KCN tại TP. Long Khánh, Đồng Nai',
  },
  {
    id: 5,
    name: 'Công ty CP KCN Dầu Giây',
    shortName: 'KCN Dầu Giây',
    location: 'Đồng Nai',
    area: '330 ha',
    status: 'Đang hoạt động',
    image: img('company-5.jpg'),
    description: 'KCN tại huyện Thống Nhất, Đồng Nai',
  },
  {
    id: 6,
    name: 'Công ty CP KCN Bà Rịa',
    shortName: 'KCN Bà Rịa',
    location: 'Bà Rịa - Vũng Tàu',
    area: '175 ha',
    status: 'Đang hoạt động',
    image: img('company-6.jpg'),
    description: 'KCN tại TP. Bà Rịa, tỉnh BR-VT',
  },
  {
    id: 7,
    name: 'Công ty CP KCN Bình Long',
    shortName: 'KCN Bình Long',
    location: 'Bình Phước',
    area: '200 ha',
    status: 'Đang phát triển',
    image: img('company-7.jpg'),
    description: 'KCN tại TX. Bình Long, Bình Phước',
  },
  {
    id: 8,
    name: 'Công ty CP KCN Tân Lập',
    shortName: 'KCN Tân Lập',
    location: 'Bình Phước',
    area: '185 ha',
    status: 'Đang phát triển',
    image: img('company-8.jpg'),
    description: 'KCN tại huyện Đồng Phú, Bình Phước',
  },
];
