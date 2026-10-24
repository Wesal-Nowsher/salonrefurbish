import { Italiana, Raleway } from "next/font/google";
import "./globals.css";
import { salon } from "@/components/secrets/site";

const display = Italiana({ subsets: ["latin"], weight: "400", variable: "--f-display" });
const body = Raleway({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--f-body" });

export const metadata = {
  metadataBase: new URL(salon.url),
  title: "Secrets Beauty Salon Haltwhistle | Laser, Nails, Lashes & Skin",
  description: "Laser hair removal, nails, lashes, brows and skin treatments at Secrets Beauty Salon, Main Street, Haltwhistle, Northumberland.",
  icons: { icon: "/images/secrets-salon/logo-v4-640.webp" },
  openGraph: { type: "website", locale: "en_GB", siteName: salon.name, images: [{ url: "/images/secrets-salon/og.jpg", width: 1200, height: 630 }] },
};

export const viewport = { themeColor: "#fdeeee" };

export default function V4Layout({ children }) {
  return (
    <html lang="en-GB">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
