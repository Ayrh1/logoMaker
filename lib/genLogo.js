const Text = require("./text.js");
const Triangle = require("./triangle.js");
const Circle = require("./circle.js");
const Rectangle = require("./rectangle.js");

function genLogo(text,textColor,shapeColor, shape){
    let text = text;
    let textColor = textColor;
    let shapeColor = shapeColor;
    let shape = shape; 

    if(shape = 'triangle'){
        const blogData = JSON.parse(json);
        const post = new BlogPost(
        blogData.title,
        blogData.text,
        blogData.author,
        blogData.createdOn
    );
    }else if(shape = 'circle'){

    }else if(shape = 'rectangle'){

    }

    return  `
    <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
        ${logoShape}
        ${logoText}
    </svg>
    `


}


module.exports = genLogo; 