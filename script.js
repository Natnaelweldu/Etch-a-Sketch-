const container = document.querySelector(".container");
const gridInput = document.querySelector("#input");
const gridSizeBoard = document.querySelector("#gridSizeBoard");
const resetBtn = document.querySelector("#resetBtn");

function createGrid(size) {
  container.innerHTML = "";
  const boxSize = 500 / size; // 500px is the container size

  for (let i = 0; i < size * size; i++) {
    const newBox = document.createElement("div");
    newBox.classList.add("box");
    newBox.style.width = `${boxSize}px`;
    newBox.style.height = `${boxSize}px`;
    container.appendChild(newBox);
  }
}

function updateGrid() {
  const size = parseInt(gridInput.value);
  createGrid(size);
  gridSizeBoard.textContent = `${size} x ${size}`;
}

function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

container.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("box")) {
    e.target.style.backgroundColor = getRandomRGB();
  }
});

gridInput.addEventListener("input", updateGrid);

resetBtn.addEventListener("click", () => {
  document.querySelectorAll(".box").forEach((box) => {
    box.style.backgroundColor = "";
  });
});

// Initial grid creation
updateGrid();
