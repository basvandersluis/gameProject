class player1 {
    constructor() {
        this.r = 50;
        this.x = this.r;
        this.y = height - this.r;
        this.vy = 0;
        this.gravity = 2; // sets gravity speed
    }

    // will make the playerImg move up
    jump() {
        this.vy = -25; // sets height of jump
    }

    move() {
        this.y += this.vy;
        this.vy += this.gravity; // pulls the playerImg back to the ground
        this.y = constrain(this.y, 0, height - this.r) // sets a baseline so that playerImg won't fall throug ground.
    }

    show() {
        image(playerImg, this.x, this.y, this.r, this.r);
    }
}