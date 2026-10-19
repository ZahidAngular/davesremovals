import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/ui";
import { CONTACT, SITE } from "@/lib/content";

export const metadata: Metadata = { title: "New South Wales Removalists" };

export default function ContactPage() {
  return (
    <>
      <PageHero title={CONTACT.headline} eyebrow="Contact" sub={CONTACT.sub} crumbs={[{ label: "Contact" }]} />
      <section className="section">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {CONTACT.depots.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-[2rem] border border-ink/10 bg-ivory p-10 transition duration-500 hover:bg-navy hover:text-white md:p-14">
                <MapPin size={34} className="text-gold" />
                <h2 className="font-display mt-8 text-3xl md:text-4xl">{d.name}</h2>
                <p className="mt-3 text-lg text-muted transition group-hover:text-white/70">{d.city}</p>
                <a href={SITE.phoneHref} className="mt-6 flex items-center gap-2 font-semibold"><Phone size={16} className="text-gold" /> {SITE.phone}</a>
                <Link href={d.href} className="btn btn-gold mt-10">{d.cta} <ArrowRight size={16} /></Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
