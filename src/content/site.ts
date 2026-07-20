export const site = {
  name: "Công ty Cổ phần Khu công nghiệp Nam Tân Uyên",
  shortName: "Nam Tân Uyên",
  ticker: "NTC",
  parent: "Tập đoàn Công Nghiệp Cao su Việt Nam (VRG)",
  phoneDisplay: "0274 3652 330",
  phoneTel: "02743652330",
  emailBusiness: "kinhdoanh@namtanuyen.com.vn",
  emailInfo: "info@namtanuyen.com.vn",
  address:
    "Đường ĐT 747B, Khu phố Long Bình, Phường Tân Hiệp, Thành phố Hồ Chí Minh.",
  addressShort: "Đường ĐT 747B, Khu phố Long Bình, Phường Tân Hiệp, TP.HCM",
  copyright: "Copyright © 2025 All rights reserved.",
  logo: "/assets/img/home/logo.png",
  mapEmbed:
    "https://maps.google.com/maps?q=Khu%20c%C3%B4ng%20nghi%E1%BB%87p%20Nam%20T%C3%A2n%20Uy%C3%AAn&z=14&output=embed",
  mapContactEmbed:
    "https://maps.google.com/maps?q=%C4%90%C6%B0%E1%BB%9Dng%20%C4%90T%20747B%2C%20Khu%20ph%E1%BB%91%20Long%20B%C3%ACnh%2C%20T%C3%A2n%20Hi%E1%BB%87p%2C%20H%E1%BB%93%20Ch%C3%AD%20Minh&z=15&output=embed",
  videoUrl:
    "https://api.namtanuyen.com.vn/Upload/Tmp/Account/AdminKCN/20260615092959108_20251223153125492_kcnnamtanuyenntc31onlinevideocutter.com.mp4",
  videoPoster: "/assets/img/home/about.jpg",
  ntcLoginAction:
    "https://qlvbcs.vrg.vn/web/onedoor/login?p_p_id=58&p_p_lifecycle=1&p_p_state=normal&p_p_mode=view&p_p_col_id=column-2&p_p_col_count=2&_58_struts_action=%2Flogin%2Flogin",
  ntcSupportPhone: "(028) 3997 2030",
} as const;

export const financeStats = {
  updatedAt: "01/01/2026",
  charterCapital: { value: "239", unit: "TỶ ĐỒNG", label: "Vốn điều lệ" },
  revenue: { value: "715", unit: "TỶ ĐỒNG", label: "Doanh thu" },
  profit: { value: "383", unit: "TỶ ĐỒNG", label: "Lợi nhuận (trước thuế)" },
} as const;

export const industryShare = [
  { label: "Nội thất", value: 39, color: "#8C5A3C" },
  { label: "Dịch vụ", value: 29, color: "#0bb14b" },
  { label: "Sơn", value: 12, color: "#2b5797" },
  { label: "Nhựa", value: 7, color: "#e8b730" },
  { label: "Cơ khí", value: 5, color: "#c0392b" },
  { label: "Khác", value: 5, color: "#7f8c8d" },
  { label: "Giấy", value: 3, color: "#f39c12" },
] as const;
