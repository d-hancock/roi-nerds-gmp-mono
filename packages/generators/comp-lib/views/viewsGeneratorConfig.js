const inquirer = require("inquirer")
const dirSelect = require("inquirer-select-directory")

const { unflatten } = require("flat")
const { pascalCase, sentenceCase } = require("change-case")
const {
  inputRequired,
  addWithCustomData,
  getGenPath,
} = require("../../utils/utils")

/*
MULTI PROMPT
This generator will use multiple inquirer prompts and answer object construction
pattern and an handle answer
function along with function calls to generate the next prompt.
*/

/* 
Prompt questions
View Name?
Which directory?
Which files?
Description?


*/

const addAnswerToAnswerObj = function (answers, ansObj) {
  Object.entries(answers).forEach(([key, value]) => {
    ansObj[key] = value
  })
}

let answerObj = {
  files: [],
  dir: "",
  name: "",
  description: "",
}

const generalQuestions = [
  {
    type: "input",
    name: "name",
    message: "View Name?",
    validate: inputRequired("name"),
  },
  {
    type: "input",
    name: "description",
    message: "View description?",
    default: (data) => `${sentenceCase(data.name)} view component.`,
  },
]

const directorySelect = [
  {
    type: "directory",
    name: "dir",
    message: "Where you like to put this component?",
    basePath: "./src/views",
  },
]

const whichFiles = function (data) {
  return {
    type: "checkbox",
    name: "files",
    message: "Wish files do you generate?",
    choices: [
      {
        name: `${pascalCase(data.name)}.js`,
        value: "component",
        checked: true,
      },
      {
        name: `${pascalCase(data.name)}.stories.js`,
        value: "stories",
        checked: true,
      },
    ],
  }
}

const setPrompts = async function () {
  inquirer.registerPrompt("directory", dirSelect)

  await inquirer.prompt(generalQuestions).then((answers) => {
    addAnswerToAnswerObj(answers, answerObj)
  })

  await inquirer.prompt(directorySelect).then((answers) => {
    addAnswerToAnswerObj(answers, answerObj)
  })

  await inquirer.prompt(whichFiles(answerObj)).then((answers) => {
    addAnswerToAnswerObj(answers, answerObj)
  })

  console.log("answerObj", answerObj)
  return answerObj
}

const setActions = function (data, plop) {
  // Parse data for easy templating
  data = unflatten(data)

  const srcExp = "src/views"
  const basePath = getGenPath(data.dir, srcExp)
  console.log(basePath)

  const actions = []

  const getFileActionsFromConditions = (fileActionsByCondition) => {
    fileActionsByCondition.forEach((a) => {
      if (data.files.includes(a.condition)) {
        a.actions.forEach((i) => {
          actions.push(addWithCustomData(plop, i, data))
        })
      }
    })
  }

  const conditionalFileActions = [
    {
      condition: "component",
      actions: [
        {
          path: `${basePath}{{pascalCase name}}/{{pascalCase name}}.js`,
          templateFile: "../../templates/blocks/js/component-js.template",
        },
        {
          path: `${basePath}{{pascalCase name}}/index.js`,
          templateFile: "../../templates/blocks/js/component-js-index.template",
        },
        {
          path: `${basePath}{{pascalCase name}}/components/index.js`,
          templateFile: "../../templates/blocks/js/empty-js-index.template",
        },
      ],
    },
    {
      condition: "stories",
      actions: [
        {
          path: `${basePath}{{pascalCase name}}/{{pascalCase name}}.stories.js`,
          templateFile:
            "../../templates/blocks/js/component-stories-csf-js.template",
        },
      ],
    },
  ]

  getFileActionsFromConditions(conditionalFileActions)

  return actions
}

module.exports = (plop) => {
  const generatorConfig = {
    description: "Generates a view.",
    prompts: setPrompts,
    actions: (data) => setActions(data, plop),
  }
  return generatorConfig
}
