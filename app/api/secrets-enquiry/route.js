import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json().catch(() => null);
  if (!data || !data.name || !data.email) {
    return NextResponse.json({ ok: false, error: "Name and email are required." }, { status: 400 });
  }
  // TODO: forward to the salon's inbox (e.g. Resend, Nodemailer) or booking system.
  console.log("New Secrets Salon enquiry:", data);
  return NextResponse.json({ ok: true });
}
