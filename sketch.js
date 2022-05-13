var  ball;
var engine;
var world;
var espada;
var espada2;
var lava;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1100, 700);
var ball_options= {
isSTatic:false,
restitution: 0.3,
friction:0,
density:1.2
}

espada = new Solo (600, 600, 20 , 120)

espada2 = new Solo (850, 600, 20 , 120)

lava = new Solo (550, 680, 1100 , 20)



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=Bodies.circle(200,600,35,ball_options); 
	World.add(world,ball);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ellipse(ball.position.x, ball.position.y,35)
 
  espada.display();
  espada2.display();
  lava.display();



}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce (ball,{x:0,y:0},{x:50,y:-70})
	}
	
}


