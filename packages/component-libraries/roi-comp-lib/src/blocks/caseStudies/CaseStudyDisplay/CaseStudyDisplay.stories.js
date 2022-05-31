import React from 'react';
import CaseStudyDisplay from "./CaseStudyDisplay";

export default {
    title: "Blocks/CaseStudyDisplay",
    component: CaseStudyDisplay,
    description: "Case study display block.",
};


// create a template of how args map to rendering
const Template = (args) => <CaseStudyDisplay {...args} />;
Template.args = {
   
};

export const case_study_display = Template.bind({});
case_study_display.args = {
    ...Template.args,
};
