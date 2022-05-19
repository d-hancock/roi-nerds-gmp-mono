import React from "react"
import PropTypes from "prop-types"
import { Stack } from "@mui/material"
import { NavItem, NavMenuItem } from "../../../nav-comps-shared"
import { visFlex } from "../../../../../styles"

export const TopBarNavGroup = ({ links }) => {
  return (
    <Stack
      direction="row"
      sx={{
        ...visFlex.lgUp
      }}
    >
      {links.map((p, i) => {
        return p.navItems ? (
          <NavMenuItem
            key={i}
            id={p.id}
            name={p.name}
            navItems={p.navItems}
          />
        ) : (
          <NavItem
            key={i}
            id={p.id}
            link={p.link}
            name={p.name}
          />
        )
      })}
    </Stack>
  )
}

TopBarNavGroup.propTypes = {
  links: PropTypes.array.isRequired,
}

export default TopBarNavGroup
