import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-[var(--green-deep)] text-white">
      <div className="wrap grid gap-8 py-12 md:grid-cols-[1.1fr_1fr]">
        <div>
          <h2 className="section-title mb-4 text-lg uppercase tracking-wide">
            {site.name}
          </h2>
          <ul className="space-y-3 text-sm text-white/90">
            <li className="flex items-start gap-3">
              <Phone size={16} className="mt-1 shrink-0" aria-hidden />
              <a href={`tel:${site.phoneTel}`} className="hover:text-white">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} className="mt-1 shrink-0" aria-hidden />
              <a
                href={`mailto:${site.emailBusiness}`}
                className="hover:text-white"
              >
                {site.emailBusiness}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-1 shrink-0" aria-hidden />
              <span>{site.address}</span>
            </li>
          </ul>
        </div>
        <div className="overflow-hidden rounded-xl border border-white/15 bg-black/20">
          <iframe
            title="Bản đồ Nam Tân Uyên"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={site.mapEmbed}
            className="h-[220px] w-full border-0 md:h-full md:min-h-[220px]"
            allowFullScreen
          />
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/70">
        {site.copyright}
      </div>
    </footer>
  );
}
