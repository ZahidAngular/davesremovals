import type { Metadata } from "next";
import { Quote } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/ui";
import { TESTIMONIALS } from "@/lib/content";

export const metadata: Metadata = { title: "Customer Testimonials" };

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="Customer Testimonials"
        eyebrow="Client Testimonials"
        image="/img/testimonials-bg.jpg"
        crumbs={[{ label: "About", href: "/about" }, { label: "Customer Testimonials" }]}
      />
      <section className="section">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 0.08}>
              <figure className="h-full rounded-3xl border border-ink/10 bg-ivory p-10">
                <Quote className="text-gold" size={36} />
                <blockquote className="font-display mt-6 text-2xl leading-snug">{t.quote}</blockquote>
                <figcaption className="mt-8 border-t border-ink/10 pt-5">
                  <p className="font-display text-xl">{t.name}</p>
                  {t.place && <p className="text-sm uppercase tracking-[0.15em] text-gold">{t.place}</p>}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
