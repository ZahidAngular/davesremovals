import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { FOOTER_LINKS, HOME, SITE } from "@/lib/content";
import { Logo } from "./Header";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white grain">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-gold/10 blur-[120px]" />
      <div className="container-x relative py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1fr_1.5fr_1fr_1.25fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm font-display text-3xl leading-tight text-white/90">
              Call <a href={SITE.phoneHref} className="gold-text">{SITE.phone}</a>
            </p>
            <a href={SITE.threeBestRated} target="_blank" rel="noreferrer" className="mt-8 inline-block">
              <Image
                src="/img/threebestrated.svg"
                alt="Three Best Rated — Best Moving companies in Nowra"
                width={120}
                height={120}
                className="h-28 w-28"
                unoptimized
              />
            </a>
          </div>

          <div>
            <h3 className="eyebrow mb-6">Company</h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {FOOTER_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="group inline-flex items-center gap-1.5 whitespace-nowrap text-sm text-white/70 transition hover:text-gold">
                    {l.label}
                    <ArrowUpRight size={14} className="opacity-0 transition group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-6">Depots</h3>
            <ul className="space-y-4 text-white/70">
              <li className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
                <Link href="/contact/dapto-nsw-2530" className="transition hover:text-gold">
                  Dapto NSW 2530
                </Link>
              </li>
              <li className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
                <Link href="/contact/nowra-nsw-2541" className="transition hover:text-gold">
                  Nowra NSW 2541
                </Link>
              </li>
            </ul>
            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-gold">Servicing</p>
            <p className="mt-2 text-sm leading-6 text-white/55">{HOME.suburbs}</p>
          </div>

          <div>
            <h3 className="eyebrow mb-6">Contact Us</h3>
            <ul className="space-y-4 text-white/70">
              <li className="flex gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-gold" />
                <a href={SITE.phoneHref} className="transition hover:text-gold">{SITE.phone}</a>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-gold" />
                <a href={SITE.emailHref} className="text-sm transition hover:text-gold lg:whitespace-nowrap">{SITE.email}</a>
              </li>
            </ul>
            <Link href="/moving-estimate" className="btn btn-gold mt-8">Get a Quote</Link>
          </div>
        </div>

        <div className="hairline mt-16" />
        <div className="mt-8 flex flex-col gap-3 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Dave&apos;s Removal Service, {SITE.credit.replace("FrogsThemes.com", "")}
            <a href={SITE.creditHref} className="hover:text-gold">FrogsThemes.com</a>
          </p>
          <div className="flex gap-6">
            <a href={SITE.oneflare} target="_blank" rel="noreferrer" className="transition hover:text-gold">Oneflare</a>
            <a href={SITE.homeImprovement} target="_blank" rel="noreferrer" className="transition hover:text-gold">Homeimprovement2day</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
