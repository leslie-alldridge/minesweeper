document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
 var board = {
   cells: [
     {row: 1, col: 0, isMine: 'true', hidden: true},
     {row: 1, col: 1, isMine: 'true', hidden: true},
     {row: 1, col: 2, isMine: 'true', hidden: true},
     {row: 2, col: 0, isMine: '', hidden: true},
     {row: 2, col: 1, isMine: '', hidden: true},
     {row: 2, col: 2, isMine: '', hidden: true},
     {row: 3, col: 0, isMine: '', hidden: true},
     {row: 3, col: 1, isMine: '', hidden: true},
     {row: 3, col: 2, isMine: '', hidden: true},
   ]
 }; 

function startGame () {
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
for (let i = 0; i < board.cells.length; i++){
  document.addEventListener('click', checkForWin);
  document.addEventListener('contextmenu', checkForWin);
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

