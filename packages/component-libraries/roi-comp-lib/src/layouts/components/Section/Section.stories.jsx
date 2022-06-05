import React from "react"

import { Section } from "./Section"

export default {
  title: "Layouts/Components/Section",
  component: Section,
  args: {},
}

const Template = (args) => <Section {...args} />

export const Default = Template.bind({})
Default.args = {
  titleText: "Title Text example",
  highlightedTitleText: "I'm highlighted",
  sectionText: "I'm the text that goes under a section",
  children: [<div>I'm a child component</div>]
}
