import React from 'react';

import { HomeLogoButton } from './HomeLogoButton';

export default {
  title: 'Layouts/navigation/TopBar/HomeLogoButton',
  component: HomeLogoButton,
  args: {},
}

const Template = (args) => <HomeLogoButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
