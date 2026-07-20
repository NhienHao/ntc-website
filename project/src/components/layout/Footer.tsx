import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { COMPANY, LOGO, NAV_ITEMS } from '../../data/constants';

export function Footer() {
  return (
    <footer className="relative bg-forest-950 text-white overflow-hidden">
      {/* Topographic pattern overlay */}
      <div className="absolute inset-0 topo-pattern opacity-20" />
      
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
          <path d="M0,30 C480,60 960,0 1440,30 L1440,0 L0,0 Z" className="fill-sand-50" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={LOGO} alt="NTC" className="h-10 w-auto brightness-200" />
              <span className="font-display text-xl">KCN Nam Tan Uyen</span>
            </Link>
            <p className="text-sm text-sand-400 mb-6 leading-relaxed">
              {COMPANY.name} - Thanh vien {COMPANY.parent}
            </p>
            <div className="space-y-3.5 text-sm text-sand-400">
              <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-3 hover:text-primary-300 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <Phone size={14} className="text-primary-400" />
                </div>
                {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 hover:text-primary-300 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <Mail size={14} className="text-primary-400" />
                </div>
                {COMPANY.email}
              </a>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin size={14} className="text-primary-400" />
                </div>
                <span>{COMPANY.address}</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Clock size={14} className="text-primary-400" />
                </div>
                <span>{COMPANY.workHours}</span>
              </div>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h3 className="font-display text-lg mb-6">Lien ket nhanh</h3>
            <ul className="space-y-3">
              {NAV_ITEMS.slice(0, 5).map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.children ? item.children[0].path : item.path}
                    className="text-sm text-sand-400 hover:text-primary-300 transition-all duration-200 hover:pl-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg mb-6">Thong tin</h3>
            <ul className="space-y-3">
              {NAV_ITEMS.slice(5).map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.children ? item.children[0].path : item.path}
                    className="text-sm text-sand-400 hover:text-primary-300 transition-all duration-200 hover:pl-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="font-display text-lg mb-6">Vi tri</h3>
            <div className="rounded-2xl overflow-hidden h-[180px] border border-white/10">
              <iframe
                src={COMPANY.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NTC Location"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-sm text-sand-600">
            &copy; {new Date().getFullYear()} {COMPANY.shortName}. All rights reserved.
          </p>
          <p className="text-sm text-sand-600">
            Ma CK: <span className="text-primary-400 font-semibold">NTC</span> | San HoSE
          </p>
        </div>
      </div>
    </footer>
  );
}
