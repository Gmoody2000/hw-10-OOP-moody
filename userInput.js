const inquirer = require('inquirer');

async function getUserInput() {
  const userInput = {};

  const textInput = await inquirer.prompt({
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo text:'
  });
  userInput.text = textInput.text;

  const textColorInput = await inquirer.prompt({
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (color keyword or hexadecimal number):'
  });
  userInput.textColor = textColorInput.textColor;

  const shapeInput = await inquirer.prompt({
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for the logo:',
    choices: ['circle', 'triangle', 'square']
  });
  userInput.shape = shapeInput.shape;

  const shapeColorInput = await inquirer.prompt({
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (color keyword or hexadecimal number):'
  });
  userInput.shapeColor = shapeColorInput.shapeColor;

  return userInput;
}

module.exports = getUserInput;
