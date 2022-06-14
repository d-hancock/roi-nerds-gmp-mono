import React from "react"
import { GlobalStyles, theme } from "twin.macro"
import {
  ThemeProvider,
  responsiveFontSizes,
  createTheme,
  StyledEngineProvider,
  CssBaseline,
} from "@mui/material"
import { roiTheme } from "../src/theme/roiTheme"

const defaultTheme = responsiveFontSizes(createTheme())

export const themeDecorator = (story, context) => {
  const themeMode = context.globals.themeMode
  const theme = roiTheme(themeMode)
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {story()}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export const withMargin = (Story, context) => (
  <div style={{ margin: "3em" }}>
    <Story {...context} />
  </div>
)

export const withRelativeContainer = (Story, context) => (
  <div
    style={{
      position: "relative",
      width: "100vw",
      height: "100vh",
      margin: "auto",
    }}
  >
    <Story {...context} />
  </div>
)

export const withCentered = (Story, context) => (
  <div
    style={{
      height: "100vh",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Story {...context} />
  </div>
)
