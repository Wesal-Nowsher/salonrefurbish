import Link from "next/link";
import DmButton from "@/components/secrets/DmButton";
import { notFound } from "next/navigation";
import { Shell, Photo, Rose, Kicker, FaqList, Cta } from "@/components/secrets/ui";
import { JsonLd, businessSchema, faqSchema, crumbs, salonId } from "@/components/secrets/schema";
import { salon, treatments, href, abs } from "@/components/secrets/site";

export const dynamicParams = false;
export const generateStaticParams = () => treatments.map((t) => ({ slug: t.slug }));

const find = async (params) => {
  const { slug } = await params;
  return treatments.find((t) => t.slug === slug);
};

export async function generateMetadata({ params }) {
  const t = await find(params);
  if (!t) return {};
  return { title: t.seo, description: `${t.short} ${t.title} at ${salon.name}, Main Street, Haltwhistle, Northumberland.`, alternates: { canonical: abs(`/treatments/${t.slug}`) } };
}

export default async function Treatment({ params }) {
  const t = await find(params);
  if (!t) notFound();
  const i = treatments.indexOf(t);
  const others = treatments.filter((o) => o !== t).slice(0, 3);
  const graph = [
    businessSchema(),
    { "@type": "Service", name: t.title, description: t.intro, serviceType: t.title, provider: { "@id": salonId }, areaServed: salon.areas, url: abs(`/treatments/${t.slug}`) },
    crumbs([["Home", ""], ["Treatments", "/#treatments"], [t.title, `/treatments/${t.slug}`]]),
  ];
  if (t.faqs.length) graph.push(faqSchema(t.faqs));

  return (
    <Shell>
      <JsonLd graph={graph} />
      <section className="t-hero">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href={href()}>Home</Link> / <Link href={href("/#treatments")}>Treatments</Link> / <span>{t.title}</span>
        </nav>
        <div className="t-hero-grid">
          <div>
            <Kicker>{String(i + 1).padStart(2, "0")} · {t.group}</Kicker>
            <h1>{t.title.split(" ").slice(0, -1).join(" ")} <em>{t.title.split(" ").slice(-1)}</em></h1>
            <p className="lede">{t.intro}</p>
            <div className="btns">
              <Link href={`${href("/contact")}?interest=${encodeURIComponent(t.title)}#form`} className="btn gold">Book a consultation</Link>
              <DmButton className="btn ig" />
            </div>
          </div>
          <div className="badge-frame tall">
            <Photo name={`t-${t.slug}.webp`} alt={`${t.title} at ${salon.name}, Haltwhistle`} className="zoom" />
          </div>
        </div>
      </section>

      <section className="sect t-body">
        <div className="t-points">
          <h2>What&apos;s <em>included</em></h2>
          <ul>{t.points.map((p) => <li key={p}><Rose />{p}</li>)}</ul>
        </div>
        {t.sections.map(([h, p]) => (
          <div key={h} className="t-section"><h2>{h}</h2><p>{p}</p></div>
        ))}
        {t.note && <p className="small">*{t.note}</p>}
      </section>

      {t.faqs.length > 0 && (
        <section className="sect narrow">
          <div className="sect-head center"><Kicker>{t.title}</Kicker><h2>Your <em>questions</em></h2></div>
          <FaqList items={t.faqs} />
        </section>
      )}

      <section className="sect">
        <div className="sect-head"><Kicker>Also at Secrets</Kicker></div>
        <div className="cards">
          {others.map((o) => (
            <Link key={o.slug} href={href(`/treatments/${o.slug}`)} className="card">
              <Photo name={`t-${o.slug}.webp`} alt="" />
              <h3>{o.title}</h3>
              <p>{o.short}</p>
            </Link>
          ))}
        </div>
      </section>
      <Cta />
    </Shell>
  );
}
