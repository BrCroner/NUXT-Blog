export default {
  mode: "universal",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "first-nuxt-app",
    htmlAttrs: {
      lang: "pt-br",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "my first nuxt project" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Teko:wght@300&display=swap",
        rel: "stylesheet",
      },
    ],
  },

  loading: { color: "#744cfb" },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/styles/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/core-components.js", "~/plugins/date-filter.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],
  axios: {
    baseURL:
      process.env.BASE_URL ||
      "https://my-first-nuxt-app-f3b81-default-rtdb.firebaseio.com",
    fireBaseAPIKey: "AIzaSyBZxllPVP_q3MwpjqQcpnV2sz2mUIOhyrM",
    credentials: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Invariant Variables! If you use NODE you can inject process.env.BASE_URL
  env: {
    baseUrl:
      process.env.BASE_URL ||
      "https://my-first-nuxt-app-f3b81-default-rtdb.firebaseio.com",
    fireBaseAPIKey: "AIzaSyBZxllPVP_q3MwpjqQcpnV2sz2mUIOhyrM",
  },

  // Add transition between pages
  transition: {
    name: "fade",
    mode: "out-in",
  },
};
