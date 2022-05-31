const viewsGeneratorConfig = require("./viewsGeneratorConfig")

module.exports = (plop) => {
  plop.addHelper("propsHelper", (text) => `{${text}}`)
  plop.setGenerator(
    "View Generator",
    viewsGeneratorConfig(plop)
  )
}
