import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Boxes, Briefcase, Building2, Globe2, Home as HomeIcon, Mail, MapPin, Phone, Quote, ShieldCheck } from "lucide-react";
import { HeroSlider } from "@/components/HeroSlider";
import { Counter, Reveal } from "@/components/ui";
import { SectionHead } from "@/components/PageHero";
import { ContactForm } from "@/components/Forms";import { HOME, HOME_TESTIMONIALS, SERVICES_HOME, SITE } from "@/lib/content";

const icons = [HomeIcon, Globe2, Briefcase, Boxes, Building2, ShieldCheck];

export default function HomePage() {
  const suburbs = HOME.suburbs.replace(/\.$/, "").split(/,\s*(?:and\s+)?/);
  return (
    <>
      <HeroSlider />

      {/* Intro */}
      <section className="section relative overflow-hidden">
        <div className="container-x grid items-start gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="eyebrow mb-6">Dave&apos;s Removals &amp; Storage</p>
            <h2 className="font-display text-4xl leading-[1.05] md:text-6xl">{HOME.introTitle}</h2>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a href={SITE.threeBestRated} target="_blank" rel="noreferrer">
                <Image src="/img/threebestrated.svg" alt="Three Best Rated — Best Moving companies in Nowra" width={112} height={112} className="h-28 w-28" unoptimized />
              </a>
              <a
                href={SITE.homeImprovement}
                target="_blank"
                rel="noreferrer"
                className="group max-w-[16rem] border-l-2 border-gold pl-5 text-sm font-semibold uppercase tracking-[0.15em] text-ink"
              >
                {HOME.award}
                <ArrowUpRight size={16} className="ml-1 inline text-gold transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
            <div className="mt-12 rounded-3xl bg-navy p-8 text-white">
              <p className="eyebrow mb-4">Book your move</p>
              <a href={SITE.phoneHref} className="font-display gold-text block text-4xl">{SITE.phone}</a>
              <p className="mt-3 text-sm text-white/65">{HOME.cta}</p>
              <Link href="/moving-estimate" className="btn btn-gold mt-6">Get a Quote <ArrowRight size={16} /></Link>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-display text-2xl leading-snug text-ink md:text-3xl">{HOME.intro[0]}</p>
            <div className="mt-8 space-y-5 text-[1.05rem] leading-8 text-muted">
              {HOME.intro.slice(1).map((p) => (
                <p key={p.slice(0, 24)} className="whitespace-pre-line">{p}</p>
              ))}
              <p>
                {HOME.introCallBefore}
                <Link href="/moving-estimate" className="font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4">
                  {HOME.introCallLink}
                </Link>
                {HOME.introCallAfter}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-ivory">
        <div className="container-x">
          <Reveal>
            <SectionHead eyebrow="What we do" title={HOME.servicesTitle} sub={HOME.servicesSub} />
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES_HOME.map((s, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={s.title} delay={(i % 3) * 0.08} className="h-full">
                  <div className="group relative h-full overflow-hidden bg-paper p-9 transition-colors duration-500 hover:bg-navy md:p-11">
                    <span className="font-display absolute right-7 top-5 text-7xl text-ink/[0.06] transition-colors group-hover:text-white/10">
                      0{i + 1}
                    </span>
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-gold transition group-hover:bg-gold group-hover:text-ink">
                      <Icon size={24} />
                    </span>
                    <h3 className="font-display mt-8 text-3xl transition-colors group-hover:text-white">{s.title}</h3>
                    <p className="mt-4 leading-7 text-muted transition-colors group-hover:text-white/70">{s.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-14">
            <div className="relative isolate overflow-hidden rounded-[2rem] bg-navy px-8 py-12 text-white grain md:px-14 md:py-14">
              <div className="pointer-events-none absolute -right-20 -top-28 -z-10 h-80 w-80 rounded-full bg-gold/25 blur-[100px]" />
              <span
                aria-hidden
                className="font-display pointer-events-none absolute -bottom-16 right-[28%] -z-10 select-none text-[16rem] leading-none text-transparent [-webkit-text-stroke:1px_rgba(201,164,92,0.22)] md:text-[20rem]"
              >
                10
              </span>
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="eyebrow mb-4">Book your move</p>
                  <p className="font-display text-balance text-4xl leading-tight md:text-5xl">
                    Book Now and Get 10 <span className="gold-text">Free Boxes!</span>
                  </p>
                </div>
                <div className="flex shrink-0 flex-wrap gap-3">
                  <Link href="/moving-estimate" className="btn btn-gold">Get a Quote <ArrowRight size={16} /></Link>
                  <a href={SITE.phoneHref} className="btn btn-ghost"><Phone size={16} /> {SITE.phone}</a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Family */}
      <section className="section relative overflow-hidden bg-ink text-white grain">
        <div className="pointer-events-none absolute -left-40 top-0 h-[36rem] w-[36rem] rounded-full bg-gold/10 blur-[140px]" />
        <div className="container-x relative grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-6">{HOME.familySub}</p>
            <h2 className="font-display text-4xl leading-[1.05] md:text-6xl">{HOME.familyTitle}</h2>
            <p className="mt-6 flex items-start gap-3 text-lg text-gold-soft">
              <MapPin size={20} className="mt-1 shrink-0" /> {HOME.familyCover}
            </p>
            <div className="mt-8 space-y-5 leading-8 text-white/70">
              {HOME.familyBody.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {[
                { n: 87, s: "", l: "Years combined experience" },
                { n: 4, s: "", l: "Trucks" },
                { n: 9, s: "+", l: "Years serving the region" },
              ].map((x) => (
                <div key={x.l}>
                  <p className="font-display text-5xl gold-text"><Counter to={x.n} suffix={x.s} /></p>
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/55">{x.l}</p>
                </div>
              ))}
            </div>
            <Link href="/about" className="btn btn-gold mt-10">{HOME.readMore} <ArrowRight size={16} /></Link>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 rounded-[2.5rem] border border-gold/30" />
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem]">
                <Image src="/img/1000011071.jpg" alt="Dave's Removals truck" fill sizes="(min-width:1024px) 28rem, 90vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section relative overflow-hidden bg-ivory">
        <Image src="/img/testimonials-bg.jpg" alt="" fill sizes="100vw" className="-z-0 object-cover opacity-[0.07]" />
        <div className="container-x relative">
          <Reveal>
            <SectionHead eyebrow="Testimonials" title={HOME.testimonialsTitle} sub={HOME.testimonialsSub} center />
          </Reveal>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {HOME_TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1} className="h-full">
                <figure className="flex h-full flex-col rounded-3xl border border-ink/10 bg-paper p-9 shadow-[0_30px_60px_-40px_rgba(10,23,48,0.4)]">
                  <Quote className="text-gold" size={34} />
                  <blockquote className="mt-6 flex-1 leading-8 text-text">{t.quote}</blockquote>
                  <figcaption className="mt-8 border-t border-ink/10 pt-5">
                    <p className="font-display text-xl">{t.name}</p>
                    {t.place && <p className="text-sm uppercase tracking-[0.15em] text-gold">{t.place}</p>}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/about/testimonials" className="btn btn-outline">All client testimonials <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* Suburbs marquee */}
      <section className="overflow-hidden border-y border-ink/10 bg-paper py-10">
        <p className="container-x mb-6 text-center text-sm text-muted">{HOME.servicing}</p>
        <div className="marquee">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0 items-center" aria-hidden={k === 1}>
              {suburbs.map((s) => (
                <span key={s + k} className="font-display flex items-center gap-10 pr-10 text-4xl text-ink md:text-6xl">
                  {s}
                  <span className="text-gold">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
        <p className="sr-only">{HOME.suburbs}</p>
      </section>

      {/* Quote */}
      <section className="section relative overflow-hidden bg-navy text-white grain">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-gold/15 blur-[130px]" />
        <div className="container-x relative grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow mb-6">Get in touch</p>
            <h2 className="font-display text-4xl leading-[1.05] md:text-6xl">{HOME.quoteTitle}</h2>
            <p className="mt-6 text-lg text-white/65">{HOME.quoteSub}</p>
            <ul className="mt-10 space-y-5 text-white/80">
              <li className="flex items-center gap-4"><Phone className="text-gold" size={20} /><a href={SITE.phoneHref} className="hover:text-gold">{SITE.phone}</a></li>
              <li className="flex items-center gap-4"><Mail className="text-gold" size={20} /><a href={SITE.emailHref} className="break-all hover:text-gold">{SITE.email}</a></li>
              <li className="flex items-center gap-4"><MapPin className="text-gold" size={20} />
                <a href="https://www.google.com/maps/search/?api=1&query=Dapto+NSW+2530" target="_blank" rel="noreferrer" className="hover:text-gold">Show Map</a>
              </li>
            </ul>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="glass rounded-[2rem] p-8 md:p-12">
              <ContactForm dark />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
