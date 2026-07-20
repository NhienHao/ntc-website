import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Reveal } from "@/components/motion/Reveal";
import { projectOverview } from "@/content/parks";

export const metadata: Metadata = {
  title: "Các dự án",
  description: "Các dự án KCN Nam Tân Uyên — NTC1, mở rộng giai đoạn I & II.",
};

export default function Page() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "TRANG CHỦ", href: "/" }, { label: "CÁC DỰ ÁN" }]}
      />
      <article className="wrap space-y-12 py-10">
        <Reveal>
          <div className="surface-panel p-6 md:p-10">
            <h1 className="section-title text-3xl text-[var(--green-deep)]">
              {projectOverview.title}
            </h1>
            <p className="mt-2 text-lg font-semibold text-[var(--orange)]">
              {projectOverview.subtitle}
            </p>
            <p className="mt-4 max-w-3xl text-[var(--muted)]">
              {projectOverview.description}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {projectOverview.stats.map((s) => (
                <div key={s.label} className="rounded-xl bg-[var(--green-soft)] p-4 text-center">
                  <div className="text-3xl font-bold text-[var(--green-dark)]">{s.value}</div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-wide">{s.label}</div>
                  {"unit" in s && s.unit ? (
                    <div className="text-xs text-[var(--muted)]">{s.unit}</div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="space-y-8">
          {projectOverview.projects.map((p, i) => (
            <Reveal key={p.href} delay={i * 0.05}>
              <div className="grid items-center gap-6 overflow-hidden rounded-2xl bg-white shadow-[var(--shadow)] lg:grid-cols-2">
                <div className={`p-6 md:p-8 ${i % 2 ? "lg:order-2" : ""}`}>
                  <h2 className="section-title text-xl text-[var(--green-deep)]">{p.name}</h2>
                  <p className="mt-4 text-[var(--muted)]">{p.text}</p>
                  <Link href={p.href} className="btn-primary mt-6">
                    Tìm hiểu thêm <ArrowRight size={16} />
                  </Link>
                </div>
                <Image
                  src={p.image}
                  alt={p.name}
                  width={900}
                  height={620}
                  className="h-full min-h-[260px] w-full object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </article>
    </>
  );
}
