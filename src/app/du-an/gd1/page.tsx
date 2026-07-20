import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ParkView } from "@/components/park/ParkView";
import { parks } from "@/content/parks";

export const metadata: Metadata = {
  title: "Mở rộng giai đoạn I (NTC2)",
  description: "KCN Nam Tân Uyên mở rộng giai đoạn I (NTC2).",
};

export default function Page() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "TRANG CHỦ", href: "/" },
          { label: "CÁC DỰ ÁN", href: "/du-an" },
          { label: "MỞ RỘNG GIAI ĐOẠN I (NTC2)" },
        ]}
      />
      <ParkView park={parks.gd1} />
    </>
  );
}
