import Link from "next/link";
import { notFound } from "next/navigation";
import { Shell, Arch, Title, Faq, v3, roman } from "@/components/v3/ui";
import DmButton from "@/components/secrets/DmButton";
import { JsonLd, businessSchema, faqSchema, salonId } from "@/components/secrets/schema";
import { salon, treatments, abs } from "@/components/secrets/site";

export const dynamicParams = false;
export const generateStaticParams = () => treatments.map((t) => ({ slug: t.slug }));

const find = async (params) => {
  const { slug } = await params;
  return treatments.find((t) => t.slug === slug);
};

export async function generateMetadata({ params }) {
  const t = await find(params);
  return t ? { title: t.seo, description: t.short, alternates: { canonical: abs(`/treatments/${t.slug}`) } } : {};
}

export default async function V3Treatment({ params }) {
  const t = await find(params);
  if (!t) notFound();
  const i = treatments.indexOf(t);
  const graph = [businessSchema(), { "@type": "Service", name: t.title, description: t.intro, provider: { "@id": salonId } }];
  if (t.faqs.length) graph.push(faqSchema(t.faqs));
  const others = treatments.filter((o) => o !== t).slice(0, 3);
  return (
    <Shell>
      <JsonLd graph={graph} />
      <section className="t3-hero">
        <div className="t3-copy">
          <Link href={v3("/#explore")} className="back">← The secret menu</Link>
          <p className="kick">{roman(i + 1)} · {t.group}</p>
          <h1>{t.title}</h1>
          <p className="hero-lede left">{t.intro}</p>
          <div className="btn-row">
            <Link href={`${v3("/contact")}?interest=${encodeURIComponent(t.title)}#form`} className="g-btn">Book this</Link>
            <DmButton className="p-btn" />
          </div>
        </div>
        <Arch name={`t-${t.slug}.webp`} alt={`${t.title} at ${salon.name}, Haltwhistle`} className="t3-arch" />
      </section>
      <section className="v3-sec">
        <Title kicker="What's included">The <em>details</em></Title>
        <ol className="deco-list">
          {t.points.map((p, n) => <li key={p}><span>{roman(n + 1)}</span>{p}</li>)}
        </ol>
        {t.sections.map(([h, p]) => (
          <div key={h} className="panel"><h3>{h}</h3><p>{p}</p></div>
        ))}
        {t.note && <p className="fine">*{t.note}</p>}
      </section>
      {t.faqs.length > 0 && (
        <section className="v3-sec">
          <Title kicker={t.title} center>Your <em>questions</em></Title>
          <Faq items={t.faqs} />
        </section>
      )}
      <section className="v3-sec">
        <Title kicker="Also at Secrets">You may <em>also love</em></Title>
        <div className="trio">
          {others.map((o) => (
            <Link key={o.slug} href={v3(`/treatments/${o.slug}`)} className="arch-card">
              <Arch name={`t-${o.slug}.webp`} />
              <h3>{o.title}</h3>
              <p>{o.short}</p>
            </Link>
          ))}
        </div>
      </section>
    </Shell>
  );
}
