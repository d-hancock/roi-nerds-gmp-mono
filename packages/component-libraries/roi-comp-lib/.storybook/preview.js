import { action } from "@storybook/addon-actions"
import { MINIMAL_VIEWPORTS, INITIAL_VIEWPORTS } from "@storybook/addon-viewport"
import { themeDecorator } from "./sbDecorators"
import "@fontsource/inter/variable-full.css"

// --- Parameters ---
// Parameters for Backgrounds
const backgrounds = {
  default: "Transparent",
  values: [
    { name: "White", value: "#ffffff" },
    { name: "Black", value: "#000000" },
    { name: "Light Grey", value: "#D3D3D3" },
    { name: "Dark Grey", value: "#A9A9A9" },
    { name: "Transparent", value: "#00FFFF00" },
  ],
}

// Parameters for Paddings
const paddings = {
  values: [
    { name: "Small", value: "16px" },
    { name: "Medium", value: "32px" },
    { name: "Large", value: "64px" },
  ],
  default: "Medium",
}

// Parameter for Viewports
const viewport = {
  viewports: {
    ...MINIMAL_VIEWPORTS,
    ...INITIAL_VIEWPORTS,
  },
}

export const globalTypes = {
  themeMode: {
    name: "Theme Mode",
    description: "Global Theme Mode Selection",
    defualtValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: ["light", "dark"],
      showName: true,
      dynamicTitle: true,
    },
  },
  // themeConfig: {
  //   name: "Theme Config",
  //   description: "Global Theme Config"
  //   defualtValue: 
  // }
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // docs: { page: DocsPage },
  // dependencies: { withStoriesOnly: true, hideEmpty: true },
  backgrounds,
  viewport,
  paddings,
  controls: { expanded: true },
}

export const decorators = [
  // My theme provider toolbar
  // withThemeProvider,
  // ---------------------
  themeDecorator,
]

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context. We override it to empty functions (no-op),
// so gatsby link doesn't throw any errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}

// __PATH_PREFIX__ is used inside gatsby-link an other various places. For storybook not to crash we need to set it as well.
global.__PATH_PREFIX__ = ""

// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In storybook it doesn't make sense to do an actual navigate, instead we want to log an action. Checkout the actions addon docs https://github.com/storybookjs/storybook/tree/master/addons/actions.

window.___navigate = (pathname) => {
  action("NavigateTo:")(pathname)
}
