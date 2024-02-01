//parent class for the other shapes classes
export class Shapes {
    constructor(color, text){
    this.color = color;
    this.text = text;
    }

    svgStart() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
    };

    svgClose() {
        return `</svg>`;
    };
}

//
export class Rectangle extends Shapes {
    constructor(color, text){
        super(color, text, this.svgStart(), this.svgClose());
    }

    svgRender() {
        return `<x="100" y = "50" rect x=" width="100" height="100" fill = "${color}" />`
    }
}

export class Triangle extends Shapes {
    constructor(color, text) {
        super(color, text, this.svgStart(), this.svgClose());
    }

    svgRender() {
        return `<polygon points= "150 50 250 150 50 150" fill = "${color}" />`
    }
}

export class Circle extends Shapes {
    constructor(color, text) {
        super(color, text, this.svgStart(), this.svgClose());
    }

    svgRender() {
        return `<circle cx="150" cy="100" r="50" fill = "${color}" />`
    }
}