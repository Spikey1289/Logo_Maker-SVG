const inquirer = require('inquirer');
const fs = require('fs');

const {Rectangle, Circle, Triangle} = require('./lib/shapes');

const messages = {
    introduction: "-Hi! Welcome to Spikey1289's LOGO Maker! Please answer the following questions to generate a logo in a .svg file\n\n-",
    shapeChoice: "Please choose what shape you want to use (arrow keys to choose)\n\n",
    colorChoice: "Please choose a color (you can use words or a hexadecimal number)\n\n",
    textChoice: "Please enter the letters you wish to display in the logo\n(PLEASE NOTE that only the first 3 letters entered will be accepted, any additional letters *will not* be displayed!)\n\n",
    textColorChoice: "Please choose a text color\n\n",
    nameFileChoice: "Please enter a File Name\n\n"
}

function writeToFile(fileName, data) {
    let processedInput = ``;

    let tempTrngl = new Triangle(data.color, data.text, data.textColor);
    let tempRect = new Rectangle(data.color, data.text, data.textColor);
    let tempCrcl = new Circle(data.color, data.text, data.textColor);

    switch(true){
        case data.shape === "Square":
            processedInput += tempRect.svgStart();
            processedInput += tempRect.svgRender();
            processedInput += tempRect.svgClose();
        break;

        case data.shape === "Circle":
            processedInput += tempCrcl.svgStart();
            processedInput += tempCrcl.svgRender();
            processedInput += tempCrcl.svgClose();
        break;

        case data.shape === "Triangle":
            processedInput += tempTrngl.svgStart();
            processedInput += tempTrngl.svgRender();
            processedInput += tempTrngl.svgClose();
        break;
    }

    fs.writeFile(`./examples/${fileName}`, processedInput, (err) =>
        err ? console.log(err) : console.log('Successfully created SVG file')
    );
}

function init() {
let data = {};

    inquirer
        .prompt([
            {
                type: 'list',
                message: messages.introduction + messages.shapeChoice,
                name: 'shape',
                choices: ["Square", "Circle", "Triangle"]
            },
            {
                type: 'input',
                message: messages.colorChoice,
                name: 'color'
            },
            {
                type: 'input',
                message: messages.textChoice,
                name: 'text'
            },
            {
                type: 'list',
                message: messages.textColorChoice,
                name: 'textColor',
                choices: ["White", "Black"]
            },
            {
                type: 'input',
                message: messages.nameFileChoice,
                name: 'nameFile'
            }


        ]).then((response) => {
            //assigns the responses to data object
            data.shape = response.shape;
            data.color = response.color;
            data.textColor = response.textColor;
            //truncates string in response to 3 characters
            data.text = response.text.substring(0,3);
            let name = response.nameFile + '.svg';
            

            writeToFile(name, data);
        });
}

init();