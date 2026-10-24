// Secrets Beauty Salon - every business detail and all site copy lives here.
// Source: the client brief (current website + Instagram, Oct 2026).
// Anything marked CHECK still needs confirming with the salon.

export const salon = {
  name: "Secrets Beauty Salon",
  legalName: "SECRETS SALON LTD",
  tagline: "Laser Hair Removal & Nail Bar",
  url: "https://www.secretssalonhaltwhistle.co.uk",
  base: "",
  phone: "+441434322100",
  phoneDisplay: "01434 322 100",
  instagram: "https://www.instagram.com/secrets_salon_ltd/",
  instagramHandle: "@secrets_salon_ltd",
  facebook: "https://www.facebook.com/people/Secrets-Salon-ltd/100060822563649/",
  address: { street: "Main Street", town: "Haltwhistle", county: "Northumberland", postcode: "NE49 9AE", country: "GB" },
  geo: { lat: 54.9707, lng: -2.4597 },
  hours: null, // CHECK: e.g. [{ day: "Tuesday", open: "09:00", close: "17:00" }, ...]
  areas: ["Haltwhistle", "Hexham", "Haydon Bridge", "Bardon Mill", "Greenhead", "Gilsland", "Brampton", "Alston"],
  team: [
    { name: "Nat", role: "Nail technician" },
    { name: "Kerry", role: "Nail technician" },
  ], // CHECK: full team list
  instagramStats: { posts: "7,000+", followers: "2,700+" },
};

export const fullAddress = `${salon.address.street}, ${salon.address.town}, ${salon.address.county} ${salon.address.postcode}`;
export const href = (p = "") => `${salon.base}${p}` || "/";
// Absolute URL, for canonical links and structured data.
export const abs = (p = "") => `${salon.url}${href(p)}`;

