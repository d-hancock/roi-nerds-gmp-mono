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
import { ScrollBehavior, TopBarNavGroup } from "./components"
import {
  NavItem,
  NavMenuItem,
  NavCta,
  HamburgerMenu,
} from "../nav-comps-shared"

export function TopBar({ scrollBehavior, navLinks, onSidebarOpen, ...props }) {
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
            <HamburgerMenu onSidebarOpen={onSidebarOpen} />
            <IconButton aria-label="logo">
              <HomeIcon />
            </IconButton>
            <TopBarNavGroup links={navLinks} />
            <NavCta text={"Contact Us"} />
          </Toolbar>
        </AppBar>
      </ScrollBehavior>
    </>
  )
}

TopBar.propTypes = {
  scrollBehavior: PropTypes.string.isRequired,
  navLinks: PropTypes.array.isRequired,
  onSidebarOpen: PropTypes.func.isRequired,
}

export default TopBar
