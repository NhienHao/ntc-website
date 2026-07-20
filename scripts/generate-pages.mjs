import fs from "fs";
import path from "path";

const pages = [
  {
    file: "src/app/gioi-thieu/page.tsx",
    code: `import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { HubGrid } from "@/components/ui/HubGrid";
import { aboutHub } from "@/content/about";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description: "Giới thiệu Công ty Cổ phần Khu công nghiệp Nam Tân Uyên — thành viên Tập đoàn Công nghiệp Cao su Việt Nam (VRG).",
};

export default function Page() {
  return (
    <>
      <Breadcrumb items={[{ label: "TRANG CHỦ", href: "/" }, { label: "GIỚI THIỆU" }]} />
      <HubGrid items={aboutHub} />
    </>
  );
}
`,
  },
  {
    file: "src/app/gioi-thieu/tong-quan/page.tsx",
    code: `import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Reveal } from "@/components/motion/Reveal";
import { companyIntro, esgCommitment, visionMissionValues } from "@/content/about";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Giới thiệu tổng quan",
  description: "Công ty Cổ phần Khu công nghiệp Nam Tân Uyên (NTC) — thành viên Tập đoàn Công nghiệp Cao su Việt Nam (VRG).",
};

export default function Page() {
  return (
    <>
      <Breadcrumb items={[
        { label: "TRANG CHỦ", href: "/" },
        { label: "GIỚI THIỆU", href: "/gioi-thieu" },
        { label: "GIỚI THIỆU TỔNG QUAN" },
      ]} />
      <article className="wrap space-y-14 py-10">
        <Reveal>
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <Image src="/assets/img/gioi-thieu/tq-intro.jpg" alt="Trụ sở Nam Tân Uyên" width={800} height={560} className="rounded-2xl object-cover shadow-[var(--shadow)]" />
            <div>
              <h1 className="section-title text-2xl uppercase text-[var(--green-deep)] md:text-3xl">{site.name}</h1>
              {companyIntro.paragraphs.map((p) => <p key={p.slice(0, 24)} className="mt-4 text-[var(--muted)]">{p}</p>)}
              <p className="mt-4 text-sm">{companyIntro.contactLines.map((l) => <span key={l} className="block">{l}</span>)}</p>
            </div>
          </div>
        </Reveal>
        <div className="grid gap-5 lg:grid-cols-3">
          <Reveal>
            <div className="surface-panel h-full p-5">
              <h2 className="font-bold text-[var(--green-dark)]">Tầm nhìn</h2>
              {visionMissionValues.vision.map((p) => <p key={p.slice(0, 20)} className="mt-3 text-sm text-[var(--muted)]">{p}</p>)}
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <Image src="/assets/img/gioi-thieu/tq-overview.jpg" alt="Tổng quan Nam Tân Uyên" width={640} height={800} className="h-full rounded-2xl object-cover shadow-[var(--shadow)]" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5">
              <div className="surface-panel p-5">
                <h2 className="font-bold text-[var(--green-dark)]">Sứ mệnh</h2>
                {visionMissionValues.mission.map((p) => <p key={p.slice(0, 20)} className="mt-3 text-sm text-[var(--muted)]">{p}</p>)}
              </div>
              <div className="surface-panel p-5">
                <h2 className="font-bold text-[var(--green-dark)]">Giá trị cốt lõi</h2>
                {visionMissionValues.coreValues.map((p) => <p key={p.slice(0, 20)} className="mt-3 text-sm text-[var(--muted)]">{p}</p>)}
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <Image src="/assets/img/gioi-thieu/tq-esg.jpg" alt="Cam kết ESG" width={800} height={560} className="rounded-2xl object-cover shadow-[var(--shadow)]" />
            <div>
              <h2 className="section-title text-xl uppercase text-[var(--green-deep)] md:text-2xl">{esgCommitment.title}</h2>
              {esgCommitment.paragraphs.map((p) => <p key={p.slice(0, 24)} className="mt-4 text-[var(--muted)]">{p}</p>)}
            </div>
          </div>
        </Reveal>
      </article>
    </>
  );
}
`,
  },
];

for (const p of pages) {
  fs.mkdirSync(path.dirname(p.file), { recursive: true });
  fs.writeFileSync(p.file, p.code, "utf8");
  console.log("wrote", p.file);
}
