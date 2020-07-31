class Ball{
    constructor(x, y){
        var options ={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x, y, 25, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Images/CrumpledPaper.png")
        World.add(world, this.body);
    }
    display(){
        imageMode(CENTER);
        fill("yellow");
        image(this.image, this.body.position.x, this.body.position.y, 50, 50)
    }
}