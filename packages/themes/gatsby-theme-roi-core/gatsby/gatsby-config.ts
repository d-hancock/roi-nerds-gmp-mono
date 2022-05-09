// This is the gatsby-config file which is handled with typescript. It is in a seperate dir
// because gatsby still doesn't behave consistently enough using ts files for the gatsby bits
// in the standard config.
// import path from "path"
import urljoin from "url-join"
import { GatsbyConfig } from "gatsby"

// Config
import { SiteConfig, withDefaults } from "../src/config"

const gatsbyConfig = (userConfig: SiteConfig): GatsbyConfig => {
  // Merge user and default configurations
  const config = withDefaults(userConfig)

  const validatedPathPrefix = config.pathPrefix === "" ? "/" : config.pathPrefix

  return {
    pathPrefix: validatedPathPrefix,
    siteMetadata: {
      config, // Make the merged configuration available via GraphQL
      siteUrl: urljoin(config.website.url, config.pathPrefix),
    },
    plugins: [
      "gatsby-plugin-emotion",
      {
        resolve: "gatsby-plugin-compile-es6-packages",
        options: {
          modules: ["gatsby-plugin-image"],
        },
      },
      "gatsby-plugin-react-helmet",
      "gatsby-plugin-lodash",
      // {
      //   resolve: "gatsby-source-filesystem",
      //   options: {
      //     name: "offerings",
      //     path: path.join(__dirname, "../content-data/offerings"),
      //   },
      // },
      // {
      //   resolve: "gatsby-source-filesystem",
      //   options: {
      //     name: "case-studies",
      //     path: path.join(__dirname, "../content-data/case-studies"),
      //   },
      // },
      // {
      //   resolve: "gatsby-source-filesystem",
      //   options: {
      //     name: "testamonials",
      //     path: path.join(__dirname, "../content-data/testamonials"),
      //   },
      // },
      // {
      //   resolve: "gatsby-source-filesystem",
      //   options: {
      //     name: "portfolio",
      //     path: path.join(__dirname, "../content-data/portfolio"),
      //   },
      // },
      //
      // {
      //   resolve: "gatsby-source-filesystem",
      //   options: {
      //     name: "assets",
      //     path: config.assetDir || path.join(__dirname, "../static"),
      //   },
      // },
      // {
      //   resolve: "gatsby-source-filesystem",
      //   options: {
      //     name: "posts",
      //     path: config.contentDir || path.join(__dirname, "../content"),
      //   },
      // },
      {
        resolve: "gatsby-plugin-sharp",
        options: {
          defaults: {
            formats: ["auto", "webp", "avif"],
            placeholder: "blurred",
            backgroundColor: "transparent",
          },
          failOnError: true,
        },
      },
      "gatsby-transformer-sharp",
      "gatsby-plugin-image",
      "gatsby-plugin-mdx",
      "gatsby-plugin-sitemap",
      {
        resolve: "gatsby-plugin-manifest",
        options: {
          name: config.website.name,
          short_name: config.website.titleShort,
          description: config.website.description,
          start_url: validatedPathPrefix,
          background_color: config.website.backgroundColor,
          theme_color: config.website.themeColor,
          display: "minimal-ui",
          cache_busting_mode: "none",
          icon: config.iconPath,
          icons: config.iconList,
        },
      },
      {
        resolve: "gatsby-plugin-offline",
        options: {
          workboxConfig: {
            globPatterns: config.iconCachePaths,
          },
        },
      },
    ],
  }
}

export default gatsbyConfig
