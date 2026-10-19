"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown, Minus, Plus } from "lucide-react";
import { CALC, SITE } from "@/lib/content";

type Counts = Record<string, number>;

const selectCls = "field";

export function Calculator() {
  const [counts, setCounts] = useState<Counts>({});
  const [openRoom, setOpenRoom] = useState<string | null>(CALC.rooms[0].name);
  const [error, setError] = useState("");

  const total = useMemo(() => Object.values(counts).reduce((a, b) => a + b, 0), [counts]);
  const roomTotal = (room: string) =>
    Object.entries(counts).reduce((s, [k, v]) => (k.startsWith(room + "::") ? s + v : s), 0);

  const bump = (room: string, item: string, d: number) =>
    setCounts((c) => {
      const key = `${room}::${item}`;
      const next = Math.max(0, (c[key] ?? 0) + d);
      const copy = { ...c };
      if (next === 0) delete copy[key];
      else copy[key] = next;
      return copy;
    });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        if (String(fd.get("captcha")).trim() !== "6") {
          setError("Please answer the security question correctly (3 + 3).");
          return;
        }
        setError("");
        const g = (k: string) => String(fd.get(k) ?? "");
        const inventory = CALC.rooms
          .map((r) => {
            const lines = Object.entries(counts)
              .filter(([k]) => k.startsWith(r.name + "::"))
              .map(([k, v]) => `   ${v} x ${k.split("::")[1]}`);
            return lines.length ? `${r.name}:\n${lines.join("\n")}` : "";
          })
          .filter(Boolean)
          .join("\n");
        const body = [
          `Name: ${g("name")}`,
          `Email: ${g("email")}`,
          `Mobile Number: ${g("mobile")}`,
          `Home Number: ${g("home")}`,
          "",
          `Moving From: ${g("from")}`,
          `Moving Date: ${g("fromDate")}`,
          `Parking: ${g("fromParking")}`,
          `Distance truck parks to residence: ${g("fromDistance")}`,
          `Stairs: ${g("fromStairs")}`,
          "",
          `Moving To: ${g("to")}`,
          `Moving Date for New House: ${g("toDate")}`,
          `House Type Moving To: ${g("toType")}`,
          `Parking New House: ${g("toParking")}`,
          `Distance truck parks to residence: ${g("toDistance")}`,
          `Stairs New House: ${g("toStairs")}`,
          "",
          `Comments: ${g("comments")}`,
          `Unusual Items: ${g("unusual")}`,
          "",
          "INVENTORY",
          inventory || "(none selected)",
        ].join("\n");
        window.location.href = `${SITE.emailHref}?subject=${encodeURIComponent("Space Calculator enquiry")}&body=${encodeURIComponent(body)}`;
      }}
    >
      <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
        {/* Rooms */}
        <div className="space-y-3">
          {CALC.rooms.map((room) => {
            const isOpen = openRoom === room.name;
            const n = roomTotal(room.name);
            return (
              <div key={room.name} className="overflow-hidden rounded-3xl border border-ink/10 bg-paper">
                <button
                  type="button"
                  onClick={() => setOpenRoom(isOpen ? null : room.name)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-5 p-4 text-left"
                >
                  <span className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xl bg-ivory">
                    <Image src={`/calc/${room.image}.jpg`} alt="" fill sizes="96px" className="object-cover" />
                  </span>
                  <span className="font-display flex-1 text-2xl">{room.name}</span>
                  {n > 0 && <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold text-ink">{n}</span>}
                  <ChevronDown className={`mr-2 text-gold transition ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <ul className="grid gap-px border-t border-ink/10 bg-ink/10 sm:grid-cols-2">
                    {room.items.map((item) => {
                      const q = counts[`${room.name}::${item}`] ?? 0;
                      return (
                        <li key={item} className="flex items-center justify-between gap-3 bg-paper px-5 py-3">
                          <span className="text-sm">{item}</span>
                          <span className="flex items-center gap-2">
                            <button type="button" aria-label={`Remove ${item}`} onClick={() => bump(room.name, item, -1)} disabled={!q} className="grid h-8 w-8 place-items-center rounded-full border border-ink/20 transition hover:bg-ink hover:text-white disabled:opacity-30">
                              <Minus size={14} />
                            </button>
                            <span className="w-5 text-center text-sm font-semibold tabular-nums">{q}</span>
                            <button type="button" aria-label={`Add ${item}`} onClick={() => bump(room.name, item, 1)} className="grid h-8 w-8 place-items-center rounded-full bg-gold text-ink transition hover:scale-110">
                              <Plus size={14} />
                            </button>
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-3xl bg-navy p-8 text-white">
            <p className="eyebrow">Your inventory</p>
            <p className="font-display gold-text mt-4 text-7xl">{total}</p>
            <p className="text-white/60">items selected</p>
            <div className="mt-6 max-h-60 space-y-1.5 overflow-y-auto text-sm text-white/75" data-lenis-prevent>
              {Object.entries(counts).length === 0 && <p>Select items from each room to get started.</p>}
              {Object.entries(counts).map(([k, v]) => {
                const [r, i] = k.split("::");
                return (
                  <p key={k} className="flex justify-between gap-3">
                    <span>{i} <span className="text-white/40">· {r}</span></span>
                    <span className="font-semibold text-gold">×{v}</span>
                  </p>
                );
              })}
            </div>
          </div>
        </aside>
      </div>

      {/* Details */}
      <div className="mt-14 grid gap-14 lg:grid-cols-2">
        <fieldset className="space-y-3">
          <legend className="font-display mb-4 text-3xl">Moving From</legend>
          <p className="text-xs uppercase tracking-[0.15em] text-muted">* Denotes a required field</p>
          <input name="name" required placeholder="Name *" className="field" />
          <input name="email" type="email" required placeholder="Email *" className="field" />
          <input name="mobile" required placeholder="Mobile Number *" className="field" />
          <input name="home" placeholder="Home Number" className="field" />
          <input name="from" required placeholder="Moving From *" className="field" />
          <label className="block text-xs uppercase tracking-[0.15em] text-muted">Moving Date *
            <input name="fromDate" type="date" required className="field normal-case tracking-normal text-text" />
          </label>
          <select name="fromParking" required defaultValue="" className={selectCls}>
            <option value="" disabled>Parking *</option>
            {CALC.parking.map((o) => <option key={o}>{o}</option>)}
          </select>
          <select name="fromDistance" required defaultValue="" className={selectCls}>
            <option value="" disabled>Distance truck parks to residence *</option>
            {CALC.distance.map((o) => <option key={o}>{o}</option>)}
          </select>
          <select name="fromStairs" required defaultValue="" className={selectCls}>
            <option value="" disabled>Stairs *</option>
            {CALC.stairs.map((o) => <option key={o}>{o}</option>)}
          </select>
        </fieldset>

        <fieldset className="space-y-3">
          <legend className="font-display mb-4 text-3xl">Moving To</legend>
          <input name="to" required placeholder="Moving To *" className="field" />
          <label className="block text-xs uppercase tracking-[0.15em] text-muted">Moving Date for New House *
            <input name="toDate" type="date" required className="field normal-case tracking-normal text-text" />
          </label>
          <select name="toType" required defaultValue="" className={selectCls}>
            <option value="" disabled>House Type Moving To *</option>
            {CALC.houseTypes.map((o) => <option key={o}>{o}</option>)}
          </select>
          <select name="toParking" required defaultValue="" className={selectCls}>
            <option value="" disabled>Parking New House *</option>
            {CALC.parking.map((o) => <option key={o}>{o}</option>)}
          </select>
          <select name="toDistance" required defaultValue="" className={selectCls}>
            <option value="" disabled>Distance truck parks to residence *</option>
            {CALC.distance.map((o) => <option key={o}>{o}</option>)}
          </select>
          <select name="toStairs" required defaultValue="" className={selectCls}>
            <option value="" disabled>Stairs New House *</option>
            {CALC.stairs.map((o) => <option key={o}>{o}</option>)}
          </select>
          <textarea name="comments" rows={3} placeholder="Comments" className="field resize-none" />
          <textarea name="unusual" rows={2} placeholder="Unusual Items" className="field resize-none" />
          <input name="captcha" required placeholder="What is 3 + 3?" inputMode="numeric" className="field" />
        </fieldset>
      </div>

      {error && <p role="alert" className="mt-6 text-sm font-semibold text-red-700">{error}</p>}
      <button type="submit" className="btn btn-gold mt-10">Send Enquiry <ArrowRight size={16} /></button>
    </form>
  );
}
