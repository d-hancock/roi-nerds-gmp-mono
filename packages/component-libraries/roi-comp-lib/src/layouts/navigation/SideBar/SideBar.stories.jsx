import React from 'react';

import { SideBar } from './SideBar';

export default {
  title: 'Layouts/navigation/SideBar',
  component: SideBar,
  args: {},
}

const Template = (args) => <SideBar {...args} />;

export const Default = Template.bind({});
Default.args = {};
