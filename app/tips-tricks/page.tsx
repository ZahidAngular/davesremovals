import type { Metadata } from "next";
import { Download, FileText } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/ui";
import { TIPS } from "@/lib/content";

export const metadata: Metadata = { title: "Tips & Tricks" };

export default function TipsPage() {
  return (
    <>
      <PageHero title="Tips & Tricks" eyebrow="Moving resources" crumbs={[{ label: "Tips & Tricks" }]} />
      <section className="section">
        <div className="container-x">
          <Reveal>
            <p className="font-display max-w-4xl text-3xl leading-snug md:text-4xl">{TIPS.intro[0]}</p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">{TIPS.intro[1]}</p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TIPS.downloads.map((d, i) => (
              <Reveal key={d.label} delay={i * 0.08}>
                <a
                  href={d.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col justify-between rounded-3xl border border-ink/10 bg-ivory p-9 transition duration-500 hover:-translate-y-1 hover:bg-navy hover:text-white"
                >
                  <FileText size={40} className="text-gold" />
                  <div className="mt-16">
                    <p className="font-display text-3xl">{d.label}</p>
                    <p className="mt-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-gold">
                      <Download size={16} /> PDF
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
