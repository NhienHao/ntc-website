import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Reveal } from "@/components/motion/Reveal";
import { advantages } from "@/content/about";

export const metadata: Metadata = {
  title: "Tiềm lực & lợi thế cạnh tranh",
  description: "Tiềm lực và lợi thế cạnh tranh của KCN Nam Tân Uyên.",
};

export default function Page() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "TRANG CHỦ", href: "/" },
          { label: "GIỚI THIỆU", href: "/gioi-thieu" },
          { label: "TIỀM LỰC & LỢI THẾ CẠNH TRANH" },
        ]}
      />
      <article className="wrap max-w-4xl space-y-6 py-10">
        <Reveal>
          <p className="text-justify text-[var(--muted)]">
            <strong className="text-[var(--green-dark)]">KCN Nam Tân Uyên</strong>{" "}
            {advantages.intro.replace("KCN Nam Tân Uyên ", "")}
          </p>
        </Reveal>
        <Reveal>
          <Image
            src="/assets/img/gioi-thieu/tl-0.jpg"
            alt="KCN Nam Tân Uyên và khoảng cách đến các vị trí trọng yếu"
            width={1100}
            height={640}
            className="rounded-2xl shadow-[var(--shadow)]"
          />
        </Reveal>
        <Reveal>
          <p className="text-justify text-[var(--muted)]">{advantages.belt4}</p>
        </Reveal>
        <Reveal>
          <p className="font-semibold text-[var(--green-dark)]">
            {advantages.geographyTitle}
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-[var(--muted)]">
            {advantages.geography.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <Image
            src="/assets/img/gioi-thieu/tl-1.jpg"
            alt="Hạ tầng KCN Nam Tân Uyên"
            width={1100}
            height={640}
            className="rounded-2xl shadow-[var(--shadow)]"
          />
        </Reveal>
        <Reveal>
          <p className="text-justify text-[var(--muted)]">{advantages.closing}</p>
        </Reveal>
      </article>
    </>
  );
}
