import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { contactHours } from "@/content/about";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: "Liên hệ Công ty Cổ phần Khu công nghiệp Nam Tân Uyên.",
};

export default function Page() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "TRANG CHỦ", href: "/" }, { label: "LIÊN HỆ" }]}
      />
      <section className="wrap grid gap-5 py-10 lg:grid-cols-2">
        <Reveal>
          <div className="surface-panel h-full p-6">
            <h2 className="text-lg font-bold">Giờ làm việc</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Chúng tôi làm việc từ thứ 2 đến thứ 6 hàng tuần.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {contactHours.map((h) => (
                <li key={h.day}>
                  <strong>{h.day}</strong> {h.hours}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="surface-panel h-full p-6">
            <h2 className="text-lg font-bold">Địa chỉ</h2>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 shrink-0 text-[var(--green-dark)]" size={18} />
                <span>{site.address}</span>
              </li>
              <li>
                <a href={`tel:${site.phoneTel}`} className="flex gap-3 hover:text-[var(--green-dark)]">
                  <Phone className="mt-0.5 shrink-0 text-[var(--green-dark)]" size={18} />
                  <span>Điện thoại: {site.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.emailBusiness}`}
                  className="flex gap-3 hover:text-[var(--green-dark)]"
                >
                  <Mail className="mt-0.5 shrink-0 text-[var(--green-dark)]" size={18} />
                  <span>E-mail: {site.emailBusiness}</span>
                </a>
              </li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="surface-panel p-6 lg:col-span-1">
            <ContactForm />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-2xl shadow-[var(--shadow)] lg:min-h-full">
            <iframe
              title="Bản đồ Nam Tân Uyên"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={site.mapContactEmbed}
              className="h-full min-h-[320px] w-full border-0"
              allowFullScreen
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
