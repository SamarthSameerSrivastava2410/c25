const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, ball, side1, side2, bottom, mask1, mask2, maskBin, maskPaper;

function preload()
{
	maskBin = loadImage("dusatban.png");
	maskPaper = loadImage("haha papa		r goes brrrr.png")
}

function setup() {
	createCanvas(1600, 700);
	
	engine = Engine.create();	
	world = engine.world;

	ground = new Ground(800, 650);

	bottom = new Box(1150, 630, 120, 20);
	side1 = new Box(1095, 560, 10, 150);
	side2 = new Box(1205, 560, 10, 150);

	mask1 = createSprite(8000, 350, 100, 100);
	mask1.addImage(maskPaper);
	mask1.scale = 0.3

	mask2 = createSprite(1150, 560, 20, 20);
	mask2.addImage(maskBin);
	mask2.scale = 0.5;

	ball = new Ball(200, 450, 40);

	Engine.run(engine);
}

function draw() {	
  Engine.update(engine);
  background(211,211,211);

  mask1.x = ball.body.position.x;
  mask1.y = ball.body.position.y; 
  
  ball.display();
  ground.display();
  bottom.display();
  side1.display();
  side2.display();


  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body, ball.body.position, {x:84, y:-84});

	}
}