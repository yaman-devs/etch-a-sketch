const container = document.querySelector(".container");
const button = document.querySelector("button");
let gridSize = 16;

button.addEventListener("click", resize);

generateGrid();

function generateGrid() {
  container.style.gridTemplateColumns = `repeat(${gridSize},1fr)`;
  for (let i = 0; i < gridSize * gridSize; i++) {
    let div = document.createElement("div");
    let hover = 50;
    div.textContent = "";
    div.style.grid;
    div.classList.add("grid-item");
    div.addEventListener("mouseenter", changeColor);
    container.appendChild(div);
  }
}

function resize() {
  let newSize = prompt("Enter grid's new size: ");
  while (newSize > 100) {
    newSize = prompt("please Enter number below 100");
  }
  gridSize = newSize;
  container.innerHTML = "";
  generateGrid();
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function changeColor() {
  let rgb = [
    randomIntFromInterval(0, 255),
    randomIntFromInterval(0, 255),
    randomIntFromInterval(0, 255),
  ];
  if (this.style.backgroundColor == "") {
    this.style.backgroundColor = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
  }
}
