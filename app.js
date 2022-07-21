const slider = document.getElementById("slider");
const pSliderText = document.getElementById("slider-text");
const contenedorCanvas = document.getElementById("main-canvas");
const colorSelector = document.getElementById("color-picker");
let colorSelected = colorSelector.value;
let inputValue = slider.value;
let arrayDivs = [];
let cantidadDivs = 0;
let mousedown = 0;

document.addEventListener("mousedown", (e) => {
  if (e.target.matches("#main-canvas div")) {
    mousedown = 1;
    console.log(mousedown);
  }
});
document.addEventListener("mouseup", (e) => {
  if (e.target.matches("#main-canvas div")) {
    mousedown = 0;
    console.log(mousedown);
  }
});

document.addEventListener("mousemove", (e) => {
  if (mousedown == 1) {
    if (e.target.matches("#main-canvas div")) {
      setInputColor(colorSelector.value);
      e.target.style.backgroundColor = colorSelected;
    }
  }
});

slider.addEventListener("change", (e) => {
  divloader(e.target.value);
});

function divloader(value) {
  pSliderText.innerText = `${value} x ${value}`;
  setInputValue(value);
  cleanArray();
  insertDivsIntoArray(inputValue);
  renderizarDivs(arrayDivs);
  let classGrid = `grid_${value}`;
  contenedorCanvas.removeAttribute("class");
  contenedorCanvas.classList.add(classGrid);
}

function setInputValue(value) {
  inputValue = value;
}
function setInputColor(value) {
  colorSelected = value;
}
function insertDivsIntoArray(amount) {
  cantidadDivs = amount * amount;
  for (let i = 1; i <= cantidadDivs; i++) {
    arrayDivs.push("item");
  }
}
function cleanArray() {
  arrayDivs.splice(0, arrayDivs.length);
  contenedorCanvas.innerHTML = "";
}

function renderizarDivs(array) {
  for (let item of array) {
    let div = contenedorCanvas.appendChild(document.createElement("div"));
    div.className = "div-en-canvas";
  }
}
