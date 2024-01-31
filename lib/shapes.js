class Shapes {
    constructor(color, size, text){
    this.color = color;
    this.size = size;
    this.text = text;
    }

    svgStart() {
        return `<svg version="1.1" width="300" height="200">`
    };

    svgClose() {
        return `</svg>`
    }
}

class Rectangle extends Shapes {

}

class Triangle extends Shapes {

}

class Circle extends Shapes {

}