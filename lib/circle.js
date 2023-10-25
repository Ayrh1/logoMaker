const Text = require("./text.js");

//logo child class cricle shape
class Cricle extends Text { 
    constructor(text, textColor,shapeColor){
      super(text,textColor);
      this.shapeColor = shapeColor; // sets shape color 
      this.strokeColor = textColor; // sets stroke color for shape same as the text for extra flare 
    } 
      //testing purposes 
    setColor(newStrokeColor,newShapeColor) {
      this.shapeColor = newShapeColor;
      this.strokeColor = newStrokeColor;
    }
    render(){
      return `<circle width="100%" height="100%" cx="150" cy="100" r="80" fill="${this.shapeColor}" stroke-width="5" stroke="${this.strokeColor}" />`
    }
  }

  module.exports = Cricle; 