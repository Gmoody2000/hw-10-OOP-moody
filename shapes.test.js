const { Shape, Triangle, Circle, Square } = require('./shapes');

describe('Shape class', () => {
  test('setColor should set the color', () => {
    const shape = new Shape();
    shape.setColor('blue');
    expect(shape.color).toBe('blue');
  });

  test('setText should set the text and text color', () => {
    const shape = new Shape();
    shape.setText('Hello', 'red');
    expect(shape.text).toBe('Hello');
    expect(shape.textColor).toBe('red');
  });

  test('setText should set default text color if not provided', () => {
    const shape = new Shape();
    shape.setText('Hello');
    expect(shape.text).toBe('Hello');
    expect(shape.textColor).toBe('black');
  });

  test('render should throw an error', () => {
    const shape = new Shape();
    expect(() => shape.render()).toThrowError('Render method must be implemented by subclass');
  });
});

describe('Triangle class', () => {
  test('render should generate SVG for triangle with correct color', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});

describe('Circle class', () => {
  test('render should generate SVG for circle with correct color', () => {
    const circle = new Circle();
    circle.setColor('green');
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="green" />');
  });
});

describe('Square class', () => {
  test('render should generate SVG for square with correct color', () => {
    const square = new Square();
    square.setColor('yellow');
    expect(square.render()).toBe('<rect x="50" y="50" width="200" height="200" fill="yellow" />');
  });
});
