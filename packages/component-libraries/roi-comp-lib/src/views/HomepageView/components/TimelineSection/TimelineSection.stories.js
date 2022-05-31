import React from 'react';
import TimelineSection from "./TimelineSection";

export default {
    title: "Blocks/TimelineSection",
    component: TimelineSection,
    description: "Timeline section block.",
};


// create a template of how args map to rendering
const Template = (args) => <TimelineSection {...args} />;
Template.args = {
   
};

export const timeline_section = Template.bind({});
timeline_section.args = {
    ...Template.args,
};
