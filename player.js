class Player {
    constructor() {
        this.height = 100;
        this.width = 250;
        this.x = 0;
        this.y = height - this.height;
        this.gravity = 0.5;
        this.velocity = -1 ;

        this.image;
    }

    drawPlayer() {
        this.velocity += this.gravity;
        this.y += this.velocity;

        if (this.y >= height - (this.height + 243)) {
            this.y = height - (this.height + 243);
        }
        
        scale(1, 2.5) 
        image(this.image, this.x, this.y, this.width, this.height);
    }

    jump() {
        console.log("This will be the jump");
        //if (this.y === height - this.height) {
            this.velocity = -10;
       // }
    }
}