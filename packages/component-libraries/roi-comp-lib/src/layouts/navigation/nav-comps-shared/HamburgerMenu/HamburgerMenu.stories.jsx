import React from "react"

import { HamburgerMenu } from "./HamburgerMenu"

export default {
  title: "Layouts/navigation/shared-comps/HamburgerMenu",
  component: HamburgerMenu,
}

const mockOnSidebarOpen = () => {
  console.log("Mock Open Sidebar")
}

const Template = (args) => (
  <HamburgerMenu
    onSidebarOpen={mockOnSidebarOpen}
    {...args}
  />
)

export const Default = Template.bind({})
Default.args = {}
