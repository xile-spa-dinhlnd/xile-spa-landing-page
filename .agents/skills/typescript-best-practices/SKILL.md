---
name: typescript-best-practices
description: >-
  Use this skill when defining data models, interface props, Astro component props,
  or writing TypeScript code for the Xile Spa landing page.
  Enforces strict type safety, zero-any rule, and clean discriminated unions.
---

# TypeScript Best Practices (Astro & React)

This skill provides guidelines for strict TypeScript usage, typing static data for landing pages, and component prop definitions.

## Core Rules

1. **Strict Type Safety:**
   - ❌ Never use `any`. Use `unknown`, generics, or define explicit types.
   - Use explicit interfaces for all component props (both `.astro` and `.tsx`).
   - Enable `strict: true` in `tsconfig.json`.

2. **Astro Component Props:**
   Always declare props at the top of `.astro` files:
   ```astro
   ---
   export interface Props {
     title: string;
     subtitle?: string;
     badgeText?: string;
     centered?: boolean;
   }

   const { 
     title, 
     subtitle, 
     badgeText, 
     centered = true 
   } = Astro.props;
   ---
   ```

3. **Data Model Centralization:**
   - Store all data types in `src/types/`.
   - Never define duplicate types across files.

## Detailed Reference
For data models (`ServiceItem`, `Testimonial`, `SpaUSP`, `ContactConfig`), discriminated unions, and utility types, refer to:
[type-system.md](./references/type-system.md)
