"use client";
import { useState } from "react";
import { enquiryOptions, salon } from "./site";

export default function EnquiryForm({ preset }) {
  const [state, setState] = useState("idle");
  async function submit(e) {
    e.preventDefault();
    setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const res = await fetch("/api/secrets-enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }).catch(() => null);
    setState(res?.ok ? "sent" : "error");
  }
  if (state === "sent")
    return (
      <div className="form-done">
        <h3>Thank you, we&apos;ll be in touch.</h3>
        <p>We usually reply within one working day. For anything urgent call <a href={`tel:${salon.phone}`}>{salon.phoneDisplay}</a>.</p>
      </div>
    );
  return (
    <form className="form" onSubmit={submit}>
      <label>Name *<input name="name" required autoComplete="name" /></label>
      <label>Email *<input name="email" type="email" required autoComplete="email" /></label>
      <label>Phone<input name="phone" type="tel" autoComplete="tel" /></label>
      <label>Interested in
        <select name="interest" defaultValue={preset || "General Enquiry"}>
          {enquiryOptions.map((o) => <option key={o}>{o}</option>)}
        </select>
      </label>
      <label>Preferred date<input name="date" type="date" /></label>
      <label>Preferred time
        <select name="time" defaultValue="Morning"><option>Morning</option><option>Afternoon</option></select>
      </label>
      <label className="wide">Comments<textarea name="comments" rows="4" /></label>
      <p className="wide small">By sending this form you agree we may contact you about your enquiry. See our privacy policy.</p>
      <button className="btn gold wide" disabled={state === "sending"}>{state === "sending" ? "Sending..." : "Send enquiry"}</button>
      {state === "error" && <p className="wide err">Sorry, that didn&apos;t send. Please call {salon.phoneDisplay} or message us on Instagram.</p>}
    </form>
  );
}
