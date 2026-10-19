import type { Metadata } from "next";
import { AlertTriangle, Ban, CalendarX, Check, ShieldAlert } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/ui";
import { TERMS } from "@/lib/content";

export const metadata: Metadata = { title: "Terms & Conditions" };

const h = "font-display text-2xl md:text-3xl";

export default function TermsPage() {
  return (
    <>
      <PageHero
        title={TERMS.title}
        eyebrow={TERMS.heading}
        crumbs={[{ label: "About", href: "/about" }, { label: "Terms & Conditions" }]}
      />
      <section className="section">
        <div className="container-x max-w-4xl space-y-14">
          <Reveal>
            <div className="space-y-4 rounded-3xl border border-ink/10 bg-ivory p-9 md:p-12">
              {TERMS.intro.map((p) => (
                <p key={p.slice(0, 20)} className="flex gap-3 leading-8">
                  <Check size={20} className="mt-1.5 shrink-0 text-gold" /> {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 className={`${h} flex items-center gap-3`}><AlertTriangle className="text-gold" /> {TERMS.transitTitle}</h2>
            <ul className="mt-6 space-y-3 text-muted">
              {TERMS.transit.map((p) => (
                <li key={p.slice(0, 20)} className="flex gap-3 leading-8"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />{p}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <div className="rounded-3xl bg-navy p-9 text-white md:p-12">
              <h2 className={`${h} flex items-center gap-3`}><Ban className="text-gold" /> {TERMS.noMoveTitle}</h2>
              <p className="mt-5 text-xl text-gold-soft">{TERMS.noMove}</p>
              <p className="mt-3 text-white/70">{TERMS.noMoveNote}</p>
            </div>
          </Reveal>

          <Reveal>
            <h2 className={`${h} flex items-center gap-3`}><ShieldAlert className="text-gold" /> {TERMS.insuranceTitle}</h2>
            <div className="mt-6 space-y-4 leading-8 text-muted">
              {TERMS.insurance.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
              <ul className="space-y-2 pl-1">
                {TERMS.notCovered.map((p) => (
                  <li key={p} className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />{p}</li>
                ))}
              </ul>
              <p>{TERMS.insuranceAfter}</p>
            </div>

            <h3 className="font-display mt-10 text-xl">{TERMS.ownInsuranceTitle}</h3>
            <div className="mt-4 space-y-4 leading-8 text-muted">
              <p>{TERMS.ownInsurance}</p>
              <p>
                {TERMS.removalsInsLabel}{" "}
                <a href={TERMS.removalsInsLink} target="_blank" rel="noreferrer" className="font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4">
                  {TERMS.removalsInsLinkText}
                </a>
              </p>
              <p>
                <strong className="text-ink">{TERMS.homeContentsLabel}</strong>
                {TERMS.homeContents}
              </p>
            </div>
          </Reveal>

          <Reveal>
            <h2 className={h}>{TERMS.storageTitle}</h2>
            <div className="mt-6 space-y-4 leading-8 text-muted">
              {TERMS.storage.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
            </div>
          </Reveal>

          <Reveal>
            <h2 className={`${h} flex items-center gap-3`}><CalendarX className="text-gold" /> {TERMS.cancellationTitle}</h2>
            <ul className="mt-6 grid gap-4 md:grid-cols-3">
              {TERMS.cancellation.map((p) => (
                <li key={p.slice(0, 20)} className="rounded-2xl border border-ink/10 bg-ivory p-6 leading-7">{p}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
