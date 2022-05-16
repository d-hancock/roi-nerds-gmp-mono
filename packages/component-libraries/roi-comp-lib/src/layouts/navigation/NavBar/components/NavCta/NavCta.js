import React from "react"
import { Button } from "@mui/material"
import PropTypes from "prop-types"

export function NavCta({ text }) {
  return (
    <Button
      variant="contained"
      color="primary"
    >
      {text}
    </Button>
  )
}

NavCta.propTypes = {
  text: PropTypes.string.isRequired,
}

export default NavCta
