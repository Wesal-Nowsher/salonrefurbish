"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { treatments, href } from "./site";

// Treatment index: an image preview drifts after the cursor as you hover each line.
export default function Collection() {
  const [hover, setHover] = useState(null);
  const box = useRef(null);
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    box.current?.style.setProperty("--x", `${e.clientX - r.left}px`);
    box.current?.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    <div className="collection" ref={box} onMouseMove={move} onMouseLeave={() => setHover(null)}>
      {treatments.map((t, i) => (
        <Link key={t.slug} href={href(`/treatments/${t.slug}`)} className="col-row" onMouseEnter={() => setHover(t.slug)} onFocus={() => setHover(t.slug)}>
          <span className="col-num">{String(i + 1).padStart(2, "0")}</span>
          <span className="col-title">{t.title}</span>
          <span className="col-short">{t.short}</span>
          <span className="col-group">{t.group}</span>
        </Link>
      ))}
      <div className={`col-preview ${hover ? "on" : ""}`} aria-hidden="true">
        {treatments.map((t) => (
          <div key={t.slug} className={`photo tone-blush ${hover === t.slug ? "on" : ""}`} style={{ backgroundImage: `url(/images/secrets-salon/t-${t.slug}.webp)` }} />
        ))}
      </div>
    </div>
  );
}
