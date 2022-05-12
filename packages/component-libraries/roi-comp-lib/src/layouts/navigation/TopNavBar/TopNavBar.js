import React from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Slide, IconButton,
} from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';

function HideOnScroll(props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  return (
    <Slide
      appear={false}
      direction="down"
      in={!trigger}
    >
      {children}
    </Slide>
  )
}

function ElevationScroll(props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

function ScrollBehavior(props) {
  const { children, scrollBehavior} = props

  return (
    <>
      {scrollBehavior === "hide" && <HideOnScroll>{children}</HideOnScroll>}
      {scrollBehavior === "elevate" && (
        <ElevationScroll>{children}</ElevationScroll>
      )}
      {scrollBehavior === "none" && <>{children}</>}
    </>
  )
}

export function TopNavBar({ scrollBehavior, ...props }) {
  return (
    <>
      <ScrollBehavior
        scrollBehavior={scrollBehavior}
        {...props}
      >
        <AppBar>
          <Toolbar>
            <IconButton aria-label="logo">
              <HomeIcon/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </ScrollBehavior>
    </>
  )
}

export default TopNavBar
