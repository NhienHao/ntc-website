import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { HubGrid } from "@/components/ui/HubGrid";
import { lookupHub } from "@/content/about";

export const metadata: Metadata = {
  title: "Tra cứu",
  description:
    "Tra cứu thông tin môi trường và thông tin đấu thầu tại KCN Nam Tân Uyên.",
};

export default function Page() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "TRANG CHỦ", href: "/" }, { label: "TRA CỨU" }]}
      />
      <HubGrid items={lookupHub} />
    </>
  );
}
