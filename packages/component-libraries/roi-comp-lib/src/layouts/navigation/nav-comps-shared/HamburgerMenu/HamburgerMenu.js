import React from "react"
import PropTypes from "prop-types"
import { IconButton, Box, alpha, useTheme } from "@mui/material"
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
      <IconButton
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
      </IconButton>
    </Box>
  )
}

HamburgerMenu.propTypes = {
  onSidebarOpen: PropTypes.func.isRequired,
}

export default HamburgerMenu
