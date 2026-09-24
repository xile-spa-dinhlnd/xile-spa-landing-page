---
name: lighthouse-optimizer
description: >-
  Use this skill when auditing, diagnosing, or resolving Google Lighthouse performance,
  accessibility, and Core Web Vitals issues (LCP, CLS, INP) for the Xile Spa landing page.
---

# Lighthouse & Core Web Vitals Optimization Runbook

This skill provides a diagnostic checklist to guarantee a 95–100 score on Google PageSpeed Insights (Mobile).

## Audit & Verification Checklist

1. **Largest Contentful Paint (LCP < 1.2s):**
   - Ensure the Hero image uses `loading="eager"` and `fetchpriority="high"`.
   - Never lazy-load images in the initial viewport.
   - Serve WebP/AVIF format with quality around 80–85.

2. **Cumulative Layout Shift (CLS = 0.00):**
   - Verify every `<img>` or `<Image />` has explicit `width` and `height`.
   - Reserve space for dynamic elements or font rendering with `font-display: swap`.

3. **Total Blocking Time (TBT = 0ms) / Interaction to Next Paint (INP < 50ms):**
   - Zero-JS by default: Keep static Astro components purely in `.astro`.
   - Avoid loading third-party scripts (Google Tag Manager, Meta Pixel) synchronously; use `async` or `defer`.

4. **Accessibility (Score 100):**
   - All interactive elements must have `aria-label` or visible text.
   - Text contrast ratio must meet WCAG AA standards (minimum 4.5:1 for body text).
   - Form inputs and links must have recognizable focus outlines.
