import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { MediaGrid } from "@/components/ui/MediaGrid";
import { jobItems } from "@/content/media";

export const metadata: Metadata = {
  title: "Tuyển dụng",
  description:
    "Thông tin tuyển dụng tại các doanh nghiệp trong và liên kết KCN Nam Tân Uyên.",
};

export default function Page() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "TRANG CHỦ", href: "/" }, { label: "TUYỂN DỤNG" }]}
      />
      <MediaGrid items={jobItems} />
    </>
  );
}
