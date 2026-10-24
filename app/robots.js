import { salon } from "@/components/secrets/site";

export default function robots() {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${salon.url}/sitemap.xml` };
}
