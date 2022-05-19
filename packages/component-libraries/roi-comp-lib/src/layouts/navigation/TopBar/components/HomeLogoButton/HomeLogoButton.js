import React from "react"
import { IconButton } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"

// TODO: add navigation functionality
export function HomeLogoButton() {
  return (
    <IconButton aria-label="logo">
      <HomeIcon />
    </IconButton>
  )
}

export default HomeLogoButton
