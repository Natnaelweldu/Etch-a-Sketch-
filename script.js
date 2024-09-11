const container = document.querySelector(".container");
const gridArray = [];
// let rowCol = 16;

function createGrid(rowCol) {
  for (let i = 0; i <= rowCol; i++) {
    gridArray[i] = [];
    for (let j = 0; j <= rowCol; j++) {
      const newBox = document.createElement("div");
      gridArray[i][j] = newBox;
      newBox.classList.add("box");
      newBox.style.width = screen.width / rowCol + "px";
      newBox.style.height = screen.height / rowCol + "px";
      container.appendChild(newBox);
    }
  }
}

createGrid(16);

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

function clearElements() {
  container.innerHTML = "";
}

document.addEventListener("DOMContentLoaded", (e) => {
  const gridInput = document.querySelector("#input");
  const btn = document.querySelector("#btn");
  btn.addEventListener("click", (e) => {
    const body = document.querySelector("body");
    clearElements();
    const rowCol = gridInput.value;
    createGrid(rowCol);
  });
});
