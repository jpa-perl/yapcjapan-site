// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  base: "/2025fukuoka/",
  outDir: "dist/2025fukuoka",
  /* 公開時には↓のパスを設定してGitHub Pagesに公開する 
  outDir: "../docs/2025fukuoka",
  */

  vite: {
    plugins: [tailwindcss()],
  },
});
