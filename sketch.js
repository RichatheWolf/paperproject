
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;
var ground1, ball1, trash1, trash2, trash3;	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	//dustbinObj=new dustbin(1200,650);
	ball1 = new ball(200,450,40);
	ground1 = new ground(width/2, 670, width, 20);
	trash1 = new trash(1200, 650, 170, 20);
	trash2 = new trash(1110, 615, 20, 90);
	trash3 = new trash(1290, 615, 20, 90);
	
   
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
 // dustbinObj.display();
  ball1.display();
  ground1.display();
  trash1.display();
  trash2.display();
  trash3.display();
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(ball1.body, ball1.body.position, {x:85,y:-85});
    
  	}
}

