const container = document.querySelector(".container");
const gridArray = [];

function createGrid() {
  for (let i = 0; i <= 16; i++) {
    gridArray[i] = [];
    for (let j = 0; j <= 16; j++) {
      const newBox = document.createElement("div");
      gridArray[i][j] = newBox;
      newBox.classList.add("box");
      container.appendChild(newBox);
      console.log(gridArray[i][j]);
    }
  }
}

createGrid();
