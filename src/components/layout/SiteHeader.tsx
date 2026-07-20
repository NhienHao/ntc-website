"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { mainNav } from "@/content/navigation";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "#") return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  useEffect(() => {
    setOpen(false);
    setOpenSub(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 shadow-[0_8px_30px_rgba(6,72,32,0.08)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src={site.logo}
            alt="Logo Nam Tân Uyên"
            width={56}
            height={72}
            className="h-12 w-auto md:h-14"
            priority
          />
          <span className="section-title hidden text-[0.78rem] uppercase leading-snug text-[var(--green-deep)] sm:block md:text-[0.95rem]">
            {site.name}
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 sm:flex" aria-label="Ngôn ngữ">
            {["VN", "EN", "CN"].map((lang, i) => (
              <button
                key={lang}
                type="button"
                className={cn(
                  "rounded border px-2 py-1 text-[0.72rem] font-semibold",
                  i === 0
                    ? "border-[var(--green)] bg-[var(--green)] text-white"
                    : "border-[var(--line)] text-[var(--muted)]",
                )}
                aria-pressed={i === 0}
              >
                {lang}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--line)] bg-white lg:hidden"
            aria-label={open ? "Đóng menu" : "Mở menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <nav
        className="hidden border-t border-white/10 bg-[var(--green-dark)]/95 lg:block"
        aria-label="Chính"
      >
        <ul className="mx-auto flex max-w-[1400px] flex-wrap items-stretch justify-center px-2">
          {mainNav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.label} className="group relative">
                <Link
                  href={item.href === "#" ? item.children?.[0]?.href ?? "#" : item.href}
                  className={cn(
                    "flex items-center gap-1 border-b-2 border-transparent px-2.5 py-3 text-[0.7rem] font-semibold uppercase tracking-wide text-white/95 transition",
                    "hover:border-[var(--orange)] hover:bg-white/5",
                    active && "border-[var(--orange)] bg-white/5",
                  )}
                >
                  {item.label}
                  {item.children ? <ChevronDown size={12} aria-hidden /> : null}
                </Link>
                {item.children ? (
                  <ul className="invisible absolute left-0 top-full z-20 min-w-[220px] translate-y-1 rounded-lg border border-[var(--line)] bg-white p-1.5 opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-md px-3 py-2 text-sm text-[var(--ink)] hover:bg-[var(--green-soft)] hover:text-[var(--green-dark)]"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ul>
      </nav>

      {open ? (
        <div className="fixed inset-0 top-[72px] z-40 overflow-y-auto bg-[var(--green-deep)] text-white lg:hidden">
          <ul className="space-y-1 p-4 pb-24">
            {mainNav.map((item) => (
              <li key={item.label} className="border-b border-white/10">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-3 text-left text-sm font-semibold uppercase tracking-wide"
                      onClick={() =>
                        setOpenSub((v) => (v === item.label ? null : item.label))
                      }
                      aria-expanded={openSub === item.label}
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={cn(
                          "transition",
                          openSub === item.label && "rotate-180",
                        )}
                      />
                    </button>
                    {openSub === item.label ? (
                      <ul className="space-y-1 pb-3 pl-3">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block py-2 text-sm text-white/85"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-3 text-sm font-semibold uppercase tracking-wide"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
