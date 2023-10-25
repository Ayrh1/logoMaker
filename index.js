const inquirer = require('inquirer');
const fs = require("fs");
const  genLogo = require("../genLogo.js");

inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "what ius your name?"
    },
    {
        type: "input",
        name: "location",
        message: "where are your from?"
    },
    {
        type: "input",
        name: "github",
        message: "what is your Github URL?"
    },
    {
        type: "input",
        name: "linkedin",
        message: "what is your linked in URL"
    },

]).then((data) => {

    const generatedHtmlCode = generateHTML(data)

    fs.writeFile('index.html', generatedHtmlCode, (error) => {
    error ? console.log(error) : console.log("successful created index.html")
    })

})
