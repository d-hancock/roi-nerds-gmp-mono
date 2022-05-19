import React from "react";

import TestComp from "./TestComp";

export default {
  title: "Components/TestComp",
  component: TestComp,
  args: {},
};

const Template = (args) => <TestComp {...args} />;

export const Story = Template.bind({});
Story.args = {};
