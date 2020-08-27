class Obstacle {
    constructor(img) {
        this.height = 20;
        this.width = 50;
        this.x = width;
        this.y = Math.random() * ((height - 30) - this.height) + this.height;
        this.image = img;
    }

    collision(playerInfo) {
        let obstacleX = this.x + this.width / 2;
        let obstacleY = this.y + this.height / 2;
        let playerX = playerInfo.x + playerInfo.width / 2;
        let playerY = playerInfo.y + playerInfo.height / 2;
        console.log(obstacleX, obstacleY, playerX, playerY);

        if (dist(obstacleX, obstacleY, playerX, playerY) < 150) {
            return true;
        
        }
    }
    
    drawObstacle() {
        this.x -= 4;
        console.log("working?");
        image(this.image, this.x, this.y, this.width, this.height);
        
    }
}