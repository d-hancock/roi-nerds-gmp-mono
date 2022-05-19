import React from "react"
import { Box } from "@mui/material"
import { navData } from "../../../__fixtures__"

import TopBar from "./TopBar"

export default {
  title: "Layouts/navigation/TopBar",
  component: TopBar,
  argTypes: {
    scrollBehavior: {
      control: { type: "select" },
      options: ["hide", "elevate", "none"],
    },
  },
}

const mockOnSidebarOpen = () => {
  console.log("Mock Open Sidebar")
}

const Template = (args) => (
  <>
    <TopBar
      onSidebarOpen={mockOnSidebarOpen}
      {...args}
    />
    <Box sx={{ height: 900 }} />
  </>
)

export const Default = Template.bind({})

Default.args = {
  scrollBehavior: "hide",
  navLinks: navData.navLinks,
}
