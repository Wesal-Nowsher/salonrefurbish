import { treatments, abs } from "@/components/secrets/site";

export default function sitemap() {
  const pages = ["", "/prices", "/contact", ...treatments.map((t) => `/treatments/${t.slug}`)];
  return pages.map((p) => ({ url: abs(p), lastModified: new Date(), changeFrequency: "monthly", priority: p ? 0.8 : 1 }));
}
