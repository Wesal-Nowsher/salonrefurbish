import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { salon } from "@/components/secrets/site";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500"], style: ["normal", "italic"], variable: "--f-serif" });
const sans = Jost({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--f-sans" });

export const metadata = {
  metadataBase: new URL(salon.url),
  title: {
    default: "Secrets Beauty Salon Haltwhistle | Laser Hair Removal, Nails & Lashes",
    template: "%s",
  },
  description:
    "Secrets Beauty Salon, Main Street, Haltwhistle: Eneka PRO laser hair removal, nails, lash lifts, brows, NanoSure facials, tattoo removal and more. Book a consultation.",
  icons: { icon: "/images/secrets-salon/logo-640.webp" },
  openGraph: { type: "website", locale: "en_GB", siteName: salon.name, images: [{ url: "/images/secrets-salon/logo.png", alt: salon.name }] },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: "#faf6f0" };

export default function SecretsLayout({ children }) {
  return (
    <html lang="en-GB">
      <body className={`${serif.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
