"use client";
import { useState } from "react";
import Link from "next/link";
import { treatments } from "@/components/secrets/site";

// Tabbed treatment explorer: pick a treatment on the left, details and photo on the right.
export default function Explorer() {
  const [i, setI] = useState(0);
  const t = treatments[i];
  return (
    <div className="explorer">
      <div className="ex-tabs" role="tablist" aria-label="Treatments">
        {treatments.map((x, n) => (
          <button key={x.slug} role="tab" aria-selected={n === i} aria-controls="ex-panel" onClick={() => setI(n)} onMouseEnter={() => setI(n)}>
            <span>{String(n + 1).padStart(2, "0")}</span>{x.title}
          </button>
        ))}
      </div>
      <div id="ex-panel" role="tabpanel" className="ex-panel" key={t.slug}>
        <div className="ex-pic"><img src={`/images/secrets-salon/t-${t.slug}.webp`} alt={`${t.title} at Secrets Beauty Salon`} /></div>
        <div className="ex-copy">
          <p className="kick">{t.group}</p>
          <h3>{t.title}</h3>
          <ul>{t.points.slice(0, 4).map((p) => <li key={p}>{p}</li>)}</ul>
          <div className="ex-btns">
            <Link href={`/v3/contact?interest=${encodeURIComponent(t.title)}#form`} className="g-btn">Book this</Link>
            <Link href={`/v3/treatments/${t.slug}`} className="l-btn">Learn more</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
