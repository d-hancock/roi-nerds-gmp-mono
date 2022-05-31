import React from 'react';
import HowItWorks from "./HowItWorks";

export default {
    title: "Views/HomepageView/Components/HowItWorks",
    component: HowItWorks,
    description: "How it works block.",
};


// create a template of how args map to rendering
const Template = (args) => <HowItWorks {...args} />;
Template.args = {
   
};

export const how_it_works = Template.bind({});
how_it_works.args = {
    ...Template.args,
};
