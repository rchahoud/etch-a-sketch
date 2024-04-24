btn = document.querySelector("button");

const mainDiv = document.querySelector(".main");

function setGrid(gridNumber) {
  for (let i = 0; i < gridNumber; i++) {
    const parentGrid = document.createElement("div");
    parentGrid.classList.add("parentGrid");
    mainDiv.appendChild(parentGrid);

    for (let j = 0; j < gridNumber; j++) {
      const childGrid = document.createElement("div");
      childGrid.classList.add("childGrid");
      parentGrid.appendChild(childGrid);
    }
  }
}

btn.addEventListener("click", () => {
  input = prompt(
    "Enter the number of square per side you want (e.g 40 wil result on 40x40 grids)"
  );
  input = parseInt(input.trim());
  console.log(input);
});


setGrid(20);