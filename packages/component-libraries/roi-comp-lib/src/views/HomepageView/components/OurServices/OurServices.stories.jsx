import React from 'react';

import { OurServices } from './OurServices';

export default {
  title: '"Views/HomepageView/Components/OurServices',
  component: OurServices,
  args: {},
}

const Default = (args) => <OurServices {...args} />;

export const Story = Default.bind({});
Story.args = {};
