import Link from "next/link";
import { Shell, Arch, Fan, Title, Faq, v3, roman } from "@/components/v3/ui";
import Explorer from "@/components/v3/Explorer";
import EnquiryForm from "@/components/secrets/EnquiryForm";
import DmButton from "@/components/secrets/DmButton";
import { JsonLd, businessSchema, faqSchema } from "@/components/secrets/schema";
import { salon, treatments, homeFaqs, abs } from "@/components/secrets/site";

// The original design at "/" is the canonical page; this is an alternative look.
export const metadata = { alternates: { canonical: abs() } };

const laser = treatments[0];

export default function V3Home() {
  return (
    <Shell>
      <JsonLd graph={[businessSchema(), faqSchema([...homeFaqs, ...laser.faqs.slice(0, 2)])]} />

      <section className="v3-hero">
        <div className="sunburst" aria-hidden="true" />
        <p className="kick">Est. on Main Street · Haltwhistle</p>
        <div className="hero-row">
          <h1 className="hero-h">
            <span className="h-left">The gold<br /><em>standard</em></span>{" "}
            <span className="h-right">of being<br /><em>pretty.</em></span>
          </h1>
          <Arch name="hero.webp" alt="Blush gel nails beside a pink rose at Secrets Beauty Salon, Haltwhistle" className="hero-arch" />
        </div>
        <p className="hero-lede">Medical-grade laser hair removal, results-led skin treatments and couture nails and lashes, from a little pink salon in the heart of Northumberland.</p>
        <div className="btn-row center">
          <Link href={v3("/contact#form")} className="g-btn">Book now</Link>
          <DmButton className="p-btn" />
        </div>
      </section>

      <section className="v3-sec">
        <Title kicker="The treatments">A secret for <em>every</em> you</Title>
        <div className="arch-rail" tabIndex={0} aria-label="Treatments, scroll sideways">
          {treatments.map((t, i) => (
            <Link key={t.slug} href={v3(`/treatments/${t.slug}`)} className="arch-card">
              <span className="num">{roman(i + 1)}</span>
              <Arch name={`t-${t.slug}.webp`} alt={`${t.title} at ${salon.name}`} />
              <h3>{t.title}</h3>
              <p>{t.short}</p>
            </Link>
          ))}
        </div>
        <p className="rail-hint">Scroll sideways to see all eight →</p>
      </section>

      <section id="laser" className="v3-laser">
        <div className="certificate">
          <span className="corner tl" /><span className="corner tr" /><span className="corner bl" /><span className="corner br" />
          <Title kicker="Signature treatment" center>Eneka PRO <em>diode laser</em></Title>
          <p className="cert-lede">{laser.intro}</p>
          <div className="medals">
            <div><strong>4000W</strong><span>highest-power diode</span></div>
            <div><strong>6</strong><span>sessions, then discounted top-ups</span></div>
            <div><strong>All</strong><span>skin &amp; hair types</span></div>
            <div><strong>FDA</strong><span>approved &amp; CE marked</span></div>
          </div>
          <div className="btn-row center">
            <Link href={v3("/treatments/laser-hair-removal")} className="g-btn">Discover the laser</Link>
            <Link href={v3("/contact?interest=Laser%20Hair%20Removal#form")} className="l-btn">Book a consultation</Link>
          </div>
        </div>
      </section>

      <section id="explore" className="v3-sec">
        <Title kicker="Explore">The secret <em>menu</em></Title>
        <Explorer />
      </section>

      <section className="v3-gram">
        <Title kicker={salon.instagramHandle} center>Fresh from <em>the chair</em></Title>
        <div className="gram-arches">
          {[1, 2, 3, 4, 5].map((n) => (
            <a key={n} href={salon.instagram} target="_blank" rel="noopener" aria-label={`Instagram post ${n}`} className={`ga ga${n}`}>
              <Arch name={`gram-${n}.webp`} />
            </a>
          ))}
        </div>
        <div className="btn-row center">
          <DmButton className="p-btn" />
          <a href={salon.instagram} target="_blank" rel="noopener" className="l-btn">Follow on Instagram</a>
          <a href={salon.facebook} target="_blank" rel="noopener" className="l-btn">Facebook</a>
        </div>
      </section>

      <section className="v3-sec">
        <Title kicker="Before you visit" center>Asked &amp; <em>answered</em></Title>
        <Faq items={[...homeFaqs, ...laser.faqs.slice(0, 2)]} />
      </section>

      <section id="reserve" className="v3-reserve">
        <div className="reserve-copy">
          <Fan className="big" />
          <h2>Reserve your <em>secret.</em></h2>
          <p>Send the form and we&apos;ll confirm your appointment. Laser, skin and tattoo treatments start with a free consultation.</p>
          <div className="reserve-alt">
            <p>Prefer to message?</p>
            <DmButton className="p-btn" children="DM us on Instagram" />
            <a href={`tel:${salon.phone}`} className="tel">or call {salon.phoneDisplay}</a>
          </div>
        </div>
        <div className="reserve-form">
          <EnquiryForm />
        </div>
      </section>
    </Shell>
  );
}
