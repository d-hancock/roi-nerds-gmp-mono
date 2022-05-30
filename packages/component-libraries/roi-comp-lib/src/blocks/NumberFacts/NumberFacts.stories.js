import React from 'react';
import NumberFacts from "./NumberFacts";

export default {
    title: "Blocks/NumberFacts",
    component: NumberFacts,
    description: "Number facts block.",
};


// create a template of how args map to rendering
const Template = (args) => <NumberFacts {...args} />;
Template.args = {
   
};

export const number_facts = Template.bind({});
number_facts.args = {
    ...Template.args,
};
