import { Shell, Kicker } from "@/components/secrets/ui";
import { salon, fullAddress, abs } from "@/components/secrets/site";

export const metadata = { title: "Privacy Policy | Secrets Beauty Salon", alternates: { canonical: abs("/privacy") }, robots: { index: false } };

// CHECK: have the salon review this against their own data handling.
export default function Privacy() {
  return (
    <Shell>
      <section className="sect narrow prose">
        <Kicker>Privacy policy</Kicker>
        <h1>Your <em>privacy.</em></h1>
        <p>{salon.legalName} (&ldquo;we&rdquo;) of {fullAddress} is the data controller for personal information collected through this website, under the UK GDPR and the Data Protection Act 2018.</p>
        <h2>What we collect</h2>
        <p>When you send an enquiry we collect your name, email, phone number, the treatment you are interested in, your preferred date and time and any comments you add.</p>
        <h2>How we use it</h2>
        <p>Only to answer your enquiry and manage your appointments. We never sell your data or use it for marketing without your consent. Consultation and medical notes for treatments are kept securely and confidentially.</p>
        <h2>How long we keep it</h2>
        <p>Enquiries that do not lead to a booking are deleted within 12 months. Client records are kept for as long as required for insurance and legal purposes.</p>
        <h2>Cookies</h2>
        <p>This website does not use advertising or analytics cookies. The embedded Google Map may set cookies controlled by Google.</p>
        <h2>Your rights</h2>
        <p>You can ask to see, correct or delete your data at any time by calling {salon.phoneDisplay}. You can also complain to the Information Commissioner&apos;s Office (ico.org.uk).</p>
      </section>
    </Shell>
  );
}
