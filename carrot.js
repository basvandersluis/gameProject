class Carrot {
    constructor(img) {
        this.height = 90;
        this.width = 160;
        this.x = width;
        this.y = this.height - 100;
        //this.y = Math.random() * ((height - 30) - this.height) + this.height;
        this.image = img;
    }

    collision(playerInfo) {
        let obstacleX = this.x + this.width / 2;
        let obstacleY = this.y + this.height / 2;
        let playerX = playerInfo.x + (playerInfo.width / 2 - 30);
        let playerY = playerInfo.y + playerInfo.height / 2;
        //console.log(obstacleX, obstacleY, playerX, playerY);

        if (dist(obstacleX, obstacleY, playerX, playerY) < 40) {
            return true;
        }
    }
    
    drawObstacle() {
        this.x -= 4;
        console.log("working?");
        image(this.image, this.x, this.y, this.width, this.height);
        
    }
}