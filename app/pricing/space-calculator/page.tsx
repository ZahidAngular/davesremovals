import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Calculator } from "@/components/Calculator";

export const metadata: Metadata = { title: "Space Calculator" };

export default function CalculatorPage() {
  return (
    <>
      <PageHero title="Space Calculator" crumbs={[{ label: "Pricing", href: "/pricing" }, { label: "Space Calculator" }]} />
      <section className="section">
        <div className="container-x">
          <Calculator />
        </div>
      </section>
    </>
  );
}
