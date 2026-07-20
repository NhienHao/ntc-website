import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { LOGO, NAV_ITEMS, COMPANY } from '../../data/constants';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-sand-200/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-[80px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0 group">
              <img src={LOGO} alt="NTC Logo" className="h-11 w-auto transition-transform group-hover:scale-105" />
              <div className="hidden sm:block">
                <p className={`text-sm font-semibold leading-tight transition-colors ${
                  isScrolled ? 'text-forest-800' : 'text-white'
                }`}>
                  KCN Nam Tan Uyen
                </p>
                <p className={`text-xs transition-colors ${
                  isScrolled ? 'text-forest-500' : 'text-white/70'
                }`}>
                  Thanh vien VRG
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {NAV_ITEMS.map((item) => {
                const isActive = location.pathname.startsWith(item.path);
                return (
                  <div
                    key={item.path}
                    className="relative"
                    onMouseEnter={() => item.children && setActiveDropdown(item.path)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={item.children ? item.children[0].path : item.path}
                      className={`relative px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-1 ${
                        isScrolled
                          ? isActive
                            ? 'text-primary-700'
                            : 'text-forest-700 hover:text-primary-600'
                          : isActive
                            ? 'text-white'
                            : 'text-white/80 hover:text-white'
                      }`}
                    >
                      {item.label}
                      {item.children && (
                        <ChevronDown
                          size={13}
                          className={`transition-transform duration-200 ${activeDropdown === item.path ? 'rotate-180' : ''}`}
                        />
                      )}
                      {isActive && (
                        <motion.div
                          layoutId="nav-active"
                          className={`absolute inset-0 rounded-full ${
                            isScrolled ? 'bg-primary-50' : 'bg-white/10'
                          }`}
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>

                    {/* Dropdown */}
                    <AnimatePresence>
                      {item.children && activeDropdown === item.path && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: [0.33, 1, 0.68, 1] }}
                          className="absolute top-full left-0 mt-2 py-3 bg-white rounded-2xl shadow-xl shadow-forest-900/10 border border-sand-200 min-w-[240px] overflow-hidden"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className={`flex items-center gap-3 px-5 py-3 text-sm transition-all duration-200 ${
                                location.pathname === child.path
                                  ? 'text-primary-700 bg-primary-50 font-medium'
                                  : 'text-forest-700 hover:text-primary-600 hover:bg-sand-50 hover:pl-6'
                              }`}
                            >
                              <span className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                location.pathname === child.path ? 'bg-primary-500' : 'bg-sand-300'
                              }`} />
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${COMPANY.phone}`}
                className={`hidden lg:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isScrolled
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-white/10 backdrop-blur text-white border border-white/20 hover:bg-white/20'
                }`}
              >
                <Phone size={14} />
                Lien he
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2.5 rounded-full transition-colors ${
                  isScrolled ? 'text-forest-800 hover:bg-sand-100' : 'text-white hover:bg-white/10'
                }`}
                aria-label="Menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-forest-950/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[320px] bg-white shadow-2xl overflow-y-auto"
            >
              <div className="p-6 pt-24">
                <div className="mb-8 pb-6 border-b border-sand-200">
                  <p className="text-xs text-forest-500 uppercase tracking-wider font-medium">Menu</p>
                </div>
                {NAV_ITEMS.map((item, idx) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    className="mb-1"
                  >
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.path ? null : item.path)}
                          className="w-full flex items-center justify-between py-3 px-4 text-sm font-medium text-forest-800 rounded-xl hover:bg-sand-50 transition-colors"
                        >
                          {item.label}
                          <ChevronDown
                            size={15}
                            className={`transition-transform duration-200 text-forest-400 ${activeDropdown === item.path ? 'rotate-180' : ''}`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.path && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden ml-4 border-l-2 border-primary-200"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.path}
                                  to={child.path}
                                  className="block py-2.5 px-4 text-sm text-forest-600 hover:text-primary-600 transition-colors"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className="block py-3 px-4 text-sm font-medium text-forest-800 rounded-xl hover:bg-sand-50 transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
