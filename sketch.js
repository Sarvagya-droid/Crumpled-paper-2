const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ball = new Ball(100, 300, 25);
	ground = new Ground(400, 690, 800, 20);
	leftie = new Dustbin(540, 640, 20, 80);
	rightie = new Dustbin(640, 640, 20, 80);
	bottom = new Dustbin(590, 670, 80, 20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  
  ball.display();
  ground.display();
  leftie.display();
  rightie.display();
  bottom.display();
  movement();

  drawSprites();
 
}
function movement(){
	if(keyDown("UP_ARROW")){
		Matter.Body.applyForce(ball.body, ball.body.position,{x:85,y:-85 })
	  }
}