import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Reveal } from "@/components/motion/Reveal";
import { historyEvents, timeline } from "@/content/about";

export const metadata: Metadata = {
  title: "Dấu mốc lịch sử",
  description:
    "Hình thành và phát triển Công ty Cổ phần Khu công nghiệp Nam Tân Uyên.",
};

export default function Page() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "TRANG CHỦ", href: "/" },
          { label: "GIỚI THIỆU", href: "/gioi-thieu" },
          { label: "DẤU MỐC LỊCH SỬ" },
        ]}
      />
      <article className="wrap space-y-12 py-10">
        <section>
          <h1 className="section-title mb-8 text-center text-2xl text-[var(--green-deep)]">
            HÌNH THÀNH VÀ PHÁT TRIỂN
          </h1>
          <div className="relative space-y-8 before:absolute before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-[var(--green)] md:before:left-1/2">
            {timeline.map((item, i) => (
              <Reveal key={item.period} delay={i * 0.05}>
                <div
                  className={`relative grid gap-4 md:grid-cols-2 ${
                    i % 2 ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >
                  <div className="surface-panel p-5 md:mx-6">
                    <p className="text-[var(--muted)]">{item.text}</p>
                  </div>
                  <div className="flex items-center md:mx-6">
                    <span className="rounded-full bg-[var(--green)] px-4 py-2 text-sm font-bold text-white">
                      {item.period}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section>
          <h2 className="section-title mb-6 text-center text-2xl text-[var(--green-deep)]">
            CÁC SỰ KIỆN KHÁC
          </h2>
          <ul className="space-y-3">
            {historyEvents.map((e, i) => (
              <Reveal key={e.year} delay={i * 0.03}>
                <li className="surface-panel p-4 text-sm">
                  <strong className="text-[var(--green-dark)]">{e.year}</strong>
                  <span className="text-[var(--muted)]">{e.text}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
}
