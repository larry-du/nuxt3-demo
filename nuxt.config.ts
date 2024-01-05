import checker from "vite-plugin-checker";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
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
});
