module.exports = {
  siteMetadata: {
    title: `gatsby-theme-roi-blocks`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-top-layout",
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    'gatsby-plugin-mui-emotion',
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-resolve-src",
  ],
}
