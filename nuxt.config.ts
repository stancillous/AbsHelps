// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  modules: [
    "@bootstrap-vue-next/nuxt",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
  ],
  css: ["bootstrap/dist/css/bootstrap.min.css", "~/assets/styles/main.css"],
  // css: ["~/assets/styles/main.css", "bootstrap/dist/css/bootstrap.min.css"],
});
