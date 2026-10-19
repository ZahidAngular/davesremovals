import type { Metadata } from "next";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/ui";
import { AREAS } from "@/lib/content";

export const metadata: Metadata = { title: "Areas Serviced" };

export default function AreasPage() {
  return (
    <>
      <PageHero
        title="Areas Serviced"
        eyebrow="Here are the suburbs we service"
        sub="Here are the suburbs we service"
        crumbs={[{ label: "About", href: "/about" }, { label: "Areas Serviced" }]}
      />
      <section className="section">
        <div className="container-x grid items-start gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <Reveal>
            <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-3">
              {AREAS.map((a) => (
                <li key={a} className="group flex items-center gap-2 bg-paper px-5 py-4 text-sm font-semibold tracking-[0.08em] transition hover:bg-navy hover:text-white">
                  <MapPin size={14} className="shrink-0 text-gold" />
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-3xl border border-ink/10 bg-ivory p-3">
              <Image src="/img/service-area-map.png" alt="Service area map" width={328} height={512} className="mx-auto h-auto w-full rounded-2xl" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
