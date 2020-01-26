var inquirer = require("inquirer");

var axios = require("axios");

var fs = require("fs");

var util = require("util");

var readFileAsync = util.promisify(fs.readFile);
var writeFileAsync = util.promisify(fs.writeFile);

var questions = function questions() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username"
    },
    {
      type: "list",
      message: "Pick a color",
      choices: ["blue", "green", "red", "pink"],
      name: "colors"
    }
  ]);
};

questions().then(function(name) {
  console.log(name.github, name.colors);
  githubId = name.github;
  axios
    .get("https://api.github.com/users/".concat(githubId))
    .then(function(res) {
      answers = {
        name: res.data.name,
        color: name.colors,
        location: res.data.location,
        profilePic: res.data.avatar_url,
        blog: res.data.blog,
        followers: res.data.followers,
        following: res.data.following,
        repos: res.data.public_repos,
        bio: res.data.bio
      };

      var generateHTML = require("./generateHTML");

      var html = generateHTML(answers);
      console.log(answers);
      writeFileAsync("index.html", html);
      console.log("Successfully wrote to index.html");
    });
});
