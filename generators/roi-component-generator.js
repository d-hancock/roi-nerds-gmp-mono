const inquirer = require("inquirer")
const dirSelect = require("inquirer-select-directory")

const { unflatten } = require("flat")
const { pascalCase, sentenceCase } = require("change-case")
const { inputRequired, addWithCustomData } = require("./utils/utils")

/*
MULTI PROMPT
This generator will use multiple inquirer prompts and answer object construction
pattern and an handle answer
function along with function calls to generate the next prompt.
*/

const getGenPath = function(str, subString) {
  const regexPath = new RegExp(`.*\/(.*\/.*)(\/${subString}.*)`)
  const match = str.match(regexPath)
  return `../${match[1]}${match[2]}/`
}

const addAnswerToAnswerObj = function(answers, ansObj) {
  Object.entries(answers).forEach(([key, value]) => {
    if (answers[key] === "props") {
      ansObj[key].push(answers[key][value.length - 1])
    } else {
      ansObj[key] = value
    }
  })
}

let answerObj = {
  "moreProps": true,
  "hasProps": true,
  "props": [],
  "files": [],
  "dir": "",
  "name": "",
  "description": "",
}

const generalQuestions = [
  {
    type: "input",
    name: "name",
    message: "Component name?",
    validate: inputRequired("name"),
  },
  {
    type: "input",
    name: "description",
    message: "Component description?",
    default: data => `${sentenceCase(data.name)} component.`,
  },
  {
    type: "confirm",
    name: "hasProps",
    message: "Does this component have props?",
    default: true,
  },
]

const directorySelect = [{
  type: "directory",
  name: "dir",
  message: "Where you like to put this component?",
  basePath: "./src/components",
}]

const whichFiles = function(data) {
  return {
    type: "checkbox",
    name: "files",
    message: "Wish files do you generate?",
    choices: [
      {
        name: `${pascalCase(data.name)}.tsx`,
        value: "component",
        checked: true,
      },
      {
        name: `${pascalCase(data.name)}.test.tsx`,
        value: "test",
        checked: true,
      },
      {
        name: `${pascalCase(data.name)}.stories.tsx`,
        value: "stories",
        checked: true,
      },
    ],
  }
}

const propsPrompt = async function() {
  let i = 0
  do {
    await inquirer.prompt([
      {
        type: "input",
        name: `props.${i}.name`,
        message: "Props name?",
        validate: inputRequired("props name"),
      },
      {
        type: "input",
        name: `props.${i}.type`,
        message: "Props type?",
        validate: inputRequired("props type"),
      },
      {
        type: "confirm",
        name: `props.${i}.required`,
        message: "Props is required?",
      },
      {
        type: "confirm",
        name: "moreProps",
        message: "Do you need more props?",
        default: true,
      },
    ])
      .then((answers) => {
        i++
        return addAnswerToAnswerObj(answers, answerObj)
      })

  }
  while (answerObj.moreProps === true)
}

const setPrompts = async function() {
  inquirer.registerPrompt("directory", dirSelect)

  await inquirer.prompt(generalQuestions)
    .then((answers) => {
      addAnswerToAnswerObj(answers, answerObj)
    })

  if (answerObj.hasProps === true) {
    await propsPrompt()
  }

  await inquirer.prompt(directorySelect)
    .then((answers) => {
      addAnswerToAnswerObj(answers, answerObj)
    })

  await inquirer.prompt(whichFiles(answerObj))
    .then((answers) => {
      addAnswerToAnswerObj(answers, answerObj)
    })

  return answerObj
}

module.exports = plop => {
  plop.addHelper("propsHelper", text => `{${text}}`)
  plop.setGenerator("Roi Tsx Component Generator", {

    description: "Generates components and associated files for tsx components.",
    prompts: setPrompts,
    actions: data => {
      // Parse data for easy templating
      data = unflatten(data)
      console.log(data)
      console.log(data.dir)
      data.props = data.props || []
      data.haveRequiredProps = data.props.reduce(
        (mem, prop) => mem || prop.required,
        false,
      )

      data.props = data.props.map(prop =>
        Object.assign({}, prop, { optional: !prop.required }),
      )
      const srcExp = "src/components"
      const basePath = getGenPath(data.dir, srcExp)

      const actions = [];

      [
        {
          condition: "component",
          actions: [
            {
              path: `${basePath}{{pascalCase name}}/{{pascalCase name}}.tsx`,
              templateFile: "templates/tsx/component-tsx.template",
            },
            {
              path: `${basePath}{{pascalCase name}}/index.tsx`,
              templateFile: "templates/tsx/component-tsx-index.template",
            },
          ],
        },
        {
          condition: "test",
          actions: [
            {
              path: `${basePath}{{pascalCase name}}/{{pascalCase name}}.test.tsx`,
              templateFile: "templates/tsx/component-test-tsx.template",
            },
          ],
        },
        {
          condition: "stories",
          actions: [
            {
              path: `${basePath}{{pascalCase name}}/{{pascalCase name}}.stories.tsx`,
              templateFile: "templates/tsx/component-stories-csf-tsx.template",
            },
            {
              path: `${basePath}{{pascalCase name}}/README.md`,
              templateFile: "templates/md/component-readme-md.template",
            },
          ],
        },
      ].forEach(a => {
        if (data.files.includes(a.condition)) {
          a.actions.forEach(i => {
            actions.push(addWithCustomData(plop, i, data))
          })
        }
      })
      actions.push(

      )

      return actions
    },
  })
}
