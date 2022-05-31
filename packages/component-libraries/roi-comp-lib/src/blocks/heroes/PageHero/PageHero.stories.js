import React from "react"
import PageHero from "./PageHero"

export default {
  title: "Blocks/PageHero",
  component: PageHero,
  description: "Page hero block.",
}

// create a template of how args map to rendering
const Template = (args) => <PageHero {...args} />
Template.args = {
  beginingTitle: "Data to enrich your",
  highlightTitle: "online business",
  ctaPrimary: "Get started",
  ctaSecondary: "Live demo",
  heroText:
    "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
}

export const page_hero = Template.bind({})
page_hero.args = {
  ...Template.args,
}
