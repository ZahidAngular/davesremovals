import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/ui";
import { STORAGE_TERMS } from "@/lib/content";

export const metadata: Metadata = { title: "Storage Terms & Conditions" };

export default function StorageTermsPage() {
  return (
    <>
      <PageHero
        title="Storage Terms & Conditions"
        crumbs={[{ label: "Storage", href: "/storage" }, { label: "Terms & Conditions" }]}
      />
      <section className="section">
        <div className="container-x max-w-4xl">
          <Reveal>
            <p className="rounded-3xl border border-ink/10 bg-ivory p-9 leading-8 md:p-12">{STORAGE_TERMS.summary}</p>
          </Reveal>
          <div className="mt-14 space-y-12">
            {STORAGE_TERMS.sections.map((s) => (
              <Reveal key={s.title}>
                <h2 className="font-display border-b border-ink/10 pb-4 text-3xl">{s.title}</h2>
                <div className="prose-legal mt-6">
                  {s.clauses.map((c) => <p key={c.slice(0, 30)}>{c}</p>)}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
