const { Rectangle, Circle, Triangle } = require('./shapes.js');

describe('Rectangle', () => {
    describe('svgRender', () => {
        it('should return the rectangle svg line and the text generation', () => {

            let output = `<rect x="100" y = "50" width="100" height="100" fill = "blue" />\n<text x="150" y="115" font-size="50" fill="White" text-anchor="middle">ADF</text>`
            let tempRect = new Rectangle('blue', 'ADF', 'White');

            expect(tempRect.svgRender()).toEqual(output);
        })
    })
})

describe('Circle', () => {
    describe('svgRender', () => {
        it('should return the Circle svg line and the text generation', () => {

            let output = `<circle cx="150" cy="100" r="50" fill = "red" />\n<text x="150" y="115" font-size="50" fill="Black" text-anchor="middle">GLDS</text>`;
            let tempCrcl = new Circle('red', 'GLDS', 'Black');

            expect(tempCrcl.svgRender()).toEqual(output);
        })
    })
})

describe('Triangle', () => {
    describe('svgRender', () => {
        it('should return the Triangle svg line and the text generation', () => {

            let output = `<polygon points= "150 50 250 150 50 150" fill = "purple" />\n<text x="150" y="130" font-size="50" fill="Black" text-anchor="middle">VNDSKAL</text>`;
            let tempTri = new Triangle('purple', 'VNDSKAL', 'Black');

            expect(tempTri.svgRender()).toEqual(output);
        })
    })
})