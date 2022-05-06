/* eslint-disable @typescript-eslint/no-var-requires */
require("source-map-support").install()
require("ts-node").register({
  transpileOnly: true,
  files: true,
  ignore: [
    "(?:^|/)node_modules/(?!@roi/gatsby-theme-roi-core)",
    "(?:^|/).cache/",
    "(?:^|/)public/",
  ],
})
// module.exports = {
//   siteMetadata: {
//     siteUrl: `https://www.yourdomain.tld`,
//   },
//   plugins: [
//     // "gatsby-plugin-top-layout",
//     // "gatsby-plugin-mui-emotion",
//     "gatsby-plugin-emotion",
//     "gatsby-plugin-image",
//     // "gatsby-plugin-manifest",
//     "gatsby-plugin-mdx",
//     "gatsby-plugin-react-helmet",
//     "gatsby-plugin-sharp",
//     "gatsby-plugin-sitemap",
//   ],
// }
module.exports = require("./gatsby/gatsby-config.ts")
