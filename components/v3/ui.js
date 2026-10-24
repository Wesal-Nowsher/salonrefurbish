import Link from "next/link";
import { salon, treatments, fullAddress } from "@/components/secrets/site";
import Social from "@/components/secrets/Social";
import DmButton from "@/components/secrets/DmButton";
import SideNav from "./SideNav";

export const v3 = (p = "") => `/v3${p}`;
export const img = (name) => `/images/secrets-salon/${name}`;
export const roman = (n) => ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"][n - 1];

// Gold Art Deco fan used as an ornament.
export function Fan({ className = "" }) {
  return (
    <svg className={`fan-orn ${className}`} viewBox="0 0 120 60" aria-hidden="true">
      {[56, 44, 32, 20].map((r) => (
        <path key={r} d={`M${60 - r} 60 A${r} ${r} 0 0 1 ${60 + r} 60`} fill="none" stroke="currentColor" strokeWidth="1" />
      ))}
      {[-60, -30, 0, 30, 60].map((a) => (
        <line key={a} x1="60" y1="60" x2={60 + 56 * Math.sin((a * Math.PI) / 180)} y2={60 - 56 * Math.cos((a * Math.PI) / 180)} stroke="currentColor" strokeWidth="0.8" />
      ))}
    </svg>
  );
}

export function Arch({ name, alt = "", className = "" }) {
  return (
    <div className={`arch ${className}`}>
      <img src={img(name)} alt={alt} loading="lazy" />
    </div>
  );
}

export function Title({ kicker, children, center }) {
  return (
    <header className={`title ${center ? "center" : ""}`}>
      <Fan />
      {kicker && <p className="kick">{kicker}</p>}
      <h2>{children}</h2>
    </header>
  );
}

export function Shell({ children }) {
  return (
    <div className="frame">
      <a href="#main" className="skip">Skip to content</a>
      <SideNav />
      <div className="page">
        <main id="main">{children}</main>
        <footer className="v3-foot">
          <div className="foot-crest">
            <Fan />
            <img src={img("logo-640.webp")} alt={salon.name} width="200" height="122" />
            <p>Laser · Skin · Nails · Lashes</p>
          </div>
          <div className="foot-cols">
            <div>
              <h3>Visit</h3>
              <address>{salon.legalName}<br />{fullAddress}</address>
              <a href={`tel:${salon.phone}`}>{salon.phoneDisplay}</a>
            </div>
            <div>
              <h3>Treatments</h3>
              {treatments.map((t) => <Link key={t.slug} href={v3(`/treatments/${t.slug}`)}>{t.title}</Link>)}
            </div>
            <div>
              <h3>Book</h3>
              <Link href={v3("/contact#form")}>Booking form</Link>
              <DmButton className="foot-dm" />
              <Social labels />
              <Link href="/privacy">Privacy policy</Link>
            </div>
          </div>
          <p className="foot-legal">© {new Date().getFullYear()} {salon.legalName} · Haltwhistle, Northumberland</p>
        </footer>
      </div>
    </div>
  );
}

export function Faq({ items }) {
  return (
    <div className="v3-faq">
      {items.map(([q, a], i) => (
        <details key={q}>
          <summary><span>{roman(i + 1)}</span>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}
