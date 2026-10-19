"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { HOME, SITE } from "@/lib/content";
import { WatchVideoButton } from "./VideoModal";

function Title({ text }: { text: string }) {
  const words = text.split(" ");
  const last = words.pop();
  return (
    <>
      {words.join(" ")} <em className="font-light italic text-gold-soft">{last}</em>
    </>
  );
}

export function HeroSlider() {
  const [i, setI] = useState(0);
  const slides = HOME.heroSlides;

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section className="relative isolate flex min-h-[min(100svh,50rem)] items-center overflow-hidden bg-ink text-white grain">
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.14 }}
          animate={{ opacity: 1, scale: 1.02 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.6 }, scale: { duration: 8, ease: "linear" } }}
          className="absolute inset-0 -z-20"
        >
          <Image src={slides[i].image} alt="" fill priority sizes="100vw" className="object-cover grayscale-[0.35] contrast-105" />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 -z-10 bg-[#0a1730]/25 mix-blend-multiply" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(6,13,26,0.94)_10%,rgba(6,13,26,0.62)_50%,rgba(6,13,26,0.2)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_60%_at_80%_20%,rgba(201,164,92,0.25),transparent_70%)]" />

      <div className="container-x grid items-center gap-14 pb-28 pt-40 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="eyebrow mb-7"
          >
            Servicing Wollongong / Shoalhaven
          </motion.p>

          <div className="min-h-[15rem] md:min-h-[17rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className="font-display text-5xl leading-[1.02] sm:text-6xl md:text-[5.5rem]">
                  <Title text={slides[i].title} />
                </h1>
                <p className="mt-6 max-w-xl text-xl text-white/75">{slides[i].text}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/moving-estimate" className="btn btn-gold">
              {HOME.cta} <ArrowRight size={16} />
            </Link>
            <a href={SITE.phoneHref} className="btn btn-ghost">
              <Phone size={16} /> {HOME.callCta}
            </a>
          </div>

          <div className="mt-10 flex items-center justify-between gap-6">
            <WatchVideoButton />
            <Link href="/moving-estimate" aria-label="Free quote — click here" className="block w-24 shrink-0 rotate-[8deg] lg:hidden">
              <Image src="/img/request-quote.png" alt="Free Quote — Click Here" width={188} height={189} className="h-auto w-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.45)]" />
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-3">
            {slides.map((s, idx) => (
              <button
                key={s.title}
                onClick={() => setI(idx)}
                aria-label={`Show slide ${idx + 1}: ${s.title}`}
                className="group relative h-8 w-16 py-3"
              >
                <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/25" />
                <span
                  className={`absolute left-0 top-1/2 h-0.5 -translate-y-1/2 bg-gold transition-all duration-700 ${
                    idx === i ? "w-full" : "w-0"
                  }`}
                />
              </button>
            ))}
            <span className="ml-2 text-xs tracking-[0.3em] text-white/50">
              0{i + 1} / 0{slides.length}
            </span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative hidden pt-28 lg:block"
        >
          <Link
            href="/moving-estimate"
            aria-label="Free quote — click here"
            className="group absolute -right-6 -top-4 z-10 block w-32 rotate-[8deg] transition duration-500 hover:rotate-0 hover:scale-110 xl:-right-10 xl:w-36"
          >
            <span className="absolute inset-4 rounded-full bg-gold/50 blur-2xl transition group-hover:bg-gold/70" />
            <Image src="/img/request-quote.png" alt="Free Quote — Click Here" width={188} height={189} className="relative h-auto w-full drop-shadow-[0_15px_25px_rgba(0,0,0,0.45)]" />
          </Link>
          <div className="floaty glass rounded-[2rem] p-6">
            <p className="eyebrow mb-4">Wollongong&apos;s No.1</p>
            <p className="font-display text-3xl leading-tight">
              Family-owned &amp; operated. <span className="gold-text">87 years</span> of combined experience.
            </p>
            <div className="hairline my-6" />
            <div className="grid grid-cols-2 gap-5 text-sm text-white/70">
              <div>
                <p className="font-display text-4xl text-white">4</p>
                trucks · Hino &amp; Isuzu
              </div>
              <div>
                <p className="font-display text-4xl text-white">$100k</p>
                transit insurance
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-ink/70 py-4 backdrop-blur-md">
        <div className="container-x flex items-center gap-4 text-xs uppercase tracking-[0.22em] text-white/60">
          <span className="text-gold">Servicing</span>
          <span className="truncate">{HOME.suburbs}</span>
        </div>
      </div>
    </section>
  );
}
