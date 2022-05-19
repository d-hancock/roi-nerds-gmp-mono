import React from "react"
import PropTypes from "prop-types"
import Drawer from "@mui/material/Drawer"
import Box from "@mui/material/Box"
import { SidebarNav } from "./components"

export const Sidebar = ({ open, variant, onClose, children }) => {
  return (
    <Drawer
      anchor="left"
      onClose={() => onClose()}
      open={open}
      variant={variant}
      sx={{
        "& .MuiPaper-root": {
          width: "100%",
          maxWidth: 280,
        },
      }}
    >
      <Box
        sx={{
          height: "100%",
          padding: 1,
        }}
      >
        {children}
      </Box>
    </Drawer>
  )
}

Sidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
}

const SideBarComposed = (props) => {
  return <div>SideBarComposed</div>
}

SideBarComposed.propTypes = {}

export default Sidebar
