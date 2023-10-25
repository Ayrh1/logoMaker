const Text = require("./text.js");
const Triangle = require("./triangle.js");
const Circle = require("./circle.js");
const Rectangle = require("./rectangle.js");

function genLogo(data){
    let text = data.text;
    let textColor = data.textColor;
    let shapeColor = data.shapeColor;
    let shape = data.shape; 
    let logo; // to make logo values available through out the funtcion 
    if(shape === 'Triangle'){
        logo = new Triangle(text,textColor,shapeColor);
    }else if(shape === 'Circle'){
        logo = new Circle(text,textColor,shapeColor);
    }else if(shape === 'Rectangle'){
        logo = new Rectangle(text,textColor,shapeColor);
    }else{ 
        const functions = [
            () => new Rectangle(text, textColor, shapeColor),  // Store function references
            () => new Circle(text, textColor, shapeColor), // Prevents functions form being executed immediately
            () => new Triangle(text, textColor, shapeColor),
          ];
          
          // Generate a random index
          const randomIndex = Math.floor(Math.random() * functions.length);
          
          // Access the random function
          logo = functions[randomIndex]();
          
    }

    return  `
    <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
        ${logo.render()}
        ${logo.printText()}
    </svg>
    `
}


module.exports = genLogo; 