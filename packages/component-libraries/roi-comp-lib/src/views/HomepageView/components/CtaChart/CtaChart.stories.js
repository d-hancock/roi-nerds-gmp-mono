import React from 'react';
import CtaChart from "./CtaChart";

export default {
    title: "Views/HomepageView/Components/CtaChart",
    component: CtaChart,
    description: "Cta chart block.",
};


// create a template of how args map to rendering
const Template = (args) => <CtaChart {...args} />;
Template.args = {
   
};

export const cta_chart = Template.bind({});
cta_chart.args = {
    ...Template.args,
};
