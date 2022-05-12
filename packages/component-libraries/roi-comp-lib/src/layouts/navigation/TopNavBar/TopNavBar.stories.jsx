import React from "react"
import { Box } from "@mui/material"

import { TopNavBar } from "./TopNavBar"

export default {
  title: "Layouts/navigation/TopNavBar",
  component: TopNavBar,
  argTypes: {
    scrollBehavior: {
      options: ["hide", "elevate", "none"],
      control: { type: "radio" },
    },
  },
}

const Template = (args) => (
  <Box
    sx={{
      height: 900,
    }}
  >
    <TopNavBar {...args} />
  </Box>
)

export const Story = Template.bind({})
// @ts-ignore
Story.args = {
  scrollBehavior: "hide",
}
