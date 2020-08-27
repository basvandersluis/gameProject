class Game {
    constructor() {
        this.obstacles = [];
        this.score = 0;
        this.endGame = false;
        this.gameStatus = "startPage"
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
        this.startPage = loadImage("./Images/startPage.png");
        this.gameOver = loadImage("./Images/gameOver.png");
        this.winner = loadImage("./Images/winner.png");
    }

    setupGame() {
        this.background = new Background();
        this.background.images = this.backgroundImgs;
        this.player = new Player();
        this.player.image = this.playerImg;
    }

    drawGame() {
        if(this.gameStatus == "startPage") {
            // show start page
            
            image(this.startPage, 0, 0, width, height)
        } else if(this.gameStatus == "playing") {
        
        clear(); 
        if(this.endGame){
            this.gameStatus = "game over"
            document.location.reload();
            clearInterval(interval);
        } else if(this.score > 10) {
            this.gameStatus = "winner"
           alert("WINNER!!");
           document.location.reload();
           clearInterval(interval);
        } else {
            this.background.drawBackground();
            this.player.drawPlayer();
    
            if (frameCount % 150 === 0) {
                this.obstacles.push(new Obstacle(this.burgerImg));  
            }
    
            this.obstacles.forEach((obstacle) => {
                obstacle.drawObstacle();
            });
    
            this.obstacles = this.obstacles.filter((obstacle) => {
                if (obstacle.collision(this.player)) {
                    this.score++; // when player hits burger it increments by 1.
                    return false;
                } else {
                    return true;
                }
            });
        }
    } else if(this.gameStatus == "game over") {
        clear();
        image(this.gameOver, 0, 0, width, height)
        // show game over page
    } else if(this.gameStatus == "winner") {
        clear();
        image(this.winner, 0, 0, width, height)
        // show winner page
    }
    }
}