import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { DocList } from "@/components/ui/DocList";
import { charters } from "@/content/documents";

export const metadata: Metadata = {
  title: "Điều lệ và quy chế",
  description:
    "ĐIỀU LỆ VÀ QUY CHẾ CÔNG TY — Công ty Cổ phần Khu công nghiệp Nam Tân Uyên.",
};

export default function Page() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "TRANG CHỦ", href: "/" },
          { label: "QUAN HỆ CỔ ĐÔNG", href: "/quan-he-co-dong" },
          { label: "ĐIỀU LỆ & QUY CHẾ" },
        ]}
      />
      <DocList years={charters.years} items={charters.items} />
    </>
  );
}
