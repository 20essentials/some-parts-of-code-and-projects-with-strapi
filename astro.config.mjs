// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  build: {
    assets: 'static'
  },

  //Localhost
  // site: 'http://localhost:4321/'

  //Deploy normal project
  base: '/some-parts-of-code-and-projects-with-strapi/',
  site: 'https://20essentials.github.io/some-parts-of-code-and-projects-with-strapi/',
});
