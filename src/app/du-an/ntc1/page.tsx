import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ParkView } from "@/components/park/ParkView";
import { parks } from "@/content/parks";

export const metadata: Metadata = {
  title: "KCN Nam Tân Uyên (NTC1)",
  description: "Khu công nghiệp Nam Tân Uyên (NTC1) — Phường Tân Hiệp, TP.HCM.",
};

export default function Page() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "TRANG CHỦ", href: "/" },
          { label: "CÁC DỰ ÁN", href: "/du-an" },
          { label: "KCN NAM TÂN UYÊN (NTC1)" },
        ]}
      />
      <ParkView park={parks.ntc1} />
    </>
  );
}
