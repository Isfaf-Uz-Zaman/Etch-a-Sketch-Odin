const container = document.getElementById('containerOfBoxes');
container.style.width = "512px"
container.style.height = "512px"

let size = prompt('Enter the size you want');

divNumber = parseInt(size)

elementDiv(divNumber)


function elementDiv(divNumber) {
    const divBoxSize = 512 / divNumber

    //// Create divElements
    for (let i = 0; i < divNumber; i++) {
        const square = document.createElement("div")
        for (let j = 0; j < divNumber; j++) {
            const squareDown = document.createElement("div")
            squareDown.className = 'squareDown'
            squareDown.style.width = `${divBoxSize}px`
            squareDown.style.height = `${divBoxSize}px`
            squareDown.style.border = `solid 1px #333`
            squareDown.style.boxSizing = `border-box`

            square.appendChild(squareDown)
        }
        container.appendChild(square)
    }

    //// Set inicial color   
    const squaresDown = document.querySelectorAll('.squareDown');
    squaresDown.forEach(squareDown => {
        squareDown.style.backgroundColor = 'white';
    });

    // Paint elements when mouse enters the box
    squaresDown.forEach(squareDown => {
        squareDown.addEventListener('mouseenter', function () {
            squareDown.style.backgroundColor = 'black'
        })
    })

}




const resizeButton = document.getElementById('resize')
resizeButton.addEventListener('click', function () {
    location.reload();
})


const resetButton = document.getElementById('reset')
resetButton.addEventListener('click', function () {
    const squaresDown = document.querySelectorAll('.squareDown');
    squaresDown.forEach(squareDown => {
        squareDown.style.backgroundColor = 'white';
    });
})