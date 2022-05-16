import React from "react"
import { navData } from "../../../../../__fixtures__"

import NavMenuItem from "./NavMenuItem"

export default {
  title: "Layouts/navigation/NavMenuItem",
  component: NavMenuItem,
  args: {},
}

const Template = (args) => <NavMenuItem {...args} />

export const Default = Template.bind({})
Default.args = {
  id: "test",
  name: "Howdy",
  navItems: navData.navLinks,
}
