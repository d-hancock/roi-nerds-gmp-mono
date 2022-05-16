import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import { alpha, useTheme } from "@mui/material/styles"
import Popover from "@mui/material/Popover"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

export const NavMenuItem = ({
  id,
  layout,
  menuType,
  name,
  defaultLink,
  navItems,
  cta,
  colorInvert = false,
}) => {
  const theme = useTheme()

  const [anchorEl, setAnchorEl] = useState(null)
  const [openedPopoverId, setOpenedPopoverId] = useState(null)

  const handleClick = (event, popoverId) => {
    setAnchorEl(event.currentTarget)
    setOpenedPopoverId(popoverId)
  }

  const handleClose = () => {
    setAnchorEl(null)
    setOpenedPopoverId(null)
  }

  const [activeLink, setActiveLink] = useState("")
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : "")
  }, [])

  const hasActiveLink = () => navItems.find((i) => i.link === activeLink)

  const activeStyling = openedPopoverId === id || hasActiveLink()

  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        aria-describedby={id}
        sx={{ cursor: "pointer" }}
        onClick={(e) => handleClick(e, id)}
      >
        <Button
          variant="text"
          fullWidth
          sx={{
            justifyContent: "flex-start",
            color: "text.primary",
            fontWeight: activeStyling ? 700 : 400,
          }}
        >
          {name}
          <ExpandMoreIcon
            sx={{
              marginLeft: theme.spacing(1 / 4),
              width: 16,
              height: 16,
              transform: openedPopoverId === id ? "rotate(180deg)" : "none",
              color: "text.primary",
            }}
          />
        </Button>
      </Box>
      <Popover
        elevation={3}
        id={id}
        open={openedPopoverId === id}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{
          ".MuiPaper-root": {
            maxWidth: navItems.length > 12 ? 350 : 250,
            padding: 2,
            marginTop: 2,
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0,
            borderBottomRightRadius: 8,
            borderBottomLeftRadius: 8,
            borderTop: `3px solid ${theme.palette.primary.main}`,
          },
        }}
      >
        <Grid
          container
          spacing={0.5}
        >
          {navItems.map((p, i) => (
            <Grid
              item
              key={i}
              xs={navItems.length > 12 ? 6 : 12}
            >
              <Button
                component={"a"}
                href={p.link}
                fullWidth
                sx={{
                  justifyContent: "flex-start",
                  color:
                    activeLink === p.link
                      ? theme.palette.primary.main
                      : theme.palette.text.primary,
                  backgroundColor:
                    activeLink === p.link
                      ? alpha(theme.palette.primary.main, 0.1)
                      : "transparent",
                  fontWeight: activeLink === p.link ? 600 : 400,
                }}
              >
                {p.name}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Popover>
    </>
  )
}

NavMenuItem.propTypes = {
  id: PropTypes.string.isRequired,
  navItems: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
}

export default NavMenuItem
