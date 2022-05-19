import React from "react"
import PropTypes from "prop-types"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"

// TODO: Refactor to use MUI components
export const SideBarHeader = ({ handleClose }) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        {/* TODO: Implement a logo component and use it here */}
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
      </div>
      <div className="-mr-2">
        <IconButton
          aria-label="Close menu"
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
      </div>
    </div>
  )
}

SideBarHeader.propTypes = {
  handleClose: PropTypes.func.isRequired,
}

export default SideBarHeader
