const game = new Game();

function preload() {
  game.preloadGame();
}
function setup() {
  createCanvas(800, 400);
  game.setupGame();
}
function draw() {
  game.drawGame();
}

// add the jump function here:
function keyPressed() {
  if (keyCode === 32 && (game.gameStatus == "startPage" || game.gameStatus == "winner" || game.gameStatus == "game over")) {
    game.gameStatus = "playing"
  } else if (keyCode === 32) {
    game.player.jump();
  }
}