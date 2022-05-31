import React from 'react';

import { HomepageView } from './HomepageView';

export default {
  title: 'Views/HomepageView',
  component: HomepageView,
  args: {},
}

const Template = (args) => <HomepageView {...args} />;

export const Default = Template.bind({});
Default.args = {};
