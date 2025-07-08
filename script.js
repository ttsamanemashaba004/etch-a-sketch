

const container = document.querySelector(".container")
const button = document.createElement("button")
button.textContent = "Click me"
container.parentNode.insertBefore(button, container)

button.addEventListener("click", ()=>{
    let input = prompt("Enter a number (max 100):");

    // convert input to number
    let value = parseInt(input)

    if (isNaN(value) || value <= 0) {
        alert("Please enter a valid number greater than 0.")
    }else if(value > 100){
        alert("Max allowed value is 100")
    }

    container.innerHTML = ""

    const boxSize = 640/value

    for(let i = 0; i < value * value; i++){
        const box = document.createElement("div")
        box.classList.add("box")
        box.style.width = `${boxSize}px`
        box.style.height = `${boxSize}px`
        container.appendChild(box)
    }

    const boxes = document.querySelectorAll(".box")

    boxes.forEach(box => {
    box.addEventListener("mouseenter", ()=>{
        box.classList.add("hover-color")
    })
})
})






