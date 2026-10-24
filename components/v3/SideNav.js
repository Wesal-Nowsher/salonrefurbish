"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { salon, treatments } from "@/components/secrets/site";
import Social from "@/components/secrets/Social";
import DmButton from "@/components/secrets/DmButton";

// Fixed side rail on desktop; a slim top bar with a drawer on phones.
export default function SideNav() {
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState(false);
  const path = usePathname();
  useEffect(() => { setOpen(false); setSub(false); }, [path]);
  return (
    <aside className={`rail ${open ? "open" : ""}`}>
      <div className="rail-top">
        <Link href="/v3" className="rail-logo" aria-label={`${salon.name} home`}>
          <img src="/images/secrets-salon/logo-640.webp" alt={salon.name} width="640" height="390" />
        </Link>
        <button className="rail-burger" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
      <nav className="rail-nav" aria-label="Main">
        <div className={`rail-group ${sub ? "show" : ""}`} onMouseEnter={() => setSub(true)} onMouseLeave={() => setSub(false)}>
          <button type="button" aria-expanded={sub} onClick={() => setSub(!sub)}>
            Treatments
            <svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
          </button>
          <div className="rail-sub">
            {treatments.map((t) => <Link key={t.slug} href={`/v3/treatments/${t.slug}`}>{t.title}</Link>)}
          </div>
        </div>
        <Link href="/v3#laser">The Laser</Link>
        <Link href="/v3#explore">Explore</Link>
        <Link href="/v3#reserve">Reserve</Link>
        <Link href="/v3/contact">Contact</Link>
      </nav>
      <div className="rail-cta">
        <Link href="/v3/contact#form" className="g-btn">Book now</Link>
        <DmButton className="p-btn" />
        <a href={`tel:${salon.phone}`} className="rail-tel">{salon.phoneDisplay}</a>
        <Social />
      </div>
    </aside>
  );
}
