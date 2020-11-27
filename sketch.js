
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine,world;
var paper, ground, dustbin;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(400,650,800,20);
	dustbin = new Dustbin(600,630);
	paper = new Paper(100,500,70);

	//Create the Bodies Here.
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width:800,
			height: 700,
			wireframes: false
		}
	})

	Render.run(render);

	Engine.run(engine);
	
  
}


function draw() {

 // rectMode(CENTER);
  background(150);
  
  ground.display();
  dustbin.display();
  paper.display();
  //drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paper.body, paper.body.position, {x:170, y: -220});
	}
}



