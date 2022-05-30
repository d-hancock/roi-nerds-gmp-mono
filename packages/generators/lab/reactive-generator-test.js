const { Subject } = require("rxjs")
const inquirer = require("inquirer")

const { unflatten } = require("flat")
const { pascalCase, sentenceCase } = require("change-case")
const { inputRequired } = require("./utils")

/*
REACTIVE INTERFACE
This generator will use the reactive interface pattern and an handle answer
function along with function calls to generate the next prompt.
*/
const inqPrompts = new Subject()

const handleAnswer = function(answer) {
  switch (answer) {
    case answer.name === "":
      return {
        type: "input",
        name: "name",
        message: "Component name?",
        validate: inputRequired("name"),
      }
    case (answer.name === "_props" && answer.answer === true):
      return {}
    case answer.name === "":
      return {}
    case "":
      return {}
  }
}

const addAnswerToAnswerObj = function(answer) {
  Object.entries(answer).forEach(([key, value]) => {
    answerObj[key] = value
  })
}

const setPrompts = async function() {
  let answerObj = {}

  return answerObj

}

inquirer.prompt([
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
    type: "checkbox",
    name: "files",
    message: "Wish files do you generate?",
    choices: data => [
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
  },
])
  .then((answers) => {
    addAnswerToAnswerObj(answers)
    console.log(answerObj)
  })
inquirer.prompt(inqPrompts).ui.process.subscribe(({ answer }) => {

})


module.exports = plop => {
  plop.setGenerator("new", {
    description: "Generates components and associated files.",
    prompts: setPrompts,
    actions: [],
  })
}
