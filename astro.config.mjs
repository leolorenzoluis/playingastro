import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';
import mdx from '@astrojs/mdx';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
// https://astro.build/config
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), tailwind(), mdx()],
  output: 'server',
  adapter: cloudflare(),

  vite: {
    plugins: [vanillaExtractPlugin()],
    define: {
      'process.env.AIRTABLE_API_KEY': JSON.stringify(
        process.env.AIRTABLE_API_KEY
      ),
      'process.env.AIRTABLE_BASE_ID': JSON.stringify(
        process.env.AIRTABLE_BASE_ID
      ),
    },
  },
});
