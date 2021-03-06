const inquirer = require("inquirer")
const dirSelect = require("inquirer-select-directory")

const { unflatten } = require("flat")
const { pascalCase, sentenceCase } = require("change-case")
const {
  inputRequired,
  addWithCustomData,
  getGenPath,
  getFileActionsFromConditions,
  componentConditionalFileActions,
} = require("../../utils/utils")

/*
MULTI PROMPT
This generator will use multiple inquirer prompts and answer object construction
pattern and an handle answer
function along with function calls to generate the next prompt.
*/

/* 
Prompt questions
Block Name?
Which directory to generate files in?
Which files to generate?
Block Description?

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
    message: "Block name?",
    validate: inputRequired("name"),
  },
  {
    type: "input",
    name: "description",
    message: "Block description?",
    default: (data) => `${sentenceCase(data.name)} block.`,
  },
]

const directorySelect = [
  {
    type: "directory",
    name: "dir",
    message: "Where you like to put this component?",
    basePath: "./src/blocks",
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

  // console.log("answerObj", answerObj)
  return answerObj
}

const setActions = function (data, plop) {
  // Parse data for easy templating
  data = unflatten(data)

  const srcExp = "src/blocks"
  const basePath = getGenPath(data.dir, srcExp)
  // console.log(basePath)

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
        // {
        //   path: "../../../component-libraries/roi-comp-lib/src/blocks/index.js",
        //   pattern: /(\/\/ BLOCK EXPORTS)/g,
        //   template:
        //     "export { defualt as {{pascalCase name}} } from '{{pascalCase name}}/index.js';\n export * from './{{pascalCase name}}';\n\n$1",
        //   type: "modify",
        // },
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
  // getFileActionsFromConditions(conditionalFileActions, plop, data)

  actions.push()
  return actions
}

module.exports = (plop) => {
  const generatorConfig = {
    description: "Generates a block.",
    prompts: setPrompts,
    actions: (data) => setActions(data, plop),
  }
  return generatorConfig
}
