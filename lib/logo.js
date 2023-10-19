class Logo {
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

class Triangle extends Logo {
  constructor(text, textColor,shapeColor){
    super(text,textColor);
    this.shapeColor = shapeColor;
    this.textColor = textColor;
  } 
  render(){
    return `<polygon fill="${this.shapeColor}" points="20 190, 280 190, 150 10" stroke-width="5" stroke="${this.textColor}" />`
  }
}


class Rectangle extends Logo {
  constructor(text, textColor,shapeColor){
    super(text,textColor);
    this.shapeColor = shapeColor;
  } 

  render(){
    return `<rect width="100%" height="100%" cx="150" cy="100" r="80" fill="${this.shapeColor}" stroke-width="5" stroke="${this.textColor}"/>`
  }
}

class Cricle extends Logo { 
  constructor(text, textColor,shapeColor){
    super(text,textColor);
    this.shapeColor = shapeColor;
  } 

  render(){
    return `<circle width="100%" height="100%" cx="150" cy="100" r="80" fill="${this.shapeColor}" stroke-width="5" stroke="${this.textColor}" />`
  }
}

module.exports = {TriangleLogo, RectangleLogo, CricleLogo};

