document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {cells: []};
var boardSize = 4;

//sounds
var soundMark = new Audio("./audio/simpsonsbomb.mp3");
var soundClick = new Audio("./audio/click.mp3");
var soundWin = new Audio("./audio/classicwin.mp3");

//board
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
  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines (board.cells[i]);
    }

  lib.initBoard()

for (let i = 0; i < board.cells.length; i++){
  document.addEventListener('click', checkForWin);
  document.addEventListener('contextmenu', checkForWin);
  document.addEventListener('contextmenu', rightClick);
  document.addEventListener('click', leftClick);
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
//theme summer
document.getElementById('summertheme').onclick = function () { 
  document.getElementById('maincss').href = 'summer.css';
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
  winSound();

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
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);

  var count = 0;

  for (var i = 0; i < surrounding.length; i++){
    if (surrounding[i].isMine){
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

function rightClick () {
  soundMark.play();
}

function leftClick(){
  soundClick.play();
}

function winSound () {
  soundWin.play();
}

