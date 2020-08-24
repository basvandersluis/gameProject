let player;

let playerImg;

let backgroundImg;

let burgerImg;
function preload() {
    playerImg = loadImage("poppetje.png");
    backGroundImg = loadImage("backgroundbegin.png");
}
function setup() {
    createCanvas(600, 450);
    player = new Player();
}

function keyPressed() {
    if (keyCode === 32) {
        player.jump();
    }
}

function draw() {
    background(backgroundImg);
    player.show();
    unicorn.move();
}