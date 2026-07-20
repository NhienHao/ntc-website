import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { DocList } from "@/components/ui/DocList";
import { shareholderNotices } from "@/content/documents";

export const metadata: Metadata = {
  title: "Thông báo cổ đông",
  description:
    "THÔNG BÁO CỔ ĐÔNG — Công ty Cổ phần Khu công nghiệp Nam Tân Uyên.",
};

export default function Page() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "TRANG CHỦ", href: "/" },
          { label: "QUAN HỆ CỔ ĐÔNG", href: "/quan-he-co-dong" },
          { label: "THÔNG BÁO CỔ ĐÔNG" },
        ]}
      />
      <DocList years={shareholderNotices.years} items={shareholderNotices.items} />
    </>
  );
}
