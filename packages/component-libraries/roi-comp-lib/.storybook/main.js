module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-storysource",
      options: {
        loaderOptions: {
          injectStoryParameters: false,
        },
      },
    },

    "storybook-mobile",
    "storybook-addon-pseudo-states",
    "storybook-addon-breakpoints",
    "@etchteam/storybook-addon-status",
    "storybook-fixtures",
    "storybook-dark-mode",
  ],
  framework: "@storybook/react",
}
