"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { href, treatments, salon } from "./site";
import Social from "./Social";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`nav ${scrolled ? "scrolled" : ""} ${open ? "open" : ""}`}>
      <nav className="nav-side" aria-label="Treatments">
        <div className="mega">
          <button aria-haspopup="true">Treatments <svg className="chev" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
          <div className="mega-panel">
            {treatments.map((t, i) => (
              <Link key={t.slug} href={href(`/treatments/${t.slug}`)}>
                <span>0{i + 1}</span>{t.title}
              </Link>
            ))}
          </div>
        </div>
        <Link href={href("/treatments/laser-hair-removal")}>Laser</Link>
        <Link href={href("/prices")}>Prices</Link>
      </nav>
      <Link href={href()} className="nav-logo" aria-label={`${salon.name} home`}>
        <img src="/images/secrets-salon/logo-640.webp" alt={salon.name} width="640" height="390" />
      </Link>
      <nav className="nav-side right" aria-label="Salon">
        <Social />
        <Link href={href("/contact")}>Contact</Link>
        <Link href={href("/contact#form")} className="btn gold small">Reserve</Link>
      </nav>
      <button className="burger" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}>
        <span /><span />
      </button>
      <div className="drawer" hidden={!open}>
        {treatments.map((t) => (
          <Link key={t.slug} href={href(`/treatments/${t.slug}`)}>{t.title}</Link>
        ))}
        <Link href={href("/prices")}>Prices</Link>
        <Link href={href("/contact")}>Contact &amp; booking</Link>
        <Link href={href("/contact#form")} className="btn gold">Book a consultation</Link>
        <a href={salon.instagramDm} target="_blank" rel="noopener" className="btn ig">DM to book on Instagram</a>
        <a href={`tel:${salon.phone}`} className="btn line">Call {salon.phoneDisplay}</a>
        <Social labels className="drawer-social" />
      </div>
    </header>
  );
}
