import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/ui";
import { INSURANCE, SITE } from "@/lib/content";

export const metadata: Metadata = { title: "Removals Insurance" };

export default function InsurancePage() {
  return (
    <>
      <PageHero
        title={INSURANCE.title}
        eyebrow={INSURANCE.heading}
        crumbs={[{ label: "About", href: "/about" }, { label: "Removals Insurance" }]}
      />
      <section className="section">
        <div className="container-x max-w-4xl">
          <Reveal>
            <p className="font-display text-3xl leading-snug md:text-4xl">{INSURANCE.lead}</p>
            <p className="mt-8 text-[1.05rem] leading-8 text-muted">{INSURANCE.intro}</p>
          </Reveal>

          <Reveal className="mt-16">
            <div className="rounded-3xl border border-ink/10 bg-ivory p-9 md:p-12">
              <ShieldCheck className="text-gold" size={34} />
              <h2 className="font-display mt-5 text-3xl">{INSURANCE.removalsTitle}</h2>
              <p className="mt-4 leading-8 text-muted">
                {INSURANCE.removalsBefore}
                <a href={SITE.removalsInsurance} target="_blank" rel="noreferrer" className="font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4">
                  {INSURANCE.removalsLink}
                </a>
                {INSURANCE.removalsAfter}
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-8">
            <div className="rounded-3xl bg-navy p-9 text-white md:p-12">
              <ShieldCheck className="text-gold" size={34} />
              <h2 className="font-display mt-5 text-3xl">{INSURANCE.transitTitle}</h2>
              <p className="mt-4 leading-8 text-white/70">{INSURANCE.transit}</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
