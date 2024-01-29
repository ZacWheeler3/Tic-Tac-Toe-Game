let playerText = document.getElementById('playerText');
let restartBtn = document.getElementById('restartBtn');
let boxes = Array.from(document.getElementsByClassName('box'));

const O_Text = "O"
const X_Text = "X"
let currentPlayer = X_Text
let spaces = Array(9).fill(null)

console.log(spaces);

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

function boxClicked(e) {
    console.log(e.target);
}