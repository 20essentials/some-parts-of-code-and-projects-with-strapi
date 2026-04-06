// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  build: {
    assets: 'static'
  },
  base: import.meta.env.DEV
    ? undefined
    : '/some-parts-of-code-and-projects-with-strapi/',
  site: import.meta.env.DEV
    ? 'http://localhost:4321/'
    : 'https://20essentials.github.io/some-parts-of-code-and-projects-with-strapi/'
});
