import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Reveal } from "@/components/motion/Reveal";
import { investment } from "@/content/about";

export const metadata: Metadata = {
  title: "Tư vấn đầu tư",
  description:
    "Quy trình hợp tác và dịch vụ tư vấn đầu tư tại KCN Nam Tân Uyên.",
};

export default function Page() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "TRANG CHỦ", href: "/" }, { label: "TƯ VẤN ĐẦU TƯ" }]}
      />
      <article className="wrap space-y-12 py-10">
        <section>
          <h1 className="section-title mb-6 text-2xl text-[var(--green-deep)]">
            Quy trình hợp tác
          </h1>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {investment.process.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.05}>
                <div className="surface-panel h-full p-5">
                  <div className="text-3xl font-bold text-[var(--green)]">{step.n}</div>
                  <h2 className="mt-2 font-bold">{step.title}</h2>
                  <p className="mt-2 whitespace-pre-line text-sm text-[var(--muted)]">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section>
          <h2 className="section-title mb-6 text-2xl text-[var(--green-deep)]">
            Dịch vụ tư vấn pháp lý
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {investment.legal.map((item, i) => (
              <Reveal key={item} delay={i * 0.04}>
                <div className="surface-panel p-5 text-sm font-semibold">{item}</div>
              </Reveal>
            ))}
          </div>
        </section>

        <section>
          <h2 className="section-title mb-6 text-2xl text-[var(--green-deep)]">
            Chăm sóc khách hàng
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {investment.care.map((item, i) => (
              <Reveal key={item} delay={i * 0.04}>
                <div className="surface-panel p-5 text-center text-sm font-semibold">
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
