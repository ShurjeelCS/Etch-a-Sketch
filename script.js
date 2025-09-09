const container = document.querySelector(`.container`);
// for (let i = 0; i <256; i++) {
//     const div = document.createElement(`div`);
//     div.classList.toggle("box");
//     div.setAttribute("style", "padding: 0px; margin: 0; border: 2px solid black; width: 30px; height: 30px;");
//     container.appendChild(div);
// }
createGrid(16);
color();



const gridBtn = document.querySelector(`#gridBtn`);

gridBtn.addEventListener("click", () => {
    let squares = prompt(`How many squares per side?`);
    const boxes = document.querySelectorAll(".box");
    container.innerHTML="";
    createGrid(squares);
    
});



function createGrid(squares) {
    const number = squares * squares;
    const width = 480 / squares;
    for (let i = 0; i <number; i++) {
        const div = document.createElement(`div`);
        div.classList.toggle("box");
        div.setAttribute("style", "padding: 0px; margin: 0; border: 2px solid black; width: " + width + "px; height: " + width + "px;");
        container.appendChild(div);
    }
    color();
}
let opacity = 0;
function color() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.addEventListener("mouseover", () => {
            const r = randomColor();
            const g = randomColor();
            const b = randomColor();
            box.style.backgroundColor = `rgba(${r}, ${g}, ${b})`;
            
            
        });
    });
}

function randomColor() {
    return Math.floor(Math.random() * 256);
}
console.log(randomColor());