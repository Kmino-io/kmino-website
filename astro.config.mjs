// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import icon from "astro-icon";
import partytown from "@astrojs/partytown";
import vercel from "@astrojs/vercel";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://kmino.io",
  output: "server",
  integrations: [sitemap(), react(), icon(), partytown()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
  },
  adapter: vercel(),
});