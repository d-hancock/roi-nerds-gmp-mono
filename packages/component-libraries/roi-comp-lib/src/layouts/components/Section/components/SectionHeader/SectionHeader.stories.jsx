import React from "react"

import { SectionHeader } from "./SectionHeader"

export default {
  title: "Layouts/Components/Section/SectionHeader",
  component: SectionHeader,
  args: {},
}

const Template = (args) => <SectionHeader {...args} />

export const Default = Template.bind({})
Default.args = {
  beginingTitle: "Hey there",
  highlightTitle: "sup now",
}
