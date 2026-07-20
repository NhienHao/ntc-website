import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { DocList } from "@/components/ui/DocList";
import { financialReports } from "@/content/documents";

export const metadata: Metadata = {
  title: "Báo cáo tài chính",
  description:
    "BÁO CÁO TÀI CHÍNH — Công ty Cổ phần Khu công nghiệp Nam Tân Uyên.",
};

export default function Page() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "TRANG CHỦ", href: "/" },
          { label: "QUAN HỆ CỔ ĐÔNG", href: "/quan-he-co-dong" },
          { label: "BÁO CÁO TÀI CHÍNH" },
        ]}
      />
      <DocList years={financialReports.years} items={financialReports.items} />
    </>
  );
}
