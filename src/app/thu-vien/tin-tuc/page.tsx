import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { MediaGrid } from "@/components/ui/MediaGrid";
import { newsItems } from "@/content/media";

export const metadata: Metadata = {
  title: "Tin tức",
  description: "Tin tức — Công ty Cổ phần Khu công nghiệp Nam Tân Uyên.",
};

export default function Page() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "TRANG CHỦ", href: "/" },
          { label: "THƯ VIỆN", href: "/thu-vien" },
          { label: "TIN TỨC" },
        ]}
      />
      <MediaGrid items={newsItems} />
    </>
  );
}
