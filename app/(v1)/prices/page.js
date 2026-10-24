import Link from "next/link";
import { Shell, Kicker, Cta, Rose } from "@/components/secrets/ui";
import { JsonLd, businessSchema, crumbs } from "@/components/secrets/schema";
import { salon, treatments, href, abs } from "@/components/secrets/site";

export const metadata = {
  title: "Prices | Secrets Beauty Salon Haltwhistle",
  description: "Prices for laser hair removal, nails, lashes, brows, facials and more at Secrets Beauty Salon, Haltwhistle.",
  alternates: { canonical: abs("/prices") },
};

// CHECK: the full price list is in the salon's Instagram "Prices" highlight.
// Add a `prices: [["Treatment", "£00"], ...]` array to each treatment in site.js and it renders here.
export default function Prices() {
  return (
    <Shell>
      <JsonLd graph={[businessSchema(), crumbs([["Home", ""], ["Prices", "/prices"]])]} />
      <section className="sect page-head">
        <Kicker>Price list</Kicker>
        <h1>The <em>menu.</em></h1>
        <p className="lede">Laser, skin and tattoo treatments are priced at your free consultation, because every plan is personal. Courses of 6 laser sessions include discounted top-ups afterwards.</p>
      </section>
      <section className="sect price-list">
        {treatments.map((t) => (
          <div key={t.slug} className="price-group">
            <h2><Link href={href(`/treatments/${t.slug}`)}>{t.title}</Link></h2>
            {t.prices ? (
              <ul>{t.prices.map(([n, p]) => <li key={n}><span>{n}</span><i /><strong>{p}</strong></li>)}</ul>
            ) : (
              <ul>{t.points.map((p) => <li key={p}><span>{p.split(":")[0]}</span><i /><strong>On request</strong></li>)}</ul>
            )}
          </div>
        ))}
        <p className="small"><Rose /> For today&apos;s prices call <a href={`tel:${salon.phone}`}>{salon.phoneDisplay}</a> or see the Prices highlight on <a href={salon.instagram} target="_blank" rel="noopener">Instagram</a>.</p>
      </section>
      <Cta />
    </Shell>
  );
}
