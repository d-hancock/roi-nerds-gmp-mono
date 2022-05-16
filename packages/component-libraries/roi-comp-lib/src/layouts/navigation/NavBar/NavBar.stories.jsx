import React from "react"
import { Box } from "@mui/material"
import { navData } from "../../../__fixtures__"

import NavBar from "./NavBar"

export default {
  title: "Layouts/navigation/NavBar",
  component: NavBar,
  argTypes: {
    scrollBehavior: {
      options: ["hide", "elevate", "none"],
      control: { type: "radio" },
      defaultValue: "hide",
    },
  },
  decorators: [(story) => <Box sx={{ height: 900 }}>{story()}</Box>],
}

const Template = (args) => <NavBar {...args} />

export const Default = Template.bind({})

Default.args = {
  navLinks: navData.navLinks,
  scrollBehavior: "hide",
}
