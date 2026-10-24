import { Shell } from "@/components/v2/ui";
import DmButton from "@/components/secrets/DmButton";
import EnquiryForm from "@/components/secrets/EnquiryForm";
import Social from "@/components/secrets/Social";
import { salon, fullAddress, abs, matchInterest } from "@/components/secrets/site";

export const metadata = { title: "Book | Secrets Beauty Salon, Haltwhistle", alternates: { canonical: abs("/contact") } };

export default async function V2Contact({ searchParams }) {
  const wanted = (await searchParams)?.interest;
  const preset = matchInterest(wanted);
  const time = (await searchParams)?.time;
  return (
    <Shell>
      <section className="v2-contact">
        <div className="contact-pink">
          <p className="tag light">✿ Let&apos;s chat</p>
          <h1>Tell us your <em>secret.</em></h1>
          <a href={`tel:${salon.phone}`} className="huge">{salon.phoneDisplay}</a>
          <address>{salon.legalName}<br />{fullAddress}</address>
          <DmButton className="b-ig light big" children="DM us on Instagram" />
          <p className="dm-note">Quickest reply. New slots posted every week.</p>
          <Social labels />
        </div>
        <div className="contact-form">
          <EnquiryForm preset={preset} time={time} />
        </div>
      </section>
      <iframe title={`Map to ${salon.name}`} className="v2-map" loading="lazy" src={`https://www.google.com/maps?q=${encodeURIComponent(`${salon.legalName}, ${fullAddress}`)}&output=embed`} />
    </Shell>
  );
}
