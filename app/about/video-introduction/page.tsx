import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/lib/content";

export const metadata: Metadata = { title: "Video Introduction" };

export default function VideoPage() {
  return (
    <>
      <PageHero
        title="Video Introduction"
        eyebrow="Company Video"
        crumbs={[{ label: "About", href: "/about" }, { label: "Video Introduction" }]}
      />
      <section className="section">
        <div className="container-x">
          <div className="relative aspect-video overflow-hidden rounded-[2rem] bg-ink shadow-[0_40px_80px_-30px_rgba(10,23,48,0.6)]">
            <video controls playsInline preload="auto" className="absolute inset-0 h-full w-full bg-ink object-contain"><source src="/video/DavesRemovals.mp4" type="video/mp4" /></video>
          </div>
        </div>
      </section>
    </>
  );
}
