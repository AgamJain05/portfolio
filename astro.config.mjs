// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://agamjain.live',
  integrations: [react(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});