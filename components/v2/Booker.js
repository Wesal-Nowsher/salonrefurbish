"use client";
import { useState } from "react";
import Link from "next/link";
import { enquiryOptions, salon } from "@/components/secrets/site";

// "Book in three taps": pick a treatment and a time, then choose how to send it.
export default function Booker() {
  const [what, setWhat] = useState(null);
  const [when, setWhen] = useState(null);
  const ready = what && when;
  const options = enquiryOptions.filter((o) => o !== "General Enquiry");
  return (
    <div className="booker">
      <div className="step">
        <span className="step-n">1</span>
        <p>I&apos;d love&hellip;</p>
        <div className="chips">
          {options.map((o) => (
            <button key={o} type="button" aria-pressed={what === o} onClick={() => setWhat(o)}>{o}</button>
          ))}
        </div>
      </div>
      <div className="step">
        <span className="step-n">2</span>
        <p>Ideally in the&hellip;</p>
        <div className="chips">
          {["Morning", "Afternoon"].map((o) => (
            <button key={o} type="button" aria-pressed={when === o} onClick={() => setWhen(o)}>{o}</button>
          ))}
        </div>
      </div>
      <div className={`step send ${ready ? "on" : ""}`}>
        <span className="step-n">3</span>
        <p>{ready ? <>{what}, {when.toLowerCase()}. Lovely. Send it via&hellip;</> : "Pick a treatment and a time"}</p>
        <div className="chips">
          <Link className="go" aria-disabled={!ready} href={ready ? `/v2/contact?interest=${encodeURIComponent(what)}&time=${when}` : "#book"}>Enquiry form</Link>
          <a className="go" href={salon.instagram} target="_blank" rel="noopener">Instagram DM</a>
          <a className="go" href={`tel:${salon.phone}`}>Call {salon.phoneDisplay}</a>
        </div>
      </div>
    </div>
  );
}
