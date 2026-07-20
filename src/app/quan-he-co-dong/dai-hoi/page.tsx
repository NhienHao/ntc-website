import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { DocList } from "@/components/ui/DocList";
import { agmDocs } from "@/content/documents";

export const metadata: Metadata = {
  title: "Đại hội cổ đông",
  description:
    "ĐẠI HỘI CỔ ĐÔNG — Công ty Cổ phần Khu công nghiệp Nam Tân Uyên.",
};

export default function Page() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "TRANG CHỦ", href: "/" },
          { label: "QUAN HỆ CỔ ĐÔNG", href: "/quan-he-co-dong" },
          { label: "ĐẠI HỘI CỔ ĐÔNG" },
        ]}
      />
      <DocList years={agmDocs.years} items={agmDocs.items} />
    </>
  );
}
