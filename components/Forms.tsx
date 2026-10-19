"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { MOVE_TYPES, SITE } from "@/lib/content";

function sendMail(subject: string, lines: [string, string][]) {
  const body = lines.map(([k, v]) => `${k}: ${v}`).join("\n");
  window.location.href = `${SITE.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const val = (fd: FormData, k: string) => String(fd.get(k) ?? "");

export function ContactForm({ dark = false, depot }: { dark?: boolean; depot?: string }) {
  const [sent, setSent] = useState(false);
  const cls = `field ${dark ? "field-dark" : ""}`;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        sendMail(val(fd, "subject") || `Enquiry${depot ? ` – ${depot}` : ""}`, [
          ["Name", val(fd, "name")],
          ["Email", val(fd, "email")],
          ["Company", val(fd, "company")],
          ["Message", val(fd, "message")],
        ]);
        setSent(true);
      }}
      className="space-y-4"
    >
      <div className="grid gap-x-8 gap-y-2 md:grid-cols-2">
        <input name="name" required placeholder="Name *" className={cls} />
        <input name="email" type="email" required placeholder="Email *" className={cls} />
        <input name="subject" placeholder="Subject" className={cls} />
        <input name="company" placeholder="Company" className={cls} />
      </div>
      <textarea name="message" required rows={4} placeholder="Message *" className={`${cls} resize-none`} />
      <button type="submit" className="btn btn-gold mt-4">
        {sent ? <Check size={16} /> : <ArrowRight size={16} />} {sent ? "Opening your email app…" : "Send Message"}
      </button>
    </form>
  );
}

export function QuoteWizard() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<Record<string, string>>({});
  const set = (k: string, v: string) => setData((d) => ({ ...d, [k]: v }));

  return (
    <div>
      <div className="mb-10 flex items-center gap-4">
        {[1, 2].map((n) => (
          <div key={n} className="flex items-center gap-4">
            <span
              className={`grid h-10 w-10 place-items-center rounded-full border text-sm font-semibold transition ${
                step >= n ? "border-gold bg-gold text-ink" : "border-ink/25 text-muted"
              }`}
            >
              {n}
            </span>
            <span className={`text-sm font-semibold uppercase tracking-[0.15em] ${step >= n ? "text-ink" : "text-muted"}`}>
              {n === 1 ? "Your details" : "Moving details"}
            </span>
            {n === 1 && <span className="h-px w-10 bg-ink/20" />}
          </div>
        ))}
      </div>

      {step === 1 ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            ["name", "phone", "email", "moveType"].forEach((k) => set(k, val(fd, k)));
            setStep(2);
          }}
          className="space-y-4"
        >
          <div className="grid gap-x-8 gap-y-2 md:grid-cols-2">
            <input name="name" required defaultValue={data.name} placeholder="Your name" className="field" />
            <input name="phone" required defaultValue={data.phone} placeholder="Phone Number" className="field" />
            <input name="email" type="email" required defaultValue={data.email} placeholder="Your email" className="field" />
            <select name="moveType" required defaultValue={data.moveType ?? ""} className="field">
              <option value="" disabled>Move Type</option>
              {MOVE_TYPES.map((m) => <option key={m}>{m}</option>)}
            </select>
          </div>
          <button type="submit" className="btn btn-dark mt-4">Next <ArrowRight size={16} /></button>
        </form>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            sendMail("Moving estimate request", [
              ["Name", data.name],
              ["Phone", data.phone],
              ["Email", data.email],
              ["Move Type", data.moveType],
              ["From Suburb", val(fd, "from")],
              ["To Suburb", val(fd, "to")],
              ["Move Date", val(fd, "date")],
              ["Comments", val(fd, "comments")],
            ]);
            setStep(3);
          }}
          className="space-y-4"
        >
          <div className="grid gap-x-8 gap-y-2 md:grid-cols-2">
            <input name="from" required placeholder="From Suburb" className="field" />
            <input name="to" required placeholder="To Suburb" className="field" />
            <input name="date" type="date" required aria-label="Move Date" className="field" />
          </div>
          <textarea name="comments" rows={4} placeholder="Comments" className="field resize-none" />
          <div className="flex gap-3 pt-4">
            <button type="button" onClick={() => setStep(1)} className="btn btn-outline">Back</button>
            <button type="submit" className="btn btn-gold">Send Request <ArrowRight size={16} /></button>
          </div>
        </form>
      )}
      {step === 3 && (
        <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-ink">
          <Check size={16} className="text-gold" /> Opening your email app with your request…
        </p>
      )}
    </div>
  );
}
