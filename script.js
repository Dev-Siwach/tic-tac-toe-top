const GameBoard = (function () {
  /*this array will be the grid or board on which the player will play*/
  const gameBoard = {
    cellOne: ["x"],
    cellTwo: ["x"],
    cellThree: ["x"],
    cellFour: [],
    cellFive: [],
    cellSix: [],
    cellSeven: [],
    cellEight: [],
    cellNine: [],
  };

  return gameBoard;
})();

function player(name) {
  const gameName = "@" + name;

  let win = 0;

  const getWin = () => win;
  const giveWin = () => win++;
  return { gameName, getWin, giveWin };
}

const playerOne = player("playerOne");
const playerTwo = player("playerTwo");

function gameFlow() {
  if (
    GameBoard.cellOne.at(0) === "x" &&
    GameBoard.cellTwo.at(0) === "x" &&
    GameBoard.cellThree.at(0) === "x"
  ) {
    playerOne.giveWin();
  } else if (
    GameBoard.cellFour.at(0) === "x" &&
    GameBoard.cellFive.at(0) === "x" &&
    GameBoard.cellSix.at(0) === "x"
  ) {
    playerOne.giveWin();
  } else if (
    GameBoard.cellSeven.at(0) === "x" &&
    GameBoard.cellEight.at(0) === "x" &&
    GameBoard.cellNine.at(0) === "x"
  ) {
    playerOne.giveWin();
  } else if (
    GameBoard.cellOne.at(0) === "x" &&
    GameBoard.cellFive.at(0) === "x" &&
    GameBoard.cellNine.at(0) === "x"
  ) {
    playerOne.giveWin();
  } else if (
    GameBoard.cellThree.at(0) === "x" &&
    GameBoard.cellFive.at(0) === "x" &&
    GameBoard.cellSeven.at(0) === "x"
  ) {
    playerOne.giveWin();
  } else if (
    GameBoard.cellOne.at(0) === "o" &&
    GameBoard.cellTwo.at(0) === "o" &&
    GameBoard.cellThree.at(0) === "o"
  ) {
    playerTwo.giveWin();
  } else if (
    GameBoard.cellFour.at(0) === "o" &&
    GameBoard.cellFive.at(0) === "o" &&
    GameBoard.cellSix.at(0) === "o"
  ) {
    playerTwo.giveWin();
  } else if (
    GameBoard.cellSeven.at(0) === "o" &&
    GameBoard.cellEight.at(0) === "o" &&
    GameBoard.cellNine.at(0) === "o"
  ) {
    playerTwo.giveWin();
  } else if (
    GameBoard.cellOne.at(0) === "o" &&
    GameBoard.cellFive.at(0) === "o" &&
    GameBoard.cellNine.at(0) === "o"
  ) {
    playerTwo.giveWin();
  } else if (
    GameBoard.cellThree.at(0) === "o" &&
    GameBoard.cellFive.at(0) === "o" &&
    GameBoard.cellSeven.at(0) === "o"
  ) {
    playerTwo.giveWin();
  }
}

gameFlow();
