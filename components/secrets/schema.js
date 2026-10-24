import { salon, treatments, abs } from "./site";

export const salonId = `${salon.url}/#salon`;

// LocalBusiness data for search engines and AI answer engines.
export function businessSchema() {
  return {
    "@type": ["BeautySalon", "HealthAndBeautyBusiness"],
    "@id": salonId,
    name: salon.name,
    legalName: salon.legalName,
    slogan: salon.tagline,
    description: `${salon.name} in ${salon.address.town}, ${salon.address.county} offers Eneka PRO laser hair removal, nails, lashes and brows, facials, laser tattoo removal, thread vein and skin tag removal, waxing and makeup.`,
    url: abs(),
    logo: `${salon.url}/images/secrets-salon/logo.png`,
    image: `${salon.url}/images/secrets-salon/logo.png`,
    telephone: salon.phone,
    priceRange: "££",
    sameAs: [salon.instagram, salon.facebook].filter(Boolean),
    address: {
      "@type": "PostalAddress",
      streetAddress: salon.address.street,
      addressLocality: salon.address.town,
      addressRegion: salon.address.county,
      postalCode: salon.address.postcode,
      addressCountry: salon.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: salon.geo.lat, longitude: salon.geo.lng },
    areaServed: salon.areas.map((name) => ({ "@type": "Place", name })),
    ...(salon.hours && {
      openingHoursSpecification: salon.hours.map((h) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: h.day, opens: h.open, closes: h.close })),
    }),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Treatments",
      itemListElement: treatments.map((t) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: t.title, description: t.short, url: abs(`/treatments/${t.slug}`) },
      })),
    },
  };
}

export const faqSchema = (faqs) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
});

export const crumbs = (items) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: abs(path) })),
});

export function JsonLd({ graph }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }} />;
}
