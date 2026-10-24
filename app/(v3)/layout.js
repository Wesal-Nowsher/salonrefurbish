import { Bodoni_Moda, Montserrat } from "next/font/google";
import "./globals.css";
import { salon } from "@/components/secrets/site";

const display = Bodoni_Moda({ subsets: ["latin"], style: ["normal", "italic"], variable: "--f-display" });
const body = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--f-body" });

export const metadata = {
  metadataBase: new URL(salon.url),
  title: "Secrets Beauty Salon Haltwhistle | Laser, Nails, Lashes & Skin",
  description: "Gold-standard laser hair removal, nails, lashes, brows and skin treatments at Secrets Beauty Salon, Main Street, Haltwhistle, Northumberland.",
  icons: { icon: "/images/secrets-salon/logo-640.webp" },
  openGraph: { type: "website", locale: "en_GB", siteName: salon.name, images: [{ url: "/images/secrets-salon/og.jpg", width: 1200, height: 630 }] },
};

export const viewport = { themeColor: "#f6dcd6" };

export default function V3Layout({ children }) {
  return (
    <html lang="en-GB">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
