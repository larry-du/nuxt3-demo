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
  modules: ["@pinia/nuxt"],
  pinia: {
    storesDirs: ["./stores/**"],
  },
});
