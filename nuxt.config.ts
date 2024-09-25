// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ["legacy-js-api"],
        },
      },
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "WRDU"
    }
  },
  modules: ["nuxt-build-cache"],
});
