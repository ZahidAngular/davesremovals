"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";

const SRC = "/video/DavesRemovals.mp4";

function Modal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] grid place-items-center bg-ink/90 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Company video"
          data-lenis-prevent
        >
          <motion.div
            initial={{ scale: 0.92, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl"
          >
            <button
              onClick={onClose}
              aria-label="Close video"
              className="absolute -top-14 right-0 grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition hover:bg-white hover:text-ink"
            >
              <X size={20} />
            </button>
            <div className="aspect-video overflow-hidden rounded-3xl bg-black shadow-2xl">
              <video src={SRC} controls autoPlay playsInline className="h-full w-full" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function PlayRing({ size = "lg" }: { size?: "sm" | "lg" }) {
  const box = size === "lg" ? "h-24 w-24 md:h-28 md:w-28" : "h-14 w-14";
  return (
    <span className={`relative grid ${box} shrink-0 place-items-center`}>
      <span className="absolute inset-0 animate-ping rounded-full bg-gold/40 [animation-duration:2.4s]" />
      <span className="relative grid h-full w-full place-items-center rounded-full bg-gradient-to-br from-gold-soft via-gold to-[#a8803a] text-ink shadow-[0_15px_40px_-10px_rgba(201,164,92,0.9)] transition duration-500 group-hover:scale-110">
        <Play size={size === "lg" ? 34 : 20} className="ml-1" fill="currentColor" />
      </span>
    </span>
  );
}

/** Small "Watch Video" trigger for the hero. */
export function WatchVideoButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)} className="group flex items-center gap-4 text-left text-white">
        <PlayRing size="sm" />
        <span>
          <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gold">Company Video</span>
          <span className="block text-sm font-semibold uppercase tracking-[0.12em]">Watch Video</span>
        </span>
      </button>
      <Modal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

/** Cinematic poster card with heading; opens the video in a modal. */
export function VideoFeature({ eyebrow, title }: { eyebrow: string; title: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label={`Play ${title}`}
        className="group relative block aspect-[16/9] w-full overflow-hidden rounded-[2rem] bg-ink text-left shadow-[0_40px_80px_-30px_rgba(10,23,48,0.6)] md:aspect-[21/9]"
      >
        <Image
          src="/img/commercial-removals.jpg"
          alt=""
          fill
          sizes="(min-width:1280px) 1200px, 100vw"
          className="object-cover transition duration-[1.6s] ease-out group-hover:scale-105"
        />
        <span className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,13,26,0.92)_0%,rgba(6,13,26,0.55)_55%,rgba(6,13,26,0.25)_100%)]" />
        <span className="absolute inset-0 flex flex-col justify-end gap-6 p-8 md:flex-row md:items-end md:justify-between md:p-14">
          <span className="block">
            <span className="eyebrow mb-4">{eyebrow}</span>
            <span className="font-display block text-4xl leading-tight text-white md:text-6xl">{title}</span>
            <span className="mt-4 block text-sm uppercase tracking-[0.2em] text-white/60">1:34</span>
          </span>
          <PlayRing />
        </span>
      </button>
      <Modal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
