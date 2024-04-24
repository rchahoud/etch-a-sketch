btn = document.querySelector("button");

const mainDiv = document.querySelector(".main");

function cleanGrid() {
  while (mainDiv.firstChild) {
    mainDiv.removeChild(mainDiv.firstChild);
  }
}

function setGrid(gridNumber) {
  for (let i = 0; i < gridNumber; i++) {
    const parentGrid = document.createElement("div");
    parentGrid.classList.add("parentGrid");
    mainDiv.appendChild(parentGrid);

    for (let j = 0; j < gridNumber; j++) {
      const childGrid = document.createElement("div");
      childGrid.classList.add("childGrid");
      parentGrid.appendChild(childGrid);

      childGrid.addEventListener("mouseenter", () => {
        childGrid.style.backgroundColor = "#000000";
      });
    }
  }
}

btn.addEventListener("click", () => {
  input = prompt(
    "Enter the number of square per side you want (e.g 40 wil result on 40x40 grids, the limit will be 100x100)"
  );
  input = parseInt(input.trim());

  if (input > 100) input = 100;

  cleanGrid();
  setGrid(input);
});
