import React from "react"
import { navData } from "../../../../../__fixtures__"

import NavItem from "./NavItem"

export default {
  title: "Layouts/navigation/NavItem",
  component: NavItem,
  args: {},
}

const Template = (args) => <NavItem {...args} />

export const Story = Template.bind({})
Story.args = {
  title: "hey there",
  id: "I'm an id",
  items: navData.navLinks,
  colorInvert: false,
}
