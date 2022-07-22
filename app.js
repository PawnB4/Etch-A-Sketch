const slider = document.getElementById("slider");
const pSliderText = document.getElementById("slider-text");
const contenedorCanvas = document.getElementById("main-canvas");
const colorSelector = document.getElementById("color-picker");
const eraser = document.getElementById("eraser");
const hex = "0123456789ABCDEF";
let colorSelected = colorSelector.value;
let inputValue = slider.value;
let arrayDivs = [];
let cantidadDivs = 0;
let mousedown = 0;
let colorMode = true;
let eraserMode = false;
let rainbowMode = false;

document.addEventListener("mousedown", (e) => {
  if (e.target.matches("#main-canvas div")) {
    mousedown = 1;
  }
});
document.addEventListener("mouseup", (e) => {
  if (e.target.matches("#main-canvas div")) {
    mousedown = 0;
  }
});

document.addEventListener("mousemove", (e) => {
  if (mousedown == 1) {
    if (e.target.matches("#main-canvas div")) {
      if (colorMode) {
        setInputColor(colorSelector.value);
        e.target.style.backgroundColor = colorSelected;
      }
      if (eraserMode) {
        setInputColor("#faedcd");
        e.target.style.backgroundColor = colorSelected;
      }
      if (rainbowMode) {
        let output = "";
        for (let i = 0; i < 6; ++i) {
          output += hex.charAt(Math.floor(Math.random() * 15));
        }
        let colorRandom = `#${output}`;
        colorSelected = colorRandom;
        e.target.style.backgroundColor = colorSelected;
      }
    }
  }
});
document.addEventListener("click", (e) => {
  if (e.target.matches("#main-canvas div")) {
    if (colorMode) {
      setInputColor(colorSelector.value);
      e.target.style.backgroundColor = colorSelected;
    }
    if (eraserMode) {
      setInputColor("#faedcd");
      e.target.style.backgroundColor = colorSelected;
    }
    if (rainbowMode) {
      let output = "";
      for (let i = 0; i < 6; ++i) {
        output += hex.charAt(Math.floor(Math.random() * 15));
      }
      let colorRandom = `#${output}`;
      colorSelected = colorRandom;
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

document.addEventListener("click", (e) => {
  if (e.target.matches(".toggle_buttons")) {
    let bt1 = document.getElementById("btn-1");
    let bt2 = document.getElementById("btn-2");
    let bt3 = document.getElementById("btn-3");
    bt1.classList.remove("border-selected");
    bt2.classList.remove("border-selected");
    bt3.classList.remove("border-selected");
    e.target.classList.toggle("border-selected");
    if (e.target == bt1) {
      colorMode = true;
      eraserMode = false;
      rainbowMode = false;
    } else if (e.target == bt2) {
      colorMode = false;
      eraserMode = true;
      rainbowMode = false;
    } else if (e.target == bt3) {
      colorMode = false;
      eraserMode = false;
      rainbowMode = true;
    }
  }
});

eraser.addEventListener("click",(e)=>{
  divloader(slider.value)
})