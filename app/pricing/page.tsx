import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CreditCard, FileDown } from "lucide-react";
import { PageHero, SectionHead } from "@/components/PageHero";
import { Accordion, Reveal } from "@/components/ui";
import { PRICING, SITE } from "@/lib/content";

export const metadata: Metadata = { title: "Pricing" };

const linkCls = "font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4";

function renderAnswer(a: string) {
  const map: Record<string, React.ReactNode> = {
    "{contact}": <Link key="c" href="/contact" className={linkCls}>Contact us</Link>,
    "{contactOnline}": <Link key="co" href="/contact" className={linkCls}>contact us online</Link>,
    "{insurance}": <Link key="i" href="/about/removals-insurance" className={linkCls}>removals insurance</Link>,
    "{removalsIns}": <a key="r" href={SITE.removalsInsurance} target="_blank" rel="noreferrer" className={linkCls}>removals insurance</a>,
  };
  return a.split(/(\{[a-zA-Z]+\})/).map((part, i) => (map[part] ? <span key={i}>{map[part]}</span> : <span key={i}>{part}</span>));
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        title="Pricing"
        eyebrow={PRICING.ratesFrom}
        sub={PRICING.intro}
        crumbs={[{ label: "Pricing" }]}
      />

      <section className="section">
        <div className="container-x grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-[2rem] bg-ink p-10 text-white md:p-14">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/25 blur-[90px]" />
              <p className="eyebrow">{PRICING.ratesFrom}</p>
              <p className="font-display gold-text mt-4 text-8xl leading-none md:text-9xl">{PRICING.rate}</p>
              <p className="mt-6 text-xl text-white/70">{PRICING.trucks}</p>
              <Link href="/pricing/space-calculator" className="btn btn-gold mt-10">
                {PRICING.getStarted} <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-between gap-8 rounded-[2rem] border border-ink/10 bg-ivory p-10 md:p-12">
              <Image src="/img/truck1.png" alt="Removals truck" width={800} height={449} className="h-auto w-full rounded-2xl" />
              <div>
                <p className="font-display text-2xl">{PRICING.know}</p>
                <p className="mt-2 flex items-center gap-2 text-muted"><CreditCard size={18} className="text-gold" /> {PRICING.paypal}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={SITE.payNow} target="_blank" rel="noreferrer" className="btn btn-dark">{PRICING.payNow}</a>
                  <a href="/docs/Service-Contract.pdf" target="_blank" rel="noreferrer" className="btn btn-outline">
                    <FileDown size={16} /> {PRICING.contract}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-x grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
          <Reveal><SectionHead eyebrow="FAQ" title={PRICING.qaTitle} sub={PRICING.qaSub} /></Reveal>
          <Reveal delay={0.1}>
            <Accordion items={PRICING.faqs.map((f) => ({ q: f.q, a: <p>{renderAnswer(f.a)}</p> }))} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
