 // window.onload = makeRows(16, 16);

window.addEventListener("load", makeRows(16, 16));

function makeRows(rows, cols) {
	  const container = document.getElementById("container");
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    //cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
	cell.addEventListener("mouseover", changeColor);
  };
};

function ChangeSize(){
	var newSize = prompt("Enter a number between 1 and 100 ");
	
    if (newSize !== null) {
    newSize = parseInt(newSize);
    if (newSize < 1 || newSize > 100 || Number.isNaN(newSize)) {
      alert("Enter a number from 1-100 range");
      changeSize();
    } else {
      clearGrid();
      makeRows(newSize,newSize);
    }
  }
}

function clearGrid() {
  const gridArray = Array.from(container.childNodes);
  gridArray.forEach((element) => {
    container.removeChild(element);
  });
}
function changeColor(e) {
  const randomR = Math.floor(Math.random() * 256);
  const randomG = Math.floor(Math.random() * 256);
  const randomB = Math.floor(Math.random() * 256);
  e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

function erase() {
  const gridItems = document.querySelectorAll('#container > div');

  gridItems.forEach((item) => {
    item.style.backgroundColor = 'white';
    item.style.opacity = '1';
  });
}