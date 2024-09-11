const container = document.querySelector(".container");
const gridArray = [];
// let rowCol = 16;

function createGrid(rowCol) {
  for (let i = 0; i <= rowCol; i++) {
    gridArray[i] = [];
    for (let j = 0; j <= rowCol; j++) {
      if (container.scrollHeight > container.clientHeight) {
        console.log("The container is overflowing!");
        return;
      } else {
        const newBox = document.createElement("div");
        gridArray[i][j] = newBox;
        newBox.classList.add("box");
        newBox.style.width = screen.width / rowCol + "px";
        newBox.style.height = screen.height / rowCol + "px";
        container.appendChild(newBox);
      }
    }
  }
}

createGrid(16);

function applyHoverEffect(element) {
  element.style.backgroundColor = getRandomRGB();
}
function removeHoverEffect(element) {
  element.style.backgroundColor = "#fff";
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

function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b})`;
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