export const treatments = [
  {
    slug: "laser-hair-removal",
    title: "Laser Hair Removal",
    short: "Eneka PRO 4000W medical-grade diode laser. Permanent, virtually pain-free.",
    group: "Advanced",
    seo: "Laser Hair Removal in Haltwhistle, Northumberland | Eneka PRO Diode Laser",
    intro:
      "At Secrets Beauty Salon we use the latest medical-grade Eneka PRO diode laser for quick, safe and effective laser hair removal. Results are guaranteed on all skin types and phototypes thanks to its high power, large spot size and multiple wavelengths, while an integrated cooling system keeps the handpiece tip cold to minimise discomfort and protect the skin.",
    points: [
      "4000W power for the best results, even on fine, residual hair",
      "Treats all skin and hair types, whatever the colour or thickness",
      "Quick, safe and virtually painless with integrated skin cooling",
      "FDA approved and medical CE marked",
    ],
    sections: [
      ["Diode laser vs IPL", "IPL (Intense Pulsed Light) usually needs more frequent, longer-term treatments for hair reduction. A diode laser works more effectively, with less discomfort thanks to integrated cooling, and treats more skin and hair types than IPL."],
      ["More than smooth skin", "Laser hair removal reduces ingrown hairs, ends razor burn and bumps, helps eliminate dark patches and follicles showing through the skin after shaving, reduces shaving acne and rashes, and improves overall skin texture and complexion."],
    ],
    faqs: [
      ["How does laser hair removal work?", "The laser emits light energy which is converted into heat. Melanin, the pigment that gives hair its colour, absorbs the light, destroying the hair follicle without damaging the surrounding tissue."],
      ["How many laser hair removal sessions will I need?", "We advise a minimum of 6 treatments for the best results. Some clients need more, depending on the body area, hair colour and thickness, skin type and factors such as hormonal imbalances. After the 6th treatment, additional sessions are offered at a discounted single-session price."],
      ["Is laser hair removal permanent?", "Eneka PRO achieves excellent permanent hair reduction and eliminates the active follicles over a course of sessions. Some clients may need an occasional top-up, as dormant follicles can be stimulated after pregnancy, menopause or certain hormonal medications."],
      ["Is laser hair removal painful?", "The advanced integrated skin cooling system minimises pain and protects the skin, so the treatment is comfortable and easily tolerated."],
      ["Are there any side effects?", "Risks are minimal and short-lived: some skin reddening or perifollicular erythema, which disappears within 24 to 72 hours."],
    ],
    note: "Results may vary from person to person.",
  },
  {
    slug: "nails",
    title: "Nails",
    short: "Gels, BIAB, acrylics, polygel and hand-painted nail art.",
    group: "Beauty",
    seo: "Nails in Haltwhistle | Gel, BIAB, Acrylic & Nail Art | Secrets Beauty Salon",
    intro:
      "Our nail bar is where Secrets began. Our technicians, including Nat and Kerry, create everything from a clean, glossy gel to full sculpted sets and detailed hand-painted art, with a finish that lasts.",
    points: ["Gel polish and Builder Gel / BIAB", "Acrylic extensions", "Polygel extensions", "Nail art: French tips, gold foil, chrome, swirls, florals, mismatched pastel sets"],
    sections: [["Book with your favourite tech", "Appointments with Nat and Kerry are released every week. Message us on Instagram to grab the next slot, or ask about a set you've seen on our feed."]],
    faqs: [["What is BIAB?", "BIAB (Builder In A Bottle) is a strengthening builder gel applied to your natural nails. It adds strength so nails can grow longer without breaking, and is finished in any gel colour."]],
  },
  {
    slug: "lashes-and-brows",
    title: "Lashes & Brows",
    short: "Lash lifts, LVL, Russian volume, brow lamination and HD brows.",
    group: "Beauty",
    seo: "Lash Lift, LVL & Brow Lamination in Haltwhistle | Secrets Beauty Salon",
    intro:
      "Wake up ready. From a natural lash lift to full Russian volume extensions, and from a quick tint to sculpted HD and laminated brows, every treatment is shaped to your features.",
    points: [
      "Lash Lift & Tint with the CeraLash Lift System by Nouveau Lashes, lasting 6 to 8 weeks",
      "LVL Lash Lift",
      "Lash extensions, including Russian Volume",
      "Brow Lamination (ask about the Brow Lamination + Lash Lift combo)",
      "Brow Tinting and HD Brows",
    ],
    sections: [],
    faqs: [["How long does a lash lift last?", "A lash lift and tint lasts around 6 to 8 weeks, with no extensions needed."]],
  },
  {
    slug: "facials-and-skin",
    title: "Facials & Skin",
    short: "NanoSure skin rejuvenation and the Lira Green Power detox facial.",
    group: "Skin",
    seo: "NanoSure & Lira Facials in Haltwhistle, Northumberland | Secrets Beauty Salon",
    intro:
      "Results-led facials for skin that looks rested, bright and even. Every course starts with a consultation so we can match the treatment to your skin.",
    points: [
      "NanoSure Skin Rejuvenation: reduces pigmentation and sun damage, brightens and evens tone, refines pores and softens fine lines",
      "Recommended as a course of 3, spaced 4 weeks apart, with home skincare and daily SPF",
      "Lira Green Power Facial: a detox facial for oily, congested skin, for a clearer, healthier glow",
    ],
    sections: [],
    faqs: [["How many NanoSure facials do I need?", "We recommend a course of 3 NanoSure treatments, spaced 4 weeks apart, supported by home skincare and a daily SPF."]],
  },
  {
    slug: "tattoo-removal",
    title: "Laser Tattoo Removal",
    short: "Gradual, professional fading over a course of sessions.",
    group: "Advanced",
    seo: "Laser Tattoo Removal in Haltwhistle, Northumberland | Secrets Beauty Salon",
    intro:
      "Whether you want a tattoo gone completely or faded for a cover-up, laser tattoo removal breaks the ink down over a course of sessions. We'll talk you through realistic results at your consultation.",
    points: ["Full removal or fading for a cover-up", "Treatment plan agreed at a free consultation", "Sessions spaced to let the skin heal and the body clear the ink"],
    sections: [],
    faqs: [["How many sessions does tattoo removal take?", "Tattoo removal always takes a course of sessions. The number depends on the ink colours, depth, age and size of the tattoo and your skin, and we'll give you an honest estimate at consultation."]],
  },
  {
    slug: "thread-veins-and-skin-tags",
    title: "Thread Veins & Skin Tags",
    short: "Vasculase thread vein removal and CryoPen cryotherapy.",
    group: "Advanced",
    seo: "Thread Vein & Skin Tag Removal in Haltwhistle | Vasculase & CryoPen",
    intro:
      "Quick, precise treatments for the small things that bother you. Vasculase targets facial thread veins, and CryoPen cryotherapy removes skin tags and minor lesions with pinpoint accuracy.",
    points: ["Vasculase thread vein removal", "CryoPen skin tag and lesion removal", "Fast appointments with minimal downtime"],
    sections: [],
    faqs: [["How does CryoPen work?", "CryoPen applies a precise jet of extreme cold to the skin tag or lesion, freezing and destroying the unwanted tissue while leaving the surrounding skin unharmed."]],
  },
  {
    slug: "waxing",
    title: "Waxing",
    short: "Lycon waxing, gentle on skin and kind to sensitive areas.",
    group: "Beauty",
    seo: "Lycon Waxing in Haltwhistle | Secrets Beauty Salon",
    intro: "We use Lycon, the professional's choice of wax, for smooth results with less redness and discomfort, from brows to full legs.",
    points: ["Lycon hot and strip wax", "Face and body waxing", "Gentle on sensitive skin"],
    sections: [],
    faqs: [],
  },
  {
    slug: "makeup",
    title: "Makeup",
    short: "Occasion, wedding guest and soft-glam makeup.",
    group: "Beauty",
    seo: "Occasion & Wedding Guest Makeup in Haltwhistle | Secrets Beauty Salon",
    intro: "Soft, glowing, made to last all night. Occasion makeup for weddings, parties and every moment in between.",
    points: ["Occasion and wedding guest glam", "Soft, glowing, long-wear finish", "Pair with a lash lift or brow lamination the week before"],
    sections: [],
    faqs: [],
  },
];

