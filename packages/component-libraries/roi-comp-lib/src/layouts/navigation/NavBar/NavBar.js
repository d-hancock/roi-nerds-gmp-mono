import React from "react"
import PropTypes from "prop-types"
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Slide,
  IconButton,
  Box,
  Stack,
} from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import { ScrollBehavior, LinksGroup } from "./components"
import {
  NavItem,
  NavMenuItem,
  NavCta,
  HamburgerMenu,
} from "../nav-comps-shared"

export function NavBar({ scrollBehavior, navLinks, ...props }) {
  return (
    <>
      <ScrollBehavior
        scrollBehavior={scrollBehavior}
        {...props}
      >
        <AppBar>
          <Toolbar
            sx={{
              justifyContent: "space-between",
            }}
          >
            <HamburgerMenu />
            <IconButton aria-label="logo">
              <HomeIcon />
            </IconButton>
            <LinksGroup links={navLinks} />
            <NavCta text={"Contact Us"} />
          </Toolbar>
        </AppBar>
      </ScrollBehavior>
    </>
  )
}

NavBar.propTypes = {
  scrollBehavior: PropTypes.string.isRequired,
  navLinks: PropTypes.array.isRequired,
}

export default NavBar
