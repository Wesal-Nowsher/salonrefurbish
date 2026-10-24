import Link from "next/link";
import { Shell, Pic, Faq, v2 } from "@/components/v2/ui";
import DmButton from "@/components/secrets/DmButton";
import Booker from "@/components/v2/Booker";
import LaserSwitch from "@/components/v2/LaserSwitch";
import { JsonLd, businessSchema, faqSchema } from "@/components/secrets/schema";
import { salon, treatments, homeFaqs, abs } from "@/components/secrets/site";

// The original design at "/" is the canonical page; this is an alternative look.
export const metadata = { alternates: { canonical: abs() } };

const laser = treatments[0];
const tiles = ["big", "tall", "", "", "", "", "", ""];

export default function V2Home() {
  return (
    <Shell>
      <JsonLd graph={[businessSchema(), faqSchema([...homeFaqs, ...laser.faqs.slice(0, 2)])]} />

      <section className="v2-hero">
        <div className="hero-text">
          <p className="tag">✿ Haltwhistle&apos;s beauty secret</p>
          <h1>
            Soft skin.<br />
            Pretty nails.<br />
            <em>The secret&apos;s out.</em>
          </h1>
          <p className="hero-sub">Medical-grade laser, lashes, brows, skin and the prettiest nail sets in Northumberland, all in one pink little salon on Main Street.</p>
          <div className="row">
            <Link href={v2("/#book")} className="b-rose">Book in 3 taps</Link>
            <DmButton className="b-ig" />
          </div>
        </div>
        <div className="fan" aria-hidden="true">
          <Pic name="lashes.webp" className="c1" />
          <Pic name="nails.webp" className="c2" />
          <Pic name="hero.webp" className="c3" />
          <span className="sticker">4000W<br /><small>diode laser</small></span>
        </div>
      </section>

      <div className="ribbon" aria-hidden="true">
        <div>
          {[0, 1].map((k) => (
            <span key={k}>{treatments.map((t) => `${t.title} ✿ `).join("")}</span>
          ))}
        </div>
      </div>

      <section id="menu" className="v2-sec">
        <header className="sec-top">
          <h2>Pick your <em>pretty.</em></h2>
          <p>Eight treatments, one pink door. Tap any tile for the details.</p>
        </header>
        <div className="bento">
          {treatments.map((t, i) => (
            <Link key={t.slug} href={v2(`/treatments/${t.slug}`)} className={`tile ${tiles[i]}`}>
              <Pic name={`t-${t.slug}.webp`} alt={`${t.title} at ${salon.name}`} />
              <span className="tile-label">
                <strong>{t.title}</strong>
                <small>{t.short}</small>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section id="laser" className="v2-laser">
        <div className="laser-l">
          <p className="tag light">✿ The signature</p>
          <h2>Laser hair removal, <em>minus the ouch.</em></h2>
          <p>{laser.intro}</p>
          <div className="dots" aria-label="Six recommended sessions">
            {[1, 2, 3, 4, 5, 6].map((n) => <span key={n}>{n}</span>)}
            <em>6 sessions, then discounted top-ups</em>
          </div>
          <Link href={v2("/treatments/laser-hair-removal")} className="b-white">Everything about laser</Link>
        </div>
        <LaserSwitch />
      </section>

      <section id="book" className="v2-sec">
        <header className="sec-top">
          <h2>Book in <em>three taps.</em></h2>
          <p>No forms to wrestle with. Tell us what you fancy and we&apos;ll do the rest.</p>
        </header>
        <Booker />
      </section>

      <section className="v2-gram">
        <div className="gram-text">
          <h2>Maximum fluff,<br /><em>zero apologies.</em></h2>
          <p>{salon.instagramStats.posts} posts of fresh sets and lash lifts. New slots with Nat and Kerry drop every week.</p>
          <div className="row">
            <DmButton className="b-ig" />
            <a href={salon.instagram} target="_blank" rel="noopener" className="b-ghost">See the sets</a>
            <a href={salon.facebook} target="_blank" rel="noopener" className="b-ghost">Facebook</a>
          </div>
        </div>
        <div className="polaroids">
          {[1, 2, 3, 4, 5].map((n) => (
            <a key={n} href={salon.instagram} target="_blank" rel="noopener" className={`pol p${n}`} aria-label={`Instagram post ${n}`}>
              <Pic name={`gram-${n}.webp`} />
            </a>
          ))}
        </div>
      </section>

      <section className="v2-sec">
        <header className="sec-top">
          <h2>Little <em>questions.</em></h2>
        </header>
        <Faq items={[...homeFaqs, ...laser.faqs.slice(0, 2)]} />
      </section>

      <section className="v2-final">
        <h2>Your secret&apos;s <em>safe with us.</em></h2>
        <div className="row center">
          <Link href={v2("/contact#form")} className="b-white">Book a consultation</Link>
          <DmButton className="b-ig light" />
          <a href={`tel:${salon.phone}`} className="b-ghost light">{salon.phoneDisplay}</a>
        </div>
      </section>
    </Shell>
  );
}
