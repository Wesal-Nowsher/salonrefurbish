import { Shell } from "@/components/v4/ui";
import EnquiryForm from "@/components/secrets/EnquiryForm";
import DmButton from "@/components/secrets/DmButton";
import Social from "@/components/secrets/Social";
import { salon, fullAddress, abs, matchInterest } from "@/components/secrets/site";

export const metadata = { title: "Book | Secrets Beauty Salon, Haltwhistle", alternates: { canonical: abs("/contact") } };

export default async function V4Contact({ searchParams }) {
  const q = await searchParams;
  return (
    <Shell>
      <section className="v4-contact">
        <div className="c-side">
          <p className="eyebrow">Book</p>
          <h1>Your <em>appointment</em></h1>
          <p className="lede">Send the form and we&apos;ll confirm by phone or email. For the quickest reply, message us on Instagram.</p>
          <DmButton className="dm-pill" children="DM us on Instagram" />
          <a href={`tel:${salon.phone}`} className="c-tel">{salon.phoneDisplay}</a>
          <address>{salon.legalName}<br />{fullAddress}</address>
          <Social labels />
        </div>
        <div className="c-form">
          <EnquiryForm preset={matchInterest(q?.interest)} time={q?.time} />
        </div>
      </section>
      <iframe title={`Map to ${salon.name}`} className="v4-map" loading="lazy" src={`https://www.google.com/maps?q=${encodeURIComponent(`${salon.legalName}, ${fullAddress}`)}&output=embed`} />
    </Shell>
  );
}
