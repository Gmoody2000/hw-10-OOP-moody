class Shape {
    constructor() {
      this.color = 'black';
      this.text = '';
      this.textColor = 'black';
    }
  
    setColor(color) {
      if (!color) {
        throw new Error('Color cannot be empty');
      }
      this.color = color;
    }
  
    setText(text, textColor) {
      if (!text) {
        throw new Error('Text cannot be empty');
      }
      this.text = text;
      this.textColor = textColor || 'black';
    }
  
    render() {
      throw new Error('Render method must be implemented by subclass');
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Shape, Triangle, Circle, Square };
  
  