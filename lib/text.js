//parent class for triangle, circle and rectangle 
class Text {
  constructor(text,textColor){

    this.text = text;
    this.textColor = textColor;
  }
  printText() {
    if(this.text > 3) {
      throw new Error('Please entere less 3 or less characters');
    }
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
  }
}


module.exports = Text; 
