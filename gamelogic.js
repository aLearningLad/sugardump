const grid = document.querySelector(".grid");
const width = 8;
const squares = [];

//MAKE A BOARD

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
    grid.appendChild(square);
    squares.push(square);
    let squareColor = Math.floor(Math.random() * sugarColors.length);
    square.style.backgroundColor = sugarColors[squareColor];
  }
};

createSquares();
