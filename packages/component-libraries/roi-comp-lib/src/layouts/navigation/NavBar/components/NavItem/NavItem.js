import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import { alpha, useTheme } from "@mui/material/styles"
import Popover from "@mui/material/Popover"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

export const NavItem = ({ id, name, link, icon }) => {
  const theme = useTheme()

  const [activeLink, setActiveLink] = useState("")
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : "")
  }, [])

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      aria-describedby={id}
      sx={{ cursor: "pointer" }}
    >
      <Button
        component={"a"}
        href={link}
        fullWidth
        sx={{
          justifyContent: "flex-start",
          color:
            activeLink === link
              ? theme.palette.primary.main
              : theme.palette.text.primary,
          backgroundColor:
            activeLink === link
              ? alpha(theme.palette.primary.main, 0.1)
              : "transparent",
          fontWeight: activeLink === link ? 700 : 400,
        }}
      >
        {name}
      </Button>
    </Box>
  )
}

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.bool,
}

export default NavItem
