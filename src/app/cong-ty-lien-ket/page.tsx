import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { AffiliateList } from "@/components/ui/AffiliateList";

export const metadata: Metadata = {
  title: "Các công ty KCN liên kết",
  description:
    "Danh sách các công ty khu công nghiệp liên kết thuộc hệ sinh thái VRG.",
};

export default function Page() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "TRANG CHỦ", href: "/" },
          { label: "CÁC CÔNG TY KCN LIÊN KẾT" },
        ]}
      />
      <AffiliateList />
    </>
  );
}
