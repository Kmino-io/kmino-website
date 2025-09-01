// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import icon from "astro-icon";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://kmino.io",
  integrations: [sitemap(), react(), icon(), partytown()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
  },
});
