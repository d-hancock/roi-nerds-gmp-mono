import React from 'react';
import OurProcess from "./OurProcess";

export default {
    title: "Blocks/OurProcess",
    component: OurProcess,
    description: "Our process block.",
};


// create a template of how args map to rendering
const Template = (args) => <OurProcess {...args} />;
Template.args = {
   
};

export const our_process = Template.bind({});
our_process.args = {
    ...Template.args,
};