export const enquiryOptions = [
  "General Enquiry",
  "Nails",
  "Lashes",
  "Brows",
  "Facials",
  "Laser Hair Removal",
  "Tattoo Removal",
  "Thread Veins",
  "Skin Tags",
  "Waxing",
  "Makeup",
];

// General questions shown on the home page (and in the FAQ schema).
export const homeFaqs = [
  ["Where is Secrets Beauty Salon?", `Secrets Beauty Salon is on Main Street, Haltwhistle, Northumberland ${salon.address.postcode}. Clients visit from Hexham, Haydon Bridge, Bardon Mill, Greenhead, Gilsland, Brampton and across the Hadrian's Wall area.`],
  ["What treatments does Secrets Beauty Salon offer?", "Laser hair removal (Eneka PRO diode laser), nails (gel, BIAB, acrylic, polygel and nail art), lash lifts, LVL, lash extensions, brow lamination, HD brows, NanoSure and Lira facials, laser tattoo removal, Vasculase thread vein removal, CryoPen skin tag removal, Lycon waxing and makeup."],
  ["How do I book at Secrets Beauty Salon?", `Call ${salon.phoneDisplay}, send a message on Instagram (${salon.instagramHandle}) or Facebook (Secrets Salon Ltd) or use the enquiry form on our contact page. Laser, skin and tattoo treatments start with a consultation.`],
  ["Does laser hair removal work on all skin types?", "Yes. The Eneka PRO diode laser treats all skin types and phototypes thanks to its 4000W power, large spot size and multiple wavelengths."],
];
