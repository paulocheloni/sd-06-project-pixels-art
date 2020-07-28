let pixelBoard = document.querySelector("#pixel-board");
let colorPalette = document.querySelector("#color-palette");
let clearBoard = document.querySelector("#clear-board");


createPaletteColors("black", "red", "blue", "green");
createPixelBoard();
colorPalette.addEventListener("click", chooseColor);
pixelBoard.addEventListener("click", setPixelColor);
clearBoard.addEventListener("click", clearPixelBoard);

colorPalette.firstElementChild.classList.add("selected");
let currentSelectedColor = document.querySelector(".selected");



function createPaletteColors (color1, color2, color3, color4){
    let colorArray = [color1, color2, color3, color4];

    for (index = 0; index < colorArray.length; index += 1){
        let newDiv = document.createElement("div");
        colorPalette.appendChild(newDiv).className = "color";
        colorPalette.lastChild.style.backgroundColor = colorArray[index];

    }
}

function createPixelBoard(){
    for (index = 1; index <= 5; index += 1){
        let newLine = document.createElement("div");
        pixelBoard.appendChild(newLine).className = "board-line";
        for (internIndex = 1; internIndex <= 5; internIndex += 1){
            let newPixel = document.createElement("div");
            pixelBoard.lastChild.appendChild(newPixel).className = "pixel";
        }

    }
} 

function chooseColor(event){
    document.querySelector(".selected").classList.remove("selected");
    event.target.classList.add("selected");
    currentSelectedColor = document.querySelector(".selected");
}

function setPixelColor(event){
    event.target.style.backgroundColor = currentSelectedColor.style.backgroundColor;
}

function clearPixelBoard(){
    let pixelArray = document.querySelectorAll(".pixel");
    for (index = 0; index < pixelArray.length; index += 1){
        pixelArray[index].style.backgroundColor = "rgb(255,255,255)";
    }
}