window.onload = function() {
    let color = document.querySelectorAll(".color");
    let quadroPixel = document.querySelector("#pixel-board");
    let containerColor = document.querySelector("#color-palette");
    let cores = ["black", "yellow", "blue", "gray", "Gold"];
    for (let nColor = 0; nColor < color.length; nColor += 1) {
        color[nColor].style.backgroundColor = cores[nColor];        
    }
    
    for (let n = 1; n <= 25; n += 1) {
        let pixel = document.createElement("div");
        pixel.className = "pixel";
        quadroPixel.appendChild(pixel);        
    } 
    let selected = cores[0];    
    containerColor.addEventListener("click", function(event) {
        selected = event.target.style.backgroundColor;        
    });

    quadroPixel.addEventListener("click", function(event) {
        event.target.style.backgroundColor = selected;               
    });


}