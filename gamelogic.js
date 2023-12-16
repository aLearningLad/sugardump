const grid = document.querySelector(".grid");
const width = 8;
const squares = [];

const sugarColors = [
  "#FF0000",
  "#0000FF",
  "#00FF00",
  "#800080",
  "#FFA500",
  "#008080",
];

const createSquares = () => {
  for (let i = 0; i < width * width; i++) {
    const square = document.createElement("div");
    square.setAttribute("draggable", true);
    square.setAttribute("id", i);
    let squareColor = Math.floor(Math.random() * sugarColors.length);
    square.style.backgroundColor = sugarColors[squareColor];
    grid.appendChild(square);
    squares.push(square);
  }
};

createSquares();

let colorBeingDragged;
let colorBeingReplaced;
let squareIdBeingDragged;
let squareIdBeingReplaced;

function dragStart() {
  colorBeingDragged = this.style.backgroundColor;
  squareIdBeingDragged = parseInt(this.id);
}

function dragEnd() {
  console.log(this.id, "dragend");
}

function dragOver(e) {
  e.preventDefault();

  console.log(this.id, "dragover");
}

function dragEnter(e) {
  e.preventDefault();

  console.log(this.id, "dragenter");
}

function dragLeave() {
  console.log(this.id, "dragleave");
}

function dragDrop() {
  colorBeingReplaced = this.style.backgroundColor;
  squareIdBeingReplaced = parseInt(this.id);

  //LOGIC TO SWAP THE COLORS WHEN I DROP
  squares[squareIdBeingDragged].style.backgroundColor = colorBeingReplaced;
  this.style.backgroundColor = colorBeingDragged;
}

squares.forEach((square) => square.addEventListener("dragstart", dragStart));
squares.forEach((square) => square.addEventListener("dragend", dragEnd));
squares.forEach((square) => square.addEventListener("dragover", dragOver));
squares.forEach((square) => square.addEventListener("dragenter", dragEnter));
squares.forEach((square) => square.addEventListener("dragleave", dragLeave));
squares.forEach((square) => square.addEventListener("drop", dragDrop));
