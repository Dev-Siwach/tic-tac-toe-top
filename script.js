const GameBoard = (function () {
  /*this array will be the grid or board on which the player will play*/
  const gameBoard = [, , , , , , , , ,];
  return gameBoard;
})();

function player(name) {
  const gameName = "@" + name;

  let win = 0;

  const getWin = () => win;
  const giveWin = () => win++;
  return { gameName, getWin, giveWin };
}

let playerOne;
let playerTwo;
/*-------------------------------------------------------------------*/

const newGameDialog = document.getElementById("newGameDialog");
const newGameButton = document.getElementById("newGameButton");

const showNewGameDialogModule = (function () {
  function newGameButtonFunction() {
    newGameDialog.showModal();
    newGameButton.remove();
  }

  newGameButton.addEventListener("click", newGameButtonFunction);
})();

const closeDialogModule = (function () {
  const closeDialogButton = document.getElementById("closeDialogButton");
  const newGame = document.getElementById("newGame");
  function closeDialogFunction() {
    newGameDialog.close();
    newGame.appendChild(newGameButton);
  }
  closeDialogButton.addEventListener("click", closeDialogFunction);
})();

const startGameFuntion = (function () {
  const startGameButton = document.getElementById("startGameButton");
  function displayController() {
    const gameBoardDom = document.getElementById("gameBoard");
    const box1 = document.createElement("div");
    box1.id = "box1";
    box1.className = "box";
    box1.textContent = GameBoard.at(0);
    const box2 = document.createElement("div");
    box2.id = "box2";
    box2.className = "box";
    box2.textContent = GameBoard.at(1);
    const box3 = document.createElement("div");
    box3.id = "box3";
    box3.className = "box";
    box3.textContent = GameBoard.at(2);
    const box4 = document.createElement("div");
    box4.id = "box4";
    box4.className = "box";
    box4.textContent = GameBoard.at(3);
    const box5 = document.createElement("div");
    box5.id = "box5";
    box5.className = "box";
    box5.textContent = GameBoard.at(4);
    const box6 = document.createElement("div");
    box6.id = "box6";
    box6.className = "box";
    box6.textContent = GameBoard.at(5);
    const box7 = document.createElement("div");
    box7.id = "box7";
    box7.className = "box";
    box7.textContent = GameBoard.at(6);
    const box8 = document.createElement("div");
    box8.id = "box8";
    box8.className = "box";
    box8.textContent = GameBoard.at(7);
    const box9 = document.createElement("div");
    box9.id = "box9";
    box9.className = "box";
    box9.textContent = GameBoard.at(8);
    gameBoardDom.appendChild(box1);
    gameBoardDom.appendChild(box2);
    gameBoardDom.appendChild(box3);
    gameBoardDom.appendChild(box4);
    gameBoardDom.appendChild(box5);
    gameBoardDom.appendChild(box6);
    gameBoardDom.appendChild(box7);
    gameBoardDom.appendChild(box8);
    gameBoardDom.appendChild(box9);
    newGameDialog.close();
    playerOne = player(document.getElementById("playerOneNameInput").value);
    playerTwo = player(document.getElementById("playerTwoNameInput").value);
  }
  startGameButton.addEventListener("click", displayController);
})();

/*------------------------------------------------------------------------------*/

function gameFlow() {
  if (
    GameBoard.at(0) === "x" &&
    GameBoard.at(1) === "x" &&
    GameBoard.at(2) === "x"
  ) {
    playerOne.giveWin();
  } else if (
    GameBoard.at(3) === "x" &&
    GameBoard.at(4) === "x" &&
    GameBoard.at(5) === "x"
  ) {
    playerOne.giveWin();
  } else if (
    GameBoard.at(6) === "x" &&
    GameBoard.at(7) === "x" &&
    GameBoard.at(8) === "x"
  ) {
    playerOne.giveWin();
  } else if (
    GameBoard.at(0) === "x" &&
    GameBoard.at(4) === "x" &&
    GameBoard.at(8) === "x"
  ) {
    playerOne.giveWin();
  } else if (
    GameBoard.at(2) === "x" &&
    GameBoard.at(4) === "x" &&
    GameBoard.at(6) === "x"
  ) {
    playerOne.giveWin();
  } else if (
    GameBoard.at(0) === "x" &&
    GameBoard.at(3) === "x" &&
    GameBoard.at(6) === "x"
  ) {
    playerOne.giveWin();
  } else if (
    GameBoard.at(1) === "x" &&
    GameBoard.at(4) === "x" &&
    GameBoard.at(7) === "x"
  ) {
    playerOne.giveWin();
  } else if (
    GameBoard.at(2) === "x" &&
    GameBoard.at(5) === "x" &&
    GameBoard.at(8) === "x"
  ) {
    playerOne.giveWin();
  } else if (
    GameBoard.at(0) === "o" &&
    GameBoard.at(1) === "o" &&
    GameBoard.at(2) === "o"
  ) {
    playerTwo.giveWin();
  } else if (
    GameBoard.at(3) === "o" &&
    GameBoard.at(4) === "o" &&
    GameBoard.at(5) === "o"
  ) {
    playerTwo.giveWin();
  } else if (
    GameBoard.at(6) === "o" &&
    GameBoard.at(7) === "o" &&
    GameBoard.at(8) === "o"
  ) {
    playerTwo.giveWin();
  } else if (
    GameBoard.at(0) === "o" &&
    GameBoard.at(4) === "o" &&
    GameBoard.at(8) === "o"
  ) {
    playerTwo.giveWin();
  } else if (
    GameBoard.at(2) === "o" &&
    GameBoard.at(4) === "o" &&
    GameBoard.at(6) === "o"
  ) {
    playerTwo.giveWin();
  } else if (
    GameBoard.at(0) === "o" &&
    GameBoard.at(3) === "o" &&
    GameBoard.at(6) === "o"
  ) {
    playerTwo.giveWin();
  } else if (
    GameBoard.at(1) === "o" &&
    GameBoard.at(4) === "o" &&
    GameBoard.at(7) === "o"
  ) {
    playerTwo.giveWin();
  } else if (
    GameBoard.at(2) === "o" &&
    GameBoard.at(5) === "o" &&
    GameBoard.at(8) === "o"
  ) {
    playerTwo.giveWin();
  }
}
