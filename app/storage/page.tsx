import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, Lock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/ui";
import { STORAGE } from "@/lib/content";

export const metadata: Metadata = { title: "Secure Storage" };

export default function StoragePage() {
  return (
    <>
      <PageHero
        title="Secure Storage"
        eyebrow="Bomaderry, NSW"
        image="/img/home-v1-slider-03.jpg"
        crumbs={[{ label: "Storage" }]}
      />
      <section className="section">
        <div className="container-x">
          <Reveal>
            <p className="font-display max-w-4xl text-3xl leading-snug md:text-5xl">{STORAGE.text}</p>
          </Reveal>
          <div className="mt-8 flex gap-6 text-sm uppercase tracking-[0.18em] text-muted">
            <span className="flex items-center gap-2"><Lock size={16} className="text-gold" /> Secure facilities</span>
            <span className="flex items-center gap-2"><Eye size={16} className="text-gold" /> 24-hour surveillance</span>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {STORAGE.images.map((src, i) => (
              <Reveal key={src} delay={i * 0.1}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                  <Image src={src} alt="Secure storage facility" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover transition duration-700 hover:scale-105" />
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/storage/terms-conditions" className="btn btn-outline">Storage Terms &amp; Conditions <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
