import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { HubGrid } from "@/components/ui/HubGrid";
import { aboutHub } from "@/content/about";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description:
    "Giới thiệu Công ty Cổ phần Khu công nghiệp Nam Tân Uyên — thành viên Tập đoàn Công nghiệp Cao su Việt Nam (VRG).",
};

export default function Page() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "TRANG CHỦ", href: "/" }, { label: "GIỚI THIỆU" }]}
      />
      <HubGrid items={aboutHub} />
    </>
  );
}
