import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Boxes, Briefcase, Building2, Globe2, Home as HomeIcon, Quote, ShieldCheck } from "lucide-react";
import { PageHero, SectionHead } from "@/components/PageHero";
import { Accordion, Reveal } from "@/components/ui";
import { ABOUT, SERVICES_ABOUT, SITE, TESTIMONIALS } from "@/lib/content";

export const metadata: Metadata = { title: "About" };

const icons = [HomeIcon, Globe2, Briefcase, Boxes, Building2, ShieldCheck];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={ABOUT.headline}
        eyebrow={ABOUT.celebrate}
        sub={ABOUT.founded}
        image="/img/residential-removals.jpg"
        crumbs={[{ label: "About" }]}
      />

      <section className="section">
        <div className="container-x grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="font-display text-3xl leading-snug md:text-4xl">{ABOUT.body[0]}</p>
            <div className="mt-8 space-y-5 text-[1.05rem] leading-8 text-muted">
              {ABOUT.body.slice(1).map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
            </div>
            <Link href="/contact" className="btn btn-dark mt-10">{ABOUT.contactCta} <ArrowRight size={16} /></Link>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image src="/img/1000011071.jpg" alt="Dave's Removals truck" fill sizes="(min-width:1024px) 32rem, 90vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-x">
          <Reveal><SectionHead eyebrow="Services" title={ABOUT.expertsTitle} sub={ABOUT.expertsSub} /></Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES_ABOUT.map((s, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={s.title} delay={(i % 3) * 0.08}>
                  <div className="h-full rounded-3xl border border-ink/10 bg-paper p-9 transition hover:-translate-y-1 hover:shadow-[0_30px_60px_-35px_rgba(10,23,48,0.5)]">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-gold"><Icon size={24} /></span>
                    <h3 className="font-display mt-7 text-2xl">{s.title}</h3>
                    <p className="mt-3 leading-7 text-muted">{s.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal><SectionHead eyebrow="At a glance" title={ABOUT.glanceTitle} sub={ABOUT.glanceSub} /></Reveal>
          <Reveal delay={0.1}>
            <Accordion
              items={ABOUT.faqs.map((f) => ({
                q: f.q,
                a: (
                  <>
                    {f.a.map((p) => {
                      if (p.startsWith("LINK:")) {
                        const [before, link, after] = p.slice(5).split("|");
                        return (
                          <p key={p}>
                            {before}
                            <a href={SITE.removalsInsurance} target="_blank" rel="noreferrer" className="font-semibold text-ink underline decoration-gold underline-offset-4">{link}</a>
                            {after}
                          </p>
                        );
                      }
                      return <p key={p.slice(0, 30)}>{p}</p>;
                    })}
                  </>
                ),
              }))}
            />
          </Reveal>
        </div>
      </section>

      <section className="section bg-ink text-white">
        <div className="container-x">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT.coverage.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.07} className="h-full">
                <div className="h-full bg-ink p-9 transition hover:bg-navy-2">
                  <p className="font-display text-3xl">{c.title}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-gold">{c.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-x">
          <Reveal><SectionHead eyebrow="Testimonials" title="Customer Testimonials" center /></Reveal>
          <div className="mt-14 columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 0.08} className="break-inside-avoid">
                <figure className="rounded-3xl border border-ink/10 bg-paper p-8">
                  <Quote className="text-gold" size={30} />
                  <blockquote className="mt-5 leading-8">{t.quote}</blockquote>
                  <figcaption className="mt-6 border-t border-ink/10 pt-4">
                    <p className="font-display text-lg">{t.name}</p>
                    {t.place && <p className="text-sm uppercase tracking-[0.15em] text-gold">{t.place}</p>}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
