import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { DocList } from "@/components/ui/DocList";
import { biddingDocs } from "@/content/documents";

export const metadata: Metadata = {
  title: "Thông tin đấu thầu",
  description: "Thông tin đấu thầu — KCN Nam Tân Uyên.",
};

export default function Page() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "TRANG CHỦ", href: "/" },
          { label: "TRA CỨU", href: "/tra-cuu" },
          { label: "THÔNG TIN ĐẤU THẦU" },
        ]}
      />
      <DocList years={biddingDocs.years} items={biddingDocs.items} />
    </>
  );
}
