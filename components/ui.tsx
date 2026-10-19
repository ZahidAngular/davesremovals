"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Minus, Plus } from "lucide-react";

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / 1600, 1);
      setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

export function Accordion({
  items,
  dark = false,
}: {
  items: { q: string; a: React.ReactNode }[];
  dark?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className={`divide-y ${dark ? "divide-white/10 border-y border-white/10" : "divide-ink/10 border-y border-ink/10"}`}>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className={`font-display text-xl md:text-2xl ${dark ? "text-white" : "text-ink"}`}>{it.q}</span>
              <span
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition ${
                  isOpen ? "border-gold bg-gold text-ink" : dark ? "border-white/25 text-white" : "border-ink/25 text-ink"
                }`}
              >
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>
            <motion.div
              initial={false}
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className={`max-w-3xl space-y-4 pb-7 leading-relaxed ${dark ? "text-white/70" : "text-muted"}`}>
                {it.a}
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
