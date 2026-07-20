import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Sơ đồ tổ chức",
  description:
    "Sơ đồ tổ chức Công ty Cổ phần Khu công nghiệp Nam Tân Uyên.",
};

export default function Page() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "TRANG CHỦ", href: "/" },
          { label: "GIỚI THIỆU", href: "/gioi-thieu" },
          { label: "SƠ ĐỒ TỔ CHỨC" },
        ]}
      />
      <div className="wrap py-10">
        <Reveal>
          <h1 className="section-title mb-6 text-center text-2xl text-[var(--green-deep)]">
            SƠ ĐỒ TỔ CHỨC
          </h1>
          <div className="overflow-hidden rounded-2xl bg-white p-4 shadow-[var(--shadow)]">
            <Image
              src="/assets/img/gioi-thieu/org-chart.jpg"
              alt="Sơ đồ tổ chức Công ty Cổ phần Khu công nghiệp Nam Tân Uyên"
              width={1400}
              height={900}
              className="mx-auto w-full object-contain"
            />
          </div>
        </Reveal>
      </div>
    </>
  );
}
