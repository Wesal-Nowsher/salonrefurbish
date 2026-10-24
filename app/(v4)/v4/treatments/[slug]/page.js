import Link from "next/link";
import { notFound } from "next/navigation";
import { Shell, Faq, v4, img } from "@/components/v4/ui";
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

export default async function V4Treatment({ params }) {
  const t = await find(params);
  if (!t) notFound();
  const i = treatments.indexOf(t);
  const next = treatments[(i + 1) % treatments.length];
  const graph = [businessSchema(), { "@type": "Service", name: t.title, description: t.intro, provider: { "@id": salonId } }];
  if (t.faqs.length) graph.push(faqSchema(t.faqs));
  return (
    <Shell>
      <JsonLd graph={graph} />
      <section className="t4-hero">
        <img src={img(`t-${t.slug}.webp`)} alt={`${t.title} at ${salon.name}, Haltwhistle`} className="t4-pic" />
        <div className="t4-copy">
          <Link href={v4("/#chapters")} className="line-link">← All treatments</Link>
          <p className="eyebrow">Chapter {String(i + 1).padStart(2, "0")} · {t.group}</p>
          <h1>{t.title}</h1>
          <p className="lede">{t.intro}</p>
          <div className="btns">
            <Link href={`${v4("/contact")}?interest=${encodeURIComponent(t.title)}#form`} className="book-pill">Book this</Link>
            <DmButton className="dm-pill" />
          </div>
        </div>
      </section>
      <section className="v4-sec">
        <ol className="t4-points">
          {t.points.map((p) => <li key={p}>{p}</li>)}
        </ol>
        {t.sections.map(([h, p]) => (
          <div key={h} className="t4-note"><h2>{h}</h2><p>{p}</p></div>
        ))}
        {t.note && <p className="fine">*{t.note}</p>}
      </section>
      {t.faqs.length > 0 && (
        <section className="v4-sec">
          <h2 className="center-h">Your <em>questions</em></h2>
          <Faq items={t.faqs} />
        </section>
      )}
      <Link href={v4(`/treatments/${next.slug}`)} className="t4-next">
        <span className="eyebrow">Next chapter</span>
        <span className="next-t">{next.title} →</span>
      </Link>
    </Shell>
  );
}
