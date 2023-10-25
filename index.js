const inquirer = require('inquirer');
const fs = require("fs");
const  genLogo = require("./lib/genLogo.js");

inquirer.prompt([
    {
        type: "input",
        name: "text",
        message: "Please Enter Three letters:",
        validate: function (input) {
            if (input.length > 3) {
            return 'Please enter a valid put, 3 letters max.';
            }
            return true;
        }
    },
    {
        type: "input",
        name: "textColor",
        message: "Please enter text color,ex #00000:"
    },
    {
        type: 'list',
        name: 'shape',
        message: "Please choose shape:",
        choices: ["Circle", "Triangle", "Rectangle", "Random"],
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Please enter shape color, ex #00000:"
    },

]).then((data) => {
    const generatedSvgCode = genLogo(data)
    const filePath = `./examples/${data.text}.svg`;
    fs.writeFile(filePath, generatedSvgCode, (error) => {
    error ? console.log(error) : console.log(`successful created ${data.text}.svg`)
    })

})
