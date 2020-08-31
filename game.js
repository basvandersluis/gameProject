class Game {
    constructor() {
        this.obstacles = [];
        this.score = 0;
        this.endGame = false;
        this.gameStatus = "startPage"
        this.avocados = [];
        this.carrots = [];
        this.lettuces = [];
        this.broccolis = [];
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
        this.carrotImg = loadImage("./Images/carrot.png");
        this.lettuceImg = loadImage("./Images/lettuce.png");
        this.broccoliImg = loadImage("./Images/broccoli.png");
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
            // For the real game line 53 will be > 50
        } else if(this.score > 50) {
            this.gameStatus = "winner"
        } else {
            this.background.drawBackground();
            this.player.drawPlayer();
    
            if (frameCount % 150 === 0) {
                this.obstacles.push(new Obstacle(this.burgerImg));  
            }
            if (frameCount % 200 === 0) {
                this.avocados.push(new Avocado(this.avocadoImg));  
            }
            if (frameCount % 250 === 0) {
                this.carrots.push(new Carrot(this.carrotImg));  
            }
            if (frameCount % 300 === 0) {
                this.lettuces.push(new Lettuce(this.lettuceImg));  
            }
            if (frameCount % 350 === 0) {
                this.broccolis.push(new Broccoli(this.broccoliImg));  
            }
    
            this.obstacles.forEach((obstacle) => {
                obstacle.drawObstacle();
            });
            this.avocados.forEach((avo) => {
                avo.drawObstacle()
            });
            this.carrots.forEach((car) => {
                car.drawObstacle();
            });
            this.lettuces.forEach((lett) => {
                lett.drawObstacle();
            });
            this.broccolis.forEach((bro) => {
                bro.drawObstacle();
            });
    
            // When the player hits the burger --> Game over
            this.obstacles = this.obstacles.filter((obstacle) => {
                if (obstacle.collision(this.player)) {
                    return false;
                } else {
                    return true;
                }
            });
            
            // When the player hits the avocado --> increment score by 1
            this.avocados = this.avocados.filter((obstacle) => {
                if (obstacle.collision(this.player)) {
                    this.score++; 
                    return false;
                } else {
                    return true;
                }
            });

            this.carrots = this.carrots.filter((obstacle) => {
                if (obstacle.collision(this.player)) {
                    this.score++; 
                    return false;
                } else {
                    return true;
                }
            });

            this.lettuces = this.lettuces.filter((obstacle) => {
                if (obstacle.collision(this.player)) {
                    this.score++; 
                    return false;
                } else {
                    return true;
                }
            });

            this.broccolis = this.broccolis.filter((obstacle) => {
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