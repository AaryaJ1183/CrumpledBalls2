
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin, LeftDustbin, RightDustbin;
var ground;
var paper;
function preload()
{

}

function setup() {
	createCanvas(1800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	LeftDustbin = new Dustbin (1300,447,20,90)
	RightDustbin = new Dustbin (1500,447,20,90)

	Engine.run(engine);
  
	 //creating the crumpled paper
	 paper = new Paper(350,500,20)

	 ground = new Ground(900,510,2000,10);

	 dustbin = new Dustbin2 (1400,430)
}


function draw() {
  rectMode(CENTER);
  background(235);

  
  LeftDustbin.display();
  RightDustbin.display();
  dustbin.display();
  paper.display();
  ground.display();
}

function keyPressed() {

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body, paper.body.position,{x:85,y:-85})
	}

}


