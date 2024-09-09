const container = document.querySelector(".container");
const gridArray = [];
let row = 16;
let col = 16;

function createGrid() {
  for (let i = 0; i <= row; i++) {
    gridArray[i] = [];
    for (let j = 0; j <= col; j++) {
      const newBox = document.createElement("div");
      gridArray[i][j] = newBox;
      newBox.classList.add("box");
      container.appendChild(newBox);
    }
  }
}

createGrid();

function applyHoverEffect(element) {
  element.classList.add("hovering");
}
function removeHoverEffect(element) {
  element.classList.remove("hovering");
}

const hoveringElement = document.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("box")) {
    applyHoverEffect(e.target);
  }
});

document.addEventListener("mouseover", (e) => {
  setTimeout(() => {
    removeHoverEffect(e.target);
  }, 500);
});
