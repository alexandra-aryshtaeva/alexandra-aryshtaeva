// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Lato: true,
    },
    preload: true,
  },
});
