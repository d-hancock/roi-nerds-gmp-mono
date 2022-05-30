const path = require("path")

module.exports = {
  siteMetadata: {
    title: `roi-nerds-website`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-top-layout",
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    // "gatsby-plugin-mui-emotion",
    "gatsby-plugin-mui-emotion",
    {
      resolve: "gatsby-plugin-resolve-src",
      options: {
        srcPath: path.resolve(),
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
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
