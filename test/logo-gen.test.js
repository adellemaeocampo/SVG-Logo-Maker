const { Circle, Triangle, Square } = require('../logo-gen.js');

describe('Circle class', () => {
  it('should render a circle SVG with correct colors and text', () => {
    const circle = new Circle('red', 'blue', 'A');
    const renderedSVG = circle.render();
    expect(renderedSVG).toContain('<circle');
    expect(renderedSVG).toContain('cx="150" cy="100" r="50" fill="red"');
    expect(renderedSVG).toContain('<text');
    expect(renderedSVG).toContain('x="150" y="120" text-anchor="middle" fill="blue" font-size="48">A</text>');
  });
});

describe('Triangle class', () => {
  it('should render a triangle SVG with correct colors and text', () => {
    const triangle = new Triangle('green', 'yellow', 'B');
    const renderedSVG = triangle.render();
    expect(renderedSVG).toContain('<polygon');
    expect(renderedSVG).toContain('points="150,50 250,150 50,150" fill="green"');
    expect(renderedSVG).toContain('<text');
    expect(renderedSVG).toContain('x="150" y="120" text-anchor="middle" fill="yellow" font-size="48">B</text>');
  });
});

describe('Square class', () => {
  it('should render a square SVG with correct colors and text', () => {
    const square = new Square('orange', 'black', 'C');
    const renderedSVG = square.render();
    expect(renderedSVG).toContain('<rect');
    expect(renderedSVG).toContain('width="100" height="100" x="100" y="50" fill="orange"');
    expect(renderedSVG).toContain('<text');
    expect(renderedSVG).toContain('x="150" y="120" text-anchor="middle" fill="black" font-size="48">C</text>');
  });
});
