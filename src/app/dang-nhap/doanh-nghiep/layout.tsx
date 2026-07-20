import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đăng nhập doanh nghiệp",
  description: "Đăng nhập dành cho doanh nghiệp — KCN Nam Tân Uyên.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
