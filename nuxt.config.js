module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "nuxt-auth",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css"
      }
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Modules
   */
  modules: ["@nuxtjs/axios", "@nuxtjs/auth"],
  /*
   ** Axios
   */
  axios: {
    baseURL: "http://locahost:1337"
  },
  /*
   ** Auth
   */
  // auth: {
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: {
  //           url: "auth/local",
  //           method: "post",
  //           propertyName: "data.jwt"
  //         },
  //         user: {
  //           url: "auth/local",
  //           method: "post",
  //           propertyName: "data.user"
  //         },
  //         logout: false
  //       }
  //     }
  //   }
  // },
  auth: {
    redirect: {
      login: "/login2",
      logout: "/",
      callback: false,
      home: "/"
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: "/auth/local", method: "post", propertyName: "jwt" },
          logout: { url: "/auth/logout", method: "post" },
          user: false
        },
        tokenRequired: true,
        tokenType: "Bearer",
        globalToken: true,
        autoFetchUser: false
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
