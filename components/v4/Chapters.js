"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { treatments } from "@/components/secrets/site";

// Scroll story: the photo on the left stays put and changes as each treatment chapter scrolls past.
export default function Chapters() {
  const [active, setActive] = useState(0);
  const refs = useRef([]);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(Number(e.target.dataset.i))),
      { rootMargin: "-45% 0px -45% 0px" }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <div className="chapters">
      <div className="ch-stage" aria-hidden="true">
        {treatments.map((t, i) => (
          <img key={t.slug} src={`/images/secrets-salon/t-${t.slug}.webp`} alt="" className={i === active ? "on" : ""} loading={i < 2 ? "eager" : "lazy"} />
        ))}
        <span className="ch-count">{String(active + 1).padStart(2, "0")} / {String(treatments.length).padStart(2, "0")}</span>
      </div>
      <div className="ch-list">
        {treatments.map((t, i) => (
          <article key={t.slug} ref={(el) => (refs.current[i] = el)} data-i={i} className={`ch ${i === active ? "on" : ""}`}>
            <img src={`/images/secrets-salon/t-${t.slug}.webp`} alt={`${t.title} at Secrets Beauty Salon`} className="ch-mobile-pic" loading="lazy" />
            <p className="ch-num">Chapter {String(i + 1).padStart(2, "0")} · {t.group}</p>
            <h3>{t.title}</h3>
            <p>{t.short}</p>
            <ul>{t.points.slice(0, 3).map((p) => <li key={p}>{p}</li>)}</ul>
            <div className="ch-btns">
              <Link href={`/v4/contact?interest=${encodeURIComponent(t.title)}#form`} className="book-pill">Book this</Link>
              <Link href={`/v4/treatments/${t.slug}`} className="line-link">Read more</Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
