// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://deskcore.it',
  integrations: [mdx(), sitemap()],

  prefetch: {
    defaultStrategy: 'hover',
    prefetchAll: false,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});