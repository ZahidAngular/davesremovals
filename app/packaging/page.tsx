import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/ui";
import { PACKAGING } from "@/lib/content";

export const metadata: Metadata = { title: "Packaging" };

export default function PackagingPage() {
  return (
    <>
      <PageHero title="Packaging" eyebrow="Packaging Supplies" crumbs={[{ label: "Packaging" }]} />

      <section className="section">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {PACKAGING.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.08}>
              <a href={`#${c.slug}`} className="group block overflow-hidden rounded-3xl border border-ink/10 bg-ivory">
                <div className="relative aspect-[4/3] bg-white">
                  <Image src={c.image} alt={c.category} fill sizes="(min-width:768px) 33vw, 100vw" className="object-contain p-8 transition duration-700 group-hover:scale-110" />
                </div>
                <p className="font-display p-6 text-2xl">
                  {c.category} <span className="text-gold">({c.items.length})</span>
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {PACKAGING.map((c, ci) => (
        <section key={c.slug} id={c.slug} className={`section scroll-mt-20 ${ci % 2 === 0 ? "bg-ivory" : "bg-paper"}`}>
          <div className="container-x">
            <Reveal>
              <h2 className="font-display text-4xl md:text-5xl">{c.category} <span className="text-gold">({c.items.length})</span></h2>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {c.items.map((it, i) => (
                <Reveal key={it.name} delay={(i % 4) * 0.06}>
                  <div className="h-full overflow-hidden rounded-3xl border border-ink/10 bg-white transition hover:-translate-y-1 hover:shadow-[0_30px_60px_-35px_rgba(10,23,48,0.5)]">
                    <div className="relative aspect-square bg-white">
                      <Image src={it.image} alt={it.name} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-contain p-6" />
                    </div>
                    <div className="border-t border-ink/10 p-6">
                      <h3 className="font-display text-xl">{it.name}</h3>
                      {"text" in it && <p className="mt-2 text-sm leading-6 text-muted">{it.text}</p>}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
