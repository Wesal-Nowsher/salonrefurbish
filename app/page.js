import Link from "next/link";
import Collection from "@/components/secrets/Collection";
import { Shell, Photo, Rose, Kicker, FaqList, Cta } from "@/components/secrets/ui";
import { JsonLd, businessSchema, faqSchema } from "@/components/secrets/schema";
import { salon, href, abs, homeFaqs, treatments } from "@/components/secrets/site";

export const metadata = { alternates: { canonical: abs() } };

const laser = treatments[0];

export default function Home() {
  return (
    <Shell>
      <JsonLd graph={[businessSchema(), faqSchema([...homeFaqs, ...laser.faqs.slice(0, 2)])]} />

      <section className="hero">
        <div className="hero-copy">
          <Kicker>Haltwhistle · Northumberland</Kicker>
          <h1>
            Beauty, kept
            <em> between us.</em>
          </h1>
          <p className="lede">
            {salon.name} is a private boutique for {laser.title.toLowerCase()}, advanced skin treatments, nails and lashes, hidden on
            Main Street, a short drive from Hexham and Hadrian&apos;s Wall.
          </p>
          <div className="btns">
            <Link href={href("/contact")} className="btn gold">Book a consultation</Link>
            <Link href={href("/treatments/laser-hair-removal")} className="btn line">Discover the laser</Link>
          </div>
        </div>
        <div className="hero-art">
          <div className="badge-frame">
            <Photo name="hero.webp" alt="Glossy blush gel nails beside a pink rose at Secrets Beauty Salon, Haltwhistle" className="zoom" />
          </div>
          <div className="seal" aria-hidden="true">
            <svg viewBox="0 0 120 120">
              <defs><path id="ring" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" /></defs>
              <text><textPath href="#ring">Eneka PRO · 4000W diode laser · all skin types · </textPath></text>
            </svg>
            <span>4000<small>W</small></span>
          </div>
        </div>
      </section>

      <section className="statement">
        <Rose />
        <p>
          Some things are better kept <em>secret</em>: the smooth skin that took six quiet sessions, the nails everyone asks about,
          the lashes that look like you woke up that way.
        </p>
      </section>

      <section className="sect" id="treatments">
        <div className="sect-head">
          <Kicker>The collection</Kicker>
          <h2>Eight treatments, <em>one address.</em></h2>
        </div>
        <Collection />
      </section>

      <section className="laser">
        <div className="laser-in">
          <div>
            <Kicker>Signature treatment</Kicker>
            <h2>Medical-grade laser, <em>without the clinic.</em></h2>
            <p>{laser.intro}</p>
            <Link href={href("/treatments/laser-hair-removal")} className="btn gold">Read more</Link>
          </div>
          <dl className="stats">
            <div><dt>4000W</dt><dd>the highest-power diode platform</dd></div>
            <div><dt>6</dt><dd>sessions recommended, then discounted top-ups</dd></div>
            <div><dt>All</dt><dd>skin types and phototypes treated</dd></div>
            <div><dt>FDA</dt><dd>approved and medical CE marked</dd></div>
          </dl>
        </div>
        <div className="versus">
          <h3>Diode laser <em>vs</em> IPL</h3>
          <table>
            <thead><tr><th scope="col"></th><th scope="col">Eneka PRO diode</th><th scope="col">IPL</th></tr></thead>
            <tbody>
              <tr><th scope="row">Sessions</th><td>Fewer, more effective</td><td>More, longer term</td></tr>
              <tr><th scope="row">Comfort</th><td>Integrated cooling</td><td>Less comfortable</td></tr>
              <tr><th scope="row">Skin &amp; hair types</th><td>All types</td><td>Limited range</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="sect ritual">
        <div className="sect-head">
          <Kicker>The Secrets ritual</Kicker>
          <h2>How every visit <em>unfolds.</em></h2>
        </div>
        <ol>
          <li><span>i.</span><h3>Consultation</h3><p>A private chat about your skin, hair and goals, with a patch test where needed. No pressure, no rush.</p></li>
          <li><span>ii.</span><h3>Treatment</h3><p>Medical-grade technology and practised hands, in a calm room that feels nothing like a clinic.</p></li>
          <li><span>iii.</span><h3>Aftercare</h3><p>Clear advice to take home, and a plan for your next visit, so results keep getting better.</p></li>
        </ol>
      </section>

      <section className="sect atelier">
        <div className="atelier-grid">
          <Photo name="nails.webp" alt="Hand-painted nail art with gold foil at Secrets Beauty Salon" className="a1" />
          <Photo name="lashes.webp" alt="Lifted and tinted lashes after a lash lift" className="a2" tone="gold" />
          <div className="a3">
            <Kicker>The nail bar &amp; lash studio</Kicker>
            <h2>Where it <em>all began.</em></h2>
            <p>Gels, BIAB, acrylics and polygel, French tips, chrome and hand-painted florals. Lash lifts that last six to eight weeks, Russian volume, laminated and HD brows.</p>
            <p className="team">Book with {salon.team.map((t) => t.name).join(" or ")}, our nail technicians.</p>
            <div className="btns">
              <Link href={href("/treatments/nails")} className="btn line">Nails</Link>
              <Link href={href("/treatments/lashes-and-brows")} className="btn line">Lashes &amp; brows</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="gram">
        <div className="gram-head">
          <p className="gram-quote">&ldquo;Maximum fluff, <em>zero apologies.</em>&rdquo;</p>
          <p>{salon.instagramStats.posts} posts of fresh sets, lifts and glow-ups. New appointments are posted every week.</p>
          <a href={salon.instagram} className="btn line" target="_blank" rel="noopener">Follow {salon.instagramHandle}</a>
        </div>
        <div className="gram-row">
          {[1, 2, 3, 4, 5].map((n) => (
            <a key={n} href={salon.instagram} target="_blank" rel="noopener" aria-label={`Secrets Beauty Salon on Instagram, post ${n}`}>
              <Photo name={`gram-${n}.webp`} alt="" tone={n % 2 ? "blush" : "gold"} />
            </a>
          ))}
        </div>
      </section>

      <section className="sect narrow">
        <div className="sect-head center">
          <Kicker>Questions, answered</Kicker>
          <h2>Before you <em>visit.</em></h2>
        </div>
        <FaqList items={[...homeFaqs, ...laser.faqs.slice(0, 2)]} />
      </section>

      <Cta />
    </Shell>
  );
}
