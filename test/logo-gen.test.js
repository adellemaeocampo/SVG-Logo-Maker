const { describe } = require('node:test');
const CreateSVG = require('../logo-gen.js');

describe('createSVG function', () => {
    it('should generate SVG for circle shape', () => {
        const text = 'ABC';
        const textColor = 'blue';
        const shape = 'circle';
        const shapeColor = 'red';
        const expectedSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="100" r="50" fill="red" />
          <text x="150" y="120" text-anchor="middle" fill="blue" font-size="48">ABC</text>
        </svg>`;

        const resultSVG = createSVG(text, textColor, shape, shapeColor);
        expect(resultSVG).toEqual(expectedSVG);
    });

    it('should generate SVG for triangle shape', () => {
        const text = 'XYZ';
        const textColor = 'green';
        const shape = 'triangle';
        const shapeColor = 'yellow';
        const expectedSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <polygon points="150,50 250,150 50,150" fill="yellow" />
          <text x="150" y="120" text-anchor="middle" fill="green" font-size="48">XYZ</text>
        </svg>`;

        const resultSVG = createSVG(text, textColor, shape, shapeColor);
        expect(resultSVG).toEqual(expectedSVG);
    });

    it('should generate SVG for square shape', () => {
        const text = '123';
        const textColor = 'black';
        const shape = 'square';
        const shapeColor = 'white';
        const expectedSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" x="100" y="50" fill="white" />
          <text x="150" y="120" text-anchor="middle" fill="black" font-size="48">123</text>
        </svg>`;

        const resultSVG = createSVG(text, textColor, shape, shapeColor);
        expect(resultSVG).toEqual(expectedSVG);
    });

    it('should throw error for invalid shape', () => {
        const text = '123';
        const textColor = 'black';
        const shape = 'invalidshape';
        const shapeColor = 'white';

        expect(() => createSVG(text, textColor, shape, shapeColor)).toThrowError('Invalid shape selected.');
    });
});