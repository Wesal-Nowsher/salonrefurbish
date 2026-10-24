import Link from "next/link";
import { salon, treatments, fullAddress } from "@/components/secrets/site";
import Social from "@/components/secrets/Social";
import DmButton from "@/components/secrets/DmButton";

export const v4 = (p = "") => `/v4${p}`;
export const img = (name) => `/images/secrets-salon/${name}`;

const Chev = () => (
  <svg className="chev" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>
);

export function Shell({ children }) {
  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <header className="v4-head">
        <nav className="head-l" aria-label="Treatments">
          <div className="drop">
            <Link href={v4("/#chapters")} className="drop-btn" aria-haspopup="true">Treatments <Chev /></Link>
            <div className="drop-panel">
              {treatments.map((t, i) => (
                <Link key={t.slug} href={v4(`/treatments/${t.slug}`)}>
                  <em>{String(i + 1).padStart(2, "0")}</em>{t.title}
                </Link>
              ))}
            </div>
          </div>
          <Link href={v4("/treatments/laser-hair-removal")} className="hide-s">Laser</Link>
        </nav>
        <Link href={v4()} className="head-logo" aria-label={`${salon.name} home`}>
          <img src={img("logo-v4-640.webp")} alt={salon.name} width="640" height="390" />
        </Link>
        <nav className="head-r" aria-label="Booking">
          <DmButton className="dm-link hide-s" children="DM" />
          <Link href={v4("/contact#form")} className="book-pill">Book</Link>
        </nav>
      </header>
      <main id="main">{children}</main>
      <footer className="v4-foot">
        <img src={img("logo-v4-640.webp")} alt={salon.name} width="220" height="134" className="foot-logo" />
        <div className="foot-row">
          <address>{salon.legalName}<br />{fullAddress}</address>
          <a href={`tel:${salon.phone}`} className="foot-tel">{salon.phoneDisplay}</a>
          <div className="foot-links">
            <Social labels />
            <Link href={v4("/contact#form")}>Booking form</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
        <p className="foot-legal">© {new Date().getFullYear()} {salon.legalName}</p>
      </footer>
    </>
  );
}

export function Faq({ items }) {
  return (
    <div className="v4-faq">
      {items.map(([q, a]) => (
        <details key={q}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}
