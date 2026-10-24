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
