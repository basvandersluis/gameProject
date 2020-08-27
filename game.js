class Game {
    constructor() {
        this.obstacles = [];
        this.score = 0;
        this.endGame = false;
        this.gameStatus = "startPage"
        this.veggies=[]
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
        this.avocadoImg = loadImage("./Images/avocado.png");
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
        } else if(this.score > 2) {
            this.gameStatus = "winner"
           
           //document.location.reload();
           //clearInterval(interval);
        } else {
            this.background.drawBackground();
            this.player.drawPlayer();
    
            if (frameCount % 150 === 0) {
                this.obstacles.push(new Obstacle(this.burgerImg));  
            }
            if (frameCount % 200 === 0) {
                this.veggies.push(new Vegie(this.avocadoImg));  
            }
    
            this.obstacles.forEach((obstacle) => {
                obstacle.drawObstacle();
            });
            this.veggies.forEach(veg=>{
                veg.drawObstacle()
            })
    
            this.obstacles = this.obstacles.filter((obstacle) => {
                if (obstacle.collision(this.player)) {
                     // when player hits burger it increments by 1.
                    return false;
                } else {
                    return true;
                }
            });
            this.veggies = this.veggies.filter((obstacle) => {
                if (obstacle.collision(this.player)) {
                    this.score++; 
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