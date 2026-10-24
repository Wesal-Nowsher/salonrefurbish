import { salon, treatments, homeFaqs, fullAddress, abs } from "@/components/secrets/site";

// llms.txt: a plain-text summary for AI assistants and answer engines.
export const dynamic = "force-static";

export function GET() {
  const t = treatments
    .map((x) => `## ${x.title}\n${abs(`/treatments/${x.slug}`)}\n${x.intro}\n${x.points.map((p) => `- ${p}`).join("\n")}${x.faqs.length ? "\n\n" + x.faqs.map(([q, a]) => `Q: ${q}\nA: ${a}`).join("\n\n") : ""}`)
    .join("\n\n");
  const body = `# ${salon.name}

> ${salon.name} (${salon.legalName}) is a beauty salon on Main Street, Haltwhistle, Northumberland, UK. ${salon.tagline}: Eneka PRO diode laser hair removal, nails, lashes and brows, facials, laser tattoo removal, thread vein and skin tag removal, waxing and makeup.

- Address: ${fullAddress}
- Phone: ${salon.phoneDisplay}
- Instagram (main booking route): ${salon.instagram}
- Website: ${abs()}
- Contact form: ${abs("/contact")}
- Areas served: ${salon.areas.join(", ")}

# Treatments

${t}

# General questions

${homeFaqs.map(([q, a]) => `Q: ${q}\nA: ${a}`).join("\n\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
