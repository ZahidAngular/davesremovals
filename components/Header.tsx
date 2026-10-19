"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { NAV, SITE } from "@/lib/content";

type NavChild = { label: string; href: string; external?: boolean };

/** Isometric moving-box mark. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <defs>
        <linearGradient id="lm-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f3e3bd" />
          <stop offset="1" stopColor="#d7b46e" />
        </linearGradient>
        <linearGradient id="lm-left" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c9a45c" />
          <stop offset="1" stopColor="#a8803a" />
        </linearGradient>
        <linearGradient id="lm-right" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9c7634" />
          <stop offset="1" stopColor="#6f5122" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="46" height="46" rx="13" fill="#0a1730" stroke="rgba(201,164,92,0.45)" />
      <path d="M24 9 37 16.5 24 24 11 16.5Z" fill="url(#lm-top)" />
      <path d="M11 16.5 24 24v15L11 31.5Z" fill="url(#lm-left)" />
      <path d="M37 16.5 24 24v15l13-7.5Z" fill="url(#lm-right)" />
      <path d="M17.5 12.75 30.5 20.25" stroke="#0a1730" strokeOpacity=".55" strokeWidth="2.2" />
      <path d="M30.5 20.25v6.5" stroke="#0a1730" strokeOpacity=".4" strokeWidth="2.2" />
    </svg>
  );
}

export function Logo({ light = true }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <LogoMark className="h-11 w-11 shrink-0" />
      <span className="leading-none">
        <span className={`block whitespace-nowrap font-display text-[1.35rem] font-medium tracking-tight ${light ? "text-white" : "text-ink"}`}>
          Dave&apos;s <span className="italic text-gold-soft">Removals</span>
        </span>
        <span className="mt-1.5 block whitespace-nowrap text-[0.58rem] font-semibold uppercase tracking-[0.34em] text-gold">
          &amp; Storage · Wollongong
        </span>
      </span>
    </span>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  // Menu is tied to the path it was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const [mobileSub, setMobileSub] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`hidden border-b border-white/10 bg-ink/80 text-[0.72rem] tracking-wide text-white/70 backdrop-blur-md transition-all duration-500 lg:block ${
          scrolled ? "-translate-y-full opacity-0 h-0 overflow-hidden" : ""
        }`}
      >
        <div className="container-x flex h-10 items-center justify-between">
          <span className="uppercase tracking-[0.22em] text-gold">Servicing Wollongong / Shoalhaven</span>
          <div className="flex items-center gap-6">
            <a href={SITE.emailHref} className="transition hover:text-gold">
              {SITE.email}
            </a>
            <a href={SITE.phoneHref} className="flex items-center gap-2 font-semibold text-white transition hover:text-gold">
              <Phone size={13} /> {SITE.phone}
            </a>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-500 ${
          scrolled ? "bg-ink/85 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="container-x flex h-20 items-center justify-between">
          <Link href="/" aria-label="Dave's Removal Service — Home">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {NAV.map((item) => {
              const children = ("children" in item ? item.children : undefined) as NavChild[] | undefined;
              return (
                <div key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 text-[0.72rem] xl:px-4 xl:text-[0.78rem] font-semibold uppercase tracking-[0.14em] transition ${
                      isActive(item.href) ? "text-gold" : "text-white/85 hover:text-gold"
                    }`}
                  >
                    {item.label}
                    {children && <ChevronDown size={13} className="transition group-hover:rotate-180" />}
                  </Link>
                  {children && (
                    <div className="invisible absolute left-0 top-full w-64 translate-y-2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy/95 p-2 shadow-2xl backdrop-blur-xl">
                        {children.map((c) =>
                          c.external ? (
                            <a
                              key={c.label}
                              href={c.href}
                              target="_blank"
                              rel="noreferrer"
                              className="block rounded-xl px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-gold"
                            >
                              {c.label}
                            </a>
                          ) : (
                            <Link
                              key={c.label}
                              href={c.href}
                              className="block rounded-xl px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-gold"
                            >
                              {c.label}
                            </Link>
                          ),
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/moving-estimate" className="btn btn-gold hidden !px-5 !py-3 xl:inline-flex">
              Get a Quote
            </Link>
            <button
              onClick={() => setOpenOn(open ? null : pathname)}
              aria-label="Toggle navigation"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white lg:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-20 bottom-0 overflow-y-auto bg-ink/98 px-6 pb-10 pt-4 lg:hidden"
            data-lenis-prevent
          >
            {NAV.map((item) => {
              const children = ("children" in item ? item.children : undefined) as NavChild[] | undefined;
              return (
                <div key={item.label} className="border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <Link href={item.href} className="block py-4 font-display text-2xl text-white">
                      {item.label}
                    </Link>
                    {children && (
                      <button
                        aria-label={`Toggle ${item.label}`}
                        onClick={() => setMobileSub(mobileSub === item.label ? null : item.label)}
                        className="p-3 text-gold"
                      >
                        <ChevronDown className={`transition ${mobileSub === item.label ? "rotate-180" : ""}`} />
                      </button>
                    )}
                  </div>
                  {children && mobileSub === item.label && (
                    <div className="pb-4 pl-2">
                      {children.map((c) => (
                        <a
                          key={c.label}
                          href={c.href}
                          {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
                          className="block py-2 text-white/70"
                        >
                          {c.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="mt-8 flex flex-col gap-3">
              <Link href="/moving-estimate" className="btn btn-gold">
                Get a Quote
              </Link>
              <a href={SITE.phoneHref} className="btn btn-ghost">
                <Phone size={16} /> {SITE.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
