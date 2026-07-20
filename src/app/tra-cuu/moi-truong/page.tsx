import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { DocList } from "@/components/ui/DocList";
import { environmentDocs } from "@/content/documents";

export const metadata: Metadata = {
  title: "Thông tin môi trường",
  description:
    "THÔNG TIN MÔI TRƯỜNG — Công ty Cổ phần Khu công nghiệp Nam Tân Uyên.",
};

export default function Page() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "TRANG CHỦ", href: "/" },
          { label: "TRA CỨU", href: "/tra-cuu" },
          { label: "THÔNG TIN MÔI TRƯỜNG" },
        ]}
      />
      <DocList years={environmentDocs.years} items={environmentDocs.items} />
    </>
  );
}
