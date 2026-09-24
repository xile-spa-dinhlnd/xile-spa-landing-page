---
name: tailwind-best-practices
description: >-
  Use this skill when styling components, configuring Tailwind CSS, defining design tokens,
  or crafting responsive layouts and micro-interactions for the Xile Spa landing page.
  Ensures mobile-first design, semantic token usage, and luxury aesthetics.
---

# Tailwind CSS Best Practices (Luxury Spa Edition)

This skill guides the styling system, Tailwind configuration, responsive mobile-first rules, and subtle micro-interactions to create a sleek, quiet-luxury wellness experience.

## Key Principles

1. **Token Over Arbitrary Values:**
   - Always prefer semantic theme classes over arbitrary classes like `w-[315px]` or `bg-[#fdfbf7]`.
   - Use configured color variables: `bg-spa-cream`, `text-spa-charcoal`, `border-spa-sage/20`, `bg-spa-bronze`.

2. **Mobile-First Responsive Design:**
   - Write base styles for mobile (< 640px) first.
   - Use `md:` (tablets/laptops) and `lg:` (desktop) to enhance layouts.
   ```html
   <!-- Mobile-first: 1 cột trên mobile, 2 cột trên tablet, 3 cột trên desktop -->
   <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
   ```

3. **Subtle Transitions & Micro-Animations:**
   - Transitions should feel calm and smooth: `transition-all duration-300 ease-out`.
   - Gentle lift on card hover: `hover:-translate-y-1 hover:shadow-lg`.
   - Atmospheric pulse for CTA buttons:
   ```html
   <span class="relative flex h-3 w-3">
     <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-spa-bronze opacity-75"></span>
     <span class="relative inline-flex rounded-full h-3 w-3 bg-spa-bronze"></span>
   </span>
   ```

## Detailed Reference
For full `tailwind.config.mjs` setup, color palette values, and custom utility classes, refer to:
[tailwind-tokens.md](./references/tailwind-tokens.md)
