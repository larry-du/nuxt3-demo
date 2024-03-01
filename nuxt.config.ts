import checker from "vite-plugin-checker";
import { webSiteFont } from "./utils";

export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in", // default
    },
    layoutTransition: {
      name: "rotate",
      mode: "out-in", // default
    },
    rootId: "abccccc",
  },
  css: ["@/assets/sass/_cssReset.sass", webSiteFont(process.env.WEBSITE_ID)],
  vite: {
    plugins: [
      checker({
        eslint: {
          lintCommand: 'eslint "./*.{vue,js,mjs,ts}"',
        },
      }),
    ],
  },
  dir: {
    pages: `pages/${process.env.WEBSITE_ID}`,
    middleware: `middleware/${process.env.WEBSITE_ID}`,
  },
  modules: ["@pinia/nuxt", "@element-plus/nuxt"],
  pinia: {
    storesDirs: ["./stores/**"],
  },
  nitro: {
    compressPublicAssets: true,
  },
});
