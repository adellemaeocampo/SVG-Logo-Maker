const fs = require('fs');
const inquirer = require('inquirer');

class Circle {
  constructor(shapeColor, textColor, text) {
    this.shapeColor = shapeColor;
    this.textColor = textColor;
    this.text = text;
  }

  render() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="50" fill="${this.shapeColor}" />
      <text x="150" y="120" text-anchor="middle" fill="${this.textColor}" font-size="48">${this.text}</text>
    </svg>`;
  }
}

class Triangle {
  constructor(shapeColor, textColor, text) {
    this.shapeColor = shapeColor;
    this.textColor = textColor;
    this.text = text;
  }

  render() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150,50 250,150 50,150" fill="${this.shapeColor}" />
      <text x="150" y="120" text-anchor="middle" fill="${this.textColor}" font-size="48">${this.text}</text>
    </svg>`;
  }
}

class Square {
  constructor(shapeColor, textColor, text) {
    this.shapeColor = shapeColor;
    this.textColor = textColor;
    this.text = text;
  }

  render() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" x="100" y="50" fill="${this.shapeColor}" />
      <text x="150" y="120" text-anchor="middle" fill="${this.textColor}" font-size="48">${this.text}</text>
    </svg>`;
  }
}

function createSVG(text, textColor, shape, shapeColor) {
  let shapeObj;
  switch (shape.toLowerCase()) {
    case 'circle':
      shapeObj = new Circle(shapeColor, textColor, text);
      break;
    case 'triangle':
      shapeObj = new Triangle(shapeColor, textColor, text);
      break;
    case 'square':
      shapeObj = new Square(shapeColor, textColor, text);
      break;
    default:
      throw new Error('Invalid shape selected.');
  }
  return shapeObj.render();
}

async function main() {
  console.log("Welcome to Logo Generator!");

  try {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo:',
        validate: function (value) {
          return value.length > 0 && value.length <= 3;
        }
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (color keyword or hexadecimal):'
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape from the list:',
        choices: ['circle', 'triangle', 'square']
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (color keyword or hexadecimal):'
      }
    ]);

    const svgContent = createSVG(answers.text, answers.textColor, answers.shape, answers.shapeColor);
    const fileName = 'logo.svg';

    fs.writeFile(fileName, svgContent, (err) => {
      if (err) {
        throw err;
      }
      console.log(`Generated ${fileName}`);
      console.log("You can open the generated file in a browser to view your logo.");
    });
  } catch (err) {
    console.error("An error occurred:", err);
  }
}

main();

module.exports = {
  Circle,
  Triangle,
  Square
};