const path = require("path")
const fs = require("fs")

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // "@storybook/addon-interactions",
    {
      name: "@storybook/addon-storysource",
      options: {
        loaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
    "@storybook/addon-viewport",
    "storybook-addon-paddings",
    "storybook-mobile",
    // "storybook-addon-pseudo-states",
    "storybook-addon-breakpoints",
    "@etchteam/storybook-addon-status",
    "storybook-fixtures",
    "storybook-dark-mode",
  ],
  framework: "@storybook/react",
  features: {
    emotionAlias: false,
  },
  babel: async (options) => {
    options.plugins.unshift("babel-plugin-twin")
    options.presets.push("@emotion/babel-preset-css-prop")
    return options
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      "@emotion/core": getPackageDir("@emotion/react"),
      "@emotion/styled": getPackageDir("@emotion/styled"),
    }
    return config
  },
}
// Fix for package resolution
function getPackageDir(filepath) {
  let currDir = path.dirname(require.resolve(filepath))
  while (true) {
    if (fs.existsSync(path.join(currDir, "package.json"))) {
      return currDir
    }
    const { dir, root } = path.parse(currDir)
    if (dir === root) {
      throw new Error(
        `Could not find package.json in the parent directories starting from ${filepath}.`
      )
    }
    currDir = dir
  }
}
