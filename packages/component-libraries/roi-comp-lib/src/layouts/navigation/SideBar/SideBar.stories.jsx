import React from "react"

import SideBar from "./SideBar"
import { Button, Box } from "@mui/material"

export default {
  title: "Layouts/navigation/SideBar",
  component: SideBar,
  argTypes: {
    onClose: {
      action: "close",
    },
    variant: {
      control: "select",
      options: ["permanent", "persistent", "temporary"],
    },
  },
}

const Template = (args) => {
  return <SideBar {...args} />
}
export const Default = Template.bind({})
Default.args = {
  open: true,
  variant: "temporary",
  children: <Box>Hey There!</Box>
}
