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
