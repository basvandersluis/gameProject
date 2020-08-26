class Game {
    constructor() {
        this.obstacles = [];
    }

    preloadGame() {
        this.backgroundImgs = 
        [
            {
                src: loadImage("./Images/backgroundbegin.png"),
                x: 0,
                speed: 1,
            },
            {
                src: loadImage("./Images/background7.png"),
                x: 0,
                speed: 2,
            },
            {
                src: loadImage("./Images/background6.png"),
                x: 0,
                speed: 3,
            },
            {
                src: loadImage("./Images/background3.png"),
                x: 0,
                speed: 4,
            },
            {
                src: loadImage("./Images/background2.png"),
                x: 0,
                speed: 5,
            },
            {
                src: loadImage("./Images/background5.png"),
                x: 0,
                speed: 6,
            },
            {
                src: loadImage("./Images/background1.png"),
                x: 0,
                speed: 7,
            },
            {
                src: loadImage("./Images/background4.png"),
                x: 0,
                speed: 8,
            },
            {
                src: loadImage("./Images/background8.png"),
                x: 0,
                speed: 9,
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
                return false;
            } else {
                return true;
            }
        });
    }
}