var currentPlayer = "X";
var nextPlayer = "O";

var playerXSelections = new Array();
var playerOSelections = new Array();

const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

handleClick = function (event) {
    var cell = event.target
    console.log(cell.id);
    cell.innerHTML = currentPlayer;

    if (currentPlayer === "X") {
        playerSelections = playerXSelections;
        nextPlayer = "O";
    } else {
        playerSelections = playerOSelections;
        nextPlayer = "X";
    }

    playerSelections.push(parseInt(cell.id));

    if(checkDraw()) {
        alert("Draw!");
        resetGame();
      }

    // Swap players
    currentPlayer = nextPlayer;
    checkWinner(playerSelections);

}


var cells = document.querySelectorAll("td");

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleClick)
}

function checkWinner(playerSelections) {
    for (let i = 0; i < winningCombinations.length; i++) { // loop over winning combos where i is each combo
        let winningCombo = winningCombinations[i]
        var matches = 0;

        // for (let c = 0; c < winningCombo.length; c++) { // loop over cells in a winning combo where c is each cell
        //     let cellInWinningCombo = winningCombo[c]

        for (let x = 0; x < playerSelections.length; x++) { // loop over player selections where x is each cell
            let cellInPlayerSelections = playerSelections[x]

            if (winningCombo.includes(cellInPlayerSelections)) {
                matches++
                if (matches >= 3) {
                    if (playerSelections = playerXSelections) {
                        alert('X wins')
                        resetGame();
                    } else if (playerSelections = playerOSelections) {
                        alert('O wins')
                        resetGame();
                    }
                }
            }
        }
        // }
    }
}

function checkDraw() {
    return playerOSelections.length + playerXSelections.length >= cells.length
  } 

  function resetGame() {
    playerXSelections = new Array();
    playerOSelections = new Array();
    for(var i = 0; i < cells.length; i++) {
      cells[i].innerHTML = ""
    }
  }

    // Check if player has all values of each combination
    //     if player has cell
    //       matches++
    //     else break // go to the next combination
    //   if there are 3 matches
    //     return true

    // if we made it through each combo without returning true,
    // then there were no matches and player did not win
