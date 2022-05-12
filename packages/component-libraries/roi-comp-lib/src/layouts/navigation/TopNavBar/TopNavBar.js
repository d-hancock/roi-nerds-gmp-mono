import React from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Slide,
} from "@mui/material"

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
  const { children, scrollBehavior, window } = props

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
            <Typography
              variant="h5"
              component="div"
            >
              Test
            </Typography>
          </Toolbar>
        </AppBar>
      </ScrollBehavior>
    </>
  )
}

export default TopNavBar
