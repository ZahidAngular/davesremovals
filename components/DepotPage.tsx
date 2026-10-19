import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/Forms";
import { Reveal } from "@/components/ui";
import { CONTACT, SITE } from "@/lib/content";

export function DepotPage({ title, city }: { title: string; city: string }) {
  return (
    <>
      <PageHero title={title} eyebrow="Dave's Removals & Storage" crumbs={[{ label: "Contact", href: "/contact" }, { label: city }]} />
      <section className="section">
        <div className="container-x grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <h2 className="font-display text-3xl">Dave&apos;s Removals &amp; Storage</h2>
            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                <MapPin className="mt-1 text-gold" size={22} />
                <span>{city}</span>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-1 text-gold" size={22} />
                <span><span className="block text-xs uppercase tracking-[0.18em] text-muted">Phone Number</span><a href={SITE.phoneHref} className="font-semibold hover:text-gold">{SITE.phone}</a></span>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-1 text-gold" size={22} />
                <span><span className="block text-xs uppercase tracking-[0.18em] text-muted">Email Address</span><a href={SITE.emailHref} className="break-all font-semibold hover:text-gold">{SITE.email}</a></span>
              </li>
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-[2rem] border border-ink/10 bg-ivory p-8 md:p-12">
              <h2 className="font-display text-3xl md:text-4xl">{CONTACT.formTitle}</h2>
              <p className="mb-8 mt-4 text-muted">
                {CONTACT.formSub}
                <a href={SITE.emailHref} className="font-semibold text-ink underline decoration-gold underline-offset-4">{SITE.email}</a>.
              </p>
              <ContactForm depot={city} />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
