---
name: react-best-practices
description: >-
  Use this skill when developing, refactoring, or optimizing React components (.tsx)
  and Astro interactive islands. Provides strict clean-code rules, zero-any policy,
  proper hook usage, state management, and performance guidelines.
---

# ReactJS Best Practices & Production Guidelines

This skill enforces high-quality, production-ready ReactJS & TypeScript standards for components used as Astro Interactive Islands or standalone widgets.

## Core Rules

1. **Strictly Forbidden:**
   - ❌ NEVER use `any` — use `unknown`, generics, or define explicit types/interfaces.
   - ❌ NEVER use `@ts-ignore` or `@ts-expect-error` — resolve TypeScript types cleanly.
   - ❌ NEVER use `var` or `==` — use `const`/`let` and `===`.
   - ❌ NEVER mutate state directly — use immutable state updates.
   - ❌ NEVER leave components larger than 200 lines — decompose into reusable sub-components.
   - ❌ NEVER use array index as render key — always use stable unique IDs.

2. **Component Architecture (Function Component Standard):**
   ```tsx
   import React, { useState, useCallback, useMemo } from 'react';
   import type { ServiceItem } from '@/types/service.types';

   interface ServiceCardProps {
     service: ServiceItem;
     onSelect?: (id: string) => void;
     isFeatured?: boolean;
   }

   export const ServiceCard: React.FC<ServiceCardProps> = ({
     service,
     onSelect,
     isFeatured = false,
   }) => {
     // 1. Hooks
     const [isHovered, setIsHovered] = useState<boolean>(false);

     // 2. Handlers
     const handleClick = useCallback(() => {
       if (onSelect) onSelect(service.id);
     }, [service.id, onSelect]);

     // 3. Render
     return (
       <div 
         onClick={handleClick}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
         className={`p-6 rounded-2xl transition-all duration-300 ${
           isFeatured ? 'border border-[#C5A880] shadow-md' : 'border border-[#8A9A86]/20'
         }`}
       >
         <h3 className="font-serif text-xl text-[#2D3748]">{service.title}</h3>
         <p className="text-sm text-[#7C6E65] mt-2">{service.duration} • {service.price}</p>
       </div>
     );
   };
   ```

3. **Astro Islands Integration:**
   - Keep React component usage minimal.
   - Load with `client:visible` when the component scrolls into view.
   - Use `client:idle` for background widgets.
   - Pass serializable props (primitive data, plain JSON arrays/objects) from `.astro` files to React components.

## Detailed Reference
For full component patterns, custom hook structures, error handling, and commit checklist, refer to:
[conventions.md](./references/conventions.md)
