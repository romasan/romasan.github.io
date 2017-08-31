console.log('NEXT');

let boxMinSize = 200;
let boxMaxSize = 400;

let minWindowWidth = 400;
let minWindowHeight = 400;

let pageWidth  = window.innerWidth  < minWindowWidth  ? minWindowWidth  : window.innerWidth;
let pageHeight = window.innerHeight < minWindowHeight ? minWindowHeight : window.innerHeight;

let linesMin = 3;

let boxes = [];

let boxesCount = 23; // boxes.length

const screenWidth  = window.screen.width  / window.devicePixelRatio;
const screenHeight = window.screen.height / window.devicePixelRatio;

// draw = SVG('drawing');

let add = (size, left, top, color) => {
    let el = document.createElement('div');
    el.classList.add('box');
    el.style.top    = top  + 'px';
    el.style.left   = left + 'px';
    el.style.width  = size + 'px';
    el.style.height = size + 'px';
    el.style.background = color;
    document.body.appendChild(el);
};

let rows = 2;
let boxSize = pageHeight / rows;
let cols = pageWidth / boxSize;
let colsA = cols | 0;

// let marginLeft = cols % 1 / (cols | 0);

let randomColor = e => {
    let color = '#' + (((Math.random() * (0xffffff - 0x100000)) | 0) + 0x100000).toString(16);
    console.log(color);
    return color;
}

let margin = (i) => (boxSize * cols - boxSize * colsA) / colsA;

document.addEventListener("DOMContentLoaded", e => {

    console.log(rows, cols);

    for(let x = 0; x < cols; x += 1) {
        for(let y = 0; y < rows; y += 1) {
            // add(boxSize, x * boxSize - (boxSize * x * (marginLeft / (cols | 0))), y * boxSize, randomColor());
            add(boxSize, x * boxSize - margin(x), y * boxSize, randomColor());
        }
    }
});


