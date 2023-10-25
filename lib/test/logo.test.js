const Text = require("../text.js");
const  Triangle = require("../triangle.js");
const  Circle = require("../circle.js");
const  Rectangle = require("../rectangle.js");

describe('Triangle', () => {
    it('should correctly render a blue polygon when setColor is used', () => {
        const shape = new Triangle();
        shape.setColor("blue", "red"); //(stroke color, shape color)
        expect(shape.render()).toEqual(`<polygon fill="red" points="20 190, 280 190, 150 10" stroke-width="5" stroke="blue" />`);
    })
})

describe('Rectangle', () => {
    it('should correctly render a blue polygon when setColor is used', () => {
        const shape = new Rectangle();
        shape.setColor("blue", "red"); //(stroke color, shape color)
        expect(shape.render()).toEqual(`<rect width="100%" height="100%" cx="150" cy="100" r="80" fill="red" stroke-width="5" stroke="blue"/>`);
    })
})

describe('Circle', () => {
    it('should correctly render a blue polygon when setColor is used', () => {
        const shape = new Circle();
        shape.setColor("blue", "red"); //(stroke color, shape color)
        expect(shape.render()).toEqual(`<circle width="100%" height="100%" cx="150" cy="100" r="80" fill="red" stroke-width="5" stroke="blue" />`);
    })
})
    