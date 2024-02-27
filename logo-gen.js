const fs = require('fs');
const inquirer = require('inquirer');

function createSVG(text, textColor, shape, shapeColor) {
  let svgContent = '';

  switch (shape.toLowerCase()) {
    case 'circle':
      svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="50" fill="${shapeColor}" />
        <text x="150" y="120" text-anchor="middle" fill="${textColor}" font-size="48">${text}</text>
      </svg>`;
      break;
    case 'triangle':
      svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,50 250,150 50,150" fill="${shapeColor}" />
        <text x="150" y="120" text-anchor="middle" fill="${textColor}" font-size="48">${text}</text>
      </svg>`;
      break;
    case 'square':
      svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" x="100" y="50" fill="${shapeColor}" />
        <text x="150" y="120" text-anchor="middle" fill="${textColor}" font-size="48">${text}</text>
      </svg>`;
      break;
    default:
      throw new Error('Invalid shape selected.');
  }

  return svgContent;
}

function main() {
  console.log("Welcome to Logo Generator!");

  inquirer.prompt([
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
  ]).then(function(answers) {
    const svgContent = createSVG(answers.text, answers.textColor, answers.shape, answers.shapeColor);
    const fileName = 'logo.svg';
    fs.writeFileSync(fileName, svgContent);

    console.log(`Generated ${fileName}`);
    console.log("You can open the generated file in a browser to view your logo.");
  }).catch(function(err) {
    console.error("An error occurred:", err);
  });
}

main();

module.exports = createSVG;