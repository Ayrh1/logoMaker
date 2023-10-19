const logo = require('/Users/alexr./Desktop/bootcamp/Challenges /logoMaker/lib/logo.js');

    describe('TriangleLogo', () => {
        it('', () => {
            const shape = new logo.TriangleLogo();
            shape.text = 'AyR';
            shape.textColor = 'red';
            shape.shapeColor = 'blue';
            expect(shape.render()).toEqual(
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon fill="blue" points="20 190, 280 190, 150 10" stroke-width="5" stroke="red" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">AyR</text>
            </svg>`);
        })
    })
    /*
    describe('CircleLogo', () => {
        it('should throw and error when color is not set to blue', () => {
            const Logo = new CircleLogo;
            shape.setColor("blue");
            expect(shape.render()).toEqual('<circle width="100%" height="100%" cx="150" cy="100" r="80" fill="blue" stroke-width="5" stroke="white" />');
        })
    })

    describe('RectangleLogo', () => {
        it('should throw and error when color is not set to blue', () => {
            const Logo = new RectangleLogo
            shape.setColor("blue");
            expect(shape.render()).toEqual('<rect width="100%" height="100%" cx="150" cy="100" r="80" fill="blue" stroke-width="5" stroke="white"/>');
        })
    })
    */
