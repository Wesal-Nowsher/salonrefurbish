import Link from "next/link";
import DmButton from "@/components/secrets/DmButton";
import { notFound } from "next/navigation";
import { Shell, Pic, Faq, v2 } from "@/components/v2/ui";
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

export default async function V2Treatment({ params }) {
  const t = await find(params);
  if (!t) notFound();
  const graph = [businessSchema(), { "@type": "Service", name: t.title, description: t.intro, provider: { "@id": salonId } }];
  if (t.faqs.length) graph.push(faqSchema(t.faqs));
  const next = treatments[(treatments.indexOf(t) + 1) % treatments.length];
  return (
    <Shell>
      <JsonLd graph={graph} />
      <section className="t2-hero">
        <div>
          <Link href={v2("/#menu")} className="back">← All treatments</Link>
          <p className="tag">✿ {t.group}</p>
          <h1>{t.title}</h1>
          <p className="hero-sub">{t.intro}</p>
          <div className="row">
            <Link href={`${v2("/contact")}?interest=${encodeURIComponent(t.title)}#form`} className="b-rose">Book this</Link>
            <DmButton className="b-ig" />
          </div>
        </div>
        <Pic name={`t-${t.slug}.webp`} alt={`${t.title} at ${salon.name}, Haltwhistle`} className="t2-pic" />
      </section>
      <section className="v2-sec">
        <ul className="perks">
          {t.points.map((p, i) => <li key={p}><span>0{i + 1}</span>{p}</li>)}
        </ul>
        {t.sections.map(([h, p]) => (
          <div key={h} className="note-card"><h2>{h}</h2><p>{p}</p></div>
        ))}
        {t.note && <p className="fine">*{t.note}</p>}
      </section>
      {t.faqs.length > 0 && (
        <section className="v2-sec">
          <header className="sec-top"><h2>Good <em>questions.</em></h2></header>
          <Faq items={t.faqs} />
        </section>
      )}
      <Link href={v2(`/treatments/${next.slug}`)} className="next-up">
        <small>Next up</small>
        <span>{next.title} →</span>
      </Link>
    </Shell>
  );
}
