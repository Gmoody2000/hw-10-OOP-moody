function generateSVG(shape, shapeColor, text, textColor) {
    
    const svgContent = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="${shapeColor}" />
        ${shape.render()}
        <text x="50%" y="50%" dy=".3em" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>
    `;
  
    return svgContent;
  }
  
  module.exports = generateSVG;
  