import React from "react"
import { Button, Box, alpha, useTheme } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { hidFlex } from "../../../../styles"

export const HamburgerMenu = ({ onSidebarOpen }) => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        ...hidFlex.mdUp,
      }}
      alignItems={"center"}
    >
      <Button
        onClick={() => onSidebarOpen()}
        aria-label="Menu"
        variant={"outlined"}
        sx={{
          borderRadius: 2,
          minWidth: "auto",
          padding: 1,
          borderColor: alpha(theme.palette.divider, 0.2),
        }}
      >
        <MenuIcon />
      </Button>
    </Box>
  )
}

export default HamburgerMenu
