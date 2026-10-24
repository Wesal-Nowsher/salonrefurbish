import Link from "next/link";
import { salon, href, treatments, fullAddress } from "./site";
import Nav from "./Nav";
import Social from "./Social";
import DmButton from "./DmButton";

// The scalloped badge outline from the logo, reused as the site's frame shape.
export function BadgeDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" style={{ position: "absolute" }}>
      <defs>
        <clipPath id="badge" clipPathUnits="objectBoundingBox">
          <path d="M0.5,0 C0.48,0.05 0.44,0.07 0.37,0.07 L0.17,0.07 C0.15,0.07 0.14,0.11 0.1,0.11 L0.04,0.11 C0.02,0.16 0,0.2 0,0.27 L0,0.73 C0,0.8 0.02,0.84 0.04,0.89 L0.1,0.89 C0.14,0.89 0.15,0.93 0.17,0.93 L0.37,0.93 C0.44,0.93 0.48,0.95 0.5,1 C0.52,0.95 0.56,0.93 0.63,0.93 L0.83,0.93 C0.85,0.93 0.86,0.89 0.9,0.89 L0.96,0.89 C0.98,0.84 1,0.8 1,0.73 L1,0.27 C1,0.2 0.98,0.16 0.96,0.11 L0.9,0.11 C0.86,0.11 0.85,0.07 0.83,0.07 L0.63,0.07 C0.56,0.07 0.52,0.05 0.5,0 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

// Image slot: shows the photo once it exists in public/images/secrets-salon/, a soft tone until then.
export function Photo({ name, alt, className = "", tone = "blush" }) {
  return (
    <div
      className={`photo tone-${tone} ${className}`}
      role={alt ? "img" : undefined}
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : true}
      style={{ backgroundImage: `url(/images/secrets-salon/${name})` }}
    />
  );
}

export function Rose({ className = "" }) {
  return (
    <svg className={`rose ${className}`} viewBox="0 0 64 20" aria-hidden="true">
      <path d="M0 10h22M42 10h22" stroke="currentColor" strokeWidth=".8" />
      <circle cx="27" cy="10" r="4.2" fill="none" stroke="currentColor" strokeWidth=".9" />
      <circle cx="27" cy="10" r="1.8" fill="none" stroke="currentColor" strokeWidth=".9" />
      <circle cx="37" cy="10" r="4.2" fill="none" stroke="currentColor" strokeWidth=".9" />
      <circle cx="37" cy="10" r="1.8" fill="none" stroke="currentColor" strokeWidth=".9" />
    </svg>
  );
}

export function Kicker({ children }) {
  return <p className="kicker">{children}</p>;
}

export function Shell({ children }) {
  return (
    <>
      <BadgeDefs />
      <a href="#main" className="skip">Skip to content</a>
      <div className="topbar">
        <span>{salon.address.town}, {salon.address.county}</span>
        <span className="topbar-r">
          <a href={`tel:${salon.phone}`}>{salon.phoneDisplay}</a>
          <Social />
        </span>
      </div>
      <Nav />
      <main id="main">{children}</main>
      <Footer />
      <div className="float-book">
        <DmButton className="float-dm" />
        <a href={href("/contact#form")} className="float-form">Book a consultation</a>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <img src="/images/secrets-salon/logo-640.webp" alt={salon.name} width="220" height="134" />
        <p className="footer-line">
          A private little world on Main Street, <em>for skin, nails &amp; lashes.</em>
        </p>
        <div className="footer-social">
          <p>Follow the secrets</p>
          <Social labels />
        </div>
      </div>
      <div className="footer-cols">
        <div>
          <h3>Treatments</h3>
          {treatments.map((t) => (
            <Link key={t.slug} href={href(`/treatments/${t.slug}`)}>{t.title}</Link>
          ))}
        </div>
        <div>
          <h3>Visit</h3>
          <address>{salon.legalName}<br />{fullAddress}</address>
          <a href={`tel:${salon.phone}`}>{salon.phoneDisplay}</a>
        </div>
        <div>
          <h3>Salon</h3>
          <Link href={href("/prices")}>Prices</Link>
          <Link href={href("/contact")}>Contact &amp; booking</Link>
          <Link href={href("/privacy")}>Privacy policy</Link>
        </div>
      </div>
      <p className="footer-legal">© {new Date().getFullYear()} {salon.legalName}, {salon.address.town}, {salon.address.county}</p>
    </footer>
  );
}

export function FaqList({ items }) {
  return (
    <div className="faqs">
      {items.map(([q, a]) => (
        <details key={q}>
          <summary><h3>{q}</h3><span aria-hidden="true" /></summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}

export function Cta({ title = "Your secret starts with a conversation." }) {
  return (
    <section className="cta">
      <div className="cta-frame">
        <Rose />
        <h2>{title}</h2>
        <p>Free consultations for laser, skin and tattoo treatments. Nails, lashes and brows: send the form, or DM us on Instagram for the quickest reply.</p>
        <div className="btns center">
          <Link href={href("/contact#form")} className="btn gold">Book a consultation</Link>
          <DmButton className="btn ig" />
          <a href={`tel:${salon.phone}`} className="btn line">Call {salon.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}
