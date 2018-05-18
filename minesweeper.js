document.addEventListener('DOMContentLoaded', startGame)


// Define your `board` object here!
var board;
var boardSize = 4;

// function createBoard (size){
//   board = {
//     cells: []
//   }
//     for (var y = 0; y < size; y++){
//       for (var x = 0; x < size; x++){
//         board.cells.push({
//           row: y,
//           col: x,
//           isMarked: false,
//           hidden: true,
//           isMine: Math.floor(Math.random()*1.3)
//         })
//       }

//     }
// }

function createBoard () {
  board = {
    cells:[]
  }
  for (var i = 0; i < boardSize; i++) {
    for (var n = 0; n < boardSize; n ++) {
      board.cells.push ({
        row: i,
        col: n,
        isMine: Math.floor(Math.random()*1.3),
        isMarked: false,
        hidden: true
      })
    }
  }
}

function startGame () {
  // Don't remove this function call: it makes the game work!
  createBoard()
  lib.initBoard()

for (let i = 0; i < board.cells.length; i++){
  document.addEventListener('click', checkForWin);
  document.addEventListener('contextmenu', checkForWin);
  document.getElementById("reset").addEventListener("click", resetGame)
  document.getElementById("large").addEventListener("click", gameLarge)
  document.getElementById("medium").addEventListener("click", gameMedium)
  document.getElementById("small").addEventListener("click", gameSmall)
  //themes are below here!
  document.getElementById('simpsonstheme').onclick = function () { 
    document.getElementById('maincss').href = 'simpsons.css';
};
//theme classic
document.getElementById('standardtheme').onclick = function () { 
  document.getElementById('maincss').href = 'minesweeper.css';
};
}

}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for (let i = 0; i < board.cells.length; i++){
    var checkBoard = board.cells[i];
    //mine is present but not checked
    if (checkBoard.isMine && !checkBoard.isMarked){
      return;
    }
    //hidden mine still exists
    else if (!checkBoard.isMine && checkBoard.hidden){
      return;
    }
  }
  lib.displayMessage('You win!');

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
var count = 0;
  for (n = 0; n < surroundingCells.length; n++) {
    if (surroundingCells[n].isMine == true) {
      count++;
    }
  }
  return count;
}

function resetGame(){
  board = {cells: []} 
  document.getElementsByClassName('board')[0].innerHTML = ''; 
  startGame() 
}

function gameLarge () {
  boardSize = 6;
  board = {cells: []} 
  document.getElementsByClassName('board')[0].innerHTML = ''; 
  startGame()
}

function gameMedium () {
  boardSize = 4;
  board = {cells: []} 
  document.getElementsByClassName('board')[0].innerHTML = ''; 
  startGame()
}

function gameSmall () {
  boardSize = 3;
  board = {cells: []} 
  document.getElementsByClassName('board')[0].innerHTML = ''; 
  startGame()
}