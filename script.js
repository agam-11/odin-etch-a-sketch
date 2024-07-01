const container = document.querySelector(".container");

let gridSize = 16;
let containerWidth = "450";
// let cellWidth = containerWidth / gridSize + "px";

promptButton = document.querySelector(".prompt-btn");

promptButton.addEventListener("click", () => {
  let gridCell = document.querySelectorAll(".cell");
  gridCell.forEach((cell) => {
    container.removeChild(cell);
  });
  gridSize = prompt("What grid size do u want", "") || 16;
  while (gridSize > 100) {
    gridSize = prompt("invalid size bro, try again", "");
  }

  for (let i = 0; i < gridSize * gridSize; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = containerWidth / gridSize + "px";
    cell.style.height = containerWidth / gridSize + "px";
    //   cell.innerText = "lola";

    container.appendChild(cell);

    cell.addEventListener("mouseenter", (e) => {
      e.target.style.backgroundColor = "red";
    });
  }
});

container.style.width = containerWidth + "px";
container.style.height = containerWidth + "px";

for (let i = 0; i < gridSize * gridSize; i++) {
  let cell = document.createElement("div");
  cell.classList.add("cell");
  cell.style.width = containerWidth / gridSize + "px";
  cell.style.height = containerWidth / gridSize + "px";
  //   cell.innerText = "lola";

  container.appendChild(cell);

  cell.addEventListener("mouseenter", (e) => {
    e.target.style.backgroundColor = "red";
  });
}
