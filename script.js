const mainDiv = document.querySelector(".main");

let gridNumber = 16;

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