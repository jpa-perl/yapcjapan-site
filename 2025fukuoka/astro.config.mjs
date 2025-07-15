// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  //outDir: "../docs/2025fukuoka",
  base: "/2025fukuoka/"
  /* 公開時には↓のパスを設定してGitHub Pagesに公開する */,

  vite: {
    plugins: [tailwindcss()],
  },
});