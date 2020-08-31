class Avocado {
    constructor(img) {
        this.height = 89;
        this.width = 160;
        this.x = width;
        this.y = this.height - 10;
        this.image = img;
    }

    collision(playerInfo) {
        let obstacleX = this.x + this.width / 2;
        let obstacleY = this.y + this.height / 2;
        let playerX = playerInfo.x + (playerInfo.width / 2 - 30);
        let playerY = playerInfo.y + playerInfo.height / 2;

        if (dist(obstacleX, obstacleY, playerX, playerY) < 40) {    
            return true;
        }
    }
    
    drawObstacle() {
        this.x -= 4;
        image(this.image, this.x, this.y, this.width, this.height);
        
    }
}