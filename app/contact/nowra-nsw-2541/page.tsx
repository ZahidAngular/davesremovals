import type { Metadata } from "next";
import { DepotPage } from "@/components/DepotPage";
import { CONTACT } from "@/lib/content";

export const metadata: Metadata = { title: CONTACT.depotPages.nowra.title };

export default function Page() {
  return <DepotPage {...CONTACT.depotPages.nowra} />;
}
