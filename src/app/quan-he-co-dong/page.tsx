import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { HubGrid } from "@/components/ui/HubGrid";
import { irHub } from "@/content/about";

export const metadata: Metadata = {
  title: "Quan hệ cổ đông",
  description:
    "Thông tin quan hệ cổ đông — thông báo, đại hội, báo cáo tài chính, điều lệ.",
};

export default function Page() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "TRANG CHỦ", href: "/" },
          { label: "QUAN HỆ CỔ ĐÔNG" },
        ]}
      />
      <HubGrid items={irHub} />
    </>
  );
}
