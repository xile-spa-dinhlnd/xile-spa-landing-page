---
name: astro-seo-schema
description: >-
  Use this skill when implementing SEO meta tags, Open Graph cards, sitemaps,
  or JSON-LD Schema (BeautySalon / LocalBusiness) for the Xile Spa landing page in Astro.
---

# Astro SEO & Local Business Schema

This skill provides step-by-step procedures to inject Google-compliant structured data (JSON-LD) and social meta tags into the Astro landing page layout.

## Steps to Implement SEO & Schema

1. **Meta Tags in `BaseLayout.astro` `<head>`:**
   - Canonical URL tag `<link rel="canonical" href={canonicalURL} />`.
   - Primary tags: `<title>`, `<meta name="description">`, `<meta name="robots">`.
   - Open Graph tags (`og:title`, `og:description`, `og:image`, `og:type="website"`).

2. **BeautySalon Schema JSON-LD:**
   - Embed script `<script type="application/ld+json">` in layout.
   - Bind dynamic fields to `CONTACT_CONFIG`.

## Detailed Reference
For full JSON-LD templates and OpenGraph snippets, refer to:
[schema-templates.md](./references/schema-templates.md)
