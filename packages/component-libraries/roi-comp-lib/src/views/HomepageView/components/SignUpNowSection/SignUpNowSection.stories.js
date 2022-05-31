import React from 'react';
import SignUpNowSection from "./SignUpNowSection";

export default {
    title: "Blocks/SignUpNowSection",
    component: SignUpNowSection,
    description: "Sign up now section block.",
};


// create a template of how args map to rendering
const Template = (args) => <SignUpNowSection {...args} />;
Template.args = {
   
};

export const sign_up_now_section = Template.bind({});
sign_up_now_section.args = {
    ...Template.args,
};
