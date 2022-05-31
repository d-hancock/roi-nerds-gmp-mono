const path = require("path")
const fs = require("fs")
const mkdirp = require("mkdirp")

/**
 * Input validator - ensure input is not empty.
 *
 * @param {string} name - the name of the required field
 * @returns {any} A function to required the given field
 */
const inputRequired = (name) => {
  return (value) => (/.+/.test(value) ? true : `${name} is required`)
}

/**
 * Action `add` with custom data
 *
 * Same feature as `add` type action but with data argument.
 * Note: I don’t have implement the "file already exists" security
 *
 * @param {any} plop - plop instance
 * @param {object} action - Data about the action to add
 *   @param {string} action.path - Path to write
 *   @param {string} action.templateFile - Template file to use
 * @param {object} data - Data to render
 * @returns {any} - A function to add a plop
 */
const addWithCustomData = function (plop, action, data) {
  const makeDestPath = (p) => path.resolve(plop.getDestBasePath(), p)
  const makeTmplPath = (p) => path.resolve(plop.getPlopfilePath(), p)

  return function () {
    try {
      const fileDestPath = makeDestPath(
        plop.renderString(action.path || "", data)
      )
      const template = fs.readFileSync(
        makeTmplPath(action.templateFile),
        "utf-8"
      )
      mkdirp.sync(path.dirname(fileDestPath))
      fs.writeFileSync(fileDestPath, plop.renderString(template, data))
      return `add ${fileDestPath}`
    } catch (error) {
      return error.message
    }
  }
}

/**
 * Get the path to be used in template and path strings. Function for getting the basePath that will be used in plop. Includeds a trailing slash.
 */
const getGenPath = function (str, subString) {
  const regexPath = new RegExp(`.*\/(.*\/.*)(\/${subString}.*)`)
  const match = str.match(regexPath)
  return `../${match[1]}${match[2]}/`
}

/**
 * Use an array of objects containing a condition property that corresponds to filetypes that are prompted for inclusion by generator and the coresponding array of actions to be executed if the condition is present.
 */
const getFileActionsFromConditions = (fileActionsByCondition, plop, data) => {
  fileActionsByCondition.forEach((a) => {
    if (data.files.includes(a.condition)) {
      a.actions.forEach((i) => {
        actions.push(addWithCustomData(plop, i, data))
      })
    }
  })
}

// TODO: Reimplement this function using a switch or something to dynamically generate the actions that I would actually like to implement.

// const componentConditionalFileActions = (basePath) => [
//   {
//     condition: "component",
//     actions: [
//       {
//         path: `${basePath}{{pascalCase name}}/{{pascalCase name}}.js`,
//         templateFile: "../../templates/blocks/js/component-js.template",
//       },
//       {
//         path: `${basePath}{{pascalCase name}}/index.js`,
//         templateFile: "../../templates/blocks/js/component-js-index.template",
//       },
//       {
//         path: `${basePath}{{pascalCase name}}/components/index.js`,
//         templateFile: "../../templates/blocks/js/empty-js-index.template",
//       },
//     ],
//   },
//   {
//     condition: "stories",
//     actions: [
//       {
//         path: `${basePath}{{pascalCase name}}/{{pascalCase name}}.stories.js`,
//         templateFile:
//           "../../templates/blocks/js/component-stories-csf-js.template",
//       },
//     ],
//   },
// ]

module.exports = {
  inputRequired,
  addWithCustomData,
  getGenPath,
  // getFileActionsFromConditions,
  // componentConditionalFileActions,
}
