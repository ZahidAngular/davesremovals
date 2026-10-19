import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Award, Boxes, Briefcase, Globe2, Mail, MapPin, Phone, Quote, type LucideIcon } from "lucide-react";
import { HeroSlider } from "@/components/HeroSlider";
import { Counter, Reveal } from "@/components/ui";
import { SectionHead } from "@/components/PageHero";
import { ContactForm } from "@/components/Forms";
import { HOME, HOME_TESTIMONIALS, SERVICES_HOME, SITE } from "@/lib/content";

const BENTO: { idx: number; image?: string; icon?: LucideIcon }[] = [
  { idx: 0, image: "/img/residential-removals.jpg" },
  { idx: 1, icon: Globe2 },
  { idx: 2, icon: Briefcase },
  { idx: 4, image: "/img/commercial-removals.jpg" },
  { idx: 3, icon: Boxes },
  { idx: 5, image: "/img/home-v1-slider-03.jpg" },
];

export default function HomePage() {
  const suburbs = HOME.suburbs.replace(/\.$/, "").split(/,\s*(?:and\s+)?/);
  return (
    <>
      <HeroSlider />

      {/* Trust bar */}
      <section className="relative z-10 border-b border-ink/10 bg-paper">
        <div className="container-x grid grid-cols-2 divide-ink/10 lg:grid-cols-5 lg:divide-x">
          {[
            { k: "87", l: "Years of combined experience" },
            { k: "20", l: "Years in the business" },
            { k: "$100k", l: "Full Transit Insurance" },
          ].map((x) => (
            <div key={x.l} className="flex items-center gap-4 py-7 lg:justify-center lg:px-6">
              <span className="font-display text-4xl text-ink md:text-5xl">{x.k}</span>
              <span className="max-w-[9rem] text-xs font-semibold uppercase leading-5 tracking-[0.14em] text-muted">{x.l}</span>
            </div>
          ))}
          <a href={SITE.threeBestRated} target="_blank" rel="noreferrer" className="group flex items-center gap-4 py-7 lg:justify-center lg:px-6">
            <Image src="/img/threebestrated.svg" alt="" width={56} height={56} className="h-14 w-14 transition group-hover:scale-110" unoptimized />
            <span className="max-w-[9rem] text-xs font-semibold uppercase leading-5 tracking-[0.14em] text-muted">Best Moving companies in Nowra</span>
          </a>
          <a href={SITE.homeImprovement} target="_blank" rel="noreferrer" className="group col-span-2 flex items-center gap-4 py-7 lg:col-span-1 lg:justify-center lg:px-6">
            <Award className="h-10 w-10 shrink-0 text-gold transition group-hover:scale-110" strokeWidth={1.25} />
            <span className="max-w-[11rem] text-xs font-semibold uppercase leading-5 tracking-[0.14em] text-muted">{HOME.award}</span>
          </a>
        </div>
      </section>

      {/* Intro */}
      <section className="section relative overflow-hidden">
        <Image src="/img/home-v1-clients-bg.jpg" alt="" fill sizes="100vw" className="pointer-events-none -z-10 object-cover opacity-40 mix-blend-multiply" />
        <div className="container-x grid items-start gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-6">Dave&apos;s Removals &amp; Storage</p>
            <h2 className="font-display text-balance text-4xl leading-[1.05] md:text-6xl">{HOME.introTitle}</h2>
            <div className="relative mt-10 overflow-hidden rounded-3xl bg-navy p-8 text-white">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/25 blur-[70px]" />
              <a href={SITE.phoneHref} className="font-display gold-text relative block text-4xl">{SITE.phone}</a>
              <p className="relative mt-4 text-sm leading-7 text-white/70">
                {HOME.introCallBefore}
                <Link href="/moving-estimate" className="font-semibold text-gold-soft underline decoration-gold/60 underline-offset-4">
                  {HOME.introCallLink}
                </Link>
                {HOME.introCallAfter}
              </p>
              <Link href="/moving-estimate" className="btn btn-gold relative mt-6">Get a Quote <ArrowRight size={16} /></Link>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-7">
            <p className="font-display text-balance text-2xl leading-snug text-ink md:text-[2rem]">{HOME.intro[0]}</p>
            <div className="hairline my-10" />
            <div className="gap-10 text-[0.98rem] leading-8 text-muted md:columns-2 [&>p]:mb-5 [&>p]:break-inside-avoid">
              {HOME.intro.slice(1).map((p, idx) => (
                <p key={p.slice(0, 24)} className={idx === 0 ? "first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:leading-[0.85] first-letter:text-gold" : ""}>
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-ivory">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <SectionHead eyebrow="What we do" title={HOME.servicesTitle} />
              <p className="max-w-sm text-lg text-muted lg:text-right">{HOME.servicesSub}</p>
            </div>
          </Reveal>
          <div className="mt-14 grid auto-rows-[minmax(19rem,auto)] gap-5 lg:grid-cols-3">
            {BENTO.map(({ idx, image, icon: Icon }, n) => {
              const s = SERVICES_HOME[idx];
              const num = String(idx + 1).padStart(2, "0");
              return (
                <Reveal key={s.title} delay={(n % 2) * 0.08} className={image ? "lg:col-span-2" : ""}>
                  {image ? (
                    <Link href="/moving-estimate" className="group relative isolate flex h-full min-h-[19rem] flex-col justify-end overflow-hidden rounded-[1.75rem] p-8 text-white md:p-10">
                      <Image src={image} alt="" fill sizes="(min-width:1024px) 66vw, 100vw" className="-z-20 object-cover transition duration-[1.4s] ease-out group-hover:scale-105" />
                      <span className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(6,13,26,0.92)_0%,rgba(6,13,26,0.45)_55%,rgba(6,13,26,0.15)_100%)]" />
                      <span className="font-display absolute right-8 top-6 text-6xl text-white/25">{num}</span>
                      <span className="absolute right-8 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/30 opacity-0 transition duration-500 group-hover:opacity-100">
                        <ArrowUpRight size={20} />
                      </span>
                      <h3 className="font-display text-3xl md:text-4xl">{s.title}</h3>
                      <p className="mt-3 max-w-lg leading-7 text-white/75">{s.text}</p>
                    </Link>
                  ) : (
                    <div className="group flex h-full min-h-[19rem] flex-col rounded-[1.75rem] border border-ink/10 bg-paper p-8 transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-35px_rgba(10,23,48,0.45)] md:p-10">
                      <div className="flex items-start justify-between">
                        {Icon && <Icon className="h-10 w-10 text-gold" strokeWidth={1.25} />}
                        <span className="font-display text-5xl text-ink/10">{num}</span>
                      </div>
                      <h3 className="font-display mt-auto pt-10 text-3xl">{s.title}</h3>
                      <p className="mt-3 leading-7 text-muted">{s.text}</p>
                    </div>
                  )}
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
