import React from "react"

import ServiceCard from "./ServiceCard"

export default {
  title: "Views/HomepageView/Components/OurServices/ServiceCard",
  component: ServiceCard,
  args: {},
}

const Template = (args) => <ServiceCard {...args} />

export const Defualt = Template.bind({})
Defualt.args = {}
