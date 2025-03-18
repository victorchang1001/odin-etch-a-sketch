const container = document.querySelector("div.container");
const resetButton = document.querySelector("button#resetButton");

resetButton.addEventListener("click", (e) => {
    let count = prompt("Insert new grid size");
    while (count > 100 || count <= 0) {
        count = prompt(
            "Number of squares per side should be POSITIVE and should NOT EXCEED 100. Try again."
        );
    }
    container.replaceChildren();
    generateSquares(count);
});

function generateSquares(count) {
    for (let i = 1; i <= count ** 2; i++) {
        let square = document.createElement("div");
        square.className = "square";

        square.style.cssText = `
            height: ${100 / count}%; 
            aspect-ratio: 1; 
            border: .5px solid grey; 
            box-sizing: border-box;
        `;

        square.addEventListener("mouseover", (e) => {
            square.style.backgroundColor = "grey";
        });

        container.appendChild(square);
    }
}

generateSquares(16);
