// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/2026tokyo/',
  outDir: 'dist/2026tokyo',
  vite: {
    plugins: [tailwindcss()],
  },
});
