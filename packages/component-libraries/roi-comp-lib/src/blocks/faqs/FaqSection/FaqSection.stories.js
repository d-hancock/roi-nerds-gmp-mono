import React from 'react';
import FaqSection from "./FaqSection";

export default {
    title: "Blocks/FaqSection",
    component: FaqSection,
    description: "Faq section block.",
};


// create a template of how args map to rendering
const Template = (args) => <FaqSection {...args} />;
Template.args = {
   
};

export const faq_section = Template.bind({});
faq_section.args = {
    ...Template.args,
};
