import React from "react"
import { GlobalStyles } from "twin.macro"
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
  CssBaseline,
} from "@mui/material"

const defaultTheme = createTheme()

export const themeDecorator = (story) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <GlobalStyles />
      {story()}
    </ThemeProvider>
  </StyledEngineProvider>
)

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
