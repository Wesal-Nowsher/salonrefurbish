# Secrets Beauty Salon website

Next.js (App Router) site for Secrets Beauty Salon, Main Street, Haltwhistle.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

- All business details and copy: `components/secrets/site.js` (items marked CHECK need confirming).
- Images: `public/images/secrets-salon/`; what each should show: `image-prompts/secrets-salon.md`.
- SEO / AI: JSON-LD on every page, `/sitemap.xml`, `/robots.txt`, `/llms.txt`.
- Enquiry form posts to `/api/secrets-enquiry` (hook it up to email or a booking system).

Deploy on Vercel with default settings.

## Designs

- `/` - v1: porcelain and gold, badge-shaped frames (files in `app/(v1)/`).
- `/v2` - v2: pink-led, rounded bento grid, "book in three taps" chooser (files in `app/(v2)/`).
- `/v3` - v3: gold and pink Art Deco, fixed side menu, arches, sideways treatment cards, tabbed treatment explorer, booking form on the home page (files in `app/(v3)/`).

Both share the same content (`components/secrets/site.js`) and images. v2 pages point their canonical URL at the matching v1 page so search engines don't see duplicate content.
