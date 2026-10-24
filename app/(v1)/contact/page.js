import { Shell, Kicker, Rose } from "@/components/secrets/ui";
import Social from "@/components/secrets/Social";
import EnquiryForm from "@/components/secrets/EnquiryForm";
import { JsonLd, businessSchema, crumbs } from "@/components/secrets/schema";
import { salon, fullAddress, abs, enquiryOptions } from "@/components/secrets/site";

export const metadata = {
  title: "Contact & Book | Secrets Beauty Salon, Main Street, Haltwhistle",
  description: `Book a consultation at Secrets Beauty Salon, ${fullAddress}. Call ${salon.phoneDisplay} or message us on Instagram.`,
  alternates: { canonical: abs("/contact") },
};

export default async function Contact({ searchParams }) {
  const wanted = (await searchParams)?.interest;
  const preset = enquiryOptions.find((o) => wanted && wanted.toLowerCase().includes(o.toLowerCase().split(" ")[0]));
  return (
    <Shell>
      <JsonLd graph={[businessSchema(), crumbs([["Home", ""], ["Contact", "/contact"]])]} />
      <section className="sect page-head">
        <Kicker>Find out more</Kicker>
        <h1>Let&apos;s keep it <em>between us.</em></h1>
        <p className="lede">For more information or to book a consultation, send us a note. We read every one personally.</p>
      </section>
      <section className="sect contact">
        <EnquiryForm preset={preset} />
        <aside>
          <div className="contact-card">
            <h2>Call us</h2>
            <a href={`tel:${salon.phone}`} className="big-link">{salon.phoneDisplay}</a>
            <h2>Message us</h2>
            <a href={salon.instagram} target="_blank" rel="noopener" className="big-link">{salon.instagramHandle}</a>
            <Social labels />
            <h2>Find us</h2>
            <address>{salon.legalName}<br />{fullAddress}</address>
            {salon.hours ? null : <p className="small"><Rose /> By appointment. Opening times on request.</p>}
          </div>
          <iframe
            title={`Map to ${salon.name}`}
            className="map"
            loading="lazy"
            src={`https://www.google.com/maps?q=${encodeURIComponent(`${salon.legalName}, ${fullAddress}`)}&output=embed`}
          />
        </aside>
      </section>
    </Shell>
  );
}
