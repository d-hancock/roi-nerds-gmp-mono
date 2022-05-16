import React from "react"
import PropTypes from "prop-types"
import { Stack } from "@mui/material"
import { NavItem, NavMenuItem } from "../../components"

export const LinksGroup = ({ links }) => {
  return (
    <Stack direction="row">
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

LinksGroup.propTypes = {
  links: PropTypes.array.isRequired,
}

export default LinksGroup
