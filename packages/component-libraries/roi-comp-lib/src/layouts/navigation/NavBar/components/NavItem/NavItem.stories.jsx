import React from "react"
import { navData } from "../../../../../__fixtures__"

import NavItem from "./NavItem"

export default {
  title: "Layouts/navigation/NavItem",
  component: NavItem,
  args: {},
}

const Template = (args) => <NavItem {...args} />

export const Default = Template.bind({})
Default.args = {
  id: "test",
  name: "Test",
  link: "",
}
