import Link from "next/link";
import Image from "next/image";

export function PageHero({
  title,
  eyebrow,
  sub,
  image,
  crumbs = [],
}: {
  title: string;
  eyebrow?: string;
  sub?: string;
  image?: string;
  crumbs?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pt-40 pb-24 text-white grain md:pt-52 md:pb-32">
      {image && (
        <Image src={image} alt="" fill priority sizes="100vw" className="-z-20 object-cover opacity-40" />
      )}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_80%_at_85%_0%,rgba(201,164,92,0.22),transparent_60%),linear-gradient(180deg,rgba(6,13,26,0.55),rgba(6,13,26,0.95))]" />
      <div className="container-x">
        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/50">
          <Link href="/" className="transition hover:text-gold">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-2">
              <span className="text-gold">/</span>
              {c.href ? <Link href={c.href} className="transition hover:text-gold">{c.label}</Link> : <span className="text-white/80">{c.label}</span>}
            </span>
          ))}
        </nav>
        {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
        <h1 className="font-display max-w-4xl text-5xl leading-[1.04] md:text-7xl">{title}</h1>
        {sub && <p className="mt-6 max-w-2xl text-lg text-white/70 md:text-xl">{sub}</p>}
      </div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  sub,
  center = false,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-5xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className={`eyebrow mb-5 ${center ? "justify-center" : ""}`}>{eyebrow}</p>}
      <h2 className={`font-display text-balance text-4xl leading-[1.08] md:text-6xl ${dark ? "text-white" : "text-ink"}`}>{title}</h2>
      {sub && <p className={`mt-5 text-lg ${dark ? "text-white/65" : "text-muted"}`}>{sub}</p>}
    </div>
  );
}
