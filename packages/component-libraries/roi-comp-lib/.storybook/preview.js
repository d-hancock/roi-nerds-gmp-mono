import React from "react"
import { createTheme, ThemeProvider } from "@mui/material"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // statusesParams,
}

// const statusesParams = {
//   status: {
//     statuses: {
//       placeholder: {
//         background: "#de1db1",
//         color: "#ffffff",
//         description: "This component is currently a placeholder.",
//       },
//     },
//     statuses: {
//       mvp: {
//         background: "#de1db1",
//         color: "#ffffff",
//         description: "This component is currently an MVP.",
//       },
//     },
//     statuses: {
//       needsStatus: {
//         background: "#de1d37",
//         color: "#ffffff",
//         description: "This component needs statuses assigned.",
//       },
//     },
//   },
// }

const defaultTheme = createTheme()

export const decorators = [
  (story) => (
    <ThemeProvider theme={defaultTheme}>
      {story()}
    </ThemeProvider>
  ),
]

// Mui theme provider as a decorator so that each story is wrapped
// by an Mui theme.

// const MuiThemeDecorator = (Story) => {
//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Story />
//     </ThemeProvider>
//   )
// }
