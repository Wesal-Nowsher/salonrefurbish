import Link from "next/link";
import { Shell, Faq, v4, img } from "@/components/v4/ui";
import Chapters from "@/components/v4/Chapters";
import DmButton from "@/components/secrets/DmButton";
import { JsonLd, businessSchema, faqSchema } from "@/components/secrets/schema";
import { salon, treatments, homeFaqs, abs } from "@/components/secrets/site";

// The original design at "/" is the canonical page; this is an alternative look.
export const metadata = { alternates: { canonical: abs() } };

const laser = treatments[0];

export default function V4Home() {
  return (
    <Shell>
      <JsonLd graph={[businessSchema(), faqSchema([...homeFaqs, ...laser.faqs.slice(0, 2)])]} />

      <section className="v4-hero">
        <p className="eyebrow">Haltwhistle · Northumberland</p>
        <h1>
          <span className="outline">Secrets</span>
          <span className="sub">are made <em>beautiful</em> here</span>
        </h1>
        <div className="hero-strip">
          <img src={img("lashes.webp")} alt="" className="hs hs1" />
          <img src={img("hero.webp")} alt="Blush gel nails beside a pink rose at Secrets Beauty Salon" className="hs hs2" />
          <img src={img("nails.webp")} alt="" className="hs hs3" />
        </div>
        <div className="hero-foot">
          <p>Laser hair removal, skin, nails and lashes, on Main Street.</p>
          <div className="btns">
            <Link href={v4("/contact#form")} className="book-pill big">Book an appointment</Link>
            <DmButton className="dm-pill" />
          </div>
        </div>
      </section>

      <section className="v4-intro">
        <p>
          Eight treatments. One quiet pink room. <em>Medical-grade</em> technology, practised hands and the kind of results
          people ask about.
        </p>
      </section>

      <section id="chapters" className="v4-sec wide">
        <Chapters />
      </section>

      <section className="v4-laser">
        <div className="laser-num">4000<small>W</small></div>
        <div>
          <p className="eyebrow">The signature treatment</p>
          <h2>Eneka PRO <em>diode laser</em></h2>
          <p>{laser.intro}</p>
          <dl className="laser-facts">
            <div><dt>6</dt><dd>sessions recommended</dd></div>
            <div><dt>All</dt><dd>skin &amp; hair types</dd></div>
            <div><dt>FDA</dt><dd>approved &amp; CE marked</dd></div>
          </dl>
          <div className="btns">
            <Link href={v4("/contact?interest=Laser%20Hair%20Removal#form")} className="book-pill">Book a consultation</Link>
            <Link href={v4("/treatments/laser-hair-removal")} className="line-link">Diode vs IPL &amp; FAQs</Link>
          </div>
        </div>
      </section>

      <section className="v4-gram">
        <h2>Follow <em>{salon.instagramHandle}</em></h2>
        <div className="gram-line">
          {[1, 2, 3, 4, 5].map((n) => (
            <a key={n} href={salon.instagram} target="_blank" rel="noopener" aria-label={`Instagram post ${n}`}>
              <img src={img(`gram-${n}.webp`)} alt="" loading="lazy" />
            </a>
          ))}
        </div>
        <div className="btns center">
          <DmButton className="dm-pill" />
          <a href={salon.facebook} target="_blank" rel="noopener" className="line-link">Facebook</a>
        </div>
      </section>

      <section className="v4-sec">
        <h2 className="center-h">Good to <em>know</em></h2>
        <Faq items={[...homeFaqs, ...laser.faqs.slice(0, 2)]} />
      </section>

      <section className="v4-end">
        <h2>Tell us your <em>secret.</em></h2>
        <div className="btns center">
          <Link href={v4("/contact#form")} className="book-pill big">Book an appointment</Link>
          <DmButton className="dm-pill" />
          <a href={`tel:${salon.phone}`} className="line-link">{salon.phoneDisplay}</a>
        </div>
      </section>
    </Shell>
  );
}
