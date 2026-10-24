import { Shell, Title, Fan } from "@/components/v3/ui";
import EnquiryForm from "@/components/secrets/EnquiryForm";
import DmButton from "@/components/secrets/DmButton";
import Social from "@/components/secrets/Social";
import { salon, fullAddress, abs, matchInterest } from "@/components/secrets/site";

export const metadata = { title: "Book | Secrets Beauty Salon, Haltwhistle", alternates: { canonical: abs("/contact") } };

export default async function V3Contact({ searchParams }) {
  const q = await searchParams;
  return (
    <Shell>
      <section className="v3-sec">
        <Title kicker="Reserve" center>Book your <em>appointment</em></Title>
        <div className="v3-contact">
          <div className="reserve-form">
            <EnquiryForm preset={matchInterest(q?.interest)} time={q?.time} />
          </div>
          <aside className="contact-crest">
            <Fan className="big" />
            <h3>Quickest reply</h3>
            <DmButton className="p-btn" children="DM us on Instagram" />
            <h3>Call</h3>
            <a href={`tel:${salon.phone}`} className="big-tel">{salon.phoneDisplay}</a>
            <h3>Visit</h3>
            <address>{salon.legalName}<br />{fullAddress}</address>
            <Social labels />
          </aside>
        </div>
      </section>
      <iframe title={`Map to ${salon.name}`} className="v3-map" loading="lazy" src={`https://www.google.com/maps?q=${encodeURIComponent(`${salon.legalName}, ${fullAddress}`)}&output=embed`} />
    </Shell>
  );
}
