import React from "react"

import NavCta from "./NavCta"

export default {
  title: "Layouts/navigation/shared-comps/NavCta",
  component: NavCta,
  args: {},
  // parameters: {
  //   status: {
  //     type: 'placeholder'
  //   }
  // }
}

const Template = (args) => <NavCta {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Nav CTA'
}
