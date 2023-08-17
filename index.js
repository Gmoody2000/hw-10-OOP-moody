// const fs = require('fs').promises;
const getUserInput = require('./lib/userInput');
const { Triangle, Circle, Square } = require('./lib/shapes');
const generateSVG = require('./lib/svgGenerator');

async function main() {
  const userInput = await getUserInput();

  let shape;
  if (userInput.shape === 'circle') {
    shape = new Circle();
  } else if (userInput.shape === 'triangle') {
    shape = new Triangle();
  } else if (userInput.shape === 'square') {
    shape = new Square();
  }

  shape.setColor(userInput.shapeColor);
  shape.setText(userInput.text);
  shape.setTextColor(userInput.textColor);

  const svgContent = generateSVG(
    shape,
    userInput.shapeColor,
    userInput.text,
    userInput.textColor
  );

  try {
    // await fs.writeFile('logo.svg', svgContent);
    console.log('Generated logo.svg');
  } catch (error) {
    console.error('Error writing logo.svg:', error);
  }
}

main();
