var ball1,ball2,ball3,ball4;
var string1,string2,string3,string4;
var base;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	chain = new Chain(ball1.body,{x:300, y:250});
	chain2 = new Chain(ball2.body,{x:400, y:250});
	chain3 = new Chain(ball3.body,{x:500, y:250});
	chain4 = new Chain(ball4.body,{x:600, y:250});

	ball1 = new Ball (300,450);
	ball1sprite.shapeColor="pink";

	ball2 = new Ball (400,450);
	ball2sprite.shapeColor="pink";

	ball3 = new Ball (500,450);
	ball3sprite.shapeColor="pink";

	ball4 = new Ball (600,450);
	ball4sprite.shapeColor="pink";


}


function draw() {
  rectMode(CENTER);
  background(0);

  ball1.sprite.x = ball1.position.x;
  ball1.sprite.y = ball1.position.y;
  ball2.sprite.x = ball2.position.x;
  ball2.sprite.y = ball2.position.y;
  ball3.sprite.x = ball3.position.x;
  ball3.sprite.y = ball3.position.y;
  ball4.sprite.x = ball4.position.x;
  ball4.sprite.y = ball4.position.y;
  
  chain.display();
  chain2.display();
  chain3.display();
  chain4.display();
  
  drawSprites();
 
}



