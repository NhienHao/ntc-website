import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { HubGrid } from "@/components/ui/HubGrid";
import { mediaHub } from "@/content/about";

export const metadata: Metadata = {
  title: "Thư viện đa phương tiện",
  description:
    "Thư viện đa phương tiện — tin tức, tin video, e-brochure KCN Nam Tân Uyên.",
};

export default function Page() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "TRANG CHỦ", href: "/" },
          { label: "THƯ VIỆN ĐA PHƯƠNG TIỆN" },
        ]}
      />
      <HubGrid items={mediaHub} />
    </>
  );
}
