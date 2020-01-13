const fs = require('fs');
const inquirer = require('inquirer');
const axios = require("axios");
const conversion = require("phantom-html-to-pdf")();
const util = require("util");
const pdf = require('html-pdf');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "location",
      message: "Where are you from?"
    },
    {
      type: "input",
      name: "bio",
      message: "Write a short bio about yourself"
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username"
    },

    {
        type:"list",
        name:"userColor",
        message:"Pick a color",
        choices:['blue, green, red, pink']
    }

  ]);
}
  

async function init() {
  console.log("Welcome")
  try {
    const answers = await questions();

    const html = generateHTML(answers);

    await writeFileAsync("../dist/index.html", html);

    console.log("Successfully wrote to index.html");
  } catch(err) {
    console.log(err);
  }
}

init();