// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://xile-spa-dinhlnd.github.io',
  base: '/xile-spa-landing-page',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
