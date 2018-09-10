module.exports = {
  head: {
    title: "Awesome Cheatsheets",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Awesome cheatsheets for popular programming languages, frameworks and development tools. They include everything you should know in one single file."
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  env: {
    baseUrl:
      process.env.NODE_ENV === "production"
        ? "https://lecoupa.github.io/awesome-cheatsheets/"
        : "http://localhost:3000"
  },
  css: ["normalize.css/normalize.css"],
  plugins: [{ src: "@/plugins/global.js" }],
  modules: [
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-125493236-1",
        debug: { sendHitTask: process.env.NODE_ENV === "production" }
      }
    ],
    [
      "nuxt-sass-resources-loader",
      [
        // Global variables, site-wide settings, config switches, etc
        "@/assets/settings/_colors.scss",

        // Site-wide mixins and functions
        "@/assets/tools/_mq.scss"
      ]
    ]
  ],
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    },
    postcss: [require("autoprefixer")()]
  }
};
