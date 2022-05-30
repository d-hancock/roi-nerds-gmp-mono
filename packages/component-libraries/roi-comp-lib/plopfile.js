const blockGenerator = require("@roi/generators/comp-lib/block/blockGeneratorConfig")

module.exports = (plop) => {
  plop.setGenerator("Block", blockGenerator(plop))
}
