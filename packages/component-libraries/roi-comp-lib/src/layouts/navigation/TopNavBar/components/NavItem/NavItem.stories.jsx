import React from 'react';

import { NavItem } from './NavItem';

export default {
  title: 'Layouts/navigation/NavItem',
  component: NavItem,
  args: {},
}

const Template = (args) => <NavItem {...args} />;

export const Story = Template.bind({});
Story.args = {
  
};
