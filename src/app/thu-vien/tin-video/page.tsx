import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { MediaGrid } from "@/components/ui/MediaGrid";
import { videoItems } from "@/content/media";

export const metadata: Metadata = {
  title: "Tin video",
  description: "Tin video giới thiệu KCN Nam Tân Uyên.",
};

export default function Page() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "TRANG CHỦ", href: "/" },
          { label: "THƯ VIỆN", href: "/thu-vien" },
          { label: "TIN VIDEO" },
        ]}
      />
      <MediaGrid items={videoItems} showPlay />
    </>
  );
}
