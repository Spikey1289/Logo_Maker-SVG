//parent class for the other shapes classes
class Shapes {
    constructor(color, text, textColor){
    this.color = color;
    this.text = text;
    this.textColor = textColor;
    }

    svgStart() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n`;
    };

    svgRender(){};

    svgClose() {
        return `\n</svg>`;
    };
}

//
class Rectangle extends Shapes {
    constructor(color, text, textColor){
        super(color, text, textColor);
    }

    svgRender() {
        return `<rect x="100" y = "50" width="100" height="100" fill = "${this.color}" />\n<text x="150" y="115" font-size="50" fill="${this.textColor}" text-anchor="middle">${this.text}</text>`;
    }
}

class Triangle extends Shapes {
    constructor(color, text, textColor) {
        super(color, text, textColor);
    }

    svgRender() {
        return `<polygon points= "150 50 250 150 50 150" fill = "${this.color}" />\n<text x="150" y="130" font-size="50" fill="${this.textColor}" text-anchor="middle">${this.text}</text>`;
    }
}

class Circle extends Shapes {
    constructor(color, text, textColor) {
        super(color, text, textColor);
    }

    svgRender() {
        return `<circle cx="150" cy="100" r="50" fill = "${this.color}" />\n<text x="150" y="115" font-size="50" fill="${this.textColor}" text-anchor="middle">${this.text}</text>`;
    }
}

module.exports = {Rectangle, Circle, Triangle};