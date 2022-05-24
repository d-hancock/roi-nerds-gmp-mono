// This is the gatsby-node file which is handled with typescript.
import { GatsbyNode } from "gatsby"

import { schema as configSchema } from "../src/config"

// Customize Gatsby schema
export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions }) => {
    actions.createTypes(`#graphql
     ${configSchema}
   `)
  }

// export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({actions, loaders, getConfig}) => {
//   const config = getConfig()

//   config.modules.rules = [
//     ...config.modules.rules,
//     {
//       ...loaders.js(),
      
//     }
//   ]
// }
