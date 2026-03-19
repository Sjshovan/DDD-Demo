import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import compressor from "astro-compressor";

const site = process.env.SITE_URL ?? "https://your-username.github.io";
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  site,
  base,
  image: {
    domains: ["images.unsplash.com"],
  },
  integrations: [
    sitemap(),
    mdx(),
    compressor({
      gzip: false,
      brotli: true,
    }),
  ],
  experimental: {
    clientPrerender: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
