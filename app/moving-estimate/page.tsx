import type { Metadata } from "next";
import Image from "next/image";
import { Gift, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { QuoteWizard } from "@/components/Forms";
import { Reveal } from "@/components/ui";
import { HOME, SITE } from "@/lib/content";

export const metadata: Metadata = { title: "Moving Estimate" };

export default function EstimatePage() {
  return (
    <>
      <PageHero title="Moving Estimate" eyebrow={HOME.cta} image="/img/commercial-removals.jpg" crumbs={[{ label: "Moving Estimate" }]} />
      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="rounded-[2rem] border border-ink/10 bg-ivory p-8 md:p-12">
              <QuoteWizard />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-[2rem] bg-navy p-9 text-white md:p-12">
              <Image src="/img/request-quote.png" alt="" width={188} height={189} className="mb-6 h-20 w-20 rounded-full bg-white/10 object-contain p-3" />
              <p className="font-display text-3xl">{HOME.cta.replace("Free Boxes!", "")}<span className="gold-text">Free Boxes!</span></p>
              <p className="mt-6 flex items-center gap-3 text-white/75"><Gift size={18} className="text-gold" /> {HOME.quoteSub}</p>
              <a href={SITE.phoneHref} className="btn btn-gold mt-8"><Phone size={16} /> {HOME.callCta}</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
