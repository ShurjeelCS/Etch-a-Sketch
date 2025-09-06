const container = document.querySelector(`.container`);
for (let i = 0; i <256; i++) {
    const div = document.createElement(`div`);
    div.classList.toggle("box");
    div.setAttribute("style", "padding: 0px; margin: 0; border: 2px solid black; width: 30px; height: 30px;");
    container.appendChild(div);
}

const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        alert("hey there");
    });
});