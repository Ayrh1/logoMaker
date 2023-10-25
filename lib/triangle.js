const Text = require("./text.js");

//logo child class triangle shape
class Triangle extends Text {
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
      return `<polygon fill="${this.shapeColor}" points="20 190, 280 190, 150 10" stroke-width="5" stroke="${this.strokeColor}" />`
    }
  }

  module.exports = Triangle; 