const board = document.querySelector('#board')
const colors = ['red', 'blue', 'green', 'yellow', 'purple']

const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () =>
    setColor(square))

    square.addEventListener('mouseleave', () =>
    removeColor(square))


    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
}

function removeColor(element) {
    element.style.backgroundColor = '#413e3e'
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}