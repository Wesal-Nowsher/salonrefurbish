import Link from "next/link";
import { salon, treatments, fullAddress } from "@/components/secrets/site";
import Social from "@/components/secrets/Social";

export const v2 = (p = "") => `/v2${p}`;
export const img = (name) => `/images/secrets-salon/${name}`;

export function Shell({ children }) {
  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <header className="pill-nav">
        <Link href={v2("/#menu")}>Treatments</Link>
        <Link href={v2("/#laser")} className="hide-s">Laser</Link>
        <Link href={v2()} className="pill-logo" aria-label={`${salon.name} home`}>
          <img src={img("logo-640.webp")} alt={salon.name} width="640" height="390" />
        </Link>
        <Social className="hide-s" />
        <Link href={v2("/contact")} className="pill-cta">Book</Link>
      </header>
      <main id="main">{children}</main>
      <footer className="v2-foot">
        <p className="foot-big">psst<em>...</em> it&apos;s on Main Street.</p>
        <div className="foot-grid">
          <div>
            <h3>Find us</h3>
            <address>{salon.legalName}<br />{fullAddress}</address>
            <a href={`tel:${salon.phone}`}>{salon.phoneDisplay}</a>
          </div>
          <div>
            <h3>Treatments</h3>
            {treatments.map((t) => <Link key={t.slug} href={v2(`/treatments/${t.slug}`)}>{t.title}</Link>)}
          </div>
          <div>
            <h3>Say hello</h3>
            <Social labels />
            <Link href={v2("/contact")}>Enquiry form</Link>
            <Link href="/privacy">Privacy policy</Link>
          </div>
        </div>
        <p className="foot-legal">© {new Date().getFullYear()} {salon.legalName} · Haltwhistle, Northumberland</p>
      </footer>
    </>
  );
}

export function Pic({ name, alt = "", className = "" }) {
  return <img src={img(name)} alt={alt} className={`pic ${className}`} loading="lazy" />;
}

export function Faq({ items }) {
  return (
    <div className="v2-faq">
      {items.map(([q, a]) => (
        <details key={q}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}
