import checker from "vite-plugin-checker";
// https://nuxt.com/docs/api/configuration/nuxt-config
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
  },
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
  },
  plugins: ["~/plugins/draggable.js"],
  modules: ["@pinia/nuxt", "@element-plus/nuxt"],
  pinia: {
    storesDirs: ["./stores/**"],
  },
  nitro: {
    compressPublicAssets: true,
  },
});
