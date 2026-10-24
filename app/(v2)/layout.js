import { Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";
import { salon } from "@/components/secrets/site";

const display = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--f-display" });
const body = DM_Sans({ subsets: ["latin"], variable: "--f-body" });

export const metadata = {
  metadataBase: new URL(salon.url),
  title: "Secrets Beauty Salon Haltwhistle | Laser, Nails, Lashes & Skin",
  description: "Pink, pretty and medical-grade: Eneka PRO laser hair removal, nails, lashes, brows and skin at Secrets Beauty Salon, Main Street, Haltwhistle.",
  icons: { icon: "/images/secrets-salon/logo-640.webp" },
  openGraph: { type: "website", locale: "en_GB", siteName: salon.name, images: [{ url: "/images/secrets-salon/og.jpg", width: 1200, height: 630 }] },
};

export const viewport = { themeColor: "#fbe4e1" };

export default function V2Layout({ children }) {
  return (
    <html lang="en-GB">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
