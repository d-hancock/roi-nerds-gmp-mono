import React from "react"
import PropTypes from "prop-types"
import Button from "@mui/material/Button"

// TODO: Consolidate data and props layer refactor to MUI
const SideBarCta = ({ sidebarCtaItems }) => {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        fullWidth={true}
      >
        Sign up
      </Button>
      <p className="mt-6 text-center text-base font-medium text-gray-500">
        Existing customer?{" "}
        <a
          href="#"
          className="text-indigo-600 hover:text-indigo-500"
        >
          Sign in
        </a>
      </p>
    </div>
  )
}

SideBarCta.propTypes = {
  sidebarCtaItems: PropTypes.array.isRequired,
}

export default SideBarCta
