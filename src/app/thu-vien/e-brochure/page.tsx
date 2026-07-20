import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Reveal } from "@/components/motion/Reveal";
import { brochures } from "@/content/about";

export const metadata: Metadata = {
  title: "E-Brochure",
  description: "E-Brochure tiếng Việt và tiếng Anh — KCN Nam Tân Uyên.",
};

export default function Page() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "TRANG CHỦ", href: "/" },
          { label: "THƯ VIỆN", href: "/thu-vien" },
          { label: "E-BROCHURE" },
        ]}
      />
      <div className="wrap grid gap-6 py-10 sm:grid-cols-2">
        {brochures.map((b, i) => (
          <Reveal key={b.label} delay={i * 0.06}>
            <a
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              className="surface-panel block overflow-hidden transition hover:-translate-y-1"
            >
              <Image
                src={b.image}
                alt={b.label}
                width={720}
                height={480}
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="p-4 text-center font-semibold">{b.label}</div>
            </a>
          </Reveal>
        ))}
      </div>
    </>
  );
}
