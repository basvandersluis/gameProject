class Game {
    constructor() {
        this.obstacles = [];
        this.score = 0;
        this.endGame=false
    }

    preloadGame() {
        this.backgroundImgs = 
        [
            {
                src: loadImage("./Images/backgroundbegin.png"),
                x: 0,
                speed: 8,
            }
        ];
        this.playerImg = loadImage("./Images/bean.png");
        this.burgerImg = loadImage("./Images/burger.png");
    }

    setupGame() {
        this.background = new Background();
        this.background.images = this.backgroundImgs;
        this.player = new Player();
        this.player.image = this.playerImg;
    }

    drawGame() {
        clear();
        if(this.endGame){
        circle(30,30,400) // show this when you lose
        }
       else if(this.score > 50){
            rect(200,200,200,200) //show this when you win
        }
        else{
            this.background.drawBackground();
            this.player.drawPlayer();
    
            if (frameCount % 60 === 0) {
                this.obstacles.push(new Obstacle(this.burgerImg));  
            }
    
            this.obstacles.forEach((obstacle) => {
                obstacle.drawObstacle();
            });
    
            this.obstacles = this.obstacles.filter((obstacle) => {
                if (obstacle.collision(this.player)) {
                    this.score++;
                    return false;
                } else {
                    return true;
                }
            });
        }
       
    }
}