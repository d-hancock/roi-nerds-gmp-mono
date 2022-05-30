const path = require("path")

module.exports = {
  siteMetadata: {
    title: `roi-nerds-website`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    // Roi core theme
    "@roi/gatsby-theme-roi-core",
    // "gatsby-plugin-mui-emotion",
    // {
    //   resolve: "gatsby-plugin-resolve-src",
    //   options: {
    //     srcPath: path.resolve(""),
    //   },
    // },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
}
