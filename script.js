let gridSize = 8 // 8x8
let container = document.querySelector(".grid-container");

function createGrid(size) {

    container.innerHTML = ""

    let gridSize = size * size

    let itemSize = (100 / size) + "%"
    
    for (let i = 1; i <= gridSize; i++) {
        let gridItem = document.createElement("div")
        let opacity = 0.0
        gridItem.className = "grid-item"
        gridItem.style.width = itemSize
        gridItem.style.height = itemSize
        gridItem.style.opacity = opacity
        gridItem.style.backgroundColor = randomizeRGBColor()
        container.appendChild(gridItem)
    
        gridItem.addEventListener("mouseover", () => {
            if (opacity < 1) opacity += 0.1
            gridItem.style.opacity = opacity
        })
    }
}

createGrid(gridSize)

let sizeButton = document.querySelector(".size-button")
let clearButton = document.querySelector(".clear-button")

sizeButton.addEventListener("click", () => {
    
    let newSize = Number(prompt("New grid size: "))

    if (newSize && 1 <= newSize && newSize <= 100) {
        gridSize = newSize
        createGrid(gridSize)
    } 
})

clearButton.addEventListener("click", () => {
    createGrid(gridSize)
})

function randomizeRGBColor() {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b}`
}