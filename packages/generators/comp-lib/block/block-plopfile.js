const blockGeneratorConfig = require("./blockGeneratorConfig")

module.exports = (plop) => {
  plop.addHelper("propsHelper", (text) => `{${text}}`)
  plop.setGenerator("Roi Block Generator", blockGeneratorConfig)
}
