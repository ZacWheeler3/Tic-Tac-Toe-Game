document.addEventListener('DOMContentLoaded', function() {
  let playerText = document.getElementById("playerText");
  let restartBtn = document.getElementById("restartBtn");
  let boxes = Array.from(document.getElementsByClassName("box"));
  let player1Name, player2Name;
  let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')

  const O_Text = "O";
  const X_Text = "X";
  let currentPlayer = X_Text;
  let spaces = Array(9).fill(null);

  document.getElementById("nameForm").addEventListener("submit", function (event) {
    event.preventDefault();
    player1Name = document.getElementById("player1").value;
    player2Name = document.getElementById("player2").value;

    document.getElementById("player1").innerText = player1Name;
    document.getElementById("player2").innerText = player2Name;
  });

  const startGame = () => {
    boxes.forEach(box => box.addEventListener("click", boxClicked));
  };

  function boxClicked(e) {
    const id = e.target.id;

    if (!spaces[id]){
      spaces[id] = currentPlayer;
      e.target.innerText = currentPlayer;

      if (playerHasWon() !== false){
        playerText.innerText = `${currentPlayer} has won!`;
        let winning_blocks = playerHasWon();

        winning_blocks.map(box => boxes[box].style.backgroundColor = winnerIndicator);
        return;
      }

      currentPlayer = currentPlayer == X_Text ? O_Text : X_Text;
    }
  }

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function playerHasWon() {
  for (const condition of winningCombos) {
    let [a, b, c] = condition;

    if (spaces[a] && spaces[a] == spaces[b] && spaces[a] == spaces[c]) {
      let winningPlayer = spaces[a] === X_Text ? player1Name : player2Name;
      playerText.innerText = `${winningPlayer} has won!`;
      return [a, b, c];
    }
  }
  return false;
}

  restartBtn.addEventListener("click", restart);

  function restart() {
    spaces.fill(null);

    boxes.forEach((box) => {
      box.innerText = "";
      box.style.backgroundColor = "";
    });

    document.getElementById("player1").innerText = "";
  document.getElementById("player2").innerText = "";

    playerText.innerText = "Tic Tac Toe";

    currentPlayer = X_Text;
  }

  startGame();
});
