import React from "react"
import { Box } from "@mui/material"
import { navData } from "../../../__fixtures__"

import NavBar from "./NavBar"

export default {
  title: "Layouts/navigation/NavBar",
  component: NavBar,
  argTypes: {
    scrollBehavior: {
      control: { type: "select" },
      options: ["hide", "elevate", "none"],
    },
  },
  // parameters: {
  //   controls: {
  //     exclude: ["onSidebarOpen"],
  //   },
  // },
  // decorators: [(story) => <Box sx={{ height: 900 }}>{story()}</Box>],
}

const mockOnSidebarOpen = () => {
  console.log("Mock Open Sidebar")
}

const Template = (args) => (
  <>
    <NavBar
      onSidebarOpen={mockOnSidebarOpen}
      {...args}
    />
    <Box sx={{ height: 400 }}/>
  </>
)

export const Default = Template.bind({})

Default.args = {
  scrollBehavior: "hide",
  navLinks: navData.navLinks,
}
