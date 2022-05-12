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
}

const defaultTheme = createTheme()

export const decorators = [
  (Story) => (
    <ThemeProvider theme={defaultTheme}>
      <Story />
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
